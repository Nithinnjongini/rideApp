import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
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
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
                        <p className="text-gray-500 md:text-xl dark:text-gray-400">
                            Revolutionizing how you move through your city.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p>
                            Founded in 2024, RideApp was built with a simple mission: to provide safe, reliable, and premium transportation for everyone. We believe that getting from point A to point B should be seamless and enjoyable.
                        </p>
                        <p>
                            Our fleet of vetted drivers and premium vehicles ensures that you always arrive in style and comfort. Whether you're commuting to work, heading to the airport, or going out for a night on the town, RideApp is your trusted partner.
                        </p>
                    </div>
                    <div className="pt-8">
                        <Link href="/request">
                            <Button size="lg">Request a Ride Now</Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
