let Selects = document.querySelectorAll(".itemSelect");
let items = document.querySelectorAll(".item");
let screenTeyps = document.querySelectorAll(".screen .typeInput");
let i = 0;
let textInput = document.querySelector(".textInput");
let boxNumber = "";
let resultInput = document.querySelector(".textInputResult");

function itemEnput() {
  items.forEach((item) => {
    if (item.classList.contains("active")) {
      let type = item.querySelector(".type").getAttribute("data-type");
      screenTeyps[i].innerHTML = type;
      screenTeyps[i].setAttribute("data-type-input", type);
      textInput.innerHTML = "";
      textInput.setAttribute("data-text-input", "");
      resultInput.innerHTML = "";

      boxNumber = "";
      i++;
    }
  });
  i = i == 2 ? 0 : i;
}
itemEnput();
Selects.forEach((Select) => {
  Select.addEventListener("click", (e) => {
    itemEnput();
    textInput.innerHTML = "";
    resultInput.innerHTML = "";
    boxNumber = "";
    textInput.setAttribute("data-text-input", "");
  });
});

let btnsCalc = document.querySelectorAll(".btnCalc");
btnsCalc.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!btn.classList.contains("opacityBtn")) {
      let nuberText = e.target.getAttribute("data-btn-input");
      boxNumber += nuberText;
      textInput.innerHTML += nuberText;
      textInput.setAttribute("data-text-input", boxNumber);
    }
  });
});

document.querySelector(".Clear").addEventListener("click", () => {
  textInput.innerHTML = "";
  resultInput.innerHTML = "";
  textInput.setAttribute("data-text-input", "");
  boxNumber = "";
});

let equle = document.querySelector(".equle");
let inconHistory = document.querySelector(".inconHistory");
let history = document.querySelector(".history");

equle.addEventListener("click", () => {
  if (resultInput.innerText != "") {
    resultInput.parentElement.classList.add("equalShow");
    textInput.parentElement.classList.add("noShow");

    let creatHustory = document.createElement("div");
    creatHustory.classList.add("saveResult");
    let date = new Date();
    creatHustory.innerHTML = `
        <div class="watheResult">
        <div class="arrow"><i class="bi bi-arrow-90deg-right"></i></div>
        <div class="InputResult">
            <span class="Arch">(</span> <span class="textNumber">${textInput.innerHTML}</span> <span class="Arch">)</span> <span
                class="typeInput">${screenTeyps[0].innerHTML}</span>
        </div>
        <div class="equalResult">=</div>
        <div class="OutputResult">
            <span class="Arch">(</span> <span class="finalResult">${resultInput.innerHTML}</span>  <span class="Arch">)</span>
            <span class="typeInput">${screenTeyps[1].innerHTML}</span>
        </div>
        </div>
        <div class="dateResult"> ${date.toLocaleTimeString()} </div>
        `;
        document.querySelector(".uphistroy").appendChild(creatHustory);

  }
});


inconHistory.addEventListener("click", () => {
  history.classList.toggle("active");
});
document.querySelector(".close").addEventListener("click", () => {
  history.classList.remove("active");
});

