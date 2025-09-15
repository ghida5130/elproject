// app/page.tsx – Next.js 14 App Router
import Link from "next/link";

const paths = ["a", "b", "c", "d", "e", "f"] as const;

export default function Home() {
    return (
        <main className="min-h-dvh flex items-center justify-center bg-white">
            <div className="w-full max-w-md text-center p-8">
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {paths.map((p) => (
                        <Link
                            key={p}
                            href={`/${p}`}
                            className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium hover:shadow-sm active:translate-y-px transition"
                        >
                            {p}
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
