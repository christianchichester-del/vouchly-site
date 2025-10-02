"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function joinWaitlist(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const role = formData.get("role") as string

  if (!name || !email || !role) {
    return { error: "All fields are required" }
  }

  if (!["candidate", "referrer"].includes(role)) {
    return { error: "Invalid role selected" }
  }

  const supabase = await createClient()

  const { data: existingUser } = await supabase.from("waitlist").select("email").eq("email", email).maybeSingle()

  if (existingUser) {
    // User already exists - return success without sending another email
    return { success: true, alreadyExists: true }
  }

  const { error } = await supabase.from("waitlist").insert({
    name,
    email,
    role,
  })

  if (error) {
    console.error("[v0] Waitlist insert error:", error)
    return { error: "Failed to join waitlist. Please try again." }
  }

  try {
    await resend.emails.send({
      from: "Vouchly <onboarding@resend.dev>", // Using sandbox mode for testing
      to: email,
      subject: "Welcome to the Vouchly waitlist 🚀",
      html: `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <p style="color: #333; font-size: 16px;">Hi ${name},</p>
        <p style="color: #666; line-height: 1.6; font-size: 16px;">
          Thanks for signing up for Vouchly! We're building a better way to get referred into top sales and marketing roles.
        </p>
        <p style="color: #666; line-height: 1.6; font-size: 16px;">
          Stay tuned — we'll keep you posted as we launch!
        </p>
        <p style="color: #666; line-height: 1.6; font-size: 16px;">
          — The Vouchly Team
        </p>
      </div>`,
    })
  } catch (emailError) {
    console.error("[v0] Failed to send confirmation email:", emailError)
    revalidatePath("/")
    return { success: true, emailFailed: true }
  }

  revalidatePath("/")
  return { success: true }
}
