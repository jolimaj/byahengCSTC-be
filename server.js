const express = require("express");
const session = require("express-session");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const corsOption = {
  optionsSuccessStatus: 200, // For legacy browser support
  credentials: true, // This is important.
  origin: "*",
};
app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.use(
  session({
    secret: "byahengCSTC",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(cookieParser());

app.use("/", require("./routes"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
