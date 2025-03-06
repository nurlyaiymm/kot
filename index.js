const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON body

// Reviews Data
const reviewsData = [
  {
    weightLoss: "10 kgs",
    weeks: "3",
    text: "This platform is the best thing that has happened to my health. I was shocked how my cravings disappeared!",
    author: "Anshuman Khuranna",
    image: "Rectangle 17.png"
  },
  {
    weightLoss: "12 kgs",
    weeks: "6",
    text: "The best part is not just the weight loss but how much healthier I feel. My energy levels are higher, and I sleep so much better now.",
    author: "Mark Robinson",
    image: "oo.jpg"
  },
  {
    weightLoss: "8 kgs",
    weeks: "4",
    text: "I never thought I could lose weight so quickly while feeling great. The meal plan is amazing!",
    author: "Priya Sharma",
    image: "qwerty.jpg"
  }
];

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Weight Loss Reviews API!");
});

// Get all reviews
app.get("/reviews", (req, res) => {
  res.json(reviewsData);
});

// Get a single review by index
app.get("/reviews/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < reviewsData.length) {
    res.json(reviewsData[index]);
  } else {
    res.status(404).json({ message: "Review not found" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

