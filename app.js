//All of this is actually pretty simple so dont worry! 💖
//An eventListener tracks the mouse X and Y cordinates and rotates the card accordingly. 👍
//Simple but a fun effect

//Items
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  var rect = card.getBoundingClientRect();
  card.addEventListener("mousemove", (e) => {
    let xAxis = (card.clientWidth / 2 - (e.clientX - rect.left)) / 10;
    let yAxis = (card.clientHeight / 2 - (e.clientY - rect.top)) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    console.log(rect.left);
  });

  card.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
  });

  card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });
});

/*
let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    */
