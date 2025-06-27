import express from "express";
import scrapePage from "../services/pageScraper.js";
import httpStatusCode from "../utils/httpStatusCode.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { url, selectors } = req.body;

  if (!url || !Array.isArray(selectors)) {
    return res.status(httpStatusCode.BAD_REQUEST).json({ message: "요청 값이 올바르지 않습니다." });
  }

  try {
    const scrapeResult = await scrapePage(url, selectors);

    return res.status(httpStatusCode.OK).json(scrapeResult);
  } catch (err) {
    console.error("스크래핑 실패", err);
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({ success: false, message: "스크래핑 중 오류가 발생했습니다." });
  }
});

export default router;
