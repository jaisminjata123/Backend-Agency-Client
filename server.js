const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Route = require("./routes/agencyClientRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
const { application } = require("express");

dotenv.config();
mongoose.set('strictQuery', true);


mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });


app.use(cors());
app.use(express.json());
app.use("/api", Route);


app.listen(process.env.PORT || 8080, () => {
    console.log("Backend server is running!");
});