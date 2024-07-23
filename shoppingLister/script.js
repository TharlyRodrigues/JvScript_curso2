// function createListItem(item) {
//   const li = document.createElement("li");

//   li.innerHTML = `${item}
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//   document.querySelector(".items").appendChild(li);
// }
// createListItem("Carne");
/*



function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = CreateButton("remove-item btn-link text-red");

  li.appendChild(button);

  document.querySelector(".items").appendChild(li);
}


function CreateButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

createNewItem("Carne");
createNewItem("Pão");


function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl);
}

const li = document.createElement("li");

li.textContent = "Insert Me After!";

const firstItem = document.querySelector("li:first-child");

insertAfter(li, firstItem);



 */

/*
// substitui o primeiro item da lista

function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.querySelector("li");
  li.textContent = "Replace First";

  firstItem.replaceWith(li);
}

// substitui o segundo item da lista

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  secondItem.outerHTML = "<li> Replace Second</li>";
}

replaceSecondItem();
replaceFirstItem();

// substitui todos os items da lista

function replaceAllItem() {
  const lis = document.querySelectorAll("li");
  // lis.forEach((item, index) => {
  //   if (index === 1) {
  //     item.innerHTML = "Second Item";
  //   } else {
  //     // item.outerHTML = "<li>Replace All</li>";
  //     item.innerHTML = "Replace All";
  //   }
  // });

  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? "<li>Second Item</li>" : "<li>Item</li> ")
  );
}

replaceAllItem();

// substitui items por chamada childes

function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");
  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping List";

  header.replaceChild(h2, h1);
}

replaceChildHeading();


*/
/*
// remover items

function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

// remover items de pais
function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

removeClearButton();
// removeFirstItem();

//OUTRAS formas de remover
function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  ul.removeChild(li);
}

function removeItem2(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[itemNumber - 1];
  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  const li = document.querySelectorAll("li");
  li[itemNumber - 1].remove();
}

const removeItem4 = (itemNumber) =>
  document.querySelectorAll("li")[itemNumber - 1].remove();

// removeItem(2);
// removeItem2(1);
// removeItem3(1);
removeItem4(4);
*/
/*
// trabalhando com styles e classes

// trabalhando com Eventos

const clearBtn = document.querySelector("#clear");

function onClear() {
  const itemList = document.querySelector("ul");
  const items = itemList.querySelectorAll("li");

  // itemList.innerHTML = " ";

  // items.forEach((items) => itemList.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}
*/

/*
// events listener

// clearBtn.onclick = function () {
//   alert("Clear items ");
// };

// addEventListener()

// clearBtn.addEventListener("click", function () {
//   alert("clear item");
// });

// clearBtn.addEventListener("click", () => alert("Clear items "));

clearBtn.addEventListener("click", onClear);

// setTimeout(() => clearBtn.removeEventListener("click", onclick), 5000);

// setTimeout(() => clearBtn.click(), 5000);

setTimeout(() => clearBtn.click(), 5000);

// const logo = document.querySelector("img");

// const onClick = () => console.log("click event");

// const onDoubleClick = () => console.log("Double click event");

// // event Listeners

// logo.addEventListener("click", onClick);
// logo.addEventListener("dblClick", onDoubleClick);

// const logo = document.querySelector("img");

const onClick = () => console.log("click on");

const onDubleClick = () => {
  if (document.body.style.backgroundColor !== "purple") {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};
const onRightClick = () => console.log("click right ");

const mouseDownClick = () => console.log("mousedown right ");

const mouseUpClick = () => console.log("mouseup");

const onMouseWheel = () => console.log("wheel");
const onMouseOut = () => console.log("mouseOut");
const onMouseOver = () => console.log("mouseOver");
const dragonStart = () => console.log("dragon Start");
const dragClick = () => console.log("drag event");
const dragEndClick = () => console.log("drag End");

logo.addEventListener("click", onClick);

logo.addEventListener("dblclick", onDubleClick);

// cria um menu
logo.addEventListener("contextmenu", onRightClick);

// Arraste do mouse

logo.addEventListener("mousedown", mouseDownClick);

logo.addEventListener("mouseup", mouseUpClick);

logo.addEventListener("mouseup", mouseUpClick);

// rolagem mouse
logo.addEventListener("wheel", onMouseWheel);

logo.addEventListener("mouseout", onMouseOut);

logo.addEventListener("wheel", onMouseOver);

// rastreamento mouse

logo.addEventListener("dragstart", dragonStart);
logo.addEventListener("drag", dragClick);
logo.addEventListener("dragend", dragEndClick);

// const logo = document.querySelector("img");

*/
// eventos

/*
Propriedades de Coordenadas
e.clientX: Coordenada X do mouse em relação à área visível da janela (viewport).
e.clientY: Coordenada Y do mouse em relação à área visível da janela (viewport).
e.pageX: Coordenada X do mouse em relação ao documento, incluindo a rolagem.
e.pageY: Coordenada Y do mouse em relação ao documento, incluindo a rolagem.
e.screenX: Coordenada X do mouse em relação à tela inteira (monitor).
e.screenY: Coordenada Y do mouse em relação à tela inteira (monitor).
e.offsetX: Coordenada X do mouse em relação ao alvo do evento.
e.offsetY: Coordenada Y do mouse em relação ao alvo do evento.
e.movementX: Mudança de posição X do mouse desde o último evento de mousemove.
e.movementY: Mudança de posição Y do mouse desde o último evento de mousemove.


Propriedades de Botões

e.buttons: Informação sobre quais botões do mouse estão pressionados.
Propriedades de Teclas Modificadoras
e.altKey: Indicador se a tecla Alt está pressionada.
e.ctrlKey: Indicador se a tecla Ctrl está pressionada.
e.shiftKey: Indicador se a tecla Shift está pressionada.
e.metaKey: Indicador se a tecla Meta (tecla Windows ou Command) está pressionada.


Propriedades de Evento de Mouse

e.target: O elemento que disparou o evento.
e.currentTarget: O elemento ao qual o evento foi adicionado.
e.type: O tipo de evento (por exemplo, "click", "mousemove", etc.).
e.timeStamp: O tempo em milissegundos desde que a página foi carregada até o momento em que o evento foi criado.


Propriedades de Contexto
e.relatedTarget: O elemento relacionado ao evento, usado principalmente em eventos de mouseover e mouseout.
e.x: Sinônimo para clientX.
e.y: Sinônimo para clientY.

Propriedades de Deslocamento (apenas leitura)

e.layerX: Coordenada X do mouse em relação à camada do alvo do evento.
e.layerY: Coordenada Y do mouse em relação à camada do alvo do evento.

*/
/*
const logo = document.querySelector("img");

// olhas os elementos
function onClick(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  // e.target.style.backgroundColor = "black";
  // console.log(e.type);
  // x e y mouse nas areas da tela

  // console.log(e.clientY);
  // console.log(e.clientX);

  console.log(e.offsetY);
  console.log(e.offsetX);
}

function onDrag(e) {
  document.querySelector("h1").textContent = `x${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener("click", onClick);

logo.addEventListener("drag", onDrag);

// evento de link

document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();

  console.log("link para clica");
});
*/
/*
const itemInput = document.getElementById("item-input");

const onKeyPress = (e) => {
  console.log("keypress");
};

const onKeyUp = (e) => {
  console.log("keyup");
};

const onKeyDown = (e) => {
  // key
  // if (e.key === "Enter") {
  //   alert("you pressed enter");
  // }
  // keycode

  if (e.keyCode === 13) {
    alert("you pressed enter");
  }
  // code
  if (e.code === "Numpad1") {
    console.log("you pressed 1");
  }

  if (e.repeat) {
    console.log("you are holding " + e.key);
  }
  console.log("shift:" + e.shiftKey);
};

// itemInput.addEventListener("keypress", onKeyPress);

// itemInput.addEventListener("keyup", onKeyUp

itemInput.addEventListener("keydown", onKeyDown);
*/
/*


const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkBox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
  heading.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? "Checked" : "not Checked";
}

function onFocus() {
  console.log("input is focused");
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "1px";
  itemInput.style.outlineColor = "green";
}

function onBlur() {
  console.log("input is not focused");
  itemInput.style.outlineStyle = "none";
}
itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("change", onInput);
checkBox.addEventListener("input", onChecked);
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
*/
/*
const form = document.getElementById("item-form");

function onSubmit(e) {
  e.preventDefault();

  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;
  console.log(item, priority);

  if (item === "" || priority === "0") {
    alert("please fill in all fields");
    return;
  }
}

function oonSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const entries = formData.entries();
  // console.log(entries);

  for (let entry of entries) {
    console.log(entry[1]);
  }

  // const item = formData.get("item");
  // const priority = formData.get("priority");

  // console.log(item, priority);
}

form.addEventListener("submit", oonSubmit2);
*/

/*
const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");

const form = document.querySelector("form");

button.addEventListener("click", () => {
  alert("button was clicked");
  e.stopPropagation();
});

div.addEventListener("click", () => {
  alert("Div was clicked");
});

form.addEventListener("click", () => {
  alert("Form was clicked");
});
*/

// Delegação de eventos e múltiplos elementos

const listItem = document.querySelectorAll("li");
const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

// listItem.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });
