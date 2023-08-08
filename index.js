const Data = [
  {
    pair: "1",
    discount: "50",
    discounted_price: "195.00",
    original_price: "205.00",
    size: ["S", "M", "L"],
    color: ["Colour", "Red", "Green", "Blue"],
  },
  {
    pair: "2",
    discount: "40",
    discounted_price: "345.00",
    original_price: "195.00",
    size: ["S", "M", "L"],
    color: ["Colour", "Red", "Green", "Blue"],
    extra: "Most Popular",
  },
  {
    pair: "3",
    discount: "60",
    discounted_price: "528.00",
    original_price: "195.00",
    size: ["S", "M", "L"],
    color: ["Colour", "Red", "Green", "Blue"],
  },
];

const content = document.querySelector(".main-content");
const form = document.createElement("form");
form.setAttribute("id", "container");
const button = document
  .querySelector("#button")
  .addEventListener("click", () => {
    alert("Added to Cart");
  });
let total = document.querySelector("#total");
total.innerText = "0";

content.append(form);

const displayData = () => {
  Data.forEach((el, idx) => {
    const containerItem = document.createElement("div");

    containerItem.setAttribute("class", "card");

    const topDiv = document.createElement("div");
    const subTopDiv1 = document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("value", el.pair);
    input.setAttribute("name", `choices`);
    input.addEventListener("click", (e) => {
      handleChange(e);
    });

    const inputSibDiv = document.createElement("div");
    const sibDivP1 = document.createElement("p");
    sibDivP1.innerText = `${el.pair} Pair`;
    const sibDivP2 = document.createElement("p");
    sibDivP2.innerText = `DKK ${el.discounted_price}`;
    inputSibDiv.append(sibDivP1, sibDivP2);
    subTopDiv1.append(input, inputSibDiv);

    const subTopDiv2 = document.createElement("div");
    const dividerDiv = document.createElement("div");
    dividerDiv.setAttribute("class", "line-through-divider");
    const subTopDiv2Text1 = document.createElement("p");
    subTopDiv2Text1.setAttribute(
      "class",
      `discounted-price-${Number(el.pair)}`
    );
    subTopDiv2Text1.innerText = `DKK ${el.original_price}`;
    const discountDiv = document.createElement("div");
    if (el.extra) {
      const discountDivText1 = document.createElement("p");
      discountDivText1.innerText = `${el.extra}`;
      discountDivText1.style.color = "#007f61";
      const discountDivText2 = document.createElement("p");
      discountDivText2.innerText = `${el.discount}% OFF`;
      discountDiv.append(discountDivText1, discountDivText2);
    } else {
      const discountDivText = document.createElement("p");
      discountDivText.innerText = `${el.discount}% OFF`;
      discountDiv.append(discountDivText);
    }

    subTopDiv2.append(dividerDiv, subTopDiv2Text1, discountDiv);

    topDiv.append(subTopDiv1, subTopDiv2);

    const bottomDiv = document.createElement("div");
    bottomDiv.setAttribute("id", `hidden-${Number(el.pair)}`);
    bottomDiv.style.display = "none";
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "details-box");

    const subDiv1 = document.createElement("div");
    const sub1 = document.createElement("div");
    const sub2 = document.createElement("div");
    sub2.innerText = "Sizes";

    const sub3 = document.createElement("div");
    sub3.innerText = "Colour";

    subDiv1.append(sub1, sub2, sub3);
    mainDiv.append(subDiv1);

    const Pairs = new Array(Number(el.pair)).fill(0);

    Pairs.forEach((item, idx) => {
      const boxItem = document.createElement("div");
      boxItem.setAttribute("class", "detail-box-items");
      const boxItemDiv1 = document.createElement("div");
      boxItemDiv1.innerText = `#${++idx}`;

      const boxItemDiv2 = document.createElement("div");
      const boxItemDiv2Select = document.createElement("select");
      boxItemDiv2Select.setAttribute("name", "Size");
      boxItemDiv2Select.setAttribute("id", "size");

      el.size.forEach((element) => {
        const option = document.createElement("option");
        option.setAttribute("value", element);
        option.innerText = element;
        boxItemDiv2Select.append(option);
      });
      boxItemDiv2.append(boxItemDiv2Select);

      const boxItemDiv3 = document.createElement("div");
      const boxItemDiv3Select = document.createElement("select");
      boxItemDiv3Select.setAttribute("name", "Colour");
      boxItemDiv3Select.setAttribute("id", "color");
      el.color.forEach((element) => {
        const option = document.createElement("option");
        option.setAttribute("value", element);
        option.innerText = element;
        boxItemDiv3Select.append(option);
      });
      boxItemDiv3.append(boxItemDiv3Select);

      boxItem.append(boxItemDiv1, boxItemDiv2, boxItemDiv3);
      mainDiv.append(boxItem);
      bottomDiv.append(mainDiv);

      containerItem.append(topDiv, bottomDiv);
    });

    form.append(containerItem);
  });
};

displayData();

function handleChange(e) {
  Data.forEach((el) => {
    if (e.target.value === el.pair) {
      let div = document.querySelector(`#hidden-${e.target.value}`);
      let price = document.querySelector(
        `.discounted-price-${Number(el.pair)}`
      );
      let total = document.querySelector("#total");

      total.innerText = `DKK ${Number(el.discounted_price + 15).toFixed(2)}`;
      price.style.color = "#9F9F9F";
      price.style.textDecoration = "line-through";
      div.style.display = "flex";
      div.parentNode.style.transition =
        "background-color 2s ease-out, border-color 2s ease-out";
      div.parentNode.style.backgroundColor = "#F4FBF9";
      div.parentNode.style.borderColor = "#007F61";
    } else {
      let div = document.querySelector(`#hidden-${el.pair}`);
      let price = document.querySelector(
        `.discounted-price-${Number(el.pair)}`
      );
      price.style.color = "white";
      div.style.display = "none";
      div.parentNode.style = "none";
    }
  });
}
