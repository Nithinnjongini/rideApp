"use client"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation, ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const libraries: ("places")[] = ["places"];

const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem',
};

const defaultCenter = {
    lat: 40.7128, // New York City fallback
    lng: -74.0060
};

export default function RequestRide() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [pickup, setPickup] = useState("")
    const [dropoff, setDropoff] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    // Map State
    const [mapCenter, setMapCenter] = useState(defaultCenter);
    const [pickupCoords, setPickupCoords] = useState<{ lat: number, lng: number } | null>(null);
    const [dropoffCoords, setDropoffCoords] = useState<{ lat: number, lng: number } | null>(null);

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        libraries
    });

    const mapRef = useRef<google.maps.Map | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
    }, []);

    const onUnmount = useCallback(() => {
        mapRef.current = null;
    }, []);

    // Handle "Use Current Location"
    const handleCurrentLocation = () => {
        if (navigator.geolocation) {
            setLoading(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const pos = { lat: latitude, lng: longitude };

                    setMapCenter(pos);
                    setPickupCoords(pos);
                    setPickup(`${latitude.toFixed(4)}, ${longitude.toFixed(4)} (Current Location)`); // In a real app, use Geocoding API here
                    setLoading(false);
                },
                () => {
                    alert("Error: The Geolocation service failed.");
                    setLoading(false);
                }
            );
        } else {
            alert("Error: Your browser doesn't support geolocation.");
        }
    };

    // Handle Map Click (Sets Dropoff by default for simplicity in this demo)
    const onMapClick = (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();
            setDropoffCoords({ lat, lng });
            setDropoff(`${lat.toFixed(4)}, ${lng.toFixed(4)} (Selected on Map)`);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pickup, dropoff, name, email }),
            })

            if (response.ok) {
                router.push("/success")
            } else {
                alert("Failed to submit request.")
            }
        } catch (error) {
            console.error(error)
            alert("An error occurred.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-muted/40 p-4 md:p-8 flex flex-col md:flex-row items-center justify-center gap-8">
            <Link href="/" className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
                <Button variant="ghost" size="sm" className="bg-background/80 backdrop-blur">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Button>
            </Link>

            {/* Map Section */}
            <div className="w-full h-[300px] md:h-[600px] md:w-1/2 lg:w-2/3 bg-gray-200 rounded-lg shadow-inner overflow-hidden relative">
                {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
                    isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={mapCenter}
                            zoom={14}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            onClick={onMapClick}
                            options={{ disableDefaultUI: false, zoomControl: true }}
                        >
                            {pickupCoords && <Marker position={pickupCoords} title="Pickup" label="P" />}
                            {dropoffCoords && <Marker position={dropoffCoords} title="Dropoff" label="D" />}
                        </GoogleMap>
                    ) : loadError ? (
                        <div className="flex items-center justify-center h-full text-red-500">Error loading maps</div>
                    ) : (
                        <div className="flex items-center justify-center h-full"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
                    )
                ) : (
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center text-gray-500 bg-gray-100">
                        <MapPin className="h-12 w-12 mb-4 text-gray-300" />
                        <p>Map Integration requires an API Key.</p>
                        <p className="text-xs mt-2">Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local</p>
                    </div>
                )}
            </div>

            {/* Form Section */}
            <Card className="w-full max-w-md mx-auto shadow-2xl md:w-1/2 lg:w-1/3 z-10">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary">Request a Ride</CardTitle>
                    <CardDescription>Enter your details and trip information.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium leading-none">
                                Full Name
                            </label>
                            <Input
                                id="name"
                                placeholder="John Doe"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none">
                                Email Address
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="pickup" className="text-sm font-medium leading-none">
                                Pickup Location
                            </label>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Navigation className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="pickup"
                                        placeholder="Current Location"
                                        className="pl-9"
                                        required
                                        value={pickup}
                                        onChange={(e) => setPickup(e.target.value)}
                                    />
                                </div>
                                <Button type="button" size="icon" variant="outline" onClick={handleCurrentLocation} title="Use Current Location">
                                    <Navigation className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="dropoff" className="text-sm font-medium leading-none">
                                Drop-off Location
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="dropoff"
                                    placeholder="Where to? (Click on Map)"
                                    className="pl-9"
                                    required
                                    value={dropoff}
                                    onChange={(e) => setDropoff(e.target.value)}
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-primary hover:bg-primary/90" type="submit" disabled={loading}>
                            {loading ? "Processing..." : "Confirm Request"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
