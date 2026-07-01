"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ApplicationForm from "./ApplicationForm";
import { ArrowRight } from "lucide-react";

export default function ApplicationModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium shadow-md transition-all px-6 h-11">
          Start Application <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white p-0 rounded-xl border-zinc-200">
        <div className="p-6">
          <ApplicationForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}