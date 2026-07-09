import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const destination =
    typeof body.destination === "string" ? body.destination.trim() : "";
  const travelDates =
    typeof body.travelDates === "string" ? body.travelDates.trim() : "";
  const travelers =
    typeof body.travelers === "string" ? body.travelers.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("trip_requests").insert({
      name,
      email,
      phone: phone || null,
      destination: destination || null,
      travel_dates: travelDates || null,
      travelers: travelers || null,
      message,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Could not save your request. Please try again shortly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      {
        error:
          "The server isn't configured to accept requests yet. Please contact us directly at hello@unicotravel.com.",
      },
      { status: 500 }
    );
  }
}
