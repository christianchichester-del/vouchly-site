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
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { ReferralRequest } from "@/lib/mock-data"

interface ReviewRequestDialogProps {
  request: ReferralRequest
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ReviewRequestDialog({ request, open, onOpenChange }: ReviewRequestDialogProps) {
  const { toast } = useToast()
  const [action, setAction] = useState<"approve" | "decline" | null>(null)
  const [notes, setNotes] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const initials = request.candidateName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  const isPending = request.status === "pending"

  const handleAction = async (selectedAction: "approve" | "decline") => {
    setAction(selectedAction)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Mock API call - in production, this would update the database
    setTimeout(() => {
      if (action === "approve") {
        toast({
          title: "Request Approved!",
          description: "You can now submit the referral to your company",
        })
      } else {
        toast({
          title: "Request Declined",
          description: "The candidate has been notified",
        })
      }
      setIsSubmitting(false)
      onOpenChange(false)
      setAction(null)
      setNotes("")
    }, 1000)
  }

  const handleSubmitReferral = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      toast({
        title: "Referral Submitted!",
        description: `You've successfully referred ${request.candidateName}`,
      })
      setIsSubmitting(false)
      onOpenChange(false)
    }, 1000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{isPending ? "Review Referral Request" : "Request Details"}</DialogTitle>
          <DialogDescription>
            {isPending ? "Review the candidate's information and decide" : "View request information"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-secondary text-secondary-foreground">{initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground">{request.candidateName}</p>
              <p className="text-sm text-muted-foreground">{request.candidateEmail}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary">{request.company}</Badge>
                <Badge variant="outline" className="capitalize">
                  {request.status}
                </Badge>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground mb-2">Position:</p>
            <p className="text-sm text-muted-foreground">{request.position}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground mb-2">Candidate's Message:</p>
            <p className="text-sm text-muted-foreground">{request.message}</p>
          </div>

          {!isPending && request.status === "approved" && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-sm text-green-700 dark:text-green-400">
                You approved this request. Ready to submit the referral?
              </p>
            </div>
          )}

          {action && isPending && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="notes">
                  {action === "approve" ? "Notes (Optional)" : "Reason for Declining (Optional)"}
                </Label>
                <Textarea
                  id="notes"
                  placeholder={
                    action === "approve"
                      ? "Add any notes about this referral..."
                      : "Let the candidate know why you're declining..."
                  }
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setAction(null)} disabled={isSubmitting}>
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant={action === "decline" ? "destructive" : "default"}
                >
                  {isSubmitting ? "Processing..." : action === "approve" ? "Confirm Approval" : "Confirm Decline"}
                </Button>
              </DialogFooter>
            </form>
          )}
        </div>

        {!action && isPending && (
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
              onClick={() => handleAction("decline")}
            >
              <XCircle className="w-4 h-4 mr-2" />
              Decline
            </Button>
            <Button type="button" className="w-full sm:w-auto" onClick={() => handleAction("approve")}>
              <CheckCircle className="w-4 h-4 mr-2" />
              Approve
            </Button>
          </DialogFooter>
        )}

        {!isPending && request.status === "approved" && (
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
            <Button type="button" onClick={handleSubmitReferral} disabled={isSubmitting}>
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Submitting..." : "Submit Referral"}
            </Button>
          </DialogFooter>
        )}

        {!isPending && request.status === "declined" && (
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
