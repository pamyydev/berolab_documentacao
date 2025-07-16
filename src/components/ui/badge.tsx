
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        owner: "border-transparent bg-dracula-yellow text-background font-bold",
        admin: "border-transparent bg-primary text-primary-foreground",
        manager: "border-transparent bg-accent text-accent-foreground",
        senior: "border-transparent bg-dracula-orange text-background",
        moderator: "border-transparent bg-dracula-cyan text-background",
        support: "border-transparent bg-muted text-muted-foreground border-dracula-cyan",
        staff: "border-transparent bg-dracula-green text-background",
        partner: "border-transparent bg-secondary text-secondary-foreground",
        booster: "border-transparent bg-card text-card-foreground border-primary",
        student: "border-transparent bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
