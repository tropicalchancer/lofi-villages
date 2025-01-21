import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, Users, Tag } from "lucide-react"

interface PopupCardProps {
  location: string
  dates: string
  theme: string
  currentSignups: number
  threshold: number
  status: "proposed" | "activated"
}

export function PopupCard({ location, dates, theme, currentSignups, threshold, status }: PopupCardProps) {
  const isActivated = status === "activated"
  const progressPercentage = (currentSignups / threshold) * 100

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-200">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#666]">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-[#666]">
              <Calendar className="w-4 h-4" />
              <span>{dates}</span>
            </div>
          </div>
          {isActivated && (
            <span className="px-3 py-1 text-xs font-medium bg-[#d6fff1] text-[#0ca678] rounded-full">Activated!</span>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#666]">
            <Tag className="w-4 h-4" />
            <span className="font-medium text-[#2D2D2D]">{theme}</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm text-[#666]">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>
                  {currentSignups}/{threshold} joined
                </span>
              </div>
            </div>
            <div className="h-2 bg-[#eee] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#ff3e88] to-[#8b31ff] transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        <Button className="w-full bg-white border-2 border-[#2D2D2D] text-[#2D2D2D] hover:bg-[#2D2D2D] hover:text-white transition-all duration-200">
          {isActivated ? "Join & Chat" : "Count me in!"}
        </Button>
      </div>
    </Card>
  )
}

