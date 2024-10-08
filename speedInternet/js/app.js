function speedInternet() {}

var buttonCheck = document.querySelector(".buttonCheck");
var loader = document.querySelector(".loader");
var childSpeed = document.querySelector(".childSpeed");

buttonCheck.addEventListener("click", (e) => {
  e.target.parentNode.classList.add("noActive");
  loader.classList.add("active");

  var imagLink =
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Tokyo_Sky_Tree_2012_%E2%85%A5.JPG",
    downloadSize = 10370000,
    timeStart,
    timeEnd,
    downloadSrc = new Image(),
    timeStart = new Date().getTime();
  var cacheImg = "?nn=" + timeStart;
  downloadSrc.src = imagLink + cacheImg;

  downloadSrc.onload = () => {
    timeEnd = new Date().getTime();
    var timeDuration = (timeEnd - timeStart) / 1000,
      loadedBytes = downloadSize * 8,
      totalSpeed = loadedBytes / timeDuration;
    var unit = "Bps";
    if (totalSpeed > 1024) {
      //get kiloByte
      totalSpeed = totalSpeed / 1024;
      unit = "Kbps";
      if (totalSpeed > 1024) {
        // get Mb
        totalSpeed = totalSpeed / 1024;
        unit = "Mbps";

        if (totalSpeed > 1024) {
          // get gb
          totalSpeed = totalSpeed / 1024;
          unit = "Gbps";
        }
      }
    }
    totalSpeed = totalSpeed.toFixed(2);
    if (totalSpeed) {

      let normaleNumber = document.querySelector(".normaleNumber");
      let pointNumber = document.querySelector(".pointNumber");
      document.querySelector(".unit").innerHTML = unit;
      let total = String(totalSpeed);
      let countSpeed = 0;
      let points = 0;
      let splitNUm = total.split(".");
      setInterval(() => {
        if (countSpeed == Number(splitNUm[0]) && points == Number(splitNUm[1])) {
          return;
        }
        if (points == 99) {
          points = 0;
          countSpeed++;
        }
        points++;

        normaleNumber.innerHTML =
          countSpeed < 10 ? "0" + countSpeed : countSpeed;
        pointNumber.innerHTML = points < 10 ? "0" + points : points;
      }, 0);


      loader.classList.remove("active");
      childSpeed.classList.add("active");
      var numberSpeed = document.querySelectorAll(".numberSpeed");
      let num = 0;
      numberSpeed.forEach((element) => {
        if (Number(element.getAttribute("--data-num")) < totalSpeed) {
          num = element.getAttribute("-num-speed");
        }
      });
      let upMinLine = document.querySelector(".upMinLine");
      let count = 0;
      for (let i = 1; i < 100; i++) {
        if (i < Math.floor(totalSpeed) + 8) {
          count++;
          upMinLine.innerHTML += `<div class="minLine active" style = "--number-min:${i};--d:${
            0.2 * count
          }s;"  -m-number="${i}"></div>`;
        } else if (i <= 65 || i > 99) {
          count++;
          upMinLine.innerHTML += `<div class="minLine" style = "--number-min:${i};--d:${
            0.2 * count
          }s;"  -m-number="${i}"></div>`;
        } else {
          i++;
        }
      }
      let minLine = document.querySelectorAll(".minLine");
      setTimeout(() => {
        minLine.forEach((element) => {
          // if(element.contains("active")){
          element.classList.remove("active");
          // }
        });
      }, 2000);
    
      function   GetIpAddress(){
        fetch('https://jsonip.com/').then(res =>{
            return res.json();
        }).then(data =>{
          GetInternetInfo(data.ip);
        } ).catch(err =>{
            console.log("there error in link "+err);
        } )
    }
    function GetInternetInfo(ip){
        let ipAddress = ip;
        fetch(`http://ip-api.com/json/${ipAddress}`).then(res =>{
            return res.json();
        }).then(data =>{
          document.querySelector('.ipInterenet .ip').innerHTML = data.query;
          document.querySelector('.ipInterenet .org').innerHTML = data.org;
          document.querySelector('.childInterenet .city').innerHTML = data.city;
          document.querySelector('.childInterenet .timeZon').innerHTML = data.timezone;
        }).catch(err =>{
            console.log(" error is not get GetInternetInfo : " + err );
        } )
    }
    GetIpAddress();
    

      let point = totalSpeed - Math.floor(totalSpeed);
      num = Number(num) + Number(point);
      // childSpeed.setAttribute("style", `--needle:${-125 + (31.4 * num)}deg;`);
      childSpeed.setAttribute(
        "style",
        `--needle:${-125 + 3.6 * (Math.floor(totalSpeed) + 8.7)}deg;`
      );
    }
  };
});
