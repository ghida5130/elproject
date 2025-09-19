// components/AiGenerateButtonAnimated.tsx
"use client";

import React, { useState } from "react";

type Size = "sm" | "md" | "lg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    size?: Size;
    fullWidth?: boolean;
    /** 애니메이션 재생 시간(ms) — 기본 2500ms */
    duration?: number;
}

export default function AiButton({
    label = "AI 생성",
    size = "md",
    fullWidth = false,
    duration = 2500,
    className = "",
    disabled,
    ...rest
}: Props) {
    const [generating, setGenerating] = useState(false);

    const sizeMap: Record<Size, string> = {
        sm: "px-3 py-1.5 text-sm rounded-md",
        md: "px-4 py-2 text-sm rounded-lg",
        lg: "px-5 py-3 text-base rounded-xl",
    };

    const base = [
        "relative overflow-hidden inline-flex items-center justify-center gap-3 font-medium text-white",
        "shadow-xl",
        "focus:outline-none focus:ring-4 focus:ring-[#3795d520] focus:ring-offset-1",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        fullWidth ? "w-full" : "inline-block",
        sizeMap[size],
        className,
    ]
        .filter(Boolean)
        .join(" ");

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        if (disabled || generating) return;
        setGenerating(true);
        // 애니메이션 시뮬레이션 (실제 AI 호출 없음)
        setTimeout(() => setGenerating(false), duration);
        // 만약 외부에서 추가 행동을 원하면 이벤트로 처리하도록 남겨둠 (네트워크는 직접 하지 않음)
        if (rest.onClick) rest.onClick(e);
    }

    // 파티클(간단)용 배열
    const particles = Array.from({ length: 8 });

    return (
        <>
            <style>{`
        /* custom keyframes (Tailwind + inline style mix) */
        @keyframes ai-gradient {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        @keyframes ring {
          0% { transform: scale(0.8); opacity: 0.6 }
          70% { transform: scale(1.8); opacity: 0.12 }
          100% { transform: scale(2.4); opacity: 0 }
        }
        @keyframes icon-rotate {
          0% { transform: rotate(0deg) translateX(0) }
          50% { transform: rotate(120deg) translateX(2px) }
          100% { transform: rotate(360deg) translateX(0) }
        }
        @keyframes dot-bounce {
          0% { transform: translateY(0); opacity: 0.9 }
          50% { transform: translateY(-4px); opacity: 1 }
          100% { transform: translateY(0); opacity: 0.9 }
        }
        @keyframes confetti {
          0% { transform: translate(0,0) scale(1); opacity: 1 }
          100% { transform: translate(var(--tx), var(--ty)) rotate(45deg) scale(0.8); opacity: 0 }
        }

        /* helper classes */
        .ai-gradient {
          background: linear-gradient(90deg, #3795d5 0%, #6ec1ff 40%, #2f86c6 100%);
          background-size: 200% 200%;
          animation: ai-gradient 3s linear infinite;
          mix-blend-mode: screen;
          opacity: 0.95;
        }
        .ai-ring {
          position: absolute;
          inset: -6px;
          border-radius: inherit;
          box-shadow: 0 10px 30px rgba(55,149,213,0.14);
          pointer-events: none;
        }
        .ai-ring::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.12), transparent 40%);
          animation: ring 1000ms ease-out;
        }
        .ai-icon-anim { animation: icon-rotate 900ms cubic-bezier(.2,.9,.3,1); transform-origin: center; }
        .ai-dot { animation: dot-bounce 800ms ease-in-out infinite; display:inline-block }
        .ai-dot--delay-1 { animation-delay: 0ms }
        .ai-dot--delay-2 { animation-delay: 160ms }
        .ai-dot--delay-3 { animation-delay: 320ms }

        .confetti {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 2px;
          opacity: 0;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: confetti 700ms cubic-bezier(.2,.8,.2,1) forwards;
        }
      `}</style>

            <button
                {...rest}
                type={rest.type ?? "button"}
                className={base}
                onClick={handleClick}
                disabled={disabled || generating}
                aria-busy={generating}
                aria-disabled={disabled || generating}
            >
                {/* animated gradient overlay (subtle) */}
                <span
                    aria-hidden
                    className={`absolute inset-0 rounded-[inherit] ${
                        generating ? "ai-gradient" : ""
                    } transition-opacity`}
                    style={{ opacity: generating ? 1 : 0 }}
                />

                {/* pulsating ring when generating */}
                {generating && <span className="ai-ring" aria-hidden />}

                {/* left icon */}
                <span className="relative z-10 flex items-center justify-center">
                    <svg
                        className={`w-5 h-5 ${generating ? "ai-icon-anim" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        {/* stylized swirl/launch */}
                        <path
                            d="M12 2c2.5 0 4 1 5.5 2.5S20 8 20 10.5s-1 4.5-2.5 6S14.5 19 12 19s-4.5-1-5.5-2.5S6 13.5 6 11s1-4.5 2.5-6S9.5 2 12 2z"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 8v4l2 2"
                            stroke="white"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>

                {/* label / dots */}
                <span className="relative z-10 flex items-center gap-2 select-none">
                    <span className="min-w-[3ch]">{label}</span>

                    {/* 도트 애니메이션: generating일 때만 보이게 */}
                    <span className="flex items-end gap-1" aria-hidden>
                        <span
                            className={`ai-dot ${generating ? "ai-dot--delay-1" : ""}`}
                            style={{ opacity: generating ? 1 : 0 }}
                        >
                            ●
                        </span>
                        <span
                            className={`ai-dot ${generating ? "ai-dot--delay-2" : ""}`}
                            style={{ opacity: generating ? 1 : 0 }}
                        >
                            ●
                        </span>
                        <span
                            className={`ai-dot ${generating ? "ai-dot--delay-3" : ""}`}
                            style={{ opacity: generating ? 1 : 0 }}
                        >
                            ●
                        </span>
                    </span>
                </span>

                {/* subtle shadow/overlay to keep contrast */}
                <span className="absolute inset-0 z-0 rounded-[inherit] bg-black/6 pointer-events-none" />

                {/* confetti / particle burst when generating */}
                {generating &&
                    particles.map((_, i) => {
                        // 랜덤 방향과 거리 (타입캐스트)
                        const angle = (Math.PI * 2 * i) / particles.length + (Math.random() - 0.5) * 0.6;
                        const dist = 34 + Math.random() * 28;
                        const tx = Math.cos(angle) * dist;
                        const ty = Math.sin(angle) * dist - 8;
                        const hue = 200 + Math.round(Math.random() * 40);
                        return (
                            <span
                                key={i}
                                className="confetti z-20"
                                style={
                                    {
                                        background: `hsl(${hue} 90% 60%)`,
                                        transform: `translate(-50%, -50%)`,
                                        // custom props for keyframe to use
                                        ["--tx" as any]: `${tx}px`,
                                        ["--ty" as any]: `${ty}px`,
                                        left: `${50 + (Math.random() - 0.5) * 8}%`,
                                        top: `${48 + (Math.random() - 0.5) * 8}%`,
                                        animationDelay: `${i * 30}ms`,
                                    } as React.CSSProperties
                                }
                                aria-hidden
                            />
                        );
                    })}
            </button>
        </>
    );
}
