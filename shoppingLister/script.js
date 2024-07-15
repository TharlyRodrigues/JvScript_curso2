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

// trabalhando com styles e classes
