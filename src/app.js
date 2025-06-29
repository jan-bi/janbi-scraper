import "dotenv/config.js";
import express from "express";
import scrapeRouter from "./routes/scrape.js";
import httpStatusCode from "./utils/httpStatusCode.js";

const app = express();

app.use(express.json());
app.use("/scrape", scrapeRouter);

app.get("/", (_, res) => {
  res.status(httpStatusCode.OK).send("Scraper server is running");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Scraper server listening on port ${PORT}`);
});
