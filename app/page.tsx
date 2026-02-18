import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Car, ArrowRight, Shield, Zap, Smartphone } from "lucide-react"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Navigation */}
            <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
                <Link className="flex items-center justify-center font-bold text-xl group" href="/">
                    <div className="bg-primary/10 p-2 rounded-full mr-2 group-hover:bg-primary/20 transition-colors">
                        <Car className="h-6 w-6 text-primary" />
                    </div>
                    <span>Ride<span className="text-primary">App</span></span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/features">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/pricing">
                        Pricing
                    </Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/about">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="/contact">
                        Contact
                    </Link>
                </nav>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] opacity-50 animate-pulse delay-1000"></div>
                    </div>

                    <div className="container px-4 md:px-6 relative z-10">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-4 max-w-3xl">
                                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
                                    🚀 Now available in your city
                                </div>
                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                    Your Ride, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Your Way</span>
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 leading-relaxed">
                                    Experience the future of transportation. Reliable rides, premium comfort, and transparent pricing at your fingertips.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Link href="/request">
                                    <Button size="lg" className="h-12 px-8 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow bg-gradient-to-r from-primary to-purple-600 border-0">
                                        Request a Ride
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/features">
                                    <Button variant="outline" size="lg" className="h-12 px-8 text-lg border-2 hover:bg-muted/50">
                                        Learn More
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="w-full py-20 bg-muted/30">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose RideApp?</h2>
                            <p className="mt-4 text-gray-500 md:text-xl">Premium features designed for your comfort and safety.</p>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center space-y-4 text-center p-6 bg-background rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    <MapPin className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold">Real-time Tracking</h3>
                                <p className="text-gray-500">
                                    Watch your driver arrive in real-time with our high-precision GPS tracking system.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center p-6 bg-background rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    <Car className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold">Premium Fleet</h3>
                                <p className="text-gray-500">
                                    Travel in style with our curated selection of luxury sedans and spacious SUVs.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center p-6 bg-background rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    <Zap className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold">Lightning Fast</h3>
                                <p className="text-gray-500">
                                    Get picked up in minutes with our intelligent dispatching algorithm.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center p-6 bg-background rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    <Shield className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold">Safety First</h3>
                                <p className="text-gray-500">
                                    All drivers undergo rigorous background checks and safety training.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center p-6 bg-background rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    <Smartphone className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold">In-App Support</h3>
                                <p className="text-gray-500">
                                    24/7 dedicated support team available directly through the app.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center p-6 bg-background rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    <ArrowRight className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold">Seamless Payment</h3>
                                <p className="text-gray-500">
                                    Secure, cashless payments with all major credit cards and digital wallets.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-24 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Ride?</h2>
                            <p className="mx-auto max-w-[600px] text-white/80 md:text-xl">
                                Join thousands of satisfied riders and experience the difference today.
                            </p>
                            <Link href="/request">
                                <Button size="lg" variant="secondary" className="h-12 px-8 text-lg mt-4 shadow-lg">
                                    Get Started Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-muted/50 border-t">
                <div className="container px-4 md:px-6 py-8 flex flex-col gap-4 sm:flex-row items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} RideApp Inc. All rights reserved.</p>
                    <nav className="flex gap-4 sm:gap-6">
                        <Link className="text-xs text-gray-500 hover:text-primary transition-colors hover:underline underline-offset-4" href="/terms">
                            Terms of Service
                        </Link>
                        <Link className="text-xs text-gray-500 hover:text-primary transition-colors hover:underline underline-offset-4" href="/privacy">
                            Privacy
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
}
