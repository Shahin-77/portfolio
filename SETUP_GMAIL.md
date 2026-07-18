# Gmail Contact Form Setup (OAuth2)

Your contact form (`server.ts`) sends messages to **shahinmohammed698@gmail.com** using
the Gmail API. Since this is a personal Gmail account (not Google Workspace), it needs
a one-time OAuth2 setup to get a **Client ID**, **Client Secret**, and **Refresh Token**.
Do this once — after that, it works forever (refresh tokens don't expire for apps in
"Testing" mode as long as you don't leave it unused for 6 months).

## Step 1 — Create a Google Cloud project
1. Go to https://console.cloud.google.com/
2. Click the project dropdown (top left) → **New Project**
3. Name it anything (e.g. "Portfolio Contact Form") → Create

## Step 2 — Enable the Gmail API
1. In the search bar, type **Gmail API** → open it → click **Enable**

## Step 3 — Configure the OAuth consent screen
1. Left sidebar → **APIs & Services** → **OAuth consent screen**
2. User type: **External** → Create
3. Fill in App name (e.g. "Portfolio Contact Form"), your email as support email, and your email again as developer contact → Save and Continue
4. Scopes: skip (click Save and Continue)
5. Test users: click **Add Users** → add `shahinmohammed698@gmail.com` → Save and Continue

## Step 4 — Create OAuth credentials
1. Left sidebar → **APIs & Services** → **Credentials**
2. **Create Credentials** → **OAuth client ID**
3. Application type: **Web application**
4. Name: anything
5. Under **Authorized redirect URIs**, add:
   ```
   https://developers.google.com/oauthplayground
   ```
6. Click **Create** → copy the **Client ID** and **Client Secret** shown (you'll need these)

## Step 5 — Generate a refresh token
1. Go to https://developers.google.com/oauthplayground
2. Click the gear icon (⚙️, top right) → check **Use your own OAuth credentials** → paste in your Client ID and Client Secret from Step 4 → close the settings panel
3. In the left panel, scroll to find **Gmail API v1** → expand it → select scope:
   ```
   https://www.googleapis.com/auth/gmail.send
   ```
4. Click **Authorize APIs** → sign in with `shahinmohammed698@gmail.com` → you may see an "unverified app" warning since the app is in Testing mode — click **Advanced** → **Go to [app name] (unsafe)** → Allow
5. Back on the Playground, click **Exchange authorization code for tokens**
6. Copy the **Refresh token** shown on the right

## Step 6 — Add the values to your project
Create a `.env` file in the project root (copy `.env.example` and rename) and fill in:
```
GMAIL_CLIENT_ID="paste-your-client-id-here"
GMAIL_CLIENT_SECRET="paste-your-client-secret-here"
GMAIL_REFRESH_TOKEN="paste-your-refresh-token-here"
```

## Step 7 — Add the same values to your hosting provider
If deploying to Vercel, Render, Railway, etc., add the same three variables
(`GMAIL_CLIENT_ID`, `GMAIL_CLIENT_SECRET`, `GMAIL_REFRESH_TOKEN`) in that platform's
**Environment Variables** settings panel, then redeploy.

## Test it
Run locally:
```
npm install
npm run dev
```
Fill out the contact form on the site and submit — you should receive the message at
`shahinmohammed698@gmail.com` within seconds.

## Notes
- Never commit `.env` to GitHub — it's already in `.gitignore`.
- If the refresh token stops working after long inactivity, just repeat Step 5.
- To fully verify the app with Google (removing the "unverified" warning during
  Step 5's login), you'd need to submit for verification — not necessary for
  personal use, since you're the only user authorizing it.
