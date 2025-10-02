"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Linkedin } from "lucide-react"

export function SignupForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultType = searchParams.get("type") === "referrer" ? "referrer" : "candidate"

  const [userType, setUserType] = useState<"candidate" | "referrer">(defaultType)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Mock authentication - in production, this would call your auth API
    setTimeout(() => {
      const mockUser = {
        id: "1",
        email,
        name,
        type: userType,
      }
      localStorage.setItem("user", JSON.stringify(mockUser))

      // Redirect based on user type
      if (userType === "candidate") {
        router.push("/candidate/dashboard")
      } else {
        router.push("/referrer/dashboard")
      }
    }, 1000)
  }

  const handleLinkedInSignup = () => {
    setIsLoading(true)
    setTimeout(() => {
      const mockUser = {
        id: "1",
        email: "user@example.com",
        name: "John Doe",
        type: userType,
      }
      localStorage.setItem("user", JSON.stringify(mockUser))

      if (userType === "candidate") {
        router.push("/candidate/dashboard")
      } else {
        router.push("/referrer/dashboard")
      }
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>I am a...</Label>
        <RadioGroup value={userType} onValueChange={(value) => setUserType(value as "candidate" | "referrer")}>
          <div className="flex items-center space-x-2 border border-border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="candidate" id="candidate" />
            <Label htmlFor="candidate" className="flex-1 cursor-pointer">
              <div className="font-medium">Candidate</div>
              <div className="text-sm text-muted-foreground">Looking for referrals</div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 border border-border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="referrer" id="referrer" />
            <Label htmlFor="referrer" className="flex-1 cursor-pointer">
              <div className="font-medium">Referrer</div>
              <div className="text-sm text-muted-foreground">Want to help others</div>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full bg-transparent"
        onClick={handleLinkedInSignup}
        disabled={isLoading}
      >
        <Linkedin className="w-4 h-4 mr-2" />
        Continue with LinkedIn
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            minLength={8}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Create Account"}
        </Button>
      </form>
    </div>
  )
}
