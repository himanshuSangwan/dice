let page = function () {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomNumber3 = Math.floor(Math.random() * 6) + 1;
  let randomNumber4 = Math.floor(Math.random() * 6) + 1;
  let randomNumber5 = Math.floor(Math.random() * 6) + 1;

  let images1 = "images/dice" + randomNumber1 + ".png";
  let images2 = "images/dice" + randomNumber2 + ".png";
  let images3 = "images/dice" + randomNumber3 + ".png";
  let images4 = "images/dice" + randomNumber4 + ".png";
  let images5 = "images/dice" + randomNumber5 + ".png";

  document.querySelector(".dice .img1").setAttribute("src", images1);
  document.querySelector(".dice .img2").setAttribute("src", images2);
  document.querySelector(".dice .img3").setAttribute("src", images3);
  document.querySelector(".dice .img4").setAttribute("src", images4);
  document.querySelector(".dice .img5").setAttribute("src", images5);

  let sum =
    randomNumber1 +
    randomNumber2 +
    randomNumber3 +
    randomNumber4 +
    randomNumber5;
  document.querySelector("#sum").innerHTML = sum;
};
