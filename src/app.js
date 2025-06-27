import "dotenv/config.js";
import express from "express";
import scrapeRouter from "./routes/scrape.js";

const app = express();

app.use(express.json());
app.use("/scrape", scrapeRouter);

app.get("/", (_, res) => {
  res.send("Scraper server is running");
});

app.listen(process.env.PORT, () => {
  console.log(`Scraper server listening on port ${process.env.PORT}`);
});
