// Sends an email notification (via Resend's HTTP API) whenever a new trip
// request comes in, so the team doesn't have to check Supabase manually.
//
// Setup required in Vercel (Project Settings -> Environment Variables):
//   RESEND_API_KEY   - API key from resend.com (Secret)
//   NOTIFY_EMAIL_TO  - where notifications are sent (Config; optional,
//                       defaults to admin@unicovisa.com.vn below)
//
// The sending domain (unicotraveldmc.com) must be verified in Resend first,
// otherwise sends will fail silently (logged, but never blocks the form).

const DEFAULT_NOTIFY_TO = "admin@unicovisa.com.vn";
const FROM_ADDRESS = "Unico Travel Website <notifications@unicotraveldmc.com>";

export interface TripRequestNotification {
  name: string;
  email: string;
  phone?: string | null;
  destination?: string | null;
  travelDates?: string | null;
  travelers?: string | null;
  message: string;
}

export async function sendTripRequestNotification(data: TripRequestNotification) {
  const apiKey = process.env.RESEND_API_KEY;
  // Unmistakable marker so this is easy to find in Vercel's log stream,
  // regardless of whether the "External APIs" panel picks up the fetch call.
  console.log("[notify] sendTripRequestNotification called. RESEND_API_KEY present:", !!apiKey);
  if (!apiKey) {
    console.warn("[notify] RESEND_API_KEY not set, skipping email notification.");
    return;
  }

  const to = process.env.NOTIFY_EMAIL_TO || DEFAULT_NOTIFY_TO;

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "-"],
    ["Destination", data.destination || "-"],
    ["Travel dates", data.travelDates || "-"],
    ["Travelers", data.travelers || "-"],
  ];

  const html = `
    <div style="font-family: sans-serif; color: #1b1b18;">
      <h2 style="margin-bottom: 16px;">New trip request from ${escapeHtml(data.name)}</h2>
      <table cellpadding="6" style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="color: #888; padding-right: 12px; vertical-align: top;">${label}</td>
            <td>${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="color: #888; margin-top: 16px; margin-bottom: 4px;">Message</p>
      <p style="white-space: pre-wrap; border-left: 3px solid #c1622d; padding-left: 12px;">${escapeHtml(
        data.message
      )}</p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [to],
        reply_to: data.email,
        subject: `New trip request: ${data.name}${data.destination ? ` (${data.destination})` : ""}`,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[notify] Resend notification failed:", res.status, text);
    } else {
      console.log("[notify] Resend notification sent successfully to", to);
    }
  } catch (err) {
    // Never let a notification failure break the form submission itself --
    // the request is already safely saved in Supabase by this point.
    console.error("[notify] Resend notification error:", err);
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
