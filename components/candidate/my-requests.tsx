"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Clock, CheckCircle, XCircle, Send } from "lucide-react"
import { mockReferralRequests, type User } from "@/lib/mock-data"
import { ReferralTimeline } from "@/components/shared/referral-timeline"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface MyRequestsProps {
  user: User
}

export function MyRequests({ user }: MyRequestsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // In production, filter by candidateId === user.id
  const requests = mockReferralRequests

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "declined":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "submitted":
        return <Send className="w-4 h-4 text-blue-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      pending: "secondary",
      approved: "default",
      declined: "destructive",
      submitted: "outline",
    }
    return (
      <Badge variant={variants[status] || "default"} className="capitalize">
        {status}
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">My Requests</h2>
        <p className="text-muted-foreground">Track your referral requests</p>
      </div>

      {requests.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">You haven't sent any referral requests yet</p>
            <p className="text-sm text-muted-foreground mt-2">Browse referrers to get started</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => {
            const initials = request.referrerName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()

            return (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg">{request.referrerName}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <span className="truncate">{request.position}</span>
                          <span>•</span>
                          <Badge variant="secondary">{request.company}</Badge>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(request.status)}
                      {getStatusBadge(request.status)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Your message:</span> {request.message}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Sent {new Date(request.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  {request.timeline && request.timeline.length > 0 && (
                    <div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedId(expandedId === request.id ? null : request.id)}
                        className="text-xs"
                      >
                        {expandedId === request.id ? "Hide Timeline" : "View Timeline"}
                      </Button>
                      {expandedId === request.id && <ReferralTimeline timeline={request.timeline} />}
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
