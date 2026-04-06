require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./config/db");

connectDB();

const PORT = 5001;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
