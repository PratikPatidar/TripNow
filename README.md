# TripNow ✈️ 🌐

TripNow is a next-generation AI-powered flight booking application featuring a stunning Glassmorphism UI and dynamic flight generation powered by Google Gemini AI. This project serves as a showcase of modern frontend architecture and AI integration.

## Features ✨

- **AI Flight Generation**: Integrates with Google Gemini to generate dynamic, realistic flight routes, pricing, and timings based on user prompts.
- **Modern SPA Architecture**: Built with React and Vite for blazing-fast client-side routing without page reloads.
- **Glassmorphism UI**: Premium visual aesthetics using translucent backgrounds, gradients, and custom CSS.
- **Dynamic Booking Engine**:
  - Interactive custom passenger dropdown (Adults + Children).
  - Real-time total calculation based on AI-generated flight prices.
  - Interactive modal overlays for booking confirmation.
- **Promo Code System**: Dynamic validation and real-time discount calculation (Use code `SUMMER2026`).
- **Booking History**: State-managed mock authentication flow displaying categorized "Upcoming" and "Past" bookings.

## Tech Stack 🛠️

- **Frontend**: React.js, Vite, Vanilla CSS (Glassmorphism design system)
- **Backend**: Node.js, Express.js
- **AI Integration**: Google Gemini API (`gemini-2.5-flash`)
- **Deployment Ready**: Configured for Render as a unified Web Service (Express serves compiled React static files).

## Installation & Setup 🚀

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pratik/TripNow.git
   cd TripNow
   ```

2. **Install Backend Dependencies**:
   ```bash
   npm install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Environment Variables**:
   Create a `.env` file in the root directory and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

5. **Run Locally**:
   To run both backend and frontend concurrently for development, use two terminal windows:
   - Terminal 1 (Backend): `npm run dev`
   - Terminal 2 (Frontend): `cd frontend && npm run dev`

## Deployment 🌐

This app is pre-configured to be deployed as a single Web Service on Render:
1. Connect this repo to Render.
2. Set Build Command: `npm run build`
3. Set Start Command: `npm start`
4. Add the `GEMINI_API_KEY` to Render Environment Variables.

## Author 👨‍💻
**Pratik**
Frontend Developer
