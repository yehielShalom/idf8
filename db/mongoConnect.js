const mongoose = require("mongoose");
const { config } = require("../config/secret");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://${config.USER_DB}:${config.PASS_DB}@yehielsh.74bzrg5.mongodb.net/idf8`
  );
  console.log("mongo connect idf8 yehiel");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
