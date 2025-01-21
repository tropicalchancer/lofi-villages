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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-[#2D2D2D] hover:bg-black text-white font-medium px-8 py-6 text-lg rounded-xl">
          Create a Low Touch Popup
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create a new popup</DialogTitle>
          <DialogDescription>
            Fill in the details for your popup community. Once enough people join, it will automatically activate!
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="e.g. Lisbon, Portugal" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dates">Dates</Label>
            <Input id="dates" placeholder="e.g. Feb 1-14, 2024" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="theme">Theme/Focus</Label>
            <Input id="theme" placeholder="e.g. Digital Nomad Creators" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="threshold">Minimum Participants</Label>
            <Input id="threshold" type="number" placeholder="5" min="2" />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#ff3e88] to-[#8b31ff] text-white hover:opacity-90"
          >
            Create Popup
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

