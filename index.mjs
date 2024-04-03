import sharp from "sharp";

const images = [
  // absolute path to image with no extension
];

images.forEach((imagePath) => {
  sharp(imagePath + ".webp")
    .resize(200)
    .toFile(imagePath + "__.webp", (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Image converted successfully:", info);
      }
    });
});
