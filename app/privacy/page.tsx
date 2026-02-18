import Link from "next/link"

export default function PrivacyPage() {
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
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-gray-500 dark:text-gray-400">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
                        <p>
                            We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items requested (for delivery services), delivery notes, and other information you choose to provide.
                        </p>

                        <h2 className="text-xl font-bold text-foreground">2. Information We Collect Through Your Use of Our Services</h2>
                        <p>
                            When you use our Services, we collect information about you in the following general categories:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Location Information:</strong> When you use the Services for transportation or delivery, we collect precise location data about the ride from the RideApp app used by the Driver.</li>
                            <li><strong>Transaction Information:</strong> We collect transaction details related to your use of our Services, including the type of service requested, date and time the service was provided, amount charged, distance traveled, and other related transaction details.</li>
                            <li><strong>Device Information:</strong> We may collect information about your mobile device, including, for example, the hardware model, operating system and version, software and file names and verisons, preferred language, unique device identifier, advertising identifiers, serial number, device motion information, and mobile network information.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-foreground">3. How We Use Your Information</h2>
                        <p>
                            We may use the information we collect about you to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide, maintain, and improve our Services, including, for example, to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support to Users and Drivers, develop safety features, authenticate users, and send product updates and administrative messages;</li>
                            <li>Perform internal operations, including, for example, to prevent fraud and abuse of our Services; to troubleshoot software bugs and operational problems; to conduct data analysis, testing, and research; and to monitor and analyze usage and activity trends;</li>
                        </ul>

                        <h2 className="text-xl font-bold text-foreground">4. Sharing of Information</h2>
                        <p>
                            We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>With Drivers to enable them to provide the Services you request. For example, we share your name, photo (if you provide one), and pickup and/or drop-off locations with Drivers;</li>
                            <li>With third parties to provide you a service you requested through a partnership or promotional offering made by a third party or us;</li>
                            <li>With the general public if you submit content in a public forum, such as blog comments, social media posts, or other features of our Services that are viewable by the general public;</li>
                        </ul>

                        <h2 className="text-xl font-bold text-foreground">5. Security</h2>
                        <p>
                            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                        </p>

                        <h2 className="text-xl font-bold text-foreground">6. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Statement, please contact us at <a href="mailto:privacy@rideapp.com" className="text-primary hover:underline">privacy@rideapp.com</a>.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
