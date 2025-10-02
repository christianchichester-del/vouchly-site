"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { joinWaitlist } from "@/app/actions/waitlist"

export function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [emailFailed, setEmailFailed] = useState(false)
  const [alreadyExists, setAlreadyExists] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const result = await joinWaitlist(formData)

    if (result.error) {
      setError(result.error)
      setIsLoading(false)
    } else {
      setSuccess(true)
      setEmailFailed(result.emailFailed || false)
      setAlreadyExists(result.alreadyExists || false)
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-card border border-primary/50 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {alreadyExists ? "You're already on the waitlist!" : "You're on the waitlist!"}
        </h3>
        <p className="text-muted-foreground">
          {alreadyExists
            ? "Thanks for joining. We'll keep you posted as we launch!"
            : emailFailed
              ? "We had a small issue sending your email, but you're registered."
              : "Check your email for confirmation."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground">
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
          className="bg-background border-border"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          className="bg-background border-border"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-3">
        <Label className="text-foreground">I am a...</Label>
        <RadioGroup name="role" defaultValue="candidate" required disabled={isLoading}>
          <div className="flex items-center space-x-3 bg-background border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <RadioGroupItem value="candidate" id="candidate" />
            <Label htmlFor="candidate" className="flex-1 cursor-pointer">
              <div className="font-semibold text-foreground">Candidate</div>
              <div className="text-sm text-muted-foreground">Looking for sales/marketing roles</div>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-background border border-border rounded-lg p-4 hover:border-secondary/50 transition-colors">
            <RadioGroupItem value="referrer" id="referrer" />
            <Label htmlFor="referrer" className="flex-1 cursor-pointer">
              <div className="font-semibold text-foreground">Referrer</div>
              <div className="text-sm text-muted-foreground">Want to help others get hired</div>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {error && (
        <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full glow-primary group" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            Joining...
          </>
        ) : (
          <>
            Join Waitlist
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  )
}
