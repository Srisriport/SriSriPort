const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://srisriport:Relaunch2024@cluster0.vpnyv.mongodb.net/").then(() => {
    console.log("connection successfull");
}).catch((err) => {
    console.log("connection failed");
});
