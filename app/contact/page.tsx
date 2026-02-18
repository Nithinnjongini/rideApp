"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, Upload, X, ChevronDown, ChevronUp, Loader2, MessageSquare, HelpCircle, FileText } from "lucide-react"

const faqs = [
    {
        question: "How do I request a ride?",
        answer: "Navigate to the 'Request a Ride' page from the homepage, enter your pickup and drop-off locations, and submit the form. You'll receive a confirmation email once your request is processed."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards, Apple Pay, Google Pay, and PayPal. You can manage your payment methods in your account settings."
    },
    {
        question: "How can I cancel a ride?",
        answer: "You can cancel a ride from the confirmation email or through your dashboard. Cancellations made more than 5 minutes before the scheduled pickup are free of charge."
    },
    {
        question: "What areas do you service?",
        answer: "RideApp currently operates in major metropolitan areas across the United States. Check our coverage map on the Features page for specific service areas."
    },
    {
        question: "How do I report an issue with a ride?",
        answer: "Use this contact form to report any issues. Please include your ride details and attach any relevant screenshots. Our support team typically responds within 24-48 hours."
    },
]

export default function ContactPage() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState("")
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile) {
            if (selectedFile.size > 5 * 1024 * 1024) {
                setError("File size must be less than 5MB.")
                return
            }
            setFile(selectedFile)
            setError("")
        }
    }

    const removeFile = () => {
        setFile(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const formData = new FormData()
            formData.append("firstName", firstName)
            formData.append("lastName", lastName)
            formData.append("email", email)
            formData.append("message", message)
            if (file) {
                formData.append("file", file)
            }

            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            })

            if (response.ok) {
                setSubmitted(true)
            } else {
                const data = await response.json()
                setError(data.error || "Failed to send message.")
            }
        } catch {
            setError("An error occurred. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
                <Link className="flex items-center justify-center font-bold text-xl text-primary" href="/">
                    🚗 RideApp
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
                        Home
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/request">
                        Request Ride
                    </Link>
                    <Link href="/">
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </nav>
            </header>

            <main className="flex-1 py-12 md:py-20 bg-gradient-to-b from-background to-muted/30">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                    {/* Page Header */}
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-2">
                            <MessageSquare className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            Contact Us
                        </h1>
                        <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-[600px]">
                            Have questions or need help? We&apos;re here for you. Send us a message and we&apos;ll respond within 24-48 hours.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                        <Link href="/request">
                            <Card className="hover:shadow-md transition-shadow cursor-pointer border-primary/20 hover:border-primary/40">
                                <CardContent className="flex items-center gap-3 p-4">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <ArrowLeft className="h-5 w-5 text-primary rotate-180" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Request a Ride</p>
                                        <p className="text-xs text-muted-foreground">Book your next trip</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/features">
                            <Card className="hover:shadow-md transition-shadow cursor-pointer border-primary/20 hover:border-primary/40">
                                <CardContent className="flex items-center gap-3 p-4">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <FileText className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Features</p>
                                        <p className="text-xs text-muted-foreground">See what we offer</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/pricing">
                            <Card className="hover:shadow-md transition-shadow cursor-pointer border-primary/20 hover:border-primary/40">
                                <CardContent className="flex items-center gap-3 p-4">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <HelpCircle className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Pricing</p>
                                        <p className="text-xs text-muted-foreground">View our plans</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Contact Form — 3 columns */}
                        <div className="lg:col-span-3">
                            {submitted ? (
                                /* Success State */
                                <Card className="border-green-200 dark:border-green-900 shadow-lg">
                                    <CardContent className="flex flex-col items-center text-center py-12">
                                        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-6">
                                            <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                                        </div>
                                        <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                                        <p className="text-muted-foreground mb-2 max-w-md">
                                            Thank you for reaching out, {firstName}! We&apos;ve received your message and sent a confirmation to <strong>{email}</strong>.
                                        </p>
                                        <p className="text-sm text-muted-foreground mb-8">
                                            Our team will review your inquiry and get back to you within 24-48 hours.
                                        </p>
                                        <div className="flex gap-3">
                                            <Link href="/">
                                                <Button variant="outline">
                                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                                    Back to Home
                                                </Button>
                                            </Link>
                                            <Button onClick={() => {
                                                setSubmitted(false)
                                                setFirstName("")
                                                setLastName("")
                                                setEmail("")
                                                setMessage("")
                                                setFile(null)
                                            }}>
                                                Send Another Message
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ) : (
                                /* Form */
                                <Card className="shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-primary">Send us a message</CardTitle>
                                        <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                                    <Input
                                                        id="first-name"
                                                        placeholder="John"
                                                        required
                                                        value={firstName}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                                    <Input
                                                        id="last-name"
                                                        placeholder="Doe"
                                                        required
                                                        value={lastName}
                                                        onChange={(e) => setLastName(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                                <Input
                                                    id="email"
                                                    placeholder="john@example.com"
                                                    type="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="How can we help you?"
                                                    className="min-h-[120px]"
                                                    required
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                            </div>

                                            {/* File Upload */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">
                                                    Attachment <span className="text-muted-foreground font-normal">(optional, max 5MB)</span>
                                                </label>
                                                {!file ? (
                                                    <div
                                                        className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors"
                                                        onClick={() => fileInputRef.current?.click()}
                                                    >
                                                        <Upload className="h-8 w-8 mx-auto text-muted-foreground/50 mb-2" />
                                                        <p className="text-sm text-muted-foreground">
                                                            Click to upload or drag and drop
                                                        </p>
                                                        <p className="text-xs text-muted-foreground/70 mt-1">
                                                            PNG, JPG, PDF, or any file up to 5MB
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-3 border rounded-lg p-3 bg-primary/5">
                                                        <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium truncate">{file.name}</p>
                                                            <p className="text-xs text-muted-foreground">
                                                                {(file.size / 1024).toFixed(1)} KB
                                                            </p>
                                                        </div>
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={removeFile}
                                                            className="flex-shrink-0"
                                                        >
                                                            <X className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                )}
                                                <input
                                                    ref={fileInputRef}
                                                    type="file"
                                                    className="hidden"
                                                    onChange={handleFileChange}
                                                    accept="image/*,.pdf,.doc,.docx,.txt"
                                                />
                                            </div>

                                            {error && (
                                                <div className="text-sm text-red-600 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                                                    {error}
                                                </div>
                                            )}

                                            <Button className="w-full" type="submit" disabled={loading}>
                                                {loading ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    "Send Message"
                                                )}
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            )}
                        </div>

                        {/* FAQ Section — 2 columns */}
                        <div className="lg:col-span-2">
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                                        <HelpCircle className="h-5 w-5" />
                                        FAQ
                                    </CardTitle>
                                    <CardDescription>Quick answers to common questions</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border rounded-lg overflow-hidden">
                                            <button
                                                type="button"
                                                className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            >
                                                <span className="text-sm font-medium pr-4">{faq.question}</span>
                                                {openFaq === index ? (
                                                    <ChevronUp className="h-4 w-4 text-primary flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                                )}
                                            </button>
                                            {openFaq === index && (
                                                <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed border-t bg-muted/20 pt-3">
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t py-6 px-4 text-center">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} RideApp. All rights reserved.
                </p>
            </footer>
        </div>
    )
}
