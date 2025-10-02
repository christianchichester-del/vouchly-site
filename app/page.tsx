import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Target, Shield, TrendingUp, Users, ArrowRight } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"
import { CompanyLogo } from "@/components/company-logo"
import { companies } from "@/lib/companies"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-primary">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold text-foreground">Vouchly</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link href="#companies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Companies
            </Link>
            <Link href="/companies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Browse All
            </Link>
            <Link href="/referrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              For Referrers
            </Link>
            <Button asChild size="sm" className="glow-primary">
              <Link href="#waitlist">Join Waitlist</Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Button asChild size="sm" className="glow-primary">
              <Link href="#waitlist">Join Waitlist</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center py-24 md:py-32 px-4 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.25_0.02_264_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.25_0.02_264_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Trusted by 10,000+ sales & marketing professionals</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
              Get Referred to Your Next <span className="text-gradient">Sales or Marketing Role</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium text-pretty">
              Connect with insiders at top companies who can fast-track your resume to hiring managers. Skip the black
              hole of applications and land the role you actually want.
            </p>

            <div id="waitlist" className="max-w-xl mx-auto pt-6 scroll-mt-20">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 px-4 relative scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How Vouchly Works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to your dream role</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-xl flex items-center justify-center mb-6 glow-primary">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">STEP 1</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Find Your Company</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Browse employees at Salesforce, Gong, Stripe, and 13+ other top sales and marketing companies.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-secondary/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl flex items-center justify-center mb-6 glow-accent">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-secondary mb-2">STEP 2</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Request Referral</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Send personalized requests to verified employees who can submit your referral directly.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-accent/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-xl flex items-center justify-center mb-6 glow-accent">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-accent mb-2">STEP 3</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Land Interview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track your referral status in real-time and get your resume in front of hiring managers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="companies" className="py-24 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Connect with Insiders at <span className="text-gradient">Top Companies</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get referred to sales and marketing roles at industry-leading companies
            </p>
            <Button asChild variant="outline" size="lg" className="group bg-transparent">
              <Link href="/companies">
                Browse All Companies
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companies.slice(0, 8).map((company) => (
              <Link
                key={company.name}
                href="/companies"
                className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all duration-300 group hover:scale-105 cursor-pointer"
              >
                <CompanyLogo name={company.name} logo={company.logo} className="w-20 h-20" />
                <div className="text-center">
                  <span className="text-base font-semibold text-foreground block">{company.name}</span>
                  <span className="text-xs text-muted-foreground">{company.industry}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Vouchly</h2>
            <p className="text-lg text-muted-foreground">Built for candidates, trusted by referrers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Verified Employees Only</h3>
              <p className="text-muted-foreground leading-relaxed">
                All referrers are verified employees at their companies, ensuring authentic connections and real
                referrals.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Real-Time Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track your referral status from request to submission with transparent updates every step of the way.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Sales & Marketing Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Specialized platform exclusively for sales and marketing professionals looking to level up their
                careers.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Skip the Black Hole</h3>
              <p className="text-muted-foreground leading-relaxed">
                Stop wasting time on online applications. Get your resume directly to hiring managers through employee
                referrals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.25_0.02_264_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.25_0.02_264_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Ready to Land Your <span className="text-gradient">Dream Role?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto">
            Join thousands of sales and marketing professionals who have successfully landed interviews through employee
            referrals.
          </p>
          <div className="max-w-xl mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 bg-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-sm text-muted-foreground">© 2025 Vouchly. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-8">
              <Link href="/companies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Companies
              </Link>
              <Link href="/referrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                For Referrers
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
