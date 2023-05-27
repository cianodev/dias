const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { default: mongoose } = require("mongoose");
const { path } = require("path");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8080;

// Setup DB
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Data Parsing
app.use(express.json({ limit: "50mb" }));

app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    method: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}

// HTTP Request logger
app.use(morgan("tiny"));

// API Routes

// deployment
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(PORT, console.log(`${PORT}: Server started`));
