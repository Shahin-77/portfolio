# Contact Form Setup (EmailJS)

Your contact form now uses **EmailJS** — it sends messages straight from the browser
to your inbox at **shahinmohammed698@gmail.com**, no backend, no OAuth. Works exactly
the same on localhost and after deploying to Vercel.

## Step 1 — Create a free EmailJS account
1. Go to https://www.emailjs.com/ → **Sign Up** (free plan is enough)
2. Verify your email if asked

## Step 2 — Connect your Gmail
1. In the EmailJS dashboard, go to **Email Services** → **Add New Service**
2. Choose **Gmail** → click **Connect Account** → sign in with `shahinmohammed698@gmail.com` → allow access
3. Once connected, copy the **Service ID** shown (looks like `service_xxxxxxx`)

## Step 3 — Create an email template
1. Go to **Email Templates** → **Create New Template**
2. Set the template content, for example:
   - **Subject**: `New message from {{from_name}}`
   - **Content**:
     ```
     You have a new message from your portfolio contact form.

     Name: {{from_name}}
     Email: {{from_email}}

     Message:
     {{message}}
     ```
   - **To email** (in template settings, not the body): `shahinmohammed698@gmail.com`
3. Click **Save** → copy the **Template ID** (looks like `template_xxxxxxx`)

## Step 4 — Get your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (looks like a random string)

## Step 5 — Add the 3 values to the code
Open `src/components/Contact.tsx` and replace these three placeholders near the top:

```ts
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';     // e.g. 'service_abc1234'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';   // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';     // e.g. 'AbCdEfGhIjKlMnOp'
```

with the actual values from Steps 2–4.

## Step 6 — Test it
```
npm install
npm run dev
```
Fill out the contact form and submit — check `shahinmohammed698@gmail.com` for the message.

## Deploying to Vercel
No environment variables needed for this — the 3 values are safe to keep directly
in the code (EmailJS public keys are designed to be used client-side). Just push to
GitHub and deploy as normal.

## Free plan limits
EmailJS's free plan allows 200 emails/month, which is plenty for a portfolio contact form.
