const mongoose = require("mongoose");


const mongoInit =()=>
{
    const mongoAdress = process.env.MONGO_CONNECTION || "mongodb://localhost/compareTestApp"
    mongoose.connect(mongoAdress, {useNewUrlParser: true,  useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log("Connnected to mongo database");
    });
}

module.exports = mongoInit;