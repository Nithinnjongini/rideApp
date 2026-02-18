import Link from "next/link"

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center border-b">
                <Link className="flex items-center justify-center font-bold text-xl" href="/">
                    RideApp
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
                        Home
                    </Link>
                </nav>
            </header>
            <main className="flex-1 container px-4 py-12 md:px-6 md:py-24 max-w-3xl mx-auto">
                <div className="space-y-8">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Use</h1>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-gray-500 dark:text-gray-400">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the RideApp platform, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>

                        <h2 className="text-xl font-bold text-foreground">2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on RideApp's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on RideApp's website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-foreground">3. Service Availability</h2>
                        <p>
                            RideApp strives to ensure that our services are available 24/7. However, we do not guarantee that our services will runs uninterrupted or be error-free. We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice.
                        </p>

                        <h2 className="text-xl font-bold text-foreground">4. User Accounts</h2>
                        <p>
                            When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                        </p>

                        <h2 className="text-xl font-bold text-foreground">5. Limitation of Liability</h2>
                        <p>
                            In no event shall RideApp or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RideApp's website, even if RideApp or a RideApp authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>

                        <h2 className="text-xl font-bold text-foreground">6. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
