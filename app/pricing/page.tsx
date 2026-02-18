import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
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
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing</h1>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Choose the ride that fits your budget and style.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                        {/* Economy Tier */}
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>Economy</CardTitle>
                                <CardDescription>Affordable rides for everyday travel.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="text-4xl font-bold mb-4">$1.50<span className="text-base font-normal text-muted-foreground">/mile</span></div>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> standard vehicles</li>
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Seats 4 passengers</li>
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> AC included</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href="/request" className="w-full"><Button className="w-full" variant="outline">Choose Economy</Button></Link>
                            </CardFooter>
                        </Card>

                        {/* Premium Tier */}
                        <Card className="flex flex-col border-primary shadow-lg scale-105">
                            <CardHeader>
                                <CardTitle className="text-primary">Premium</CardTitle>
                                <CardDescription>Comfort and style for business or pleasure.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="text-4xl font-bold mb-4">$2.50<span className="text-base font-normal text-muted-foreground">/mile</span></div>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Luxury sedans</li>
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Leather seats</li>
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Complimentary water</li>
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Priority pickup</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href="/request" className="w-full"><Button className="w-full">Choose Premium</Button></Link>
                            </CardFooter>
                        </Card>

                        {/* XL Tier */}
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>RideXL</CardTitle>
                                <CardDescription>Extra space for groups and luggage.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="text-4xl font-bold mb-4">$3.50<span className="text-base font-normal text-muted-foreground">/mile</span></div>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> SUVs & Vans</li>
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Seats 6+ passengers</li>
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Extra luggage space</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href="/request" className="w-full"><Button className="w-full" variant="outline">Choose RideXL</Button></Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
