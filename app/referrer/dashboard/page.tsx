"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser, type User } from "@/lib/mock-data"
import { ReferrerHeader } from "@/components/referrer/referrer-header"
import { ReferrerProfileSetup } from "@/components/referrer/referrer-profile-setup"
import { IncomingRequests } from "@/components/referrer/incoming-requests"
import { ReferralHistory } from "@/components/referrer/referral-history"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReferrerDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [activeTab, setActiveTab] = useState("requests")

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      router.push("/login")
      return
    }
    if (currentUser.type !== "referrer") {
      router.push("/candidate/dashboard")
      return
    }
    setUser(currentUser)
  }, [router])

  if (!user) {
    return null
  }

  const isProfileComplete = user.company && user.position

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ReferrerHeader user={user} />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        {!isProfileComplete ? (
          <div className="max-w-3xl mx-auto">
            <ReferrerProfileSetup user={user} onComplete={() => setUser(getCurrentUser())} />
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="requests">Incoming Requests</TabsTrigger>
              <TabsTrigger value="history">Referral History</TabsTrigger>
            </TabsList>
            <TabsContent value="requests" className="space-y-6">
              <IncomingRequests user={user} />
            </TabsContent>
            <TabsContent value="history" className="space-y-6">
              <ReferralHistory user={user} />
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  )
}
