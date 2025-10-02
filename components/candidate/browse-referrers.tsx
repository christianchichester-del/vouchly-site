"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, MapPin, Briefcase, Building2 } from "lucide-react"
import { mockUsers, type User } from "@/lib/mock-data"
import { RequestReferralDialog } from "@/components/candidate/request-referral-dialog"

interface BrowseReferrersProps {
  user: User
}

export function BrowseReferrers({ user }: BrowseReferrersProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedReferrer, setSelectedReferrer] = useState<User | null>(null)

  const referrers = mockUsers.filter((u) => u.type === "referrer")

  const filteredReferrers = referrers.filter((referrer) => {
    const query = searchQuery.toLowerCase()
    return (
      referrer.name.toLowerCase().includes(query) ||
      referrer.company?.toLowerCase().includes(query) ||
      referrer.position?.toLowerCase().includes(query) ||
      referrer.industry?.toLowerCase().includes(query)
    )
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Browse Referrers</h2>
        <p className="text-muted-foreground">Find employees at your target companies</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search by name, company, industry, or role..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredReferrers.map((referrer) => {
          const initials = referrer.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()

          return (
            <Card key={referrer.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg truncate">{referrer.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Briefcase className="w-3 h-3" />
                      <span className="truncate">{referrer.position}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="secondary">{referrer.company}</Badge>
                  </div>
                  {referrer.industry && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Building2 className="w-3 h-3" />
                      <span>{referrer.industry}</span>
                    </div>
                  )}
                  {referrer.location && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{referrer.location}</span>
                    </div>
                  )}
                </div>

                {referrer.bio && <p className="text-sm text-muted-foreground line-clamp-2">{referrer.bio}</p>}

                {referrer.skills && referrer.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {referrer.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}

                <Button className="w-full" onClick={() => setSelectedReferrer(referrer)}>
                  Request Referral
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredReferrers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No referrers found matching your search</p>
        </div>
      )}

      {selectedReferrer && (
        <RequestReferralDialog
          referrer={selectedReferrer}
          candidate={user}
          open={!!selectedReferrer}
          onOpenChange={(open) => !open && setSelectedReferrer(null)}
        />
      )}
    </div>
  )
}
