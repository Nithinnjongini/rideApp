import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Car } from "lucide-react"

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-muted/40 p-4 flex items-center justify-center">
            <Card className="w-full max-w-md mx-auto text-center shadow-lg border-green-200 dark:border-green-900">
                <CardHeader>
                    <div className="mx-auto bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                        <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-2xl">Ride Requested!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                        A driver has been assigned and is on their way to your location.
                    </p>

                    <div className="bg-muted p-4 rounded-lg flex items-center gap-4 text-left">
                        <div className="bg-primary/10 p-2 rounded-full">
                            <Car className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Toyota Camry</p>
                            <p className="text-sm text-muted-foreground">White • ABC 1234</p>
                        </div>
                        <div className="ml-auto text-right">
                            <p className="font-bold">5 min</p>
                            <p className="text-xs text-muted-foreground">away</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                    <Link href="/" className="w-full">
                        <Button variant="outline" className="w-full">
                            Back to Home
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
