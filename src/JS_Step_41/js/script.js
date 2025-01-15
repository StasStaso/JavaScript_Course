"use strict";

const inputUah = document.querySelector("#uah"),
  inputUsd = document.querySelector("#usd");

function formatNumberWithSpaces(value) {
  const number = parseFloat(value.replace(/\s/g, ""));
  if (isNaN(number)) return "";
  return new Intl.NumberFormat("en-US").format(number).replace(/,/g, " ");
}

inputUah.addEventListener("input", () => {
  const rawValue = inputUah.value.replace(/\s/g, "");
  inputUah.value = formatNumberWithSpaces(rawValue);
  const request = new XMLHttpRequest();
  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);

      const usdValue = (+rawValue / data.current.usd).toFixed(2);
      inputUsd.value = formatNumberWithSpaces(usdValue);
    } else {
      inputUsd.value = "not work";
    }
  });
});
