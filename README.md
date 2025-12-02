# WarmPaws — Pet Care in Winter

**Purpose:** A cozy winter companion platform for pet owners to find local winter pet services (clothing, grooming, heated equipment, nutrition & more), book services, and access winter care tips.

**Live link:** https://beautiful-entremet-397db5.netlify.app/  
**GitHub:** https://github.com/Farjana02mim/pet-care-in-winter.git

## Key features
- User authentication with Firebase (Email/Password + Google sign-in)
- Protected Service Details / Booking route (requires login)
- Responsive SPA with persistent navbar/footer
- Swiper hero slider for winter-themed hero
- Example JSON-driven services list (6 services)
- Service details page with "Book Service" form and toast notifications
- Profile page with update-profile button and photo upload (Firebase updateProfile)
- Password validation & visibility toggle
- Environment variables for Firebase config

## Tech / npm packages used
- React (Vite or CRA)
- react-router-dom
- firebase
- swiper
- react-hot-toast
- aos (or framer-motion) for subtle animations
- daisyUI (optional) / Tailwind CSS for quick UI

## Project setup
1. `npm install`
2. Create `.env` file (see `.env.example`)
3. `npm run dev` or `npm start`
4. Deploy (Netlify / Vercel / Firebase Hosting)

## Available scripts
- `npm run dev` — start dev server
- `npm run build` — build production
- `npm run preview` — preview production build

## Environment variables
See `.env.example` in the repo for required keys.



