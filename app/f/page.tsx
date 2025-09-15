"use client";

type Project = {
    id: string;
    category: string;
    title: string;
    image: string; // URL or placeholder
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
    {
        title: "고용노동부 사회적기업 인증",
        note: "2015",
    },
    {
        title: "폐기물처리업 허가",
        note: "2022",
    },
    { title: "현대자동차·KB국민은행·동서발전·현대백화점 협업", note: "다년간" },
];

// --- UI Helpers

function Chip({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full border border-[#3895d1]/30 bg-[#3895d1]/10 px-2.5 py-1 text-xs font-medium text-[#3895d1]">
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
        <section id={id} className="mx-auto w-full max-w-7xl px-6 mt-6">
            <header className="mb-10">
                <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
                {subtitle && <p className="mt-2 text-sm text-gray-600 mb-2">{subtitle}</p>}
            </header>
            {children}
        </section>
    );
}

function ProjectCard({ p }: { p: Project }) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="flex flex-col gap-3 p-5">
                {/* 1. 카테고리 */}
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#3895d1]">{p.category}</div>
                {/* 2. 제목 */}
                <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
                {/* 3. 이미지 (컴팩트) */}
                <div className="relative overflow-hidden rounded-xl ring-1 ring-gray-100">
                    <img
                        src={p.image}
                        alt={p.title}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                </div>
                {/* 4. 부연설명 */}
                <p className="text-sm leading-relaxed text-gray-700">{p.description}</p>
                {/* 5. 키워드 */}
                <div className="flex flex-wrap gap-2">
                    {p.keywords.map((k) => (
                        <Chip key={k}>{k}</Chip>
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
        <main className="min-h-screen bg-gray-50 text-gray-900">
            {/* Top Bar */}
            <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-[#3895d1]" />
                        <span className="text-sm font-semibold">코끼리공장</span>
                    </div>
                    <nav className="hidden gap-6 text-sm md:flex">
                        <a className="hover:text-[#3895d1]" href="#about">
                            About
                        </a>
                        <a className="hover:text-[#3895d1]" href="#projects">
                            Projects
                        </a>
                        <a className="hover:text-[#3895d1]" href="#impact">
                            Impact
                        </a>
                        <a className="hover:text-[#3895d1]" href="#partners">
                            Partners
                        </a>
                        <a className="hover:text-[#3895d1]" href="#contact">
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden border-b border-gray-200 bg-white">
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
                    <div className="py-12">
                        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
                            장난감 자원순환으로 만드는
                            <span className="block text-[#3895d1]"> 실질적 ESG 임팩트</span>
                        </h1>
                        <p className="mt-4 text-base leading-relaxed text-gray-700">
                            수거→수리·소독→재배포까지, 코끼리공장은 장난감 순환을 통해 플라스틱 오염을 줄이고 취약
                            아동의 놀이권을 확장합니다. CSR/ESG 담당자를 위한 투명한 데이터와 검증된 운영 프로세스를
                            제공합니다.
                        </p>
                        <ul className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#3895d1]" /> 사회적기업 인증(2015)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#3895d1]" /> 폐기물처리업 허가(2022)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#3895d1]" /> 대기업·공공 협업 다수
                            </li>
                        </ul>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-xl bg-[#3895d1] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
                            >
                                협업 문의하기
                            </a>
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-[#3895d1] hover:text-[#3895d1]"
                            >
                                사례 살펴보기
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476e?q=80&w=1600&auto=format&fit=crop"
                                alt="장난감 순환 작업 이미지"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="pointer-events-none absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#3895d1] p-4 text-white shadow-lg md:block">
                            <p className="text-xs leading-5">
                                수거 · 수리 · 소독 · 재배포
                                <br />전 과정 표준화 운영
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About & Trust */}
            <Section id="about" title="About" subtitle="코끼리공장은 장난감 전문 자원순환 기업입니다.">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {TRUST.map((t) => (
                        <div key={t.title} className="rounded-2xl border border-gray-200 bg-white p-5">
                            <div className="text-sm font-semibold">{t.title}</div>
                            <div className="mt-1 text-xs text-gray-500">{t.note}</div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Impact Stats */}
            <Section id="impact" title="Impact" subtitle="협업 시 제공되는 성과지표(예시)">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {STATS.map((s) => (
                        <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                            <div className="text-2xl font-bold text-[#3895d1]">{s.value}</div>
                            <div className="mt-1 text-xs text-gray-600">{s.label}</div>
                        </div>
                    ))}
                </div>
                <p className="mt-3 text-xs text-gray-500">
                    * 상기 수치는 디자인 시안용 더미데이터입니다. 실제 성과는 협업 범위와 기간에 따라 달라집니다.
                </p>
            </Section>

            {/* Projects */}
            <Section id="projects" title="Projects" subtitle="카테고리·키워드로 정리된 코끼리공장의 대표 협업 사례">
                {/* Filter (UI only) */}
                <div className="mb-5 flex flex-wrap items-center gap-2">
                    {["전체", "교육/캠페인", "지역ESG/거점", "순환/수거", "취약아동/나눔", "에너지/산업ESG"].map(
                        (c) => (
                            <button
                                key={c}
                                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                                    c === "전체"
                                        ? "border-[#3895d1] bg-[#3895d1] text-white"
                                        : "border-gray-200 bg-white text-gray-700 hover:border-[#3895d1] hover:text-[#3895d1]"
                                }`}
                                aria-pressed={c === "전체"}
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
                                placeholder="키워드 검색 (UI만 구현)"
                                className="w-40 border-none p-0 text-gray-700 placeholder:text-gray-400 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.id} p={p} />
                    ))}
                </div>
            </Section>

            {/* Partners */}
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

            {/* Timeline */}
            <Section title="Timeline" subtitle="연혁 주요 포인트">
                <ol className="relative ml-3 border-l border-gray-200">
                    {[
                        { y: "2014", t: "소셜벤처 런칭 / 각종 스타트업·소셜벤처 어워드 수상" },
                        { y: "2015", t: "고용노동부 사회적기업 인증 / 펠로·펀드 선정" },
                        { y: "2022", t: "폐기물처리업 허가 취득 및 사업 확장" },
                        { y: "2023~", t: "대기업·공공기관과 ESG 협업 고도화" },
                    ].map((i) => (
                        <li key={i.y} className="mb-6 ml-6">
                            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-[#3895d1]" />
                            <h4 className="text-sm font-semibold">{i.y}</h4>
                            <p className="mt-1 text-sm text-gray-600">{i.t}</p>
                        </li>
                    ))}
                </ol>
            </Section>

            {/* Contact CTA */}
            <section id="contact" className="border-t border-gray-200 bg-white">
                <div className="mx-auto w-full max-w-7xl px-6 py-24 scroll-mt-28">
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-semibold">협업을 시작해볼까요?</h3>
                            <p className="mt-2 text-sm text-gray-700">
                                기업별 과제와 이해관계자 니즈에 맞춰 수거·수리·소독·나눔까지 통합된 프로젝트 설계를
                                제안합니다.
                            </p>
                            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-600 md:grid-cols-2">
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-[#3895d1]" /> KPI·임팩트
                                    리포트 제공
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-[#3895d1]" /> 전국 단위 캠페인
                                    운영 경험
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-[#3895d1]" /> 임직원 봉사·교육
                                    프로그램 연계
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-[#3895d1]" /> 거점형 순환센터
                                    구축 컨설팅
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-gray-200 p-6">
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
                                    placeholder="협업 목표, 기간, 지역 등을 적어주세요 (UI만 구현)"
                                />
                                <button className="rounded-lg bg-[#3895d1] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95">
                                    문의 보내기
                                </button>
                                <p className="text-[11px] text-gray-500">
                                    * 현재는 디자인 시안 단계로 폼은 동작하지 않습니다.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-gray-50">
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
