import { PopupCard } from "@/components/popup-card"
import { CreatePopupButton } from "@/components/create-popup-button"
import { HowItWorksDialog } from "@/components/how-it-works-dialog"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <div className="container px-4 py-8 mx-auto max-w-6xl">
        <nav className="mb-12">
          <HowItWorksDialog />
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#2D2D2D]">lofi villages</h1>
          <p className="text-lg text-[#666] mb-8">
          an accidental little civilization forms here and there, then vanishes like a cosmic wink
          </p>
          <CreatePopupButton />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PopupCard
            location="Lisbon, Portugal"
            dates="Feb 1-14, 2024"
            theme="Digital Nomad Creators"
            currentSignups={3}
            threshold={5}
            status="proposed"
          />
          <PopupCard
            location="Mexico City, Mexico"
            dates="Mar 15-30, 2024"
            theme="Web3 Builders"
            currentSignups={6}
            threshold={5}
            status="activated"
          />
          <PopupCard
            location="Bali, Indonesia"
            dates="Apr 1-15, 2024"
            theme="Mindful Tech"
            currentSignups={2}
            threshold={8}
            status="proposed"
          />
        </div>
      </div>
    </main>
  )
}

