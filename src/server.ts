import config from "./app/config";
import mongoose from "mongoose";
import app from "./app";
try {
  async function main() {
    await mongoose.connect(config.db_url as string);
  }
  main();
} catch (err) {
  console.log(err);
}

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
