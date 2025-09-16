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
                    <a
                        href="https://script.google.com/macros/s/AKfycbyc0WwUA_sXzADWF4q-6bEUqlzx7m9fw8tRxpRAcgyXgQZOhDaHfKv8s4Jm8lWZrk5O/exec"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium hover:shadow-sm active:translate-y-px transition"
                    >
                        1
                    </a>
                    <a
                        href="https://script.google.com/macros/s/AKfycbyti7WmRMhgCrDuoxrniOAToKWrGiN_gVNNPZJrybTIfHB8uVW4xyU2Tl99sJQThmB6/exec"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium hover:shadow-sm active:translate-y-px transition"
                    >
                        2
                    </a>
                    <a
                        href="https://script.google.com/macros/s/AKfycby-RFUKFnmg1Ay5LUF939XWDquIVO63VlPjLMMaygNS0_3vq76WtNQodl_ozbhO-qewbg/exec"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium hover:shadow-sm active:translate-y-px transition"
                    >
                        3
                    </a>
                </div>
            </div>
        </main>
    );
}
