function UI() {}
localStorage.setItem("book", "dfgaaaa");
let row = document.querySelector(".row");

let div = document.createElement("div");
div.className = "col-4";
div.classList.remove("col-4");
div.classList.add("col-7");
console.log(div.classList.contains("col-7"));
div.style.backgroundColor = "red";
div.appendChild(document.createTextNode("Hello4"));
let childs = row.children;
console.log(childs.length);

childs[1].style.backgroundColor = "blue";

childs[2].addEventListener("mousemove", runEvent);

function runEvent(e) {
  console.log(e.offsetY);

  childs[2].style.backgroundColor =
    "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}
row.appendChild(div);

let submitBtn = document.querySelector('input[type="submit"]');
let inputBtn = document.querySelector('input[type="text"]');
let form = document.querySelector(".form");

submitBtn.addEventListener("click", handleSubmit);
var id = 0;
function handleSubmit(e) {
  e.preventDefault();

  var item = new TableItem(23, 24, 2323);
  addBook(item);
  let row = document.createElement("tr");
  let td = document.createElement("td");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let button = document.createElement("button");

  button.className = "btn btn-primary mt-1 delete";
  button.appendChild(document.createTextNode("delete"));

  td.appendChild(document.createTextNode(localStorage.getItem("book")));
  td1.appendChild(document.createTextNode(item.age));
  td2.appendChild(document.createTextNode(item.cnp));
  row.appendChild(td);
  td3.appendChild(button);
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);

  document.querySelector(".here").appendChild(row);
  id++;
  inputBtn.value = "";
}

let table = document.querySelector(".table");
let tableb = document.querySelector(".here");
table.addEventListener("click", deleteItem);

function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    let parent = e.target.parentNode.parentNode;
    console.log(parent);
    tableb.removeChild(parent);
  }
}

function TableItem(name, age, cnp) {
  this.name = name;
  this.age = age;
  this.cnp = cnp;
}

TableItem.prototype.display = function () {
  console.log(this.name);
};
function MoreTable(name, age, cnp, title) {
  TableItem.call(this, name, age, cnp);
  this.title = title;
}
var t = new TableItem(223, 3213, 412);
t.display();

MoreTable.prototype = Object.create(TableItem.prototype);
MoreTable.constructor = MoreTable;
var c = new MoreTable("dsd", "4", "342", "532");
c.display();

MoreTable.prototype.displayAge = function () {
  console.log("age:" + this.age);
};

function Item(name, age) {
  this.name = name;
  this.age = age;
}

Object.assign(Item.prototype, MoreTable.prototype, TableItem.prototype);

var i = new Item("dd", "23");

i.display();
i.displayAge();
console.log(i);

//


