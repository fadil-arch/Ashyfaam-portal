"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { CheckCircle2, UploadCloud, Loader2, ArrowRight, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Types
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  age: number | string;
  qualification: string;
  trainingCourse: string;
  aiFluencyLink: string;
  handwrittenApp?: FileList;
  credentialsZip?: FileList;
}

interface Course {
  value: string;
  label: string;
}

// Constants
const RECIPIENT_EMAIL = "salihu.ismail1@icloud.com";

const TRAINING_COURSES: Course[] = [
  { value: "crop_production", label: "Crop Production" },
  { value: "poultry_farming", label: "Poultry Farming" },
  { value: "animal_husbandry", label: "Animal Husbandry" },
  { value: "fish_farming", label: "Fish Farming" },
];

const QUALIFICATIONS = [
  { value: "SSCE", label: "Senior Secondary School Certificate (SSCE)" },
  { value: "FCC", label: "Federal Craft Certificate (FCC)" },
  { value: "NTC", label: "National Technical Certificate (NTC)" },
] as const;

type Qualification = typeof QUALIFICATIONS[number]['value'];

export default function ApplicationForm(): React.ReactElement {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      qualification: "SSCE",
      trainingCourse: "",
      age: "",
    },
  });

  const watchAllFields = watch();

  const nextStep = async (): Promise<void> => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (step === 1) fieldsToValidate = ["fullName", "email", "phone", "age"];
    if (step === 2) fieldsToValidate = ["qualification", "trainingCourse", "aiFluencyLink"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep((prev) => prev + 1);
  };

  const prevStep = (): void => setStep((prev) => prev - 1);

  const buildMailBody = (data: FormData): string => {
    const courseLabel = TRAINING_COURSES.find((c) => c.value === data.trainingCourse)?.label || data.trainingCourse;

    return [
      "New ITF-NECA TSDP Application",
      "",
      `Full Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Age: ${data.age}`,
      `Qualification: ${data.qualification}`,
      `Training Course: ${courseLabel}`,
      `AI Fluency Certificate Link: ${data.aiFluencyLink}`,
      "",
      "Note: Handwritten application and credentials attachments must be sent",
      "separately, since this form cannot attach files to an email automatically.",
    ].join("\n");
  };

  const onSubmit = async (data: FormData): Promise<void> => {
    setIsSubmitting(true);

    // Compose a mailto link so the applicant's own mail client sends the message.
    // (Browsers cannot send email directly or attach files without a backend service.)
    const subject = encodeURIComponent(`TSDP Application - ${data.fullName}`);
    const body = encodeURIComponent(buildMailBody(data));
    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;

    // Small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-xl mx-auto">
        <Alert className="border-emerald-200 bg-emerald-50/50 p-6">
          <CheckCircle2 className="h-6 w-6 text-emerald-600" />
          <AlertTitle className="text-emerald-800 font-bold text-lg ml-2">
            Application Ready to Send!
          </AlertTitle>
          <AlertDescription className="text-emerald-700 mt-2 ml-2">
            Thank you for applying to the <strong>ITF-NECA TSDP</strong> program at Ashyfaam
            Agro-Vet Services. Your email client should have opened with your application
            details addressed to <strong>{RECIPIENT_EMAIL}</strong> — please attach your
            handwritten application and credential documents there and hit send. Only
            shortlisted candidates will be contacted for the interview at BSADP HQ, Bauchi.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto text-zinc-950 bg-white border border-zinc-200 shadow-xl rounded-xl p-6">
      <div className="space-y-1 mb-6">
        <div className="flex justify-between items-center text-xs text-zinc-400 font-mono tracking-wider mb-2">
          <span>STEP {step} OF 3</span>
          <span className="bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded-full font-sans font-medium">
            {step === 1 ? "Bio-Data" : step === 2 ? "Academic Pre-requisites" : "Documentation"}
          </span>
        </div>
        <h3 className="text-xl font-bold text-zinc-900">Trainee Application Intake</h3>
        <p className="text-sm text-zinc-500">
          Provide explicit credentials as requested on the official flyer layout.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4 py-2 min-h-[280px]">
          {/* STEP 1: BIO DATA */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  {...register("fullName", { required: "Full name is mandatory" })}
                />
                {errors.fullName && <p className="text-xs text-rose-600">{errors.fullName.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email", {
                      required: "Valid email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && <p className="text-xs text-rose-600">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+234..."
                    {...register("phone", { required: "Contact parameter is required" })}
                  />
                  {errors.phone && <p className="text-xs text-rose-600">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age (Must be 18 - 35)</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="24"
                  {...register("age", {
                    required: "Age bracket validation is mandatory",
                    min: { value: 18, message: "Minimum acceptable age is 18" },
                    max: { value: 35, message: "Maximum acceptable age is 35" },
                  })}
                />
                {errors.age && <p className="text-xs text-rose-600">{errors.age.message}</p>}
              </div>
            </div>
          )}

          {/* STEP 2: QUALIFICATIONS + TRAINING COURSE */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="space-y-2">
                <Label htmlFor="qualification">Primary Qualification Pool</Label>
                <Controller
                  name="qualification"
                  control={control}
                  rules={{ required: "Qualification selection is required" }}
                  render={({ field }) => (
                    <Select 
                      onValueChange={field.onChange} 
                      value={field.value}
                    >
                      <SelectTrigger className="w-full bg-white border-zinc-200 text-zinc-950">
                        <SelectValue placeholder="Select your primary qualification" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-zinc-200 text-zinc-950">
                        {QUALIFICATIONS.map((qual) => (
                          <SelectItem key={qual.value} value={qual.value}>
                            {qual.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.qualification && (
                  <p className="text-xs text-rose-600">{errors.qualification.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="trainingCourse">Training Course</Label>
                <Controller
                  name="trainingCourse"
                  control={control}
                  rules={{ required: "Please select a training course" }}
                  render={({ field }) => (
                    <Select 
                      onValueChange={field.onChange} 
                      value={field.value}
                    >
                      <SelectTrigger className="w-full bg-white border-zinc-200 text-zinc-950">
                        <SelectValue placeholder="Select your training course" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-zinc-200 text-zinc-950">
                        {TRAINING_COURSES.map((course) => (
                          <SelectItem key={course.value} value={course.value}>
                            {course.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.trainingCourse && (
                  <p className="text-xs text-rose-600">{errors.trainingCourse.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="aiFluencyLink">IOE-NECA AI Fluency Certificate Link</Label>
                <Input
                  id="aiFluencyLink"
                  placeholder="https://bit.ly/IOE-NECA-AI-FLUENCY or verified cert link"
                  {...register("aiFluencyLink", {
                    required: "IOE completion linkage verification is mandatory",
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: "Please enter a valid URL starting with http:// or https://",
                    },
                  })}
                />
                {errors.aiFluencyLink && (
                  <p className="text-xs text-rose-600">{errors.aiFluencyLink.message}</p>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: FILE UPLOADS */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="space-y-2">
                <Label>Handwritten Application Envelope (Image / PDF)</Label>
                <div className="border-2 border-dashed border-zinc-200 rounded-lg p-4 text-center cursor-pointer hover:bg-zinc-50 transition-colors relative">
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    {...register("handwrittenApp", {
                      required: "Please attach your scanned handwritten application statement",
                    })}
                  />
                  <UploadCloud className="h-8 w-8 text-zinc-400 mx-auto mb-2" />
                  <span className="text-xs font-medium block text-zinc-600">
                    {watchAllFields.handwrittenApp?.[0]
                      ? watchAllFields.handwrittenApp[0].name
                      : "Select Application File"}
                  </span>
                </div>
                {errors.handwrittenApp && (
                  <p className="text-xs text-rose-600">{errors.handwrittenApp.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Photocopies of Credentials (ZIP/PDF Portfolio)</Label>
                <div className="border-2 border-dashed border-zinc-200 rounded-lg p-4 text-center cursor-pointer hover:bg-zinc-50 transition-colors relative">
                  <input
                    type="file"
                    accept=".zip,.pdf"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    {...register("credentialsZip", {
                      required: "Please append verification credentials file portfolio",
                    })}
                  />
                  <UploadCloud className="h-8 w-8 text-zinc-400 mx-auto mb-2" />
                  <span className="text-xs font-medium block text-zinc-600">
                    {watchAllFields.credentialsZip?.[0]
                      ? watchAllFields.credentialsZip[0].name
                      : "Select Credentials Archive"}
                  </span>
                </div>
                {errors.credentialsZip && (
                  <p className="text-xs text-rose-600">{errors.credentialsZip.message}</p>
                )}
              </div>

              <p className="text-xs text-zinc-400 flex items-start gap-1.5 pt-1">
                <Mail className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                Submitting will open your email app with the application details pre-filled to{" "}
                {RECIPIENT_EMAIL}. Please attach the two files above before sending, since a
                browser form can&apos;t attach files to an email on its own.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between border-t border-zinc-100 pt-6 mt-2">
          {step > 1 ? (
            <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <Button
              type="button"
              className="bg-emerald-700 hover:bg-emerald-800 text-white"
              onClick={nextStep}
            >
              Next Step <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-emerald-700 hover:bg-emerald-800 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" /> Preparing Email...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}