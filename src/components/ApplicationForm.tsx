"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { CheckCircle2, UploadCloud, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormInputs = {
  fullName: string;
  email: string;
  phone: string;
  age: number;
  qualification: string;
  aiFluencyLink: string;
  handwrittenApp: FileList;
  credentialsZip: FileList;
};

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      qualification: "SSCE",
    },
  });

  const watchAllFields = watch();

  const nextStep = async () => {
    let fieldsToValidate: Array<keyof FormInputs> = [];
    if (step === 1) fieldsToValidate = ["fullName", "email", "phone", "age"];
    if (step === 2) fieldsToValidate = ["qualification", "aiFluencyLink"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data: FormInputs) => {
    setIsSubmitting(true);
    // Simulate API Payload dispatch
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <Alert className="max-w-xl mx-auto border-emerald-200 bg-emerald-50/50 p-6">
        <CheckCircle2 className="h-6 w-6 text-emerald-600" />
        <AlertTitle className="text-emerald-800 font-bold text-lg ml-2">Application Transmitted!</AlertTitle>
        <AlertDescription className="text-emerald-700 mt-2 ml-2">
          Thank you for applying to the <strong>ITF-NECA TSDP</strong> program at Ashyfaam Agro-Vet Services. Your tracking file hash has been pinned. Only shortlisted candidates will be contacted for the interview at BSADP HQ, Bauchi.
        </AlertDescription>
      </Alert>
    );
  }

//   return (
    // <Card className="w-full max-w-xl mx-auto border-zinc-200 shadow-xl bg-white text-zinc-950">
    //   <CardHeader className="space-y-1">
    //     <div className="flex justify-between items-center text-xs text-zinc-400 font-mono tracking-wider mb-2">
    //       <span>STEP {step} OF 3</span>
    //       <span className="bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded-full font-sans font-medium">
    //         {step === 1 ? "Bio-Data" : step === 2 ? "Academic Pre-requisites" : "Documentation"}
    //       </span>
    //     </div>
    //     <CardTitle className="text-xl font-bold text-zinc-900">Trainee Application Intake</CardTitle>
    //     <CardDescription>Provide explicit credentials as requested on the official flyer layout.</CardDescription>
    //   </CardHeader>

    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <CardContent className="space-y-4">
    //       {/* STEP 1: BIO DATA */}
    //       {step === 1 && (
    //         <div className="space-y-4 animate-in fade-in duration-200">
    //           <div className="space-y-2">
    //             <Label htmlFor="fullName">Full Name</Label>
    //             <Input
    //               id="fullName"
    //               placeholder="John Doe"
    //               {...register("fullName", { required: "Full name is mandatory" })}
    //             />
    //             {errors.fullName && <p className="text-xs text-rose-600">{errors.fullName.message}</p>}
    //           </div>

    //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //             <div className="space-y-2">
    //               <Label htmlFor="email">Email Address</Label>
    //               <Input
    //                 id="email"
    //                 type="email"
    //                 placeholder="john@example.com"
    //                 {...register("email", { required: "Valid email is required" })}
    //               />
    //               {errors.email && <p className="text-xs text-rose-600">{errors.email.message}</p>}
    //             </div>
    //             <div className="space-y-2">
    //               <Label htmlFor="phone">Phone Number</Label>
    //               <Input
    //                 id="phone"
    //                 placeholder="+234..."
    //                 {...register("phone", { required: "Contact parameter is required" })}
    //               />
    //               {errors.phone && <p className="text-xs text-rose-600">{errors.phone.message}</p>}
    //             </div>
    //           </div>

    //           <div className="space-y-2">
    //             <Label htmlFor="age">Age (Must be 18 - 35)</Label>
    //             <Input
    //               id="age"
    //               type="number"
    //               placeholder="24"
    //               {...register("age", {
    //                 required: "Age bracket validation is mandatory",
    //                 min: { value: 18, message: "Minimum acceptable age is 18" },
    //                 max: { value: 35, message: "Maximum acceptable age is 35" },
    //               })}
    //             />
    //             {errors.age && <p className="text-xs text-rose-600">{errors.age.message}</p>}
    //           </div>
    //         </div>
    //       )}

    //       {/* STEP 2: QUALIFICATIONS */}
    //       {step === 2 && (
    //         <div className="space-y-4 animate-in fade-in duration-200">
    //           <div className="space-y-2">
    //             <Label htmlFor="qualification">Primary Qualification Pool</Label>
    //             <Controller
    //               name="qualification"
    //               control={control}
    //               rules={{ required: "Qualification selection is required" }}
    //               render={({ field }) => (
    //                 <Select onValueChange={field.onChange} defaultValue={field.value}>
    //                   <SelectTrigger className="w-full bg-white border-zinc-200 text-zinc-950">
    //                     <SelectValue placeholder="Select your primary qualification" />
    //                   </SelectTrigger>
    //                   <SelectContent className="bg-white border-zinc-200 text-zinc-950">
    //                     <SelectItem value="SSCE">Senior Secondary School Certificate (SSCE)</SelectItem>
    //                     <SelectItem value="FCC">Federal Craft Certificate (FCC)</SelectItem>
    //                     <SelectItem value="NTC">National Technical Certificate (NTC)</SelectItem>
    //                   </SelectContent>
    //                 </Select>
    //               )}
    //             />
    //             {errors.qualification && <p className="text-xs text-rose-600">{errors.qualification.message}</p>}
    //           </div>

    //           <div className="space-y-2">
    //             <Label htmlFor="aiFluencyLink">IOE-NECA AI Fluency Certificate Link</Label>
    //             <Input
    //               id="aiFluencyLink"
    //               placeholder="https://bit.ly/IOE-NECA-AI-FLUENCY or verified cert link"
    //               {...register("aiFluencyLink", { required: "IOE completion linkage verification is mandatory" })}
    //             />
    //             {errors.aiFluencyLink && <p className="text-xs text-rose-600">{errors.aiFluencyLink.message}</p>}
    //           </div>
    //         </div>
    //       )}

    //       {/* STEP 3: FILE UPLOADS */}
    //       {step === 3 && (
    //         <div className="space-y-4 animate-in fade-in duration-200">
    //           <div className="space-y-2">
    //             <Label>Handwritten Application Envelope (Image / PDF)</Label>
    //             <div className="border-2 border-dashed border-zinc-200 rounded-lg p-4 text-center cursor-pointer hover:bg-zinc-50 transition-colors relative">
    //               <input
    //                 type="file"
    //                 accept="image/*,application/pdf"
    //                 className="absolute inset-0 opacity-0 cursor-pointer"
    //                 {...register("handwrittenApp", { required: "Please attach your scanned handwritten application statement" })}
    //               />
    //               <UploadCloud className="h-8 w-8 text-zinc-400 mx-auto mb-2" />
    //               <span className="text-xs font-medium block text-zinc-600">
    //                 {watchAllFields.handwrittenApp?.[0] ? watchAllFields.handwrittenApp[0].name : "Select Application File"}
    //               </span>
    //             </div>
    //             {errors.handwrittenApp && <p className="text-xs text-rose-600">{errors.handwrittenApp.message}</p>}
    //           </div>

    //           <div className="space-y-2">
    //             <Label>Photocopies of Credentials (ZIP/PDF Portfolio)</Label>
    //             <div className="border-2 border-dashed border-zinc-200 rounded-lg p-4 text-center cursor-pointer hover:bg-zinc-50 transition-colors relative">
    //               <input
    //                 type="file"
    //                 accept=".zip,.pdf"
    //                 className="absolute inset-0 opacity-0 cursor-pointer"
    //                 {...register("credentialsZip", { required: "Please append verification credentials file portfolio" })}
    //               />
    //               <UploadCloud className="h-8 w-8 text-zinc-400 mx-auto mb-2" />
    //               <span className="text-xs font-medium block text-zinc-600">
    //                 {watchAllFields.credentialsZip?.[0] ? watchAllFields.credentialsZip[0].name : "Select Credentials Archive"}
    //               </span>
    //             </div>
    //             {errors.credentialsZip && <p className="text-xs text-rose-600">{errors.credentialsZip.message}</p>}
    //           </div>
    //         </div>
    //       )}
    //     </CardContent>

    //     <CardFooter className="flex justify-between border-t border-zinc-100 pt-4">
    //       {step > 1 ? (
    //         <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting}>
    //           <ArrowLeft className="h-4 w-4 mr-2" /> Back
    //         </Button>
    //       ) : (
    //         <div />
    //       )}

    //       {step < 3 ? (
    //         <Button type="button" className="bg-emerald-700 hover:bg-emerald-800 text-white" onClick={nextStep}>
    //           Next Step <ArrowRight className="h-4 w-4 ml-2" />
    //         </Button>
    //       ) : (
    //         <Button type="submit" className="bg-emerald-700 hover:bg-emerald-800 text-white" disabled={isSubmitting}>
    //           {isSubmitting ? (
    //             <>
    //               <Loader2 className="h-4 w-4 animate-spin mr-2" /> Submitting Payload...
    //             </>
    //           ) : (
    //             "Submit Application"
    //           )}
    //         </Button>
    //       )}
    //     </CardFooter>
    //   </form>
    // </Card>
//   );
    return (
    <div className="w-full mx-auto text-zinc-950">
        <div className="space-y-1 mb-6">
        <div className="flex justify-between items-center text-xs text-zinc-400 font-mono tracking-wider mb-2">
            <span>STEP {step} OF 3</span>
            <span className="bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded-full font-sans font-medium">
            {step === 1 ? "Bio-Data" : step === 2 ? "Academic Pre-requisites" : "Documentation"}
            </span>
        </div>
        <h3 className="text-xl font-bold text-zinc-900">Trainee Application Intake</h3>
        <p className="text-sm text-zinc-500">Provide explicit credentials as requested on the official flyer layout.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4 py-2">
            {/* ... (Keep all your existing steps/inputs completely unchanged here) ... */}
        </div>

        {/* Replace CardFooter with a plain styled row wrapper */}
        <div className="flex justify-between border-t border-zinc-100 pt-6 mt-6">
            {/* ... (Keep your action buttons exactly the same) ... */}
        </div>
        </form>
    </div>
    );
}