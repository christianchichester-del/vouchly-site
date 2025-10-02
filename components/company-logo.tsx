"use client"

import { useState } from "react"

interface CompanyLogoProps {
  name: string
  logo?: string
  className?: string
}

export function CompanyLogo({ name, logo, className = "" }: CompanyLogoProps) {
  const [imageError, setImageError] = useState(false)

  const handleError = () => {
    console.log("[v0] Logo failed to load:", name, logo)
    setImageError(true)
  }

  const handleLoad = () => {
    console.log("[v0] Logo loaded successfully:", name, logo)
  }

  if (!logo || imageError) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <span className="text-foreground font-semibold text-sm text-center">{name}</span>
      </div>
    )
  }

  return (
    <img
      src={logo || "/placeholder.svg"}
      alt={`${name} logo`}
      width={80}
      height={80}
      className={`object-contain ${className}`}
      onError={handleError}
      onLoad={handleLoad}
      loading="lazy"
    />
  )
}
