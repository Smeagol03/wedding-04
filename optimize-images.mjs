import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
  path.join(__dirname, "src", "mempelai"),
  path.join(__dirname, "src", "dekor"),
];

async function optimizeImages() {
  for (const dir of directories) {
    try {
      const files = await fs.readdir(dir);

      for (const file of files) {
        if (
          file.endsWith(".jpg") ||
          file.endsWith(".png") ||
          file.endsWith(".jpeg")
        ) {
          const inputPath = path.join(dir, file);
          const outputPath = path.join(
            dir,
            file.replace(/\.(jpg|png|jpeg)$/i, ".webp"),
          );

          console.log(`Optimizing: ${file}...`);

          await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);

          console.log(`Saved optimized: ${path.basename(outputPath)}`);
        }
      }
    } catch (error) {
      console.error(`Error processing directory ${dir}:`, error);
    }
  }
}

optimizeImages().then(() => console.log("Done optimizing images."));
