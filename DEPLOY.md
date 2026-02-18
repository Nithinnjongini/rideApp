# Deploying RideApp to Google Cloud Platform

This guide outlines the steps to containerize and deploy the RideApp to **Google Cloud Run**, a fully managed serverless platform for containerized applications.

## Prerequisites

## Prerequisites Setup Guide

### 1. Google Cloud Project & Billing
1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Click the project dropdown in the top bar and select **"New Project"**.
3.  Give it a name (e.g., `ride-app-prod`) and click **Create**.
4.  Once created, select the project.
5.  Go to **Billing** in the menu and link a billing account (required for Cloud Run).

### 2. Google Cloud SDK (`gcloud`)
You need the command-line tool to interact with GCP.
*   **Mac (Homebrew):** `brew install --cask google-cloud-sdk`
*   **Direct Download:** [Install Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
*   **Verification:** Run `gcloud --version` in your terminal.
*   **Login:** Run `gcloud auth login` and follow the browser prompt.
*   **Set Project:** Run `gcloud config set project YOUR_PROJECT_ID`.

### 3. Container Runtime (Docker or Podman)
You need a container runtime to build the image.
*   **Docker:** [Docker Desktop](https://www.docker.com/products/docker-desktop/)
*   **Podman:** [Podman Desktop](https://podman-desktop.io/) (Free alternative)

### 4. Authenticate with GCP
**Option A: Using Docker**
```bash
gcloud auth configure-docker us-central1-docker.pkg.dev
```

**Option B: Using Podman**
Podman requires explicit login using a temporary access token.
```bash
gcloud auth print-access-token | podman login -u oauth2accesstoken --password-stdin https://us-central1-docker.pkg.dev
```

## Deployment Steps

### 1. Enable Required APIs

Run the following commands to enable the necessary Google Cloud services:

```bash
gcloud services enable artifactregistry.googleapis.com \
    cloudbuild.googleapis.com \
    run.googleapis.com
```

### 2. Configure Environment Variables

Create a file named `.env.production` (or use GCP Secret Manager for better security) with your production variables:

```env
RESEND_API_KEY=your_production_resend_api_key
```

### 3. Build and Push the Image

**a. Create an Artifact Registry Repository:**
```bash
gcloud artifacts repositories create ride-app-repo \
    --repository-format=docker \
    --location=us-central1 \
    --description="Docker repository for RideApp"
```

**b. Build and Push (using Podman or Docker):**

*If using Podman, replace `docker` with `podman` in the commands below.*

```bash
# 1. Build the image
podman build --platform linux/amd64 -t us-central1-docker.pkg.dev/PROJECT_ID/ride-app-repo/ride-app .

# 2. Push the image
podman push us-central1-docker.pkg.dev/PROJECT_ID/ride-app-repo/ride-app
```

*Note: We are building for `linux/amd64` to ensure compatibility with Cloud Run.*

### 4. Deploy to Cloud Run

Deploy the image to Cloud Run. Replace `PROJECT_ID` and `RESEND_API_KEY` accordingly.

```bash
gcloud run deploy ride-app \
    --image us-central1-docker.pkg.dev/PROJECT_ID/ride-app-repo/ride-app \
    --platform managed \
    --region us-central1 \
    --allow-unauthenticated \
    --set-env-vars RESEND_API_KEY=your_production_resend_api_key
```

### 5. Verify Deployment

After the deployment completes, the command will output a **Service URL** (e.g., `https://ride-app-xyz-uc.a.run.app`).

1.  Open the URL in your browser.
2.  Verify the application loads correctly.
3.  Test the "Request a Ride" functionality to ensure emails are sent via Resend.

## Updates

To deploy updates, simply repeat steps **3b** (Build and Push) and **4** (Deploy).
