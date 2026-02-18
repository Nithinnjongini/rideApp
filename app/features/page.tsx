import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Shield, Clock, Smartphone, Map, CreditCard } from "lucide-react"

export default function FeaturesPage() {
    const features = [
        {
            title: "Real-Time Tracking",
            description: "Watch your driver arrive in real-time on our interactive map.",
            icon: Map
        },
        {
            title: "Secure Payments",
            description: "Cashless transactions with top-tier security for peace of mind.",
            icon: CreditCard
        },
        {
            title: "Vetted Drivers",
            description: "All drivers undergo rigorous background checks and safety training.",
            icon: Shield
        },
        {
            title: "24/7 Support",
            description: "Our customer support team is available around the clock to assist you.",
            icon: Smartphone
        },
        {
            title: "Scheduled Rides",
            description: "Book your ride in advance so you never miss an important appointment.",
            icon: Clock
        },
        {
            title: "Premium Fleet",
            description: "Choose from a wide range of vehicles, from economy to luxury.",
            icon: Check
        }
    ]

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
            <main className="flex-1 py-12 md:py-24 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Premium Features</h1>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Everything you need for a perfect ride, every time.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center p-6 bg-muted/40 rounded-lg shadow-sm">
                                <div className="p-3 bg-primary/10 rounded-full mb-4">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-center text-gray-500">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <Link href="/request">
                            <Button size="lg">Experience It Yourself</Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
