"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowLeft } from "lucide-react"
import { companies } from "@/lib/companies"
import { CompanyModal } from "@/components/company-modal"
import { CompanyLogo } from "@/components/company-logo"

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCompany, setSelectedCompany] = useState<(typeof companies)[0] | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const onOpenChange = (open: boolean) => setModalOpen(open)

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleCompanyClick = (company: (typeof companies)[0]) => {
    setSelectedCompany(company)
    setModalOpen(true)
  }

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

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Browse <span className="text-gradient">Top Companies</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore sales and marketing opportunities at 16 industry-leading companies
          </p>

          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search companies or industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border h-12 text-base"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <button
              key={company.name}
              onClick={() => handleCompanyClick(company)}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group hover:scale-[1.02] cursor-pointer text-left"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-lg p-3 group-hover:bg-white/10 transition-colors flex-shrink-0">
                  <CompanyLogo
                    name={company.name}
                    logo={company.logo}
                    className="w-full h-full mix-blend-normal dark:brightness-0 dark:invert opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{company.industry}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{company.description}</p>
            </button>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No companies found matching "{searchQuery}"</p>
          </div>
        )}
      </main>

      <CompanyModal company={selectedCompany} open={modalOpen} onOpenChange={onOpenChange} />
    </div>
  )
}
