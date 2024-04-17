const mongoose = require("mongoose");

const connectdatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ganeshghatti6:sqws9GqDCpSVw0T7@nutrinode.ftatk39.mongodb.net/?retryWrites=true&w=majority&appName=nutrinode"
    );
    console.log("config connected");
    
  } catch (error) {
    console.log("config Failed" + error.message, error);
  }
};
module.exports = connectdatabase;
