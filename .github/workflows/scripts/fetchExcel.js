const fs = require("fs");
const path = require("path");
const axios = require("axios");

const DOWNLOAD_URL =
  "https://api.kbland.kr/land-extra/statistics/getfiledown?urlpath=//kbstar/land/statc/tmsr/weekly/b71684f2d72f365b.xlsx&filename=weekly.xlsx";

const savePath = path.join(__dirname, "..", "data", "latest.xlsx");

(async () => {
  try {
    console.log("📥 Downloading latest Excel...");

    const response = await axios.get(DOWNLOAD_URL, {
      responseType: "arraybuffer",
    });

    fs.writeFileSync(savePath, response.data);

    console.log("✅ Excel downloaded:", savePath);
  } catch (err) {
    console.error("❌ Error downloading Excel:", err);
    process.exit(1);
  }
})();
