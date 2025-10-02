"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Building2, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { CompanyLogo } from "@/components/company-logo"

interface CompanyModalProps {
  company: {
    name: string
    industry: string
    logo: string
    description: string
  } | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CompanyModal({ company, open, onOpenChange }: CompanyModalProps) {
  if (!company) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-lg p-3">
              <CompanyLogo
                name={company.name}
                logo={company.logo}
                className="w-full h-full mix-blend-normal dark:brightness-0 dark:invert"
              />
            </div>
            <div>
              <DialogTitle className="text-2xl text-foreground">{company.name}</DialogTitle>
              <p className="text-sm text-muted-foreground">{company.industry}</p>
            </div>
          </div>
          <DialogDescription className="text-base text-muted-foreground leading-relaxed">
            {company.description}
          </DialogDescription>
        </DialogHeader>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Join Waitlist to Unlock</h4>
              <p className="text-sm text-muted-foreground">Get access to verified referrers at {company.name}</p>
            </div>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" />
              <span>Connect with {company.name} employees</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              <span>Request personalized referrals</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              <span>Track your referral status</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Button asChild size="lg" className="w-full glow-primary group" onClick={() => onOpenChange(false)}>
            <Link href="/#waitlist">
              Join Waitlist
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full bg-transparent" onClick={() => onOpenChange(false)}>
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
