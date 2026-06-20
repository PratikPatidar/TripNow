if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config();
}

const express = require("express"),
    mongoose = require("mongoose"),
    ejsMate = require("ejs-mate"),
    path = require("path"),
    session = require("express-session"),
    flash = require("connect-flash"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    mongoSanitize = require("express-mongo-sanitize"),
    helmet = require("helmet"),
    MongoStore = require("connect-mongo");

const User = require("./models/user");

const flightRoutes = require("./routes/flight");
const authRoutes = require("./routes/auth");

// const dbUrl = process.env.dbURL || "mongodb://127.0.0.1:27017/TripNow";
// mongoose.connect(dbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).catch(err => {
//     console.log("MongoDB Connection Error (Is MongoDB running locally?):", err.message);
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "Connection Error:"));
// db.once("open", () => {
//     console.log("Database Connected")
// });

const app = express();

app.use(express.json()); // To parse JSON bodies

// --- NEW API ROUTE FOR REACT FRONTEND ---
app.post('/api/flights', async (req, res) => {
    try {
        const { from, to, date, passengers } = req.body;
        
        const prompt = `You are a flight search API. The user wants flights from ${from} to ${to} on ${date} for ${passengers} passengers. 
Generate a realistic JSON array of 3 flights.
Required properties for each flight object:
- "id": a unique integer (1, 2, 3)
- "airline": realistic airline name (e.g., Air India, Indigo)
- "from": departure time (e.g., "08:00 AM")
- "to": arrival time (e.g., "10:30 AM")
- "duration": flight duration (e.g., "2h 30m")
- "price": price starting with $ (e.g., "$120")
Return ONLY the JSON array, no markdown formatting.`;

        const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AIzaSyDnos-Ij-ndWg1LO5X8id7ql4Uh1BAaPlI";
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        let aiText = data.candidates[0].content.parts[0].text;
        
        // Clean up markdown block if present
        aiText = aiText.replace(/```json/g, '').replace(/```/g, '').trim();
        
        const flights = JSON.parse(aiText);
        res.json({ success: true, data: flights });
    } catch (error) {
        console.error("Gemini Error:", error);
        res.status(500).json({ error: "Failed to fetch flights" });
    }
});
// ----------------------------------------

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// const store = MongoStore.create({
//     mongoUrl: dbUrl,
//     secret: process.env.dbSECRET,
//     touchAfter: 24 * 60 * 60
// });
// store.on("error", function (err) {
//     console.log("Session Store Error", err);
// });

// Legacy Auth/Session Logic commented out for AI SPA Mode
// const sessionConfig = { ... }
// app.use(session(sessionConfig));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    // res.locals.currentUser = req.user;
    next();
});

// Serve the built React static files
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

app.use((err, req, res, next) => {
    console.log(err.message);
    req.flash("error", "Oh No, Something Went Wrong!");
    res.redirect("/");
});


const port = process.env.PORT || "5000";
app.listen(port, () => {
    console.log(`Server live at ${port}`);
});