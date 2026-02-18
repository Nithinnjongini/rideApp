import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea" // You might need to create this component or use standard textarea
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
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
            <main className="flex-1 py-12 md:py-24 bg-background flex items-center justify-center">
                <div className="container px-4 md:px-6 max-w-2xl">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                        <p className="text-gray-500 md:text-xl dark:text-gray-400">
                            Have questions? We're here to help.
                        </p>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Send us a message</CardTitle>
                            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                        <Input id="first-name" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                        <Input id="last-name" placeholder="Doe" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" placeholder="john@example.com" type="email" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="How can we help you?"
                                        required
                                    />
                                </div>
                                <Button className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
