"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Bell, CheckCircle, XCircle, Send, Mail } from "lucide-react"
import { getNotifications, markNotificationAsRead, type Notification } from "@/lib/mock-data"
import { useRouter } from "next/navigation"

interface NotificationsDropdownProps {
  userId: string
}

export function NotificationsDropdown({ userId }: NotificationsDropdownProps) {
  const router = useRouter()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const loadNotifications = () => {
      const userNotifications = getNotifications(userId)
      setNotifications(userNotifications)
    }

    loadNotifications()
    // Poll for new notifications every 10 seconds
    const interval = setInterval(loadNotifications, 10000)
    return () => clearInterval(interval)
  }, [userId])

  const unreadCount = notifications.filter((n) => !n.read).length

  const handleNotificationClick = (notification: Notification) => {
    markNotificationAsRead(notification.id)
    setNotifications((prev) => prev.map((n) => (n.id === notification.id ? { ...n, read: true } : n)))
    setOpen(false)
    // Navigate based on notification type
    if (notification.referralId) {
      router.refresh()
    }
  }

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "request_received":
        return <Mail className="w-4 h-4 text-blue-500" />
      case "request_approved":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "request_declined":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "referral_submitted":
        return <Send className="w-4 h-4 text-purple-500" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {unreadCount} new
            </Badge>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length === 0 ? (
          <div className="py-6 text-center text-sm text-muted-foreground">No notifications</div>
        ) : (
          <div className="max-h-[400px] overflow-y-auto">
            {notifications.slice(0, 10).map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className="flex items-start gap-3 p-3 cursor-pointer"
                onClick={() => handleNotificationClick(notification)}
              >
                <div className="mt-0.5">{getNotificationIcon(notification.type)}</div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium ${notification.read ? "text-muted-foreground" : "text-foreground"}`}
                  >
                    {notification.title}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-2">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(notification.createdAt).toLocaleDateString()}
                  </p>
                </div>
                {!notification.read && <div className="w-2 h-2 bg-primary rounded-full mt-2" />}
              </DropdownMenuItem>
            ))}
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
