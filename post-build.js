const fs = require("fs-extra");

const path = require("path");

const staticSrcPath = path.join(__dirname, ".next/static");

const staticDestPath = path.join(
  __dirname,
  ".next/standalone/node/cdynnlee-website/.next/static"
);

fs.copy(staticSrcPath, staticDestPath)
  .then(() => console.log("Static files copied successfully."))
  .catch((err) => console.error("Error copying static files:", err));

const publicSrcPath = path.join(__dirname, "public");

const publicDestPath = path.join(
  __dirname,
  ".next/standalone/node/cdynnlee-website/public"
);

fs.copy(publicSrcPath, publicDestPath)
  .then(() => console.log("Public files copied successfully."))
  .catch((err) => console.error("Error copying public files:", err));
