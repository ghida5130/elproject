"use client";

type Project = {
    id: string;
    category: string;
    title: string;
    image: string;
    description: string;
    keywords: string[];
    date: string; // YYYY-MM
};

const PROJECTS: Project[] = [
    {
        id: "p1",
        category: "교육/캠페인",
        title: "현대자동차 그린무브공작소 운영",
        image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
        description:
            "임직원 및 지역 아동과 함께하는 순환·업사이클링 워크숍. 장난감 분해·세척·재조립 과정을 통한 순환 가치 체험 프로그램.",
        keywords: ["현대자동차", "환경교육", "워크숍", "업사이클링"],
        date: "2024-11",
    },
    {
        id: "p2",
        category: "지역ESG/거점",
        title: "부산시·노인인력개발원 ‘우리동네 ESG센터’",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
        description: "지역 기반 장난감 순환 거점 구축. 수거-수리-소독-재배포의 전 과정을 지역 경제와 연계.",
        keywords: ["부산시", "ESG센터", "지역일자리", "거점모델"],
        date: "2025-06",
    },
    {
        id: "p3",
        category: "순환/수거",
        title: "현대백화점 ESG 장난감 순환",
        image: "https://images.unsplash.com/photo-1543198926-22dea9f2a6d6?q=80&w=1600&auto=format&fit=crop",
        description: "리테일 지점을 활용한 장난감 수거 캠페인. 고객 참여형 순환 캠페인과 연계한 친환경 브랜딩.",
        keywords: ["현대백화점", "수거캠페인", "리테일ESG"],
        date: "2023-09",
    },
    {
        id: "p4",
        category: "취약아동/나눔",
        title: "KB국민은행 친환경 ESG 나눔 프로젝트",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
        description:
            "정기 기부·나눔 드라이브 운영으로 취약 아동에게 재생 장난감 제공. 금융권 임직원 봉사 프로그램 연동.",
        keywords: ["KB국민은행", "기부드라이브", "임직원봉사"],
        date: "2024-05",
    },
    {
        id: "p5",
        category: "에너지/산업ESG",
        title: "동서발전 ESG 장난감 순환 사업",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1600&auto=format&fit=crop",
        description: "플라스틱 순환 및 지역사회 아동 지원을 결합한 발전사 맞춤형 사회공헌 모델.",
        keywords: ["동서발전", "산업ESG", "순환경제"],
        date: "2022-11",
    },
];

const STATS = [
    { label: "순환 장난감(누적)", value: "128,450+" },
    { label: "추정 CO₂e 절감", value: "316 t" },
    { label: "취약아동 지원", value: "21,300+명" },
    { label: "임직원·시민 봉사", value: "9,800+명" },
];

const TRUST = [
    { title: "고용노동부 사회적기업 인증", note: "2015" },
    { title: "폐기물처리업 허가", note: "2022" },
    { title: "대기업·공공 협업 다수", note: "현대차·KB·동서발전 등" },
];

// --- UI Helpers

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full bg-[#3895d1]/10 px-2.5 py-1 text-xs font-medium text-[#3895d1]">
            {children}
        </span>
    );
}

function Section({
    id,
    title,
    subtitle,
    children,
}: {
    id?: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="mx-auto w-full max-w-7xl px-6 py-8 scroll-mt-28">
            <header className="mb-6">
                <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
                {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
            </header>
            {children}
        </section>
    );
}

function ProjectCard({ p }: { p: Project }) {
    return (
        <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="flex flex-col gap-3 p-5">
                {/* 1. 카테고리 */}
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#3895d1]">{p.category}</div>
                {/* 2. 제목 */}
                <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
                {/* 3. 이미지 (컴팩트 3:2) */}
                <div className="relative overflow-hidden rounded-lg ring-1 ring-gray-100">
                    <img
                        src={p.image}
                        alt={p.title}
                        className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                </div>
                {/* 4. 부연설명 */}
                <p className="text-sm leading-relaxed text-gray-700 line-clamp-3">{p.description}</p>
                {/* 5. 키워드 */}
                <div className="flex flex-wrap gap-2">
                    {p.keywords.map((k) => (
                        <Badge key={k}>{k}</Badge>
                    ))}
                </div>
                {/* 6. 협업날짜 */}
                <div className="mt-1 flex items-center justify-between text-[11px] text-gray-500">
                    <span>협업 날짜: {p.date}</span>
                    <span className="inline-flex items-center gap-1 text-gray-400 group-hover:text-[#3895d1]">
                        사례 보기
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-3.5 w-3.5"
                        >
                            <path d="M13.5 4.5L21 12l-7.5 7.5m-9-15L12 12l-7.5 7.5" />
                        </svg>
                    </span>
                </div>
            </div>
        </article>
    );
}

export default function Page() {
    return (
        <main className="min-h-screen bg-neutral-50 text-gray-900">
            {/* Top Banner (다크/엔터프라이즈 느낌) */}
            <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-b from-[#2f78ab] to-[#3895d1]">
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr]">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white ring-1 ring-white/20">
                            기업용 포트폴리오 · KPI 우선
                        </div>
                        <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                            데이터로 증명하는
                            <span className="block">ESG 협업의 신뢰성</span>
                        </h1>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/90">
                            장난감 자원순환 전 과정을 표준화하여 투명한 성과지표와 리스크 관리 체계를 제공합니다.
                            CSR/ESG 담당자를 위한 레퍼런스 아키텍처와 사례를 확인하세요.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#2f78ab] shadow-sm transition hover:brightness-95"
                            >
                                사례 살펴보기
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-xl border border-white/60 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                협업 문의
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {STATS.map((s) => (
                            <div
                                key={s.label}
                                className="rounded-xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur"
                            >
                                <div className="text-xs text-white/80">{s.label}</div>
                                <div className="mt-1 text-2xl font-bold">{s.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About (신뢰/거버넌스) */}
            <Section id="about" title="About" subtitle="코끼리공장은 장난감 전문 자원순환 기업입니다.">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {TRUST.map((t) => (
                        <div key={t.title} className="rounded-xl border border-gray-200 bg-white p-5">
                            <div className="text-sm font-semibold">{t.title}</div>
                            <div className="mt-1 text-xs text-gray-500">{t.note}</div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Impact (지표 섹션을 배너 아래 한 번 더, 상세·화이트 톤) */}
            <Section id="impact" title="Impact" subtitle="협업 시 제공되는 성과지표(예시)">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                    {STATS.map((s) => (
                        <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-6">
                            <div className="text-[11px] font-medium text-gray-500">{s.label}</div>
                            <div className="mt-1 text-2xl font-bold text-[#3895d1]">{s.value}</div>
                        </div>
                    ))}
                </div>
                <p className="mt-3 text-xs text-gray-500">
                    * 더미 데이터입니다. 실제 수치는 프로젝트 범위/기간에 따라 상이합니다.
                </p>
            </Section>

            {/* Projects (그리드 느낌 강화) */}
            <Section id="projects" title="Projects" subtitle="카테고리·키워드로 정리된 대표 협업 사례">
                {/* Filter (UI only) */}
                <div className="mb-8 flex flex-wrap items-center gap-2">
                    {["전체", "교육/캠페인", "지역ESG/거점", "순환/수거", "취약아동/나눔", "에너지/산업ESG"].map(
                        (c, i) => (
                            <button
                                key={c}
                                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                                    i === 0
                                        ? "border-[#3895d1] bg-[#3895d1] text-white"
                                        : "border-gray-200 bg-white text-gray-700 hover:border-[#3895d1] hover:text-[#3895d1]"
                                }`}
                                aria-pressed={i === 0}
                            >
                                {c}
                            </button>
                        )
                    )}
                    <div className="ml-auto">
                        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-4 w-4"
                            >
                                <path d="M10 4a6 6 0 104.472 10.028l4.75 4.75 1.414-1.414-4.75-4.75A6 6 0 0010 4zm0 2a4 4 0 110 8 4 4 0 010-8z" />
                            </svg>
                            <input
                                placeholder="키워드 검색 (UI)"
                                className="w-40 border-none p-0 text-gray-700 placeholder:text-gray-400 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.id} p={p} />
                    ))}
                </div>
            </Section>

            {/* Partners (텍스트 로고형) */}
            <Section id="partners" title="Partners" subtitle="다양한 산업군과의 다년간 협업 경험">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                    {["현대자동차", "KB국민은행", "동서발전", "현대백화점", "부산시"].map((n) => (
                        <div
                            key={n}
                            className="flex h-20 items-center justify-center rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-600"
                        >
                            {n}
                        </div>
                    ))}
                </div>
            </Section>

            {/* Contact */}
            <section id="contact" className="border-t border-gray-200 bg-white">
                <div className="mx-auto w-full max-w-7xl px-6 py-20">
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-semibold">협업을 시작해볼까요?</h3>
                            <p className="mt-2 text-sm text-gray-700">
                                기업별 과제에 맞춘 통합 설계(수거·수리·소독·나눔)와 KPI 리포트를 제공합니다.
                            </p>
                            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-600 md:grid-cols-2">
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-[#3895d1]" /> KPI·임팩트
                                    리포트
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-[#3895d1]" /> 전국 단위 캠페인
                                    운영
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-[#3895d1]" /> 임직원 봉사·교육
                                    연계
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-[#3895d1]" /> 거점형 순환센터
                                    컨설팅
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-xl border border-gray-200 p-6">
                            <form className="grid grid-cols-1 gap-3" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#3895d1] focus:outline-none"
                                    placeholder="회사명"
                                />
                                <input
                                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#3895d1] focus:outline-none"
                                    placeholder="담당자명"
                                />
                                <input
                                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#3895d1] focus:outline-none"
                                    placeholder="이메일"
                                />
                                <textarea
                                    className="min-h-[96px] rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#3895d1] focus:outline-none"
                                    placeholder="협업 목표, 기간, 지역 (UI)"
                                />
                                <button className="rounded-lg bg-[#3895d1] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">
                                    문의 보내기
                                </button>
                                <p className="text-[11px] text-gray-500">
                                    * 디자인 시안 단계로 폼은 동작하지 않습니다.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-neutral-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-10 text-xs text-gray-500">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <p>© {new Date().getFullYear()} 코끼리공장 · 장난감 자원순환기업</p>
                        <p className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#3895d1]" /> ESG / Impact for Good Play
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
