const Data = [
  {
    pair: "1",
    discount: "50",
    discounted_price: "195.00",
    original_price: "390.00",
    size: ["S", "M", "L"],
    color: ["Red", "Green", "Blue"],
    total: "",
  },
  {
    pair: "2",
    discount: "40",
    discounted_price: "588.00",
    original_price: "195.00",
    size: ["S", "M", "L"],
    color: ["Red", "Green", "Blue"],
    extra: "Most Popular",
    total: "360.00",
  },
  {
    pair: "3",
    discount: "60",
    discounted_price: "386.00",
    original_price: "528.00",
    size: ["S", "M", "L"],
    color: ["Red", "Green", "Blue"],
    total: "",
  },
];

const content = document.querySelector(".main-content");
const form = document.createElement("form");
content.append(form);

Data.forEach((el, idx) => {
  const input = document.createElement("input");
  input.addEventListener("change",function(e){
    myFunction(e)
  })
  input.setAttribute("type", "radio");
  input.setAttribute("name", "radioGroup"); 
  const label = document.createElement("label");
  label.innerText = el.pair;

  form.append(input);
  form.append(label);
});

