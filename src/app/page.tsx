import Link from "next/link";
import {
  CheckCircle2,
  Award,
  ShieldCheck,
  GraduationCap,
  MapPin,
  Phone,
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  BookOpen,
  Mail,
  ExternalLink,
  Building2,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ApplicationModal from "@/components/ApplicationModal";

export default function Home() {
  const features = [
    {
      icon: Award,
      title: "Advanced Animal Health",
      description: "Comprehensive training in animal treatment and care",
    },
    {
      icon: Target,
      title: "Precision Agriculture",
      description: "Modern farming techniques and crop management",
    },
    {
      icon: Trophy,
      title: "Industry Certification",
      description: "Recognized credentials for career advancement",
    },
  ];

  const requirements = [
    {
      icon: ShieldCheck,
      title: "Age Bracket & Identity",
      description: "Applicants must be between the ages of 18 and 35 years.",
      gradient: "from-emerald-50 to-teal-50",
      border: "border-emerald-200/50",
    },
    {
      icon: GraduationCap,
      title: "Academic Prerequisites",
      description: "Required to possess any one of the following qualifications:",
      items: [
        "Senior Secondary School Certificate",
        "Federal Craft Certificate",
        "National Technical Certificate in any relevant trade area",
      ],
      gradient: "from-blue-50 to-cyan-50",
      border: "border-blue-200/50",
    },
    {
      icon: CheckCircle2,
      title: "Mandatory Prerequisite Course",
      description:
        "Must have completed the AI Fluency Course on the International Organisation of Employers (IOE) Learning Platform.",
      link: {
        href: "https://bit.ly/IOE-NECA-AI-FLUENCY",
        text: "Complete AI Fluency Course",
      },
      gradient: "from-purple-50 to-pink-50",
      border: "border-purple-200/50",
    },
  ];

  const courseHighlights = [
    "Advanced Animal Health & Treatment",
    "Precision Agriculture & Crop Health",
    "Agro-Nutrition & Soil Management",
    "Industry-Relevant Agro-Vet Technical Skills",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-emerald-50/30 font-sans antialiased">
      {/* Header / Nav - Enhanced Glassmorphism */}
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white font-bold shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 hover:shadow-emerald-600/40">
              AA
              <div className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold tracking-tight text-zinc-900 text-sm sm:text-base">
                Ashyfaam <span className="text-emerald-700">Agro-Vet</span>
              </span>
              <span className="hidden sm:block text-[10px] font-medium text-zinc-500 tracking-wider uppercase">
                ITF-NECA Training Partner
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-2 sm:gap-6">
            <Link
              href="#about"
              className="hidden sm:inline-flex items-center text-sm font-medium text-zinc-600 hover:text-emerald-700 transition-all hover:scale-105"
            >
              About
            </Link>
            <Link
              href="#requirements"
              className="hidden sm:inline-flex items-center text-sm font-medium text-zinc-600 hover:text-emerald-700 transition-all hover:scale-105"
            >
              Requirements
            </Link>
            <Link
              href="#apply"
              className="group inline-flex h-9 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-600/25 transition-all hover:scale-105 hover:shadow-emerald-600/40 active:scale-95"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
        {/* Background Decor - Improved */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-teal-300/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
              <Badge className="self-center lg:self-start w-fit gap-2 bg-emerald-100/80 text-emerald-800 hover:bg-emerald-100/80 border-emerald-600/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold">
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                100% Free Training Project • ITF-NECA
              </Badge>

              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Technical Skills{" "}
                <br className="hidden sm:inline" />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                    Development Project
                  </span>
                  <Sparkles className="absolute -top-6 -right-8 h-5 w-5 text-emerald-400 animate-pulse" />
                </span>
              </h1>

              <p className="mx-auto lg:mx-0 max-w-xl text-base text-zinc-600 sm:text-lg leading-relaxed">
                In collaboration with{" "}
                <strong className="text-emerald-800">
                  Ashyfaam Agro Vet Services, Bauchi
                </strong>
                , we are training young Nigerians on advanced agricultural
                technical skills, animal health, and crop management.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  href="#apply"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 hover:shadow-emerald-600/40 active:scale-95"
                >
                  Start Application
                  <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
                </Link>
                <Link
                  href="#requirements"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-200 bg-white/70 px-8 text-sm font-semibold text-zinc-700 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:shadow-md active:scale-95"
                >
                  View Requirements
                </Link>
              </div>

              {/* Trust Indicators - Enhanced */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <div className="rounded-lg bg-emerald-100 p-1.5">
                    <Clock className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="font-medium">4 Months Program</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <div className="rounded-lg bg-emerald-100 p-1.5">
                    <Users className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="font-medium">Limited Slots</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <div className="rounded-lg bg-emerald-100 p-1.5">
                    <BookOpen className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="font-medium">Hands-on Training</span>
                </div>
              </div>
            </div>

            {/* Visual Card - Enhanced */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-10 blur-2xl animate-pulse" />
              <div className="relative rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl p-8 shadow-2xl transition-all hover:shadow-emerald-600/20">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-2.5 shadow-lg shadow-emerald-600/20">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      Course Highlights
                    </h3>
                    <p className="text-xs text-zinc-500">4-Month Intensive Program</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {courseHighlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="group flex items-start gap-3 rounded-lg p-2 text-sm text-zinc-600 transition-all hover:bg-emerald-50/50 hover:text-zinc-900"
                    >
                      <div className="mt-0.5 rounded-full bg-emerald-100 p-0.5 transition-colors group-hover:bg-emerald-200">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 p-3 text-center text-xs text-emerald-700 ring-1 ring-emerald-600/10">
                  <Zap className="inline-block h-3.5 w-3.5 mr-1.5" />
                  <span className="font-semibold">Limited Slots Available</span>{" "}
                  — Apply Early!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - New */}
      <section className="py-16 bg-white/50 backdrop-blur-sm border-y border-zinc-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group text-center p-6 rounded-2xl transition-all hover:bg-white hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-600 transition-all group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-600/20">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Requirements - Enhanced Cards */}
      <section
        id="requirements"
        className="py-20 sm:py-28 bg-gradient-to-b from-white to-zinc-50/80"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 gap-2 bg-emerald-100/80 text-emerald-800 hover:bg-emerald-100/80 border-emerald-600/20">
              <ShieldCheck className="h-3.5 w-3.5" />
              Eligibility Criteria
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Admission Requirements
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Please review the entry prerequisites carefully before initiating
              your digital application.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl grid gap-6">
            {requirements.map((item, idx) => (
              <div
                key={idx}
                className={`group rounded-2xl border ${item.border} bg-gradient-to-br ${item.gradient} p-6 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-xl sm:p-8`}
              >
                <div className="flex gap-5">
                  <div className="shrink-0">
                    <div className="rounded-xl bg-white/70 p-3 shadow-sm transition-all group-hover:shadow-md">
                      <item.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {item.description}
                    </p>
                    {item.items && (
                      <ul className="mt-2 space-y-1.5">
                        {item.items.map((listItem, listIdx) => (
                          <li
                            key={listIdx}
                            className="flex items-center gap-2 text-sm text-zinc-600"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.link && (
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-emerald-700 transition-all hover:gap-3 hover:text-emerald-800"
                      >
                        {item.link.text}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Method - Enhanced Dark Section */}
      <section
        id="apply"
        className="py-20 sm:py-28 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Header Container */}
            <div className="text-center mb-12">
              <Badge className="mb-4 gap-2 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/10 border-emerald-500/20">
                <Mail className="h-3.5 w-3.5" />
                Apply Now
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Method of Application
              </h2>
              <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Interested and eligible candidates have two methods of
                submission. Ensure all credentials are ready before the deadline
                on{" "}
                <strong className="text-emerald-400">19 June, 2026</strong>.
              </p>
            </div>

            {/* Embedded Client-Side Form Wrapper */}
            {/* <div className="max-w-xl mx-auto mb-16">
              <ApplicationForm />
            </div> */}

            {/* Information Cards Powered by shadcn/ui */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Card 01: Online Submission */}
              <Card className="border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/10 text-white shadow-xl">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 font-bold text-white shadow-lg shadow-emerald-600/25">
                    01
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    Online Submission
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Digital application process
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Submit a handwritten application along with high-resolution
                    scanned photocopies of your credentials directly to our
                    official portal.
                  </p>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-xs tracking-wider text-emerald-400 uppercase font-mono block">
                      Portal URL
                    </span>
                    <span className="text-sm font-semibold text-white flex items-center gap-2">
                      ashyfaamagrovetservices.org.ng
                      <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 02: Physical Drop-off */}
              <Card className="border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/10 text-white shadow-xl">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 font-bold text-white shadow-lg shadow-emerald-600/25">
                    02
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    Physical Drop-off
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    In-person submission
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Package your handwritten application and photocopies of your
                    credentials in a sealed envelope and deliver directly to
                    headquarters.
                  </p>
                  <div className="pt-6 border-t border-white/5 space-y-3">
                    <div className="flex items-start gap-3 text-sm text-zinc-400">
                      <div className="rounded-lg bg-emerald-500/10 p-1.5">
                        <MapPin className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span className="leading-relaxed">
                        Ashyfaam Agro Vet Services
                        <br />
                        <span className="text-zinc-300">BSADP HQ, Bauchi</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-400">
                      <div className="rounded-lg bg-emerald-500/10 p-1.5">
                        <Phone className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span>+234 903 564 6765</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Deadline Banner */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 rounded-xl bg-emerald-500/10 px-6 py-3 ring-1 ring-emerald-500/20">
                <Clock className="h-5 w-5 text-emerald-400" />
                <span className="text-sm text-zinc-300">
                  Application Deadline:{" "}
                  <span className="font-semibold text-emerald-400">
                    19 June, 2026
                  </span>
                </span>
              </div>
            </div>
            <div className="max-w-xl mt-10 mx-auto mb-10 flex justify-center">
              <ApplicationModal />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="border-t border-zinc-200/50 bg-white/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 text-white font-bold text-xs">
              AA
            </div>
            <p className="text-sm text-zinc-600">
              &copy; 2026 Ashyfaam Agro Vet Services.
              <span className="hidden sm:inline"> All Rights Reserved.</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-700">
              <div className="rounded-lg bg-emerald-100 p-1.5">
                <Phone className="h-3.5 w-3.5 text-emerald-600" />
              </div>
              <span>+234 903 564 6765</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-zinc-300" />
            <Link
              href="#"
              className="text-sm text-zinc-600 hover:text-emerald-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-600 hover:text-emerald-700 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}