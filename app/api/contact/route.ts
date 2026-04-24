import nodemailer from 'nodemailer'

type ContactPayload = {
  name: string
  email: string
  phone: string
  occasion?: string
  message?: string
  // simple honeypot for bots
  company?: string
}

function requiredEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing env var: ${name}`)
  return value
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function cleanOneLine(input: string): string {
  return input.replace(/[\r\n]+/g, ' ').trim()
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as Partial<ContactPayload>

    const name = (payload.name ?? '').trim()
    const email = (payload.email ?? '').trim()
    const phone = (payload.phone ?? '').trim()
    const occasion = (payload.occasion ?? '').trim()
    const message = (payload.message ?? '').trim()
    const company = (payload.company ?? '').trim()

    if (company) {
      return Response.json({ ok: true }, { status: 200 })
    }

    if (!name || !email || !phone) {
      return Response.json({ ok: false, error: 'Missing required fields.' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return Response.json({ ok: false, error: 'Please enter a valid email.' }, { status: 400 })
    }

    const toEmail = requiredEnv('CONTACT_TO_EMAIL')
    const fromEmail = requiredEnv('CONTACT_FROM_EMAIL')
    const smtpHost = requiredEnv('SMTP_HOST')
    const smtpPort = Number(requiredEnv('SMTP_PORT'))
    const smtpUser = requiredEnv('SMTP_USER')
    const smtpPass = requiredEnv('SMTP_PASS')

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const subjectToOwner = cleanOneLine(`New contact message from ${name}`)
    const occasionLine = occasion ? `Occasion: ${occasion}\n` : ''
    const messageLine = message ? `Message:\n${message}\n` : 'Message:\n(Empty)\n'

    const ownerText = [
      'New message from Nanda Emporium website contact form',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      occasionLine.trimEnd(),
      '',
      messageLine.trimEnd(),
    ]
      .filter(Boolean)
      .join('\n')

    await transporter.sendMail({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject: subjectToOwner,
      text: ownerText,
    })

    const subjectToCustomer = cleanOneLine('We received your message — Nanda Emporium')
    const customerText = [
      `Namaste ${name},`,
      '',
      'Thank you for contacting Nanda Emporium. We received your message and will get back to you within 24 hours.',
      '',
      'If you need urgent help, you can also WhatsApp us at +977 9856027044.',
      '',
      'Your message details:',
      `- Phone: ${phone}`,
      occasion ? `- Occasion: ${occasion}` : undefined,
      message ? `- Message: ${message}` : undefined,
      '',
      '— Nanda Emporium Team',
    ]
      .filter(Boolean)
      .join('\n')

    await transporter.sendMail({
      to: email,
      from: fromEmail,
      replyTo: toEmail,
      subject: subjectToCustomer,
      text: customerText,
    })

    return Response.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return Response.json({ ok: false, error: 'Failed to send message.' }, { status: 500 })
  }
}
