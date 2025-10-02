"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Linkedin } from "lucide-react"

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Mock authentication - in production, this would call your auth API
    setTimeout(() => {
      // Store mock user data
      const mockUser = {
        id: "1",
        email,
        name: email.split("@")[0],
        type: "candidate", // Default to candidate
      }
      localStorage.setItem("user", JSON.stringify(mockUser))

      // Redirect to candidate dashboard
      router.push("/candidate/dashboard")
    }, 1000)
  }

  const handleLinkedInLogin = () => {
    setIsLoading(true)
    // Mock LinkedIn login
    setTimeout(() => {
      const mockUser = {
        id: "1",
        email: "user@example.com",
        name: "John Doe",
        type: "candidate",
      }
      localStorage.setItem("user", JSON.stringify(mockUser))
      router.push("/candidate/dashboard")
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <Button
        type="button"
        variant="outline"
        className="w-full bg-transparent"
        onClick={handleLinkedInLogin}
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
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </div>
  )
}
