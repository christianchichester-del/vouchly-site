"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser, type User } from "@/lib/mock-data"
import { CandidateHeader } from "@/components/candidate/candidate-header"
import { ProfileSetup } from "@/components/candidate/profile-setup"
import { BrowseReferrers } from "@/components/candidate/browse-referrers"
import { MyRequests } from "@/components/candidate/my-requests"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CandidateDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [activeTab, setActiveTab] = useState("browse")

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      router.push("/login")
      return
    }
    if (currentUser.type !== "candidate") {
      router.push("/referrer/dashboard")
      return
    }
    setUser(currentUser)
  }, [router])

  if (!user) {
    return null
  }

  const isProfileComplete = user.targetCompanies && user.targetCompanies.length > 0

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CandidateHeader user={user} />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        {!isProfileComplete ? (
          <div className="max-w-3xl mx-auto">
            <ProfileSetup user={user} onComplete={() => setUser(getCurrentUser())} />
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="browse">Browse Referrers</TabsTrigger>
              <TabsTrigger value="requests">My Requests</TabsTrigger>
            </TabsList>
            <TabsContent value="browse" className="space-y-6">
              <BrowseReferrers user={user} />
            </TabsContent>
            <TabsContent value="requests" className="space-y-6">
              <MyRequests user={user} />
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  )
}
