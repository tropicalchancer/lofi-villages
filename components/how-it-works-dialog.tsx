import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export function HowItWorksDialog() {
  return (
    <Dialog>
      <DialogTrigger className="text-gray-600 hover:text-gray-900 transition-colors">
        [how it works]
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-[#1c1c1c] text-white p-8 rounded-xl">
        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-medium">how it works</h2>
          
          <p className="text-gray-300">
            Low Touch Popups enables spontaneous community formation in specific locations
            around shared interests. Each popup is <span className="text-green-400">commitment-free</span> with <span className="text-blue-400">no overhead</span> and <span className="text-amber-400">no planning</span>.
          </p>

          <div className="space-y-4 text-left">
            <div>step 1: pick a location and dates you will be there</div>
            <div>step 2: set a minimum number of participants needed</div>
            <div>step 3: join other popups or wait for others to join yours</div>
            <div>step 4: once enough people join, the popup activates</div>
            <div>step 5: meet up and create spontaneous community!</div>
          </div>

          <div className="pt-4 text-sm text-gray-400">
            <a href="/terms" className="underline hover:text-white">terms of service</a>
            {" | "}
            <a href="/privacy" className="underline hover:text-white">privacy policy</a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}