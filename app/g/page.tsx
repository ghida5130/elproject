// app/internal/projects/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "코끼리공장 | 내부 프로젝트 아카이브",
    description: "카테고리/키워드 기준 내부 협업 자료 아카이브. 신속 검색·정리 중심 UI.",
    openGraph: {
        title: "코끼리공장 | 내부 프로젝트 아카이브",
        description: "카테고리/키워드 기준 내부 협업 자료 아카이브",
        url: "https://example.com/internal/projects",
        siteName: "Elephant Factory Internal",
        locale: "ko_KR",
        type: "website",
    },
    robots: { index: false, follow: false },
};

// --- Types & Dummy Data

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
        description: "임직원/지역 아동 대상 순환·업사이클링 워크숍. 분해·세척·재조립 체험 프로세스 운영 매뉴얼 포함.",
        keywords: ["현대자동차", "환경교육", "워크숍", "업사이클링"],
        date: "2024-11",
    },
    {
        id: "p2",
        category: "지역ESG/거점",
        title: "부산시·노인인력개발원 ‘우리동네 ESG센터’",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
        description: "장난감 순환 거점 구축(수거-수리-소독-재배포). 지역 일자리 연계 및 운영지표 샘플 포함.",
        keywords: ["부산시", "ESG센터", "거점모델", "운영지표"],
        date: "2025-06",
    },
    {
        id: "p3",
        category: "순환/수거",
        title: "현대백화점 ESG 장난감 순환",
        image: "https://images.unsplash.com/photo-1543198926-22dea9f2a6d6?q=80&w=1600&auto=format&fit=crop",
        description: "리테일 지점 수거 캠페인 운영. 고객참여형 수거 동선/보관/물류 체크리스트 포함.",
        keywords: ["현대백화점", "수거캠페인", "리테일ESG", "체크리스트"],
        date: "2023-09",
    },
    {
        id: "p4",
        category: "취약아동/나눔",
        title: "KB국민은행 친환경 ESG 나눔 프로젝트",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
        description: "재생 장난감 나눔 드라이브. 임직원 봉사 연동 및 아동시설 배포 절차서 샘플 포함.",
        keywords: ["KB국민은행", "나눔드라이브", "배포절차", "임직원봉사"],
        date: "2024-05",
    },
    {
        id: "p5",
        category: "에너지/산업ESG",
        title: "동서발전 ESG 장난감 순환 사업",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1600&auto=format&fit=crop",
        description: "발전사 맞춤형 순환모델. 폐플라스틱 처리/안전/품질관리 지침 요약본 첨부(샘플).",
        keywords: ["동서발전", "산업ESG", "순환경제", "품질관리"],
        date: "2022-11",
    },
];

const CATEGORIES = Array.from(new Set(PROJECTS.map((p) => p.category)));

// --- UI Helpers

function Tag({ children }: { children: React.ReactNode }) {
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
        <section id={id} className="mx-auto w-full max-w-7xl px-6 py-28">
            <header className="mb-10">
                <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
                {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
            </header>
            {children}
        </section>
    );
}

function ProjectCard({ p }: { p: Project }) {
    return (
        <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* 1. 카테고리 */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3895d1]">{p.category}</span>
                <span className="text-[11px] text-gray-400">{p.date}</span>
            </div>
            {/* 2. 제목 */}
            <h3 className="px-5 pt-4 text-base font-semibold leading-snug">{p.title}</h3>
            {/* 3. 이미지 (콤팩트 썸네일) */}
            <div className="px-5 pt-3">
                <div className="relative overflow-hidden rounded-lg ring-1 ring-gray-100">
                    <img
                        src={p.image}
                        alt={p.title}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                </div>
            </div>
            {/* 4. 부연설명 */}
            <p className="px-5 pt-3 text-sm leading-relaxed text-gray-700">{p.description}</p>
            {/* 5. 키워드 */}
            <div className="flex flex-wrap gap-2 px-5 py-4">
                {p.keywords.map((k) => (
                    <Tag key={k}>{k}</Tag>
                ))}
            </div>
        </article>
    );
}

export default function Page() {
    // 카테고리별 그룹핑 (서버 컴포넌트 레벨, UI 전용)
    const grouped = CATEGORIES.map((c) => ({
        category: c,
        items: PROJECTS.filter((p) => p.category === c),
    }));

    return (
        <main className="min-h-screen bg-neutral-50 text-gray-900">
            {/* 헤더: 내부 전용 라벨 */}
            <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/80 backdrop-blur">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-md bg-[#3895d1]" />
                        <div className="text-sm font-semibold">내부 프로젝트 아카이브</div>
                    </div>
                    <div className="text-[11px] text-gray-500">internal · read-only · dummy</div>
                </div>
            </header>

            {/* Toolbar: 필터 UI (동작하지 않음) */}
            <Section id="filters" title="필터" subtitle="카테고리·키워드로 빠르게 찾아요 (UI만 구현)">
                <div className="flex flex-wrap items-center gap-2">
                    {["전체", ...CATEGORIES].map((c, i) => (
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
                    ))}
                    <div className="ml-auto flex items-center gap-2">
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
                                className="w-48 border-none p-0 text-gray-700 placeholder:text-gray-400 focus:outline-none"
                            />
                        </div>
                        <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 hover:border-[#3895d1] hover:text-[#3895d1]">
                            CSV 내보내기
                        </button>
                    </div>
                </div>
            </Section>

            {/* Archive: 카테고리별 그룹 */}
            <Section id="archive" title="아카이브" subtitle="카테고리별 프로젝트 목록 (더미데이터)">
                <div className="space-y-16">
                    {grouped.map((g) => (
                        <section key={g.category} className="scroll-mt-24">
                            <div className="mb-6 flex items-end justify-between">
                                <h3 className="text-lg font-semibold">{g.category}</h3>
                                <a href="#" className="text-xs text-[#3895d1] hover:underline">
                                    카테고리 복사
                                </a>
                            </div>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                {g.items.map((p) => (
                                    <ProjectCard key={p.id} p={p} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </Section>

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-neutral-50">
                <div className="mx-auto w-full max-w-7xl px-6 py-10 text-xs text-gray-500">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <p>© {new Date().getFullYear()} Elephant Factory · Internal</p>
                        <p className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#3895d1]" /> internal resource only
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
