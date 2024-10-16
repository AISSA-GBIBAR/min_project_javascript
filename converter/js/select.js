let selectBox = document.querySelectorAll(".selectBox");
selectBox.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.parentNode.classList.toggle("active");
  });
});

// const itemElements = document.querySelectorAll(".item");
selectBox.forEach((show) => {
  show.addEventListener("click", (e) => {
    const itemElements = e.target.parentNode.querySelectorAll(".item");
    // console.log(itemElements[1]);
    itemElements.forEach((element) => {
      element.addEventListener("click", (e) => {
         let textType = e.target.querySelector(".typeText");
         e.target.parentNode.parentNode.querySelector(".text").innerHTML = textType.innerText;
        
        itemElements.forEach((item) => {
          item.classList.remove("active");
        });
        e.target.parentNode.parentNode.classList.remove("active");
        element.classList.add("active");
      });
      element.addEventListener("mouseover", () => {
        itemElements.forEach((item) => {
          if (item.classList.contains("active")) {
            item.classList.add("antherHover");
          }
        });
      });
      element.addEventListener("mouseout", () => {
        itemElements.forEach((item) => {
          if (item.classList.contains("antherHover")) {
            item.classList.remove("antherHover");
          }
        });
      });
    });

  });
});
let zonClick = document.querySelectorAll('.zonClick');
zonClick.forEach(zon =>{
  zon.addEventListener('click', ()=>{
    selectBox.forEach(element => {
        element.classList.remove('active');
    });
  });
})
