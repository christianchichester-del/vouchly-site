import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, CheckCircle2, Clock, TrendingUp, Bell, MessageSquare, Award } from "lucide-react"

export default function ReferrerDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-primary">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-foreground">Vouchly</span>
            </div>
          </div>
          <Button asChild size="sm" className="glow-primary">
            <Link href="/#waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            <span>Coming Soon</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Referrer <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help candidates land their dream roles while earning rewards. Join the waitlist to get early access when we
            launch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Manage Referral Requests</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Review and respond to referral requests from qualified candidates looking to join your company.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>View candidate profiles and resumes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Accept or decline requests</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Track referral status</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Direct Messaging</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Communicate directly with candidates to learn more about their background and career goals.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Real-time chat with candidates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Share interview tips and advice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Build meaningful connections</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Track Your Impact</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              See how many candidates you've helped and track their progress through the hiring process.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>View referral analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Track successful hires</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Monitor response rates</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Earn Rewards</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Get recognized for helping others and earn rewards for successful referrals that lead to hires.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Referral bonuses and incentives</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Build your reputation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Unlock exclusive perks</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.25_0.02_264_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.25_0.02_264_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Be the First to Know</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the waitlist as a referrer and we'll notify you as soon as the dashboard launches. Start helping
              candidates land their dream roles.
            </p>
            <Button asChild size="lg" className="glow-primary">
              <Link href="/#waitlist">Join Referrer Waitlist</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why Become a Referrer?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Help Others</div>
              <p className="text-sm text-muted-foreground">
                Make a real impact by helping talented professionals advance their careers
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Earn Rewards</div>
              <p className="text-sm text-muted-foreground">
                Get compensated for successful referrals that lead to hires at your company
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">Build Network</div>
              <p className="text-sm text-muted-foreground">
                Connect with talented sales and marketing professionals in your industry
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
