
<h1 align="center">Bona – A URL Shortener</h1>

<p align="center">
  Shorten long links into clean, shareable URLs with instant redirects and simple analytics.
</p>
<p align="center">
  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3dtYmZjZXF6NnZsMXR0NHg0YjA5bjRwamd6em5jNnIwZGNkbzZoaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nN1EcdaJgv7liAvgx9/giphy.gif"
       alt="Header GIF" />
</p>

## About This Project
Bona is a lightweight, fast URL shortener built with Node.js and Express, using Jade (Pug) for templating. It provides:
- Quick link shortening
- Instant redirects with unique codes
- Basic analytics (click counts, timestamps)
- Clean server-side rendered views

## Live Demo
- App: https://bonaaurlshortener-production.up.railway.app/

## Tech Stack
- Backend: Node.js, Express.js
- Views: Jade (Pug)
- Database: MongoDB (for URL storage and analytics)
- Deployment: Railway
- Package Manager: npm

## Key Features
- Shorten URLs instantly
- Custom short codes (optional, if enabled)
- Track basic usage analytics
- Server-rendered pages using Jade/Pug
- Simple forms to create and manage links

## API Overview
- POST /shorten  
  Create a short URL from a long URL (body: url, optional: customCode)
- GET /:code  
  Redirect to the original long URL
- GET /analytics/:code  
  View basic analytics for a short link (clicks, last access time)

Note: Exact routes may vary slightly based on your controllers and views.

## Installation & Setup

Prerequisites
- Node.js (v14+)
- npm
- MongoDB connection string (local or Atlas)

1. Clone the repository
```
git clone https://github.com/ANUBHAV-03042004/url_shortener.git
cd url_shortener
```

2. Install dependencies
```
npm install
```

3. Environment variables
Create a .env file in the root:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
NODE_ENV=development
```

4. Run the app
```
npm start
```
The app runs at http://localhost:5000

## Usage Guide
- Open the homepage
- Paste a long URL into the form
- Submit to generate a short link
- Share the short link; visiting it will redirect to the original URL
- View analytics for a short code if enabled

## Project Highlights
- Clean Jade/Pug templates for views
- Modular structure with controllers, models, routes, and views
- Friendly UI for creating and managing shortened links
- Production-ready deployment on Railway

## Deployment (Railway)
- Connect your GitHub repo to Railway
- Set environment variables in the Railway dashboard:
  - MONGODB_URI
  - BASE_URL (e.g., your Railway domain)
  - PORT (Railway will often set this automatically)
- Deploy with one click

## Contributing
Contributions are welcome!
- Add features (custom domains, QR codes, expiration dates)
- Enhance analytics (unique visitors, referrers)
- Improve UI (themes, responsive design)
- Report bugs and suggest improvements

Steps:
1. Fork the repo
2. Create a feature branch: `git checkout -b feature/NewFeature`
3. Commit: `git commit -m 'Add NewFeature'`
4. Push: `git push origin feature/NewFeature`
5. Open a Pull Request

## License
MIT License

## Acknowledgments
- Jade (Pug) – for simple, elegant templating
- Express.js & Node.js – core backend
- MongoDB – storage and analytics
- Railway – fast, reliable deployment
<p align="center">
  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGw5enp0c2F5NG80cDNzNzR1aWF4OGp3cGZ5YjRrcjAxOXVlMGtocyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/W0cCu4aMtRG3djyzJz/giphy.gif"
       alt="Footer GIF" />
</p>
<p align="center"><strong>Shorten smart. Share faster. Go Bona!</strong></p>
