"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Next.js App Router 14 – B2B 전문 톤 시안 (Variant B)
// 포인트 컬러: #3895d1 유지
// 톤: 절제된, 신뢰 중심, 정보 구조화(리스트/테이블 라이크)

// ---------- Primitives ----------
const AccentBar = () => <span className="inline-block h-6 w-1.5 rounded bg-[#3895d1] align-middle mr-3" />;

const Section = ({ title, children }: { title: string; children?: React.ReactNode }) => (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14">
        <h2 className="text-[22px] md:text-[26px] font-semibold tracking-tight text-gray-900 flex items-center">
            <AccentBar />
            {title}
        </h2>
        <div className="mt-6">{children}</div>
    </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center rounded-full border border-gray-200 text-gray-700 bg-white px-3 py-1 text-xs font-medium">
        {children}
    </span>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center rounded-full border border-[#3895d1]/35 bg-[#3895d1]/6 text-[#2a6e99] px-2.5 py-0.5 text-[11px] font-medium">
        #{children}
    </span>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div
        className={`rounded-xl bg-white ring-1 ring-gray-200 hover:ring-[#3895d1]/40 shadow-sm hover:shadow transition ${className}`}
    >
        {children}
    </div>
);

// ---------- Sample Data (교체하세요) ----------
const rows = [
    {
        id: "r1",
        logo: "",
        company: "Alpha Corp.",
        category: "순환경제",
        title: "폐자원 회수·업사이클 파일럿",
        summary: "폐현수막/배너 수거 → 소재 분류 → 굿즈화, 사내 행사 배포.",
        keywords: ["업사이클", "자원순환", "브랜드"],
        period: "2024 Q2–Q4",
        role: "기획·운영·보고",
    },
    {
        id: "r2",
        logo: "",
        company: "Beta Holdings",
        category: "고용·교육",
        title: "디지털 포용 부트캠프",
        summary: "12주 교육 + 현장 실습, 68% 정규직 전환 연계.",
        keywords: ["청년고용", "멘토링", "교육"],
        period: "2023 Q3–2024 Q1",
        role: "교육설계·매칭",
    },
    {
        id: "r3",
        logo: "",
        company: "Gamma Retail",
        category: "지역사회",
        title: "지역 상생 장터 및 로컬브랜딩",
        summary: "지자체/기업 공동 로컬 페어, 소상공인 120팀 참여.",
        keywords: ["상생", "로컬", "페어"],
        period: "2024.05",
        role: "행사기획·미디어",
    },
    {
        id: "r4",
        logo: "",
        company: "Delta Manufacturing",
        category: "공급망 인권",
        title: "협력사 인권·안전 교육 위탁",
        summary: "현장 안전/인권 모듈 도입, 교육 이수 1,200+.",
        keywords: ["인권", "안전", "거버넌스"],
        period: "2024–",
        role: "콘텐츠·운영",
    },
];

// ---------- Components ----------
function LogoMark() {
    return (
        <div className="h-10 w-10 rounded bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center text-gray-500 text-xs">
            LOGO
        </div>
    );
}

function CaseRow({ row }: { row: (typeof rows)[number] }) {
    return (
        <div className="grid grid-cols-12 items-center gap-4 px-4 py-4 hover:bg-[#3895d1]/3 rounded-lg transition">
            {/* 회사 / 로고 */}
            <div className="col-span-12 sm:col-span-3 flex items-center gap-3">
                <LogoMark />
                <div className="min-w-0">
                    <div className="text-sm font-semibold text-gray-900 truncate">{row.company}</div>
                    <div className="text-xs text-gray-500 truncate">{row.category}</div>
                </div>
            </div>
            {/* 제목 / 요약 */}
            <div className="col-span-12 sm:col-span-6 min-w-0">
                <div className="text-sm font-medium text-gray-900">
                    <span className="mr-2 inline-block h-4 w-1 rounded bg-[#3895d1] align-middle" />
                    {row.title}
                </div>
                <div className="mt-1 text-sm text-gray-600 truncate">{row.summary}</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                    {row.keywords.map((k) => (
                        <Tag key={k}>{k}</Tag>
                    ))}
                </div>
            </div>
            {/* 기간 / 역할 */}
            <div className="col-span-12 sm:col-span-3 flex sm:flex-col gap-2 sm:items-end justify-between">
                <Pill>{row.period}</Pill>
                <Pill>{row.role}</Pill>
            </div>
        </div>
    );
}

// ---------- Page ----------
export default function Page() {
    return (
        <main className="min-h-dvh bg-white text-gray-900">
            {/* Topbar */}
            <div className="w-full border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded bg-[#3895d1]" />
                        <span className="text-sm font-semibold tracking-tight">코끼리공장</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                        <a href="#portfolio" className="hover:text-gray-900">
                            포트폴리오
                        </a>
                        <a href="#about" className="hover:text-gray-900">
                            회사소개
                        </a>
                        <a href="#contact" className="hover:text-gray-900">
                            문의
                        </a>
                    </nav>
                </div>
            </div>

            {/* Hero – compact, executive tone */}
            <header className="w-full border-b border-gray-200 bg-gradient-to-r from-white via-white to-sky-50">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14">
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                    >
                        <div className="text-xs font-medium text-[#2a6e99] inline-flex items-center gap-2">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#3895d1]" />
                            CSR/ESG PARTNERSHIP PORTFOLIO
                        </div>
                        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight">
                            협업 사례 – B2B 포트폴리오
                        </h1>
                        <p className="mt-3 text-base md:text-lg text-gray-600 max-w-3xl">
                            산업별 레퍼런스를 표준화된 포맷으로 제공합니다. 카테고리, 기간, 역할, 핵심 키워드를
                            확인하세요.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                className="inline-flex items-center rounded-lg bg-[#3895d1] text-white text-sm font-medium px-4 py-2 shadow hover:brightness-95"
                                href="#contact"
                            >
                                협업 문의
                            </a>
                            <a
                                className="inline-flex items-center rounded-lg text-[#3895d1] ring-1 ring-[#3895d1]/40 text-sm font-medium px-4 py-2 hover:bg-[#3895d1]/10"
                                href="#"
                            >
                                사례 보기
                            </a>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Filters + List */}
            <section id="portfolio" className="w-full max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-12">
                <div className="grid grid-cols-12 gap-6">
                    {/* Sidebar (design only) */}
                    <aside className="col-span-12 md:col-span-3">
                        <Card className="p-4">
                            <div className="text-sm font-semibold text-gray-900 flex items-center">
                                <AccentBar />
                                카테고리
                            </div>
                            <div className="mt-3 grid grid-cols-2 gap-2">
                                {[
                                    "전체",
                                    "순환경제",
                                    "고용·교육",
                                    "지역사회",
                                    "공급망 인권",
                                    "환경캠페인",
                                    "교육콘텐츠",
                                    "탄소중립",
                                    "임직원참여",
                                ].map((c) => (
                                    <button
                                        key={c}
                                        className="text-xs rounded-md border border-gray-200 px-2.5 py-1.5 hover:border-[#3895d1] hover:text-[#3895d1] bg-white text-gray-700"
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-6 text-sm font-semibold text-gray-900 flex items-center">
                                <AccentBar />
                                기간
                            </div>
                            <div className="mt-3 grid grid-cols-3 gap-2">
                                {["전체", "2023", "2024", "2025"].map((y) => (
                                    <button
                                        key={y}
                                        className="text-xs rounded-md border border-gray-200 px-2.5 py-1.5 hover:border-[#3895d1] hover:text-[#3895d1] bg-white text-gray-700"
                                    >
                                        {y}
                                    </button>
                                ))}
                            </div>
                        </Card>
                    </aside>

                    {/* List */}
                    <div className="col-span-12 md:col-span-9">
                        <Card>
                            {/* header row */}
                            <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs font-medium text-gray-500 border-b border-gray-200">
                                <div className="col-span-12 sm:col-span-3">회사/카테고리</div>
                                <div className="col-span-12 sm:col-span-6">프로젝트</div>
                                <div className="col-span-12 sm:col-span-3">기간/역할</div>
                            </div>
                            {/* rows */}
                            <div className="divide-y divide-gray-200">
                                {rows.map((row) => (
                                    <CaseRow key={row.id} row={row} />
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact */}
            {/* <Section title="협업 문의">
                <Card className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <div className="text-base md:text-lg font-medium text-[#3895d1]">프로젝트 브리프 공유</div>
                        <p className="mt-1 text-sm text-gray-600">
                            업종·목표·기간·예산 범위를 알려주세요. 2주 내 제안서를 드립니다.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <a
                            href="mailto:hello@socialenterprise.co.kr?subject=%ED%98%91%EC%97%85%20%EC%9D%B8%EC%BF%BC%EB%A6%AC"
                            className="inline-flex items-center rounded-lg bg-[#3895d1] text-white text-sm font-medium px-4 py-2 shadow hover:brightness-95"
                        >
                            이메일 보내기
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg text-[#3895d1] ring-1 ring-[#3895d1]/40 text-sm font-medium px-4 py-2 hover:bg-[#3895d1]/10"
                        >
                            포트폴리오 PDF
                        </a>
                    </div>
                </Card>
            </Section> */}

            {/* Footer */}
            <footer className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 text-sm text-gray-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <div>© {new Date().getFullYear()} 코끼리공장</div>
                    <div className="flex items-center gap-4">
                        <a href="#portfolio" className="hover:text-[#3895d1]">
                            포트폴리오
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
