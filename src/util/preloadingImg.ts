const imgArr = [
  "/images/fhb.png",
  "images/blog.png",
  "images/portfolio.png",
  "images/JoonMono.jpeg",
];

export function preloadingImg() {
  imgArr.forEach((img) => {
    const image = new Image();
    image.src = img;
  });
}
