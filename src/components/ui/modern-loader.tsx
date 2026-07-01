import React from "react";
import { Loader2, Sparkles, Zap, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModernLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  variant?: "default" | "minimal" | "fullscreen" | "inline";
  size?: "sm" | "md" | "lg";
  showProgress?: boolean;
  progress?: number;
}

export function ModernLoader({ 
  text = "Loading portal modules...", 
  variant = "default",
  size = "md",
  showProgress = false,
  progress = 0,
  className, 
  ...props 
}: ModernLoaderProps) {
  const sizeClasses = {
    sm: {
      container: "p-4 space-y-3",
      spinner: "h-6 w-6",
      ring: "h-10 w-10",
      glow: "h-8 w-8",
      text: "text-[10px]",
    },
    md: {
      container: "p-8 space-y-4",
      spinner: "h-8 w-8",
      ring: "h-14 w-14",
      glow: "h-12 w-12",
      text: "text-xs",
    },
    lg: {
      container: "p-12 space-y-6",
      spinner: "h-10 w-10",
      ring: "h-18 w-18",
      glow: "h-16 w-16",
      text: "text-sm",
    },
  };

  const variantClasses = {
    default: "bg-transparent",
    minimal: "bg-transparent",
    fullscreen: "fixed inset-0 bg-white/80 backdrop-blur-xl z-50",
    inline: "bg-transparent",
  };

  const getSizeClass = (type: keyof typeof sizeClasses.md) => {
    return sizeClasses[size][type];
  };

  const spinnerVariants = [
    {
      id: 1,
      className: "absolute h-full w-full rounded-full border-2 border-zinc-100 border-t-emerald-600",
      animation: "animate-spin [animation-duration:3s]",
    },
    {
      id: 2,
      className: "absolute h-full w-full rounded-full border-2 border-emerald-100/30 border-b-emerald-600/50",
      animation: "animate-spin [animation-duration:2s] [animation-direction:reverse]",
    },
  ];

  // Progress dots animation
  const ProgressDots = () => (
    <div className="flex gap-1.5 mt-2">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-1.5 rounded-full bg-emerald-600/30 transition-all duration-500",
            i < Math.floor(progress / 20) ? "w-4 bg-emerald-600" : "w-1.5",
            i === Math.floor(progress / 20) && "animate-pulse"
          )}
        />
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center transition-all duration-500",
        variantClasses[variant],
        getSizeClass("container"),
        className
      )}
      {...props}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer Glow Backing - Enhanced */}
        <div
          className={cn(
            "absolute rounded-full bg-emerald-500/10 blur-xl animate-pulse",
            getSizeClass("glow")
          )}
        />
        
        {/* Multiple Track Rings */}
        {spinnerVariants.map((spinner) => (
          <div
            key={spinner.id}
            className={cn(
              "absolute rounded-full",
              spinner.className,
              spinner.animation,
              getSizeClass("ring")
            )}
          />
        ))}

        {/* Inner Ring with Gradient */}
        <div
          className={cn(
            "absolute rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 animate-pulse",
            getSizeClass("ring")
          )}
          style={{ animationDuration: "2s" }}
        />

        {/* Core Spinner */}
        <Loader2
          className={cn(
            "text-emerald-700 animate-spin relative z-10",
            getSizeClass("spinner")
          )}
          style={{ animationDuration: "0.8s" }}
        />

        {/* Sparkle Decoration */}
        <Sparkles
          className={cn(
            "absolute -top-2 -right-2 h-3 w-3 text-emerald-400 animate-pulse",
            size === "lg" && "h-4 w-4"
          )}
        />
        <Zap
          className={cn(
            "absolute -bottom-2 -left-2 h-3 w-3 text-emerald-500 animate-pulse",
            size === "lg" && "h-4 w-4"
          )}
          style={{ animationDelay: "0.5s" }}
        />
        <Activity
          className={cn(
            "absolute top-1/2 -right-4 h-3 w-3 text-emerald-300 animate-pulse",
            size === "lg" && "h-4 w-4"
          )}
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Text and Progress Section */}
      {(text || showProgress) && (
        <div className="flex flex-col items-center gap-1">
          {text && (
            <p
              className={cn(
                "font-medium tracking-wide text-zinc-600",
                getSizeClass("text")
              )}
            >
              {text}
              <span className="inline-block ml-1 animate-pulse">...</span>
            </p>
          )}
          
          {showProgress && (
            <>
              <ProgressDots />
              <p className="text-[10px] font-mono text-zinc-400">
                {Math.min(Math.round(progress), 100)}%
              </p>
            </>
          )}

          {/* Subtle loading indicator */}
          <div className="flex gap-1 mt-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-0.5 rounded-full bg-emerald-600/30 animate-pulse",
                  i === 0 && "w-4",
                  i === 1 && "w-8",
                  i === 2 && "w-12"
                )}
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Additional export for a simplified version
export function SimpleLoader({ 
  text = "Loading...", 
  className 
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
      <span className="text-sm text-zinc-600">{text}</span>
    </div>
  );
}

// Export a fullscreen version
export function FullscreenLoader({ 
  text = "Preparing your experience...", 
  progress 
}: {
  text?: string;
  progress?: number;
}) {
  return (
    <ModernLoader
      text={text}
      variant="fullscreen"
      size="lg"
      showProgress={progress !== undefined}
      progress={progress}
    />
  );
}

// Export an inline version
export function InlineLoader({ 
  text = "Loading...", 
  className 
}: {
  text?: string;
  className?: string;
}) {
  return (
    <ModernLoader
      text={text}
      variant="inline"
      size="sm"
      className={className}
    />
  );
}