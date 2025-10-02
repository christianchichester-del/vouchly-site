// Mock data for development - replace with real API calls when integrations are added

export interface User {
  id: string
  name: string
  email: string
  type: "candidate" | "referrer"
  avatar?: string
  bio?: string
  location?: string
  linkedinUrl?: string
  company?: string
  position?: string
  industry?: string
  targetCompanies?: string[]
  skills?: string[]
  experience?: string
}

export interface ReferralRequest {
  id: string
  candidateId: string
  candidateName: string
  candidateEmail: string
  referrerId: string
  referrerName: string
  company: string
  position: string
  status: "pending" | "approved" | "declined" | "submitted"
  message: string
  createdAt: string
  updatedAt: string
  timeline?: TimelineEvent[]
}

export interface TimelineEvent {
  id: string
  type: "created" | "approved" | "declined" | "submitted" | "note"
  title: string
  description: string
  timestamp: string
  actor: string
}

export interface Notification {
  id: string
  userId: string
  type: "request_received" | "request_approved" | "request_declined" | "referral_submitted"
  title: string
  message: string
  read: boolean
  createdAt: string
  referralId?: string
}

export const mockUsers: User[] = [
  {
    id: "3",
    name: "Emily Watson",
    email: "emily@example.com",
    type: "referrer",
    company: "Amazon",
    position: "Marketing Manager",
    industry: "Technology",
    location: "Seattle, WA",
    bio: "Marketing professional with 7 years experience. Love connecting people.",
    linkedinUrl: "https://linkedin.com/in/emilywatson",
    skills: ["Digital Marketing", "Brand Strategy", "Analytics"],
  },
  // Salesforce
  {
    id: "4",
    name: "David Park",
    email: "david.park@salesforce.com",
    type: "referrer",
    company: "Salesforce",
    position: "Account Executive",
    industry: "SaaS / CRM",
    location: "San Francisco, CA",
    bio: "Top performing AE at Salesforce. Love helping sales professionals grow their careers.",
    linkedinUrl: "https://linkedin.com/in/davidpark",
    skills: ["Enterprise Sales", "CRM", "Relationship Building"],
  },
  {
    id: "5",
    name: "Jessica Liu",
    email: "jessica.liu@salesforce.com",
    type: "referrer",
    company: "Salesforce",
    position: "VP of Sales",
    industry: "SaaS / CRM",
    location: "San Francisco, CA",
    bio: "Leading high-performing sales teams. Happy to refer talented sales professionals.",
    linkedinUrl: "https://linkedin.com/in/jessicaliu",
    skills: ["Sales Leadership", "Team Building", "Strategy"],
  },
  // Gong
  {
    id: "6",
    name: "Marcus Johnson",
    email: "marcus@gong.io",
    type: "referrer",
    company: "Gong",
    position: "Business Development Manager",
    industry: "SaaS / Sales Intelligence",
    location: "San Francisco, CA",
    bio: "Driving new business at Gong. Open to referring ambitious sales talent.",
    linkedinUrl: "https://linkedin.com/in/marcusjohnson",
    skills: ["Business Development", "Partnerships", "Sales Strategy"],
  },
  {
    id: "7",
    name: "Rachel Green",
    email: "rachel@gong.io",
    type: "referrer",
    company: "Gong",
    position: "Retention Manager",
    industry: "SaaS / Sales Intelligence",
    location: "Remote",
    bio: "Focused on customer retention and expansion. Love helping customer-focused professionals grow.",
    linkedinUrl: "https://linkedin.com/in/rachelgreen",
    skills: ["Customer Retention", "Account Management", "Upselling"],
  },
  // Vanta
  {
    id: "8",
    name: "Alex Thompson",
    email: "alex@vanta.com",
    type: "referrer",
    company: "Vanta",
    position: "Account Executive",
    industry: "SaaS / Security Compliance",
    location: "San Francisco, CA",
    bio: "Selling security compliance solutions. Happy to help sales professionals join Vanta.",
    linkedinUrl: "https://linkedin.com/in/alexthompson",
    skills: ["SaaS Sales", "Security", "Consultative Selling"],
  },
  // Rippling
  {
    id: "9",
    name: "Sophia Martinez",
    email: "sophia@rippling.com",
    type: "referrer",
    company: "Rippling",
    position: "Head of Marketing",
    industry: "HR / Payroll SaaS",
    location: "San Francisco, CA",
    bio: "Leading marketing at Rippling. Open to referring talented marketing professionals.",
    linkedinUrl: "https://linkedin.com/in/sophiamartinez",
    skills: ["Marketing Strategy", "Brand", "Growth"],
  },
  {
    id: "10",
    name: "James Wilson",
    email: "james@rippling.com",
    type: "referrer",
    company: "Rippling",
    position: "Account Executive",
    industry: "HR / Payroll SaaS",
    location: "New York, NY",
    bio: "Selling the future of HR and IT management. Love connecting with ambitious sales professionals.",
    linkedinUrl: "https://linkedin.com/in/jameswilson",
    skills: ["Enterprise Sales", "HR Tech", "Negotiation"],
  },
  // Okta
  {
    id: "11",
    name: "Priya Patel",
    email: "priya@okta.com",
    type: "referrer",
    company: "Okta",
    position: "Director of Sales",
    industry: "SaaS / Identity Management",
    location: "San Francisco, CA",
    bio: "Leading sales teams at Okta. Happy to refer talented sales leaders.",
    linkedinUrl: "https://linkedin.com/in/priyapatel",
    skills: ["Sales Leadership", "Enterprise Sales", "Team Building"],
  },
  // Shopify
  {
    id: "12",
    name: "Chris Anderson",
    email: "chris@shopify.com",
    type: "referrer",
    company: "Shopify",
    position: "Retention Manager",
    industry: "Ecommerce / SaaS",
    location: "Toronto, Canada",
    bio: "Focused on merchant retention and growth. Open to referring customer-focused professionals.",
    linkedinUrl: "https://linkedin.com/in/chrisanderson",
    skills: ["Customer Retention", "Ecommerce", "Account Management"],
  },
  {
    id: "13",
    name: "Nina Patel",
    email: "nina@shopify.com",
    type: "referrer",
    company: "Shopify",
    position: "Business Development Manager",
    industry: "Ecommerce / SaaS",
    location: "Remote",
    bio: "Building partnerships that power commerce. Love connecting talented people with Shopify.",
    linkedinUrl: "https://linkedin.com/in/ninapatel",
    skills: ["Business Development", "Partnerships", "Ecommerce"],
  },
  // Glean
  {
    id: "14",
    name: "Kevin Zhang",
    email: "kevin@glean.com",
    type: "referrer",
    company: "Glean",
    position: "Account Executive",
    industry: "SaaS / Knowledge Management",
    location: "Palo Alto, CA",
    bio: "Selling AI-powered knowledge management. Happy to refer sales talent.",
    linkedinUrl: "https://linkedin.com/in/kevinzhang",
    skills: ["SaaS Sales", "AI", "Enterprise Software"],
  },
  // Ramp
  {
    id: "15",
    name: "Lauren Davis",
    email: "lauren@ramp.com",
    type: "referrer",
    company: "Ramp",
    position: "Account Executive",
    industry: "Finance / Expense Management",
    location: "New York, NY",
    bio: "Helping companies save time and money with Ramp. Open to referring ambitious sales professionals.",
    linkedinUrl: "https://linkedin.com/in/laurendavis",
    skills: ["Mid-Market Sales", "Fintech", "Consultative Selling"],
  },
  {
    id: "16",
    name: "Daniel Kim",
    email: "daniel@ramp.com",
    type: "referrer",
    company: "Ramp",
    position: "Retention Manager",
    industry: "Finance / Expense Management",
    location: "New York, NY",
    bio: "Building lasting relationships with Ramp customers. Love helping retention professionals grow.",
    linkedinUrl: "https://linkedin.com/in/danielkim",
    skills: ["Customer Retention", "Finance", "Account Management"],
  },
  // Brex
  {
    id: "17",
    name: "Amanda Foster",
    email: "amanda@brex.com",
    type: "referrer",
    company: "Brex",
    position: "CRO",
    industry: "Finance / Corporate Cards",
    location: "San Francisco, CA",
    bio: "Leading revenue at Brex. Happy to refer top sales and marketing talent.",
    linkedinUrl: "https://linkedin.com/in/amandafoster",
    skills: ["Revenue Leadership", "Fintech", "Strategy"],
  },
  // ShipBob
  {
    id: "18",
    name: "Tyler Brown",
    email: "tyler@shipbob.com",
    type: "referrer",
    company: "ShipBob",
    position: "Account Executive",
    industry: "Logistics / Fulfillment",
    location: "Chicago, IL",
    bio: "Helping ecommerce brands scale with fulfillment. Open to referring sales professionals.",
    linkedinUrl: "https://linkedin.com/in/tylerbrown",
    skills: ["Account Management", "Logistics", "Ecommerce"],
  },
  // Coinbase
  {
    id: "19",
    name: "Jordan Lee",
    email: "jordan@coinbase.com",
    type: "referrer",
    company: "Coinbase",
    position: "Account Executive",
    industry: "Crypto / Finance",
    location: "San Francisco, CA",
    bio: "Building the future of finance with crypto. Happy to refer sales professionals to Coinbase.",
    linkedinUrl: "https://linkedin.com/in/jordanlee",
    skills: ["Institutional Sales", "Crypto", "Finance"],
  },
  {
    id: "20",
    name: "Maya Singh",
    email: "maya@coinbase.com",
    type: "referrer",
    company: "Coinbase",
    position: "CMO",
    industry: "Crypto / Finance",
    location: "Remote",
    bio: "Leading marketing at Coinbase. Love connecting talented marketers with our team.",
    linkedinUrl: "https://linkedin.com/in/mayasingh",
    skills: ["Marketing Leadership", "Crypto", "Brand Strategy"],
  },
  // Stripe
  {
    id: "21",
    name: "Ryan Cooper",
    email: "ryan@stripe.com",
    type: "referrer",
    company: "Stripe",
    position: "Account Executive",
    industry: "Payments / SaaS",
    location: "San Francisco, CA",
    bio: "Selling payment solutions for the internet. Open to referring sales talent.",
    linkedinUrl: "https://linkedin.com/in/ryancooper",
    skills: ["Enterprise Sales", "Payments", "SaaS"],
  },
  {
    id: "22",
    name: "Olivia Chen",
    email: "olivia@stripe.com",
    type: "referrer",
    company: "Stripe",
    position: "Account Executive",
    industry: "Payments / SaaS",
    location: "New York, NY",
    bio: "Managing Stripe's largest accounts. Happy to refer talented account executives.",
    linkedinUrl: "https://linkedin.com/in/oliviachen",
    skills: ["Strategic Accounts", "Payments", "Relationship Management"],
  },
  // Databricks
  {
    id: "23",
    name: "Eric Wang",
    email: "eric@databricks.com",
    type: "referrer",
    company: "Databricks",
    position: "SDR",
    industry: "Data / SaaS",
    location: "San Francisco, CA",
    bio: "Building pipeline at Databricks. Open to referring sales development professionals.",
    linkedinUrl: "https://linkedin.com/in/ericwang",
    skills: ["Sales Development", "Prospecting", "Outbound"],
  },
  // ZoomInfo
  {
    id: "24",
    name: "Brittany Moore",
    email: "brittany@zoominfo.com",
    type: "referrer",
    company: "ZoomInfo",
    position: "Account Executive",
    industry: "Sales Intelligence / SaaS",
    location: "Remote",
    bio: "Helping sales teams find their ideal customers. Love referring ambitious sales professionals.",
    linkedinUrl: "https://linkedin.com/in/brittanymoore",
    skills: ["SaaS Sales", "Sales Intelligence", "Prospecting"],
  },
  {
    id: "25",
    name: "Carlos Ramirez",
    email: "carlos@zoominfo.com",
    type: "referrer",
    company: "ZoomInfo",
    position: "Sales Development Manager",
    industry: "Sales Intelligence / SaaS",
    location: "Remote",
    bio: "Building and leading SDR teams. Happy to help sales development professionals grow.",
    linkedinUrl: "https://linkedin.com/in/carlosramirez",
    skills: ["Sales Development", "Team Leadership", "Coaching"],
  },
  // Gusto
  {
    id: "26",
    name: "Hannah Scott",
    email: "hannah@gusto.com",
    type: "referrer",
    company: "Gusto",
    position: "Account Executive",
    industry: "HR / Payroll",
    location: "Denver, CO",
    bio: "Helping small businesses thrive with better HR and payroll. Open to referring sales talent.",
    linkedinUrl: "https://linkedin.com/in/hannahscott",
    skills: ["SMB Sales", "HR Tech", "Consultative Selling"],
  },
  // Oracle
  {
    id: "27",
    name: "Robert Mitchell",
    email: "robert@oracle.com",
    type: "referrer",
    company: "Oracle",
    position: "Director of Sales",
    industry: "Enterprise Software / SaaS",
    location: "Austin, TX",
    bio: "Leading enterprise sales at Oracle. Happy to help experienced sales professionals join our team.",
    linkedinUrl: "https://linkedin.com/in/robertmitchell",
    skills: ["Enterprise Sales", "Leadership", "Cloud Solutions"],
  },
  {
    id: "28",
    name: "Victoria Adams",
    email: "victoria@oracle.com",
    type: "referrer",
    company: "Oracle",
    position: "Account Executive",
    industry: "Enterprise Software / SaaS",
    location: "Seattle, WA",
    bio: "Selling Oracle Cloud solutions. Love connecting talented sales professionals with Oracle.",
    linkedinUrl: "https://linkedin.com/in/victoriaadams",
    skills: ["Cloud Sales", "Enterprise", "Oracle Cloud"],
  },
]

export const mockReferralRequests: ReferralRequest[] = [
  {
    id: "1",
    candidateId: "100",
    candidateName: "Alex Johnson",
    candidateEmail: "alex@example.com",
    referrerId: "1",
    referrerName: "Sarah Chen",
    company: "Google",
    position: "Software Engineer",
    status: "pending",
    message:
      "Hi Sarah, I'm really interested in the SWE role at Google. I have 3 years of experience with React and TypeScript.",
    createdAt: "2025-01-15T10:00:00Z",
    updatedAt: "2025-01-15T10:00:00Z",
    timeline: [
      {
        id: "t1",
        type: "created",
        title: "Request Sent",
        description: "Referral request sent to Sarah Chen",
        timestamp: "2025-01-15T10:00:00Z",
        actor: "Alex Johnson",
      },
    ],
  },
]

export const mockNotifications: Notification[] = [
  {
    id: "n1",
    userId: "1",
    type: "request_received",
    title: "New Referral Request",
    message: "Alex Johnson has requested a referral for Software Engineer at Google",
    read: false,
    createdAt: "2025-01-15T10:00:00Z",
    referralId: "1",
  },
]

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null
  const userStr = localStorage.getItem("user")
  return userStr ? JSON.parse(userStr) : null
}

export function updateCurrentUser(updates: Partial<User>) {
  const user = getCurrentUser()
  if (user) {
    const updatedUser = { ...user, ...updates }
    localStorage.setItem("user", JSON.stringify(updatedUser))
  }
}

export function getNotifications(userId: string): Notification[] {
  if (typeof window === "undefined") return []
  const notificationsStr = localStorage.getItem("notifications")
  const allNotifications: Notification[] = notificationsStr ? JSON.parse(notificationsStr) : mockNotifications
  return allNotifications.filter((n) => n.userId === userId)
}

export function markNotificationAsRead(notificationId: string) {
  if (typeof window === "undefined") return
  const notificationsStr = localStorage.getItem("notifications")
  const notifications: Notification[] = notificationsStr ? JSON.parse(notificationsStr) : mockNotifications
  const updated = notifications.map((n) => (n.id === notificationId ? { ...n, read: true } : n))
  localStorage.setItem("notifications", JSON.stringify(updated))
}

export function addNotification(notification: Notification) {
  if (typeof window === "undefined") return
  const notificationsStr = localStorage.getItem("notifications")
  const notifications: Notification[] = notificationsStr ? JSON.parse(notificationsStr) : []
  notifications.unshift(notification)
  localStorage.setItem("notifications", JSON.stringify(notifications))
}
