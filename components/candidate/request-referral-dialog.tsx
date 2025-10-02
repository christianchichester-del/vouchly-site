"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import type { User } from "@/lib/mock-data"

interface RequestReferralDialogProps {
  referrer: User
  candidate: User
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RequestReferralDialog({ referrer, candidate, open, onOpenChange }: RequestReferralDialogProps) {
  const { toast } = useToast()
  const [position, setPosition] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const initials = referrer.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Mock API call - in production, this would save to database
    setTimeout(() => {
      toast({
        title: "Request Sent!",
        description: `Your referral request has been sent to ${referrer.name}`,
      })
      setIsSubmitting(false)
      onOpenChange(false)
      setPosition("")
      setMessage("")
    }, 1000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Request Referral</DialogTitle>
          <DialogDescription>Send a personalized request to {referrer.name}</DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground">{referrer.name}</p>
            <p className="text-sm text-muted-foreground truncate">{referrer.position}</p>
            <Badge variant="secondary" className="mt-1">
              {referrer.company}
            </Badge>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="position">Position You're Applying For</Label>
            <Input
              id="position"
              placeholder="e.g., Software Engineer"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              placeholder="Introduce yourself and explain why you're interested in this role..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              required
            />
            <p className="text-xs text-muted-foreground">
              Tip: Mention specific skills or experiences that make you a good fit
            </p>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Request"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
