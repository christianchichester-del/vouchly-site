"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { updateCurrentUser, type User } from "@/lib/mock-data"

interface ProfileSetupProps {
  user: User
  onComplete: () => void
}

export function ProfileSetup({ user, onComplete }: ProfileSetupProps) {
  const [bio, setBio] = useState(user.bio || "")
  const [location, setLocation] = useState(user.location || "")
  const [linkedinUrl, setLinkedinUrl] = useState(user.linkedinUrl || "")
  const [experience, setExperience] = useState(user.experience || "")
  const [targetCompanies, setTargetCompanies] = useState<string[]>(user.targetCompanies || [])
  const [skills, setSkills] = useState<string[]>(user.skills || [])
  const [companyInput, setCompanyInput] = useState("")
  const [skillInput, setSkillInput] = useState("")

  const addCompany = () => {
    if (companyInput.trim() && !targetCompanies.includes(companyInput.trim())) {
      setTargetCompanies([...targetCompanies, companyInput.trim()])
      setCompanyInput("")
    }
  }

  const removeCompany = (company: string) => {
    setTargetCompanies(targetCompanies.filter((c) => c !== company))
  }

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()])
      setSkillInput("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateCurrentUser({
      bio,
      location,
      linkedinUrl,
      experience,
      targetCompanies,
      skills,
    })
    onComplete()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Your Profile</CardTitle>
        <CardDescription>Help referrers understand your background and goals</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself and your career goals..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              required
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="San Francisco, CA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn URL</Label>
              <Input
                id="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Years of Experience</Label>
            <Input
              id="experience"
              placeholder="e.g., 3 years in software engineering"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companies">Target Companies</Label>
            <div className="flex gap-2">
              <Input
                id="companies"
                placeholder="Add a company (e.g., Google)"
                value={companyInput}
                onChange={(e) => setCompanyInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    addCompany()
                  }
                }}
              />
              <Button type="button" onClick={addCompany} variant="secondary">
                Add
              </Button>
            </div>
            {targetCompanies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {targetCompanies.map((company) => (
                  <Badge key={company} variant="secondary" className="gap-1">
                    {company}
                    <button
                      type="button"
                      onClick={() => removeCompany(company)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
            <p className="text-xs text-muted-foreground">Add at least one target company</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <div className="flex gap-2">
              <Input
                id="skills"
                placeholder="Add a skill (e.g., React)"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    addSkill()
                  }
                }}
              />
              <Button type="button" onClick={addSkill} variant="secondary">
                Add
              </Button>
            </div>
            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="gap-1">
                    {skill}
                    <button type="button" onClick={() => removeSkill(skill)} className="ml-1 hover:text-destructive">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={targetCompanies.length === 0}>
            Complete Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
