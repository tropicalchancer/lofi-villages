'use client';

import React, { useState } from 'react';
import { Eye, Calendar, CheckCircle2, MapPin, BadgeCheck, AlertCircle } from 'lucide-react';
import { 
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CommitmentLevel = 'watching' | 'planning' | 'committed' | 'verified' | null;

interface CommitmentType {
  id: CommitmentLevel;
  label: string;
  icon: React.ElementType;
  description: string;
  color: string;
}

interface PopupCardProps {
  location: string;
  dates: string;
  theme: string;
  currentSignups: number;
  threshold: number;
  status: 'proposed' | 'activated';
}

export function PopupCard({
  location,
  dates,
  theme,
  currentSignups: initialSignups,
  threshold,
  status,
}: PopupCardProps) {
  const [commitment, setCommitment] = useState<CommitmentLevel>(null);
  const [participantCount, setParticipantCount] = useState(initialSignups);
  const isActivated = status === 'activated' || participantCount >= threshold;

  const commitmentLevels: CommitmentType[] = [
    {
      id: 'watching',
      label: 'Watching',
      icon: Eye,
      description: 'Keep an eye on this popup',
      color: 'text-blue-500'
    },
    {
      id: 'planning',
      label: 'Planning',
      icon: Calendar,
      description: 'Actively planning to join',
      color: 'text-yellow-500'
    },
    {
      id: 'committed',
      label: 'Committed',
      icon: CheckCircle2,
      description: 'I will definitely go',
      color: 'text-green-500'
    },
    {
      id: 'verified',
      label: 'Verified',
      icon: BadgeCheck,
      description: 'Booking verified',
      color: 'text-purple-500'
    }
  ];

  const currentCommitment = commitment ? commitmentLevels.find(c => c.id === commitment) : null;

  return (
    <Card className="max-w-md">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <CardTitle className="font-medium">{location}</CardTitle>
          {isActivated && (
            <span className="ml-auto bg-black text-white text-xs px-2 py-1 rounded-full">
              Activated!
            </span>
          )}
        </div>
        <CardDescription className="space-y-1">
          <div className="text-sm">{dates}</div>
          <div className="font-medium text-foreground">{theme}</div>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>{participantCount} joined</span>
            <span>{threshold} minimum</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
              style={{ width: `${Math.min((participantCount / threshold) * 100, 100)}%` }}
            />
          </div>
        </div>

        {/* Commitment level display */}
        {currentCommitment && (
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
            {React.createElement(currentCommitment.icon, {
              className: `w-4 h-4 ${currentCommitment.color}`
            })}
            <span className="text-sm font-medium">
              {currentCommitment.label}
            </span>
          </div>
        )}

        {/* Join button / Commitment selector */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full" variant={commitment ? "outline" : "default"}>
              {commitment ? "Change Status" : "Join Popup"}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Choose your commitment level</DialogTitle>
              <DialogDescription>
                Select how you&apos;d like to participate in this popup
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {commitmentLevels.map((level) => (
                <button
                  key={level.id}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                    commitment === level.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setCommitment(level.id);
                    if (!commitment) setParticipantCount((prev) => prev + 1);
                  }}
                >
                  {React.createElement(level.icon, {
                    className: `w-5 h-5 ${level.color}`
                  })}
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{level.label}</span>
                    <span className="text-sm text-gray-600">{level.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>

      <CardFooter>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <AlertCircle className="w-4 h-4" />
          <span>Already in {location.split(',')[0]}? Let others know!</span>
        </div>
      </CardFooter>
    </Card>
  );
}