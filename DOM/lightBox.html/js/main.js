window.addEventListener("load", function () {
  const pics = this.document.querySelectorAll(".pic"); //ul li 여러개이미지
  const lightbox = this.document.querySelector("#lightbox"); //큰이미지
  const lightboxImage = this.document.querySelector("#lightboxImage"); //큰이미지id
  pics.forEach(function (pic) {
    // console.log(pic);
    pic.addEventListener("click", function () {
      // console.log(this);
      const bicImg = this.getAttribute("data-src");
      lightboxImage.setAttribute("src", bicImg);
      lightbox.style.display = "block";
    });
  });
  lightbox.onclick = function () {
    lightbox.style.display = "none";
  };
});
