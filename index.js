const express=require("express")
const cors = require("cors");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

const email = require("./routes/file");
app.use("/api/v1", email);

const db = require("./config/database");
db.connectWithDb();

app.listen(PORT, () => {
  console.log(`app is listening at port ${PORT}`);
});
