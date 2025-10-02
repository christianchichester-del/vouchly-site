"use client"

import { CheckCircle, Clock, XCircle, Send, FileText } from "lucide-react"
import type { TimelineEvent } from "@/lib/mock-data"

interface ReferralTimelineProps {
  timeline: TimelineEvent[]
}

export function ReferralTimeline({ timeline }: ReferralTimelineProps) {
  const getIcon = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "created":
        return <Clock className="w-4 h-4 text-blue-500" />
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "declined":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "submitted":
        return <Send className="w-4 h-4 text-purple-500" />
      case "note":
        return <FileText className="w-4 h-4 text-gray-500" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="mt-4 space-y-4">
      {timeline.map((event, index) => (
        <div key={event.id} className="flex gap-3">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">{getIcon(event.type)}</div>
            {index < timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
          </div>
          <div className="flex-1 pb-4">
            <p className="text-sm font-medium text-foreground">{event.title}</p>
            <p className="text-xs text-muted-foreground mt-1">{event.description}</p>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-xs text-muted-foreground">{new Date(event.timestamp).toLocaleString()}</p>
              <span className="text-xs text-muted-foreground">•</span>
              <p className="text-xs text-muted-foreground">{event.actor}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
