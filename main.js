let block = document.querySelector("div.block");

// let m = [];

function rondomNumber(max) {
  let r = Math.floor(Math.random() * max);
  return r;
}
let a = document.createElement("h1");
block.prepend(a);
a.textContent = rondomNumber(100);

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    a.textContent = rondomNumber(100);
    // m.push(a.textContent);
    // console.log(JSON.stringify(m));
    // let p = document.createElement("p");
    // block.append(p);
    // p.textContent = JSON.stringify(m);
  }
});
