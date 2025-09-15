"use client";

import React from "react";
import { motion } from "framer-motion";

// Next.js App Router 14 – 협업 포트폴리오 페이지 (가독성 + 포인트컬러 강화)
// - 배경: 흰색
// - 포인트컬러: #3895d1 (Hero 그라디언트/버튼/배지/링크/보더)
// - 카테고리 선택 바: sticky + 가로 스크롤 탭

// ---------- UI primitives ----------
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div
        className={`rounded-2xl bg-white shadow-md ring-1 ring-black/5 hover:shadow-xl hover:ring-[#3895d1]/30 transition p-6 ${className}`}
    >
        {children}
    </div>
);

const CategoryPill = ({ label }: { label: string }) => (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#3895d1] bg-[#3895d1]/10 px-3 py-1 text-sm font-medium text-[#3895d1]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#3895d1]" />
        {label}
    </span>
);

const KeywordChip = ({ label }: { label: string }) => (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-[#3895d1]/30 bg-[#3895d1]/5 text-[#3895d1]">
        #{label}
    </span>
);

const Section = ({ id, title, children }: { id?: string; title: string; children?: React.ReactNode }) => (
    <section id={id} className="w-full max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 border-l-4 pl-4 border-[#3895d1]">
            {title}
        </h2>
        <div className="mt-10">{children}</div>
    </section>
);

// ---------- Sample data (교체하세요) ----------
const collaborations = [
    {
        id: "c1",
        category: "고용·교육",
        title: "청년 디지털 직무 부트캠프",
        intro: "디지털 취약계층 대상 12주 부트캠프 운영, 수료생 현장 배치 연계.",
        keywords: ["청년고용", "디지털교육", "멘토링"],
        imageAlt: "디지털 교육 현장",
    },
    {
        id: "c2",
        category: "순환경제",
        title: "폐현수막 업사이클 굿즈 프로젝트",
        intro: "이벤트 폐현수막 수거·가공 후 기업 기념품으로 재탄생.",
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

const categories = [
    "전체",
    "고용·교육",
    "순환경제",
    "지역사회",
    "공급망 인권",
    "환경캠페인",
    "교육콘텐츠",
    "리빙랩",
    "농어촌 상생",
    "탄소중립",
    "장애포용",
];

// ---------- Helpers ----------
function PlaceholderImage({ alt }: { alt: string }) {
    // 디자인 프리뷰용 SVG 플래이스홀더 (실제 이미지로 교체하세요)
    return (
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#3895d1]/10">
            <div className="absolute inset-0 flex items-center justify-center text-[#3895d1] text-sm">{alt}</div>
        </div>
    );
}

// ---------- Page ----------
export default function Page() {
    return (
        <main className="min-h-dvh bg-white text-gray-900">
            {/* Hero */}
            <header className="relative bg-gradient-to-r from-[#3895d1] to-sky-400 text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white">
                            CSR/ESG 협업 포트폴리오
                        </div>
                        <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight tracking-tight">협업 사례</h1>
                        <p className="mt-5 text-lg md:text-xl text-white/90">
                            실제 진행한 프로젝트들을 한눈에. 카테고리·간단 소개·키워드와 함께 가독성 좋게 정리했습니다.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Collaborations */}
            <Section id="collaborations" title="협업 포트폴리오">
                {/* 카테고리 선택 바 (디자인 전용, 동작 없음) */}
                <div className="sticky top-0 z-20 -mt-4 mb-8">
                    <div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-[#3895d1]/30 shadow-md p-3">
                        <div className="flex items-center justify-between gap-3 px-1 pb-2">
                            <div className="text-sm font-semibold text-[#3895d1]">카테고리 선택</div>
                            <button className="text-xs px-2.5 py-1 rounded-full bg-[#3895d1]/10 text-[#3895d1] border border-[#3895d1]/30 hover:bg-[#3895d1]/15 transition">
                                전체 보기
                            </button>
                        </div>
                        <div className="flex gap-2 overflow-x-auto py-1 px-1">
                            {categories.map((tab) => (
                                <button
                                    key={tab}
                                    className="whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium border-[#3895d1] text-[#3895d1] bg-[#3895d1]/5 hover:bg-[#3895d1]/10 active:scale-[0.99] transition"
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {collaborations.map((c) => (
                        <Card key={c.id}>
                            <CategoryPill label={c.category} />
                            <div className="mt-4">
                                <PlaceholderImage alt={c.imageAlt} />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900 hover:text-[#3895d1] transition">
                                {c.title}
                            </h3>
                            <p className="mt-2 text-base text-gray-600 leading-relaxed">{c.intro}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {c.keywords.map((k) => (
                                    <KeywordChip key={k} label={k} />
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Contact */}
            <Section id="contact" title="협업 문의">
                <Card className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <div className="text-lg font-medium text-[#3895d1]">협업을 논의하고 싶다면</div>
                        <p className="mt-2 text-sm text-gray-600">
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
                            className="inline-flex justify-center rounded-xl px-5 py-3 text-base font-medium bg-gray-50 ring-1 ring-[#3895d1]/40 hover:bg-[#3895d1]/10 text-[#3895d1] transition"
                        >
                            포트폴리오 PDF 받기
                        </a>
                    </div>
                </Card>
            </Section>

            <footer className="border-t border-gray-200 mt-6">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 text-sm text-gray-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <div>© {new Date().getFullYear()} Social Enterprise Co.</div>
                    <div className="flex items-center gap-4">
                        <a href="#collaborations" className="hover:text-[#3895d1]">
                            협업 포트폴리오
                        </a>
                        <a href="#contact" className="hover:text-[#3895d1]">
                            문의
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
