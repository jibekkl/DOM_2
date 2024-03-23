// // DOM events //
// const h1 = document.querySelector(".h1");
// const block = document.querySelector(".block");
// const div = document.querySelector(".block");

// // div.style.width = "50px";
// div.style.height = "50px";
// div.style.background = "red";
// div.style.display = "none";
// h1.addEventListener("mouseover", () => {
//   h1.style.color = "red";
// });
// h1.addEventListener("mouseout", () => {
//   h1.style.color = "black";
// });

// block.addEventListener("click", () => {
//   div.style.display = "block";
// });

// div.addEventListener("click", () => {
//   div.style.display = "none";
// });
// const text = document.querySelector(".text h1");
const text = document.querySelector(".text");
const block = document.querySelector(".block");
block.style.padding = "5px 10px";
block.style.background = "yellow";
block.style.border = "none";
block.style.borderRadius = "5px";
block.style.cursor = "pointer";
block.style.marginLeft = "550px";
block.style.marginTop = "220px";
block.style.position = "absolute";

text.style.display = "none";

block.addEventListener("click", () => {
  text.style.display = "block";
});

const button = document.querySelector(".text button");
button.addEventListener("click", () => {
  text.style.display = "none";
});

// text1b.style.width = "450px";
// text1b.style.height = "240px";
// text1b.style.background = "yellow";
// text1b.style.display = "flex";
// text1b.style.justifyContent = "center";
// text1b.style.alighItems = "center";
// text1b.style.flexDirection = "column";
