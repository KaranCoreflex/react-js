const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require('cors')
// const stripeRoute = require("./routes/stripe");
// const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnection sucessful"))
.catch((Err)=>{console.log(Err)});

app.use(cors());
app.use(express.json())
app.use("/api/users",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

// app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("backend server is running");
})
