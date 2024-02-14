const cors = require("cors");
const express = require("express");
const app = express();
const connectDb = require("./src/config/connectDB");
const router = require("./src/routes/index");
app.use(express.json());
app.use(cors())
// firebase.init();
router.init(app);


const port = 3000

app.listen(port, () => {
  try {
    console.log(`Example app listening on port ---> ${port}`)
    // connectDb()
  } catch (error) {
    console.log('show error -> ', error)
  }

})