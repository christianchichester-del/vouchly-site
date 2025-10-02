"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Clock, CheckCircle, XCircle, ExternalLink } from "lucide-react"
import { mockReferralRequests, type User, type ReferralRequest } from "@/lib/mock-data"
import { ReviewRequestDialog } from "@/components/referrer/review-request-dialog"

interface IncomingRequestsProps {
  user: User
}

export function IncomingRequests({ user }: IncomingRequestsProps) {
  const [selectedRequest, setSelectedRequest] = useState<ReferralRequest | null>(null)

  // In production, filter by referrerId === user.id
  const allRequests = mockReferralRequests
  const pendingRequests = allRequests.filter((r) => r.status === "pending")
  const reviewedRequests = allRequests.filter((r) => r.status !== "pending")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "declined":
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      pending: "secondary",
      approved: "default",
      declined: "destructive",
    }
    return (
      <Badge variant={variants[status] || "default"} className="capitalize">
        {status}
      </Badge>
    )
  }

  const renderRequestCard = (request: ReferralRequest, isPending: boolean) => {
    const initials = request.candidateName
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
                <AvatarFallback className="bg-secondary text-secondary-foreground">{initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg">{request.candidateName}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <span className="truncate">{request.position}</span>
                  <span>•</span>
                  <span className="text-xs">{new Date(request.createdAt).toLocaleDateString()}</span>
                </CardDescription>
              </div>
            </div>
            {!isPending && (
              <div className="flex items-center gap-2">
                {getStatusIcon(request.status)}
                {getStatusBadge(request.status)}
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Message:</p>
            <p className="text-sm text-muted-foreground">{request.message}</p>
          </div>
          {isPending ? (
            <div className="flex gap-2">
              <Button className="flex-1" onClick={() => setSelectedRequest(request)}>
                Review Request
              </Button>
              <Button variant="outline" size="icon">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Button variant="outline" className="w-full bg-transparent" onClick={() => setSelectedRequest(request)}>
              View Details
            </Button>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Incoming Requests</h2>
        <p className="text-muted-foreground">Review and respond to referral requests</p>
      </div>

      {pendingRequests.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">Pending</h3>
            <Badge variant="secondary">{pendingRequests.length}</Badge>
          </div>
          {pendingRequests.map((request) => renderRequestCard(request, true))}
        </div>
      )}

      {reviewedRequests.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Reviewed</h3>
          {reviewedRequests.map((request) => renderRequestCard(request, false))}
        </div>
      )}

      {allRequests.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No referral requests yet</p>
            <p className="text-sm text-muted-foreground mt-2">Candidates will be able to find you and send requests</p>
          </CardContent>
        </Card>
      )}

      {selectedRequest && (
        <ReviewRequestDialog
          request={selectedRequest}
          open={!!selectedRequest}
          onOpenChange={(open) => !open && setSelectedRequest(null)}
        />
      )}
    </div>
  )
}
