let span = document.querySelectorAll("span");

for (i = 0; i < span.length; i++) {
  span[i].addEventListener("mouseover", function (e) {
    e.target.style.fontSize = "4.5rem";
    setTimeout(() => {
      e.target.style.fontSize = "4rem";
    }, 1000);
  });
}
