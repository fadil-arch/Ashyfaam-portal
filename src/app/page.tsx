"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import {
  CheckCircle2,
  ShieldCheck,
  GraduationCap,
  MapPin,
  Phone,
  ArrowRight,
  Clock,
  Users,
  Mail,
  ExternalLink,
  ScrollText,
  Stamp,
  Sprout,
  Stethoscope,
  Award,
  ClipboardList,
  BookOpen,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ApplicationModal from "@/components/ApplicationModal";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

/** Reveals an element with a rise + fade once it enters the viewport. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const features = [
    {
      icon: Stethoscope,
      title: "Advanced Animal Health",
      description: "Diagnosis, treatment and preventative care for livestock.",
      tilt: "-rotate-1",
    },
    {
      icon: Sprout,
      title: "Precision Agriculture",
      description: "Modern crop management and soil-first farming methods.",
      tilt: "rotate-1",
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "A credential employers in the sector actually recognise.",
      tilt: "-rotate-1",
    },
  ];

  const requirements = [
    {
      icon: ShieldCheck,
      code: "REQ.01",
      title: "Age Bracket & Identity",
      description: "Applicants must be between the ages of 18 and 35 years.",
    },
    {
      icon: GraduationCap,
      code: "REQ.02",
      title: "Academic Prerequisites",
      description: "Required to possess any one of the following qualifications:",
      items: [
        "Senior Secondary School Certificate",
        "Federal Craft Certificate",
        "National Technical Certificate in any relevant trade area",
      ],
    },
    {
      icon: ScrollText,
      code: "REQ.03",
      title: "Mandatory Prerequisite Course",
      description:
        "Must have completed the AI Fluency Course on the International Organisation of Employers (IOE) Learning Platform.",
      link: {
        href: "https://bit.ly/IOE-NECA-AI-FLUENCY",
        text: "Complete AI Fluency Course",
      },
    },
  ];

  const journey = [
    { icon: ClipboardList, label: "Enrol", note: "Submit your application" },
    { icon: BookOpen, label: "Learn", note: "Classroom & field theory" },
    { icon: Sprout, label: "Practice", note: "Hands-on farm & clinic work" },
    { icon: Award, label: "Certify", note: "Sit for assessment" },
  ];

  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen bg-[#F6F1E4] antialiased`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <style jsx global>{`
        .font-display {
          font-family: var(--font-display), serif;
        }
        .font-mono-label {
          font-family: var(--font-mono), monospace;
        }

        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-in {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes spin-slow {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 14s linear infinite;
        }

        @keyframes drift {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-24px);
          }
        }
        .animate-drift {
          animation: drift 16s ease-in-out infinite;
        }

        @keyframes sprout-pop {
          0% {
            transform: scale(0.4);
            opacity: 0;
          }
          70% {
            transform: scale(1.15);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }
        .sprout-pop {
          animation: sprout-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        @keyframes seal-in {
          0% {
            transform: scale(0.85) rotate(-8deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        .seal-in {
          animation: seal-in 0.8s ease-out 0.15s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .animate-spin-slow,
          .animate-drift,
          .sprout-pop,
          .seal-in {
            animation: none !important;
          }
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#221A10]/10 bg-[#F6F1E4]/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2A2015] text-[#F6F1E4]">
              <Sprout className="h-5 w-5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[15px] font-bold tracking-tight text-[#221A10] sm:text-base">
                Ashyfaam <span className="italic text-[#5C7A40]">Agro-Vet</span>
              </span>
              <span className="font-mono-label hidden text-[10px] tracking-[0.15em] text-[#6B5D45] sm:block">
                ITF · NECA TRAINING PARTNER
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-2 sm:gap-6">
            <Link
              href="#requirements"
              className="hidden text-sm font-medium text-[#4A3A24] transition-colors hover:text-[#5C7A40] sm:inline-flex"
            >
              Requirements
            </Link>
            <Link
              href="#apply"
              className="hidden text-sm font-medium text-[#4A3A24] transition-colors hover:text-[#5C7A40] sm:inline-flex"
            >
              How to apply
            </Link>
            <Link
              href="#apply"
              className="group inline-flex h-9 items-center justify-center gap-2 rounded-full bg-[#5C7A40] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-[#5C7A40]/25 transition-transform hover:scale-105 active:scale-95"
            >
              Apply now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2A2015] py-20 text-[#F6F1E4] sm:py-28">
        {/* Contour-line texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <svg
            className="animate-drift h-full w-[130%]"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            fill="none"
          >
            <path d="M-50 120 C 200 40, 400 200, 650 100 S 1100 60, 1300 140" stroke="#C9BC9A" strokeWidth="1.5" />
            <path d="M-50 220 C 250 140, 420 300, 700 220 S 1050 180, 1300 260" stroke="#C9BC9A" strokeWidth="1.5" />
            <path d="M-50 320 C 220 260, 460 400, 720 320 S 1080 280, 1300 360" stroke="#C9BC9A" strokeWidth="1.5" />
            <path d="M-50 420 C 260 360, 440 500, 730 420 S 1090 380, 1300 460" stroke="#C9BC9A" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <span className="font-mono-label inline-flex items-center gap-2 rounded-full border border-[#7C9A5C]/40 px-4 py-1.5 text-[11px] tracking-[0.15em] text-[#C7D6B5]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7C9A5C]" />
                  100% FREE PROGRAM · APPLICATIONS OPEN
                </span>
              </div>

              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Technical skills, grown from
                <br className="hidden sm:inline" />{" "}
                <span className="italic text-[#9DB97F]">the ground up.</span>
              </h1>

              <p className="mx-auto max-w-xl text-base leading-relaxed text-[#D8CFB9] sm:text-lg lg:mx-0">
                In partnership with{" "}
                <strong className="font-semibold text-[#F6F1E4]">
                  Ashyfaam Agro-Vet Services, Bauchi
                </strong>
                , we're training young Nigerians in animal health, precision
                agriculture and hands-on farm technical skills — four months,
                fully free.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="#apply"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#7C9A5C] px-8 text-sm font-semibold text-[#1B1608] shadow-lg shadow-[#7C9A5C]/25 transition-transform hover:scale-105 active:scale-95"
                >
                  Start your application
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#requirements"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#F6F1E4]/25 px-8 text-sm font-semibold text-[#F6F1E4] transition-colors hover:bg-[#F6F1E4]/10"
                >
                  Check eligibility
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 pt-2 lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-[#C7BFA9]">
                  <Clock className="h-4 w-4 text-[#7C9A5C]" />
                  <span>4-month program</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#C7BFA9]">
                  <Users className="h-4 w-4 text-[#7C9A5C]" />
                  <span>Limited slots</span>
                </div>
              </div>
            </div>

            {/* Signature: stamp + growth ledger */}
            <div className="relative mx-auto flex w-full max-w-md flex-col items-center gap-10 lg:items-end">
              <div className="seal-in relative h-32 w-32 shrink-0">
                <div className="animate-spin-slow absolute inset-0 rounded-full border-2 border-dashed border-[#7C9A5C]/50" />
                <div className="absolute inset-3 flex flex-col items-center justify-center rounded-full bg-[#3A2E1D] text-center">
                  <Stamp className="h-6 w-6 text-[#9DB97F]" />
                  <span className="font-mono-label mt-1 text-[9px] tracking-[0.1em] text-[#D8CFB9]">
                    CERTIFIED
                  </span>
                </div>
              </div>

              <div className="w-full rounded-2xl border border-[#F6F1E4]/10 bg-[#3A2E1D]/60 p-6 backdrop-blur-sm">
                <span className="font-mono-label text-[11px] tracking-[0.15em] text-[#9DB97F]">
                  THE FOUR-MONTH JOURNEY
                </span>
                <div className="mt-5 space-y-5">
                  {journey.map((step, idx) => (
                    <div key={step.label} className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7C9A5C]/15 text-[#9DB97F]">
                          <step.icon className="h-4 w-4" />
                        </div>
                        {idx < journey.length - 1 && (
                          <span className="mt-1 h-6 w-px bg-[#F6F1E4]/15" />
                        )}
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold text-[#F6F1E4]">
                          {step.label}
                        </p>
                        <p className="text-xs text-[#B9AF96]">{step.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field notes / features */}
      <section className="border-b border-[#221A10]/10 bg-[#F6F1E4] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature, idx) => (
              <Reveal key={feature.title} delay={idx * 120}>
                <div
                  className={`h-full rounded-2xl border border-[#221A10]/10 bg-white/60 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md ${feature.tilt}`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#7C9A5C]/15 text-[#5C7A40]">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#221A10]">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5A4E3A]">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements — ledger */}
      <section id="requirements" className="bg-[#F6F1E4] py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono-label text-xs tracking-[0.2em] text-[#5C7A40]">
              ELIGIBILITY LEDGER
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#221A10] sm:text-4xl">
              Admission requirements
            </h2>
            <p className="mt-4 leading-relaxed text-[#5A4E3A]">
              Review each entry carefully before you begin your application.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl divide-y divide-[#221A10]/10 rounded-2xl border border-[#221A10]/10 bg-white/50">
            {requirements.map((item, idx) => (
              <Reveal key={item.code} delay={idx * 100}>
                <div className="flex gap-5 p-6 sm:p-8">
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2A2015] text-[#9DB97F]">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <span className="font-mono-label text-[11px] tracking-[0.15em] text-[#8A7B5C]">
                      {item.code}
                    </span>
                    <h4 className="font-display text-lg font-semibold text-[#221A10]">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-[#5A4E3A]">
                      {item.description}
                    </p>
                    {item.items && (
                      <ul className="mt-2 space-y-1.5">
                        {item.items.map((li) => (
                          <li key={li} className="flex items-center gap-2 text-sm text-[#5A4E3A]">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#7C9A5C]" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.link && (
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-[#5C7A40] transition-all hover:gap-2.5"
                      >
                        {item.link.text}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="bg-[#2A2015] py-20 text-[#F6F1E4] sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Reveal className="mb-12 text-center">
              <span className="font-mono-label inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#9DB97F]">
                <Mail className="h-3.5 w-3.5" />
                METHOD OF APPLICATION
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Two ways to submit
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#C7BFA9] sm:text-base">
                Have your credentials ready before the deadline on{" "}
                <strong className="text-[#9DB97F]">19 June, 2026</strong>.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Reveal delay={0}>
                <Card className="h-full border-dashed border-[#F6F1E4]/20 bg-[#3A2E1D]/50 text-[#F6F1E4] shadow-none">
                  <CardHeader>
                    <span className="font-mono-label text-[11px] tracking-[0.15em] text-[#9DB97F]">
                      PERMIT 01
                    </span>
                    <CardTitle className="font-display text-xl font-semibold text-[#F6F1E4]">
                      Online submission
                    </CardTitle>
                    <CardDescription className="text-[#B9AF96]">
                      Digital application process
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm leading-relaxed text-[#C7BFA9]">
                      Submit a handwritten application with high-resolution
                      scanned copies of your credentials through our official
                      portal.
                    </p>
                    <div className="border-t border-[#F6F1E4]/10 pt-5">
                      <span className="font-mono-label block text-[11px] tracking-[0.15em] text-[#9DB97F]">
                        PORTAL URL
                      </span>
                      <span className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#F6F1E4]">
                        ashyfaamagrovetservices.org.ng
                        <ExternalLink className="h-3.5 w-3.5 text-[#9DB97F]" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={140}>
                <Card className="h-full border-dashed border-[#F6F1E4]/20 bg-[#3A2E1D]/50 text-[#F6F1E4] shadow-none">
                  <CardHeader>
                    <span className="font-mono-label text-[11px] tracking-[0.15em] text-[#9DB97F]">
                      PERMIT 02
                    </span>
                    <CardTitle className="font-display text-xl font-semibold text-[#F6F1E4]">
                      Physical drop-off
                    </CardTitle>
                    <CardDescription className="text-[#B9AF96]">
                      In-person submission
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm leading-relaxed text-[#C7BFA9]">
                      Package your handwritten application and credential
                      copies in a sealed envelope and deliver to headquarters.
                    </p>
                    <div className="space-y-3 border-t border-[#F6F1E4]/10 pt-5">
                      <div className="flex items-start gap-3 text-sm text-[#C7BFA9]">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#9DB97F]" />
                        <span className="leading-relaxed">
                          Ashyfaam Agro Vet Services
                          <br />
                          <span className="text-[#F6F1E4]">BSADP HQ, Bauchi</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-[#C7BFA9]">
                        <Phone className="h-4 w-4 text-[#9DB97F]" />
                        <span>+234 903 564 6765</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </div>

            <Reveal className="mt-8 text-center" delay={200}>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#9DB97F]/25 bg-[#9DB97F]/10 px-6 py-3">
                <Clock className="h-4 w-4 text-[#9DB97F]" />
                <span className="text-sm text-[#D8CFB9]">
                  Application deadline:{" "}
                  <span className="font-semibold text-[#9DB97F]">19 June, 2026</span>
                </span>
              </div>
            </Reveal>

            <div className="mx-auto mt-10 flex max-w-xl justify-center">
              <ApplicationModal />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#221A10]/10 bg-[#F6F1E4] py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2A2015] text-[#F6F1E4]">
              <Sprout className="h-3.5 w-3.5" />
            </div>
            <p className="text-sm text-[#5A4E3A]">
              &copy; 2026 Ashyfaam Agro Vet Services.
              <span className="hidden sm:inline"> All rights reserved.</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-[#221A10]">
              <Phone className="h-3.5 w-3.5 text-[#5C7A40]" />
              <span>+234 903 564 6765</span>
            </div>
            <div className="hidden h-4 w-px bg-[#221A10]/15 sm:block" />
            <Link href="#" className="text-sm text-[#5A4E3A] transition-colors hover:text-[#5C7A40]">
              Privacy policy
            </Link>
            <Link href="#" className="text-sm text-[#5A4E3A] transition-colors hover:text-[#5C7A40]">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}