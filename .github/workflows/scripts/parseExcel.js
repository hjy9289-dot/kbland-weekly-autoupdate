const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

const excelPath = path.join(__dirname, "..", "data", "latest.xlsx");
const outputPath = path.join(__dirname, "..", "data", "weekly.json");

(() => {
  try {
    console.log("📊 Parsing Excel...");

    const workbook = XLSX.readFile(excelPath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const json = XLSX.utils.sheet_to_json(sheet, { defval: "" });

    fs.writeFileSync(outputPath, JSON.stringify(json, null, 2));

    console.log("✅ Parsed JSON saved:", outputPath);
  } catch (err) {
    console.error("❌ Error parsing Excel:", err);
    process.exit(1);
  }
})();
