const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://persieahmad:vanpersie@cluster0.eketv.mongodb.net/ebazaar?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
