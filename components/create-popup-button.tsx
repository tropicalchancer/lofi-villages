"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CreatePopupButton() {
  const [open, setOpen] = useState(false)
  const [selectedVibes, setSelectedVibes] = useState<string[]>([])
  const [customVibe, setCustomVibe] = useState("")

  const predefinedVibes = [
    "chill",
    "traveling families",
    "locked-in mode",
    "coworking",
    "creatives",
    "wellness",
    "hikers",
    "foodies",
    "techies",
    "party"
  ] as const

  const toggleVibe = (vibe: string) => {
    setSelectedVibes((prev: string[]) =>
      prev.includes(vibe)
        ? prev.filter((v: string) => v !== vibe)
        : [...prev, vibe]
    )
  }

  const handleCustomVibe = () => {
    if (customVibe && !selectedVibes.includes(customVibe)) {
      setSelectedVibes((prev: string[]) => [...prev, customVibe])
      setCustomVibe("")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-[#2D2D2D] hover:bg-black text-white font-medium px-8 py-6 text-lg rounded-xl">
        spin-up a lofi village
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>spin-up a lofi village</DialogTitle>
          <DialogDescription>
          offer a handful of details for this invisible city. should the numbers suffice, it unfolds of its own accord.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="neighborhood">Neighborhood</Label>
            <Input 
              id="neighborhood" 
              placeholder="e.g. Palermo, Buenos Aires" 
              className="rounded-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="why">Why this location?</Label>
            <Input 
              id="why" 
              placeholder="Tell us what makes this neighborhood special..." 
              className="min-h-[100px] rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label>Vibes</Label>
            <div className="flex flex-wrap gap-2">
              {predefinedVibes.map((vibe) => (
                <Button
                  key={vibe}
                  type="button"
                  variant="secondary"
                  className={`rounded-full ${
                    selectedVibes.includes(vibe)
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => toggleVibe(vibe)}
                >
                  {selectedVibes.includes(vibe) ? "- " : "+ "}{vibe}
                </Button>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <Input
                placeholder="Add custom vibe..."
                value={customVibe}
                onChange={(e) => setCustomVibe(e.target.value)}
                className="rounded-full"
              />
              <Button 
                type="button"
                onClick={handleCustomVibe}
                className="rounded-full"
              >
                Add
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Input 
                type="date" 
                className="rounded-full"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Input 
                type="date" 
                className="rounded-full"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full"
          >
            Suggest Location
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}