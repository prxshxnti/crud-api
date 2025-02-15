const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API updated");
});

mongoose
  .connect(
    "mongodb+srv://admin:node123@backenddb.lad7ynl.mongodb.net/Crud-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Database Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => console.log("Not connected"));
