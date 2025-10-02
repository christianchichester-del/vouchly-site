"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CheckCircle, Send } from "lucide-react"
import { mockReferralRequests, type User } from "@/lib/mock-data"

interface ReferralHistoryProps {
  user: User
}

export function ReferralHistory({ user }: ReferralHistoryProps) {
  // In production, filter by referrerId === user.id and status === 'submitted'
  const submittedReferrals = mockReferralRequests.filter((r) => r.status === "submitted")
  const approvedReferrals = mockReferralRequests.filter((r) => r.status === "approved")

  const totalReferrals = submittedReferrals.length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Referral History</h2>
          <p className="text-muted-foreground">Track your impact and contributions</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Referrals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              <span className="text-3xl font-bold text-foreground">{totalReferrals}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Approved Requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-3xl font-bold text-foreground">{approvedReferrals.length}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {submittedReferrals.length > 0 ? (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Submitted Referrals</h3>
          {submittedReferrals.map((referral) => {
            const initials = referral.candidateName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()

            return (
              <Card key={referral.id}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-secondary text-secondary-foreground">{initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg">{referral.candidateName}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <span className="truncate">{referral.position}</span>
                        <span>•</span>
                        <Badge variant="outline">Submitted</Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Submitted on {new Date(referral.updatedAt).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No submitted referrals yet</p>
            <p className="text-sm text-muted-foreground mt-2">Start reviewing requests to build your history</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
