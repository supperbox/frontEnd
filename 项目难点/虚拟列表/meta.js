let arr = [];

for (let i = 0; i < 1000; i++) {
  let list = {};
  list.index = i;
  list.name = i % 2 === 0 ? "jlw" : "ghl";
  arr.push(list);
}

let container = document.getElementsByClassName("container")[0];
let background = document.getElementsByClassName("background")[0];
let lists = document.getElementsByClassName("lists")[0];

for (let i = 0; i < 15; i++) {
  let list = document.createElement("p");
  list.className = "list";
  list.innerHTML = arr[i].index + " " + arr[i].name;
  lists.appendChild(list);
}

background.style.cssText = "height:" + arr.length * 30 + "px;width:100%";

container.addEventListener("scroll", (e) => {
  let top = container.scrollTop;
  if (top % 50 === 0) {
    lists.style.top = top + "px";
    changeText(top / 50);
  }
});

function changeText(num) {
  let listArr = arr.slice(num, num + 15);
  [...document.getElementsByClassName("list")].forEach((item, index) => {
    item.innerText = listArr[index].index + " " + listArr[index].name;
  });
}
