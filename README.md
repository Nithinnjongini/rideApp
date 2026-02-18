# 🚗 RideApp

A modern ride-hailing web application built with **Next.js 15**, **React 19**, and **Tailwind CSS**. Features a sleek, gradient-based UI with Google Maps integration and real-time email notifications via Resend.

---

## ✨ Features

- **Ride Request Form** — Submit ride requests with pickup/drop-off locations
- **Google Maps Integration** — Interactive map with marker placement and geolocation
- **Email Notifications** — Automated emails via [Resend](https://resend.com):
  - 📩 Admin notification with passenger and trip details
  - 📩 Passenger confirmation that their ride is being processed
- **Modern UI** — Glassmorphism, gradients, and smooth animations
- **Responsive Design** — Works on desktop and mobile
- **Multiple Pages** — Home, Features, Pricing, About, Contact, Privacy, Terms

---

## 🛠 Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | [Next.js 15](https://nextjs.org/)   |
| UI          | React 19, Tailwind CSS 3            |
| Components  | Radix UI, Lucide Icons              |
| Maps        | Google Maps JavaScript API          |
| Email       | [Resend](https://resend.com)        |
| Language    | TypeScript                          |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Nithinnjongini/rideApp.git
cd rideApp
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

| Variable                          | Description                                  |
| --------------------------------- | -------------------------------------------- |
| `RESEND_API_KEY`                  | API key from [Resend](https://resend.com)    |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps JavaScript API key               |

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
rideApp/
├── app/
│   ├── api/request/     # Ride request API (sends emails)
│   ├── request/         # Ride request page with map
│   ├── success/         # Success confirmation page
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── features/        # Features page
│   ├── pricing/         # Pricing page
│   ├── privacy/         # Privacy policy
│   ├── terms/           # Terms of service
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/ui/       # Reusable UI components (Button, Card, Input, Label)
├── lib/                 # Utility functions
├── Dockerfile           # Docker support
└── DEPLOY.md            # Deployment guide
```

---

## 🐳 Docker

```bash
docker build -t ride-app .
docker run -p 3000:3000 ride-app
```

---

## 📄 License

This project is for learning and demonstration purposes.
