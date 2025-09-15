"use client";

import React from "react";
import { motion } from "framer-motion";

// Next.js App Router 14 – 코끼리공장 레퍼런스 기반 디자인 시안 (Variant C)
// 톤: B2B 신뢰 + 사회적가치(장난감 순환, 재생소재, 정크아트, 환경교육, 시니어 일자리)
// 포인트 컬러: #3895d1 유지

// ---------- UI Primitives ----------
const Section = ({ id, title, children }: { id?: string; title: string; children?: React.ReactNode }) => (
    <section id={id} className="w-full max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <h2 className="text-[22px] md:text-[26px] font-semibold tracking-tight text-gray-900 flex items-center">
            <span className="inline-block h-5 w-1.5 rounded bg-[#3895d1] mr-3" />
            {title}
        </h2>
        <div className="mt-8">{children}</div>
    </section>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center">
        <div className="text-3xl md:text-3xl font-bold text-gray-900 tracking-tight">{value}</div>
        <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
);

const Chip = ({ label }: { label: string }) => (
    <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium border border-[#3895d1]/35 bg-[#3895d1]/8 text-[#2a6e99]">
        #{label}
    </span>
);

const Pill = ({ label }: { label: string }) => (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border border-[#3895d1] bg-[#3895d1]/10 text-[#3895d1]">
        {label}
    </span>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`rounded-xl bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-md transition ${className}`}>
        {children}
    </div>
);

function PlaceholderImage({ alt }: { alt: string }) {
    return (
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-md bg-[#3895d1]/10 flex items-center justify-center text-[#3895d1] text-sm">
            {alt}
        </div>
    );
}

// ---------- Sample Data (브랜드 이미지에 맞춘 더미 데이터; 실제로 교체하세요) ----------
const collaborations = [
    {
        id: "e1",
        category: "장난감 순환",
        title: "장난감 에코스테이션 운영",
        intro: "지역 거점 수거함 구축 → 세척/수리 → 기부/교환 프로세스 운영",
        keywords: ["수거", "세척·소독", "기부"],
        imageAlt: "에코스테이션 수거함",
    },
    {
        id: "e2",
        category: "재생소재",
        title: "폐장난감 재생 원료화 파일럿",
        intro: "분해/분류 후 재생 펠릿 생산, 내부 굿즈·교육 교구 적용",
        keywords: ["재생펠릿", "분해·분류", "적용"],
        imageAlt: "재생 펠릿 샘플",
    },
    {
        id: "e3",
        category: "정크아트 전시",
        title: "업사이클 정크아트 & 팝업",
        intro: "폐장난감으로 설치미술 제작, 시민참여형 팝업 전시",
        keywords: ["업사이클", "전시", "참여"],
        imageAlt: "정크아트 설치",
    },
    {
        id: "e4",
        category: "환경교육",
        title: "플라스틱 순환 체험교육",
        intro: "현장 견학 + 워크숍 구성, 초/중/고 커리큘럼 맞춤",
        keywords: ["체험", "워크숍", "커리큘럼"],
        imageAlt: "교육 워크숍",
    },
    {
        id: "e5",
        category: "시니어 일자리",
        title: "시니어 협업형 수리센터",
        intro: "시니어 고용/훈련 연계, 수리·검수 표준 프로세스",
        keywords: ["시니어", "수리", "표준화"],
        imageAlt: "시니어 수리 협업",
    },
    {
        id: "e6",
        category: "기관 협력",
        title: "복지기관 연계 장난감 나눔",
        intro: "아동복지기관/지자체와 공동 집행, 운영 매뉴얼 제공",
        keywords: ["아동복지", "지자체", "운영"],
        imageAlt: "기관 연계",
    },
];

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
                            프로젝트
                        </a>
                        <a href="#about" className="hover:text-gray-900">
                            사업소개
                        </a>
                        <a href="#contact" className="hover:text-gray-900">
                            문의
                        </a>
                    </nav>
                </div>
            </div>

            {/* Hero */}
            <header className="w-full border-b border-gray-200 bg-gradient-to-r from-white via-white to-sky-50">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                    >
                        <div className="text-xs font-medium text-[#2a6e99] inline-flex items-center gap-2">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#3895d1]" />
                            TOY CIRCULARITY · SOCIAL IMPACT
                        </div>
                        <h1 className="mt-3 text-4xl md:text-4xl font-bold tracking-[-0.02em] leading-tight">
                            장난감 자원순환으로 만드는 <span className="block text-[#3895d1]">실질적 ESG 임팩트</span>
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl">
                            수거·수리·소독·기부와 재생소재 생산, 정크아트 전시, 환경교육, 시니어 일자리까지. 파트너와
                            함께 확장 가능한 순환 모델을 제공합니다.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                className="inline-flex items-center rounded-lg bg-[#3895d1] text-white text-sm font-medium px-4 py-2 shadow hover:brightness-95"
                                href="#portfolio"
                            >
                                협업 제안
                            </a>
                            <a
                                className="inline-flex items-center rounded-lg text-[#3895d1] ring-1 ring-[#3895d1]/40 text-sm font-medium px-4 py-2 hover:bg-[#3895d1]/10"
                                href="#contact"
                            >
                                사례 보기
                            </a>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Stats (가독성 우선. 실제 수치는 데이터 연결 후 교체) */}
            <section className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14">
                <Card>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 p-6">
                        <Stat value="168,000kg" label="장난감 기부량 (누적)" />
                        <Stat value="471,323개" label="나눔 장난감" />
                        <Stat value="2,914명" label="자원봉사자" />
                        <Stat value="15,420명" label="환경교육 참가" />
                        <Stat value="706,701kgCO₂" label="온실가스 감축" />
                        <Stat value="89,456그루" label="나무식재 효과" />
                    </div>
                    <div className="px-6 pb-6 text-xs text-gray-500">
                        * 샘플 표기. 실제 수치는 최신 데이터로 교체하세요.
                    </div>
                </Card>
            </section>

            {/* Portfolio Cards */}
            <Section id="portfolio" title="주요 협업 프로젝트">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {collaborations.map((c) => (
                        <Card key={c.id}>
                            <div className="p-5 pb-0">
                                <Pill label={c.category} />
                            </div>
                            <div className="px-5">
                                <PlaceholderImage alt={c.imageAlt} />
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold tracking-tight text-gray-900 hover:text-[#3895d1] transition">
                                    {c.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{c.intro}</p>
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {c.keywords.map((k) => (
                                        <Chip key={k} label={k} />
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Mission / Positioning */}
            <Section id="about" title="미션 & 포지셔닝">
                <Card>
                    <div className="p-6 md:p-8">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl">
                            코끼리공장은 장난감 순환을 기반으로 자원순환과 아동복지를 동시에 달성하는 비즈니스 모델을
                            운영합니다.\n 파트너와 함께 지역 거점 확대, 재생소재 상용화, 시민 참여형 교육·전시를 통해
                            확장 가능한 임팩트를 만듭니다.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {["장난감순환", "재생소재", "환경교육", "정크아트", "시니어일자리", "기관협력"].map((k) => (
                                <Chip key={k} label={k} />
                            ))}
                        </div>
                    </div>
                </Card>
            </Section>

            {/* Contact */}
            <Section id="contact" title="협업 문의">
                <Card>
                    <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <div className="text-base md:text-lg font-medium text-[#3895d1]">프로젝트 브리프 공유</div>
                            <p className="mt-1 text-sm text-gray-600">
                                업종·목표·기간·예산 범위를 알려주세요. 2주 내 제안서를 드립니다.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="mailto:hello@socialenterprise.co.kr?subject=%EC%BD%94%EB%81%BC%EB%A6%AC%EA%B3%B5%EC%9E%A5%20%ED%98%91%EC%97%85%20%EC%A0%9C%EC%95%88"
                                className="inline-flex items-center rounded-lg bg-[#3895d1] text-white text-sm font-medium px-4 py-2 shadow hover:brightness-95"
                            >
                                이메일 보내기
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg text-[#3895d1] ring-1 ring-[#3895d1]/40 text-sm font-medium px-4 py-2 hover:bg-[#3895d1]/10"
                            >
                                PDF 자료 요청
                            </a>
                        </div>
                    </div>
                </Card>
            </Section>

            {/* Footer */}
            <footer className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 text-sm text-gray-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <div>© {new Date().getFullYear()} 코끼리공장</div>
                    <div className="flex items-center gap-4">
                        <a href="#portfolio" className="hover:text-[#3895d1]">
                            프로젝트
                        </a>
                        <a href="#contact" className="hover:text-[#3895d1]">
                            협업제안
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
