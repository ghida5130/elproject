"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Next.js App Router 14 - CSR/ESG 협업 사례 중심 소개 페이지 (디자인 위주)
// 포인트 컬러: #3895d1
// 요구사항:
// 1) 가치제안/임팩트 제거
// 2) 당사 진행 협업 소개 중심
// 3) 카드: 협업종류(카테고리), 협업제목, 간단소개, 키워드, 이미지
// 4) Tailwind 사용 (아비트러리 컬러 클래스로 포인트 컬러 적용)

// ---------- UI primitives ----------
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div
        className={`relative rounded-2xl p-5 md:p-6 backdrop-blur bg-white/75 dark:bg-gray-900/50 shadow-[0_6px_40px_-12px_rgba(0,0,0,0.2)] ring-1 ring-black/5 dark:ring-white/10 ${className}`}
    >
        {children}
    </div>
);

const CategoryPill = ({ label }: { label: string }) => (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide select-none border-[#3895d1]/30 bg-[#3895d1]/10 text-[#2a6e99] dark:text-[#8ec7ea]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#3895d1]" />
        {label}
    </span>
);

const KeywordChip = ({ label }: { label: string }) => (
    <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium border border-gray-200/70 dark:border-white/10 text-gray-600 dark:text-gray-300 bg-white/70 dark:bg-gray-800/40">
        #{label}
    </span>
);

const Section = ({
    id,
    title,
    subtitle,
    children,
}: {
    id?: string;
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}) => (
    <section id={id} className="relative w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-gray-900 dark:text-gray-100">
                {title}
            </h2>
            {subtitle && <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>}
        </div>
        <div className="mt-8">{children}</div>
    </section>
);

const GradientBG = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#3895d1]/30 blur-3xl" />
        <div className="absolute top-10 -right-16 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-[44rem] bg-gradient-to-t from-[#3895d1]/20 to-transparent blur-3xl" />
    </div>
);

// ---------- Sample data (교체하세요) ----------
const collaborations = [
    {
        id: "c1",
        category: "고용·교육",
        title: "청년 디지털 직무 부트캠프",
        intro: "파트너사와 협력하여 디지털 취약계층 대상 12주 부트캠프 운영, 수료생 현장 배치 연계.",
        keywords: ["청년고용", "디지털교육", "멘토링"],
        imageAlt: "디지털 교육 현장",
    },
    {
        id: "c2",
        category: "순환경제",
        title: "폐현수막 업사이클 굿즈 프로젝트",
        intro: "이벤트 폐현수막 수거·세척·가공 후 기업 기념품으로 재탄생.",
        keywords: ["업사이클", "자원순환", "브랜딩"],
        imageAlt: "업사이클 작업",
    },
    {
        id: "c3",
        category: "지역사회",
        title: "지역 상권 활성화 장터",
        intro: "지자체·기업과 공동으로 지역 상생 장터 기획, 소상공인 홍보·판매 지원.",
        keywords: ["상생", "소상공인", "행사기획"],
        imageAlt: "지역 상생 행사",
    },
    {
        id: "c4",
        category: "공급망 인권",
        title: "협력사 인권·안전 교육 위탁",
        intro: "협력사 근로자 대상 인권·안전 교육 모듈 설계 및 현장 교육 수행.",
        keywords: ["인권", "안전", "교육모듈"],
        imageAlt: "안전 교육",
    },
    {
        id: "c5",
        category: "환경캠페인",
        title: "사내 플로깅 위크",
        intro: "임직원 자원봉사 주간 운영, 참여 키트 제작과 결과 리포팅 제공.",
        keywords: ["임직원참여", "플로깅", "캠페인"],
        imageAlt: "플로깅 활동",
    },
    {
        id: "c6",
        category: "교육콘텐츠",
        title: "ESG 스토리 영상 제작",
        intro: "프로그램 참여자 인터뷰 기반의 숏폼/롱폼 영상 패키지 제작.",
        keywords: ["콘텐츠", "영상", "스토리텔링"],
        imageAlt: "영상 촬영 장면",
    },
];

// ---------- Helpers ----------
function PlaceholderImage({ alt }: { alt: string }) {
    // 디자인 프리뷰용 SVG 플래이스홀더 (실제 이미지로 교체하세요)
    return (
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
            <svg viewBox="0 0 1200 750" className="h-full w-full">
                <defs>
                    <linearGradient id="g2" x1="0" x2="1">
                        <stop offset="0%" stopColor="#3895d1" />
                        <stop offset="100%" stopColor="#8ec7ea" />
                    </linearGradient>
                </defs>
                <rect width="1200" height="750" fill="url(#g2)" opacity="0.18" />
                <g fill="none" stroke="#3895d1" strokeOpacity="0.35">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <path
                            key={i}
                            d={`M 0 ${60 + i * 60} C 360 ${20 + i * 70}, 840 ${80 + i * 60}, 1200 ${60 + i * 60}`}
                        />
                    ))}
                </g>
                <g fill="#3895d1" opacity="0.12">
                    <circle cx="220" cy="160" r="60" />
                    <circle cx="980" cy="300" r="48" />
                    <circle cx="600" cy="520" r="72" />
                </g>
                <text x="48" y="88" fontSize="26" fill="#2a6e99" opacity="0.9">
                    {alt}
                </text>
            </svg>
        </div>
    );
}

// ---------- Page ----------
export default function Page() {
    return (
        <main className="min-h-dvh bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
            <GradientBG />

            {/* Hero */}
            <header className="relative">
                <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-[#2a6e99] border-[#3895d1]/30 bg-[#3895d1]/10 ring-1 ring-black/5 dark:ring-white/10">
                            코끼리공장
                        </div>
                        <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-[-0.03em]">
                            CSR/ESG 협업 자료
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                            실제로 진행한 프로젝트들을 통해 협업 방식을 보여드립니다. 카테고리, 간단 소개, 키워드와 함께
                            한눈에.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Collaborations */}
            <Section id="collaborations" title="협업 포트폴리오">
                {/* (옵션) 필터 UI - 디자인 목업용, 동작 없이 스타일만 */}
                <div className="mb-6 flex flex-wrap gap-2">
                    {["전체", "고용·교육", "순환경제", "지역사회", "공급망 인권", "환경캠페인", "교육콘텐츠"].map(
                        (tab) => (
                            <button
                                key={tab}
                                className="rounded-full border px-3.5 py-1.5 text-xs font-medium hover:bg-white/70 dark:hover:bg-gray-800/50 border-[#3895d1]/30 text-[#2a6e99] bg-[#3895d1]/10"
                            >
                                {tab}
                            </button>
                        )
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {collaborations.map((c) => (
                        <Card key={c.id} className="group p-0 overflow-hidden">
                            {/* image */}
                            <div className="p-5 pb-0">
                                <CategoryPill label={c.category} />
                            </div>
                            <div className="px-5">
                                <PlaceholderImage alt={c.imageAlt} />
                            </div>

                            {/* body */}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold tracking-tight group-hover:underline decoration-[#3895d1]/40 underline-offset-4">
                                    {c.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{c.intro}</p>
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {c.keywords.map((k) => (
                                        <KeywordChip key={k} label={k} />
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                    * 모든 내용은 샘플입니다. 실제 협업명/설명/이미지로 교체하세요.
                </p>
            </Section>

            {/* Contact (간단 CTA) */}
            <section id="contact" className="relative w-full max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
                <Card className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <div className="text-lg font-medium">협업을 논의하고 싶다면</div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            간단한 니즈(카테고리/기간/예산 범위)를 알려주시면 맞춤 제안을 드립니다.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <a
                            href="mailto:hello@socialenterprise.co.kr?subject=%ED%98%91%EC%97%85%20%EC%9D%B8%EC%BF%BC%EB%A6%AC"
                            className="inline-flex justify-center rounded-xl px-5 py-3 text-base font-medium bg-[#3895d1] text-white shadow hover:brightness-95 transition"
                        >
                            이메일 보내기
                        </a>
                        <a
                            href="#"
                            className="inline-flex justify-center rounded-xl px-5 py-3 text-base font-medium bg-white/80 dark:bg-gray-900/60 ring-1 ring-black/5 dark:ring-white/10 hover:bg-white transition"
                        >
                            포트폴리오 PDF 받기
                        </a>
                    </div>
                </Card>
            </section>

            {/* Footer */}
            <footer className="border-t border-black/5 dark:border-white/10 mt-6">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 text-sm text-gray-500 dark:text-gray-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <div>© {new Date().getFullYear()} Social Enterprise Co.</div>
                    <div className="flex items-center gap-4">
                        <a href="#collaborations" className="hover:text-gray-700 dark:hover:text-gray-200">
                            협업 포트폴리오
                        </a>
                        <a href="#contact" className="hover:text-gray-700 dark:hover:text-gray-200">
                            문의
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
