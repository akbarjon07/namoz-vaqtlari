'use strict'

const elSelect = document.querySelector(".top-section__select");
const elName = document.querySelector(".middle-section__city-name");
const elTime = document.querySelector(".tong");
const elSecondTime = document.querySelector(".quyosh");
const elThirdTime = document.querySelector(".peshin");
const elFourthTime = document.querySelector(".asr");
const elFifthTime = document.querySelector(".shom");
const elSixthTime = document.querySelector(".xufton");



// <<<<<<<<<<DATES>>>>>>>>>>
const elDay = document.querySelector(".day");
const elMonth = document.querySelector(".month");
const elYear = document.querySelector(".year");
const elHour = document.querySelector(".hour");
const elMinute = document.querySelector(".minute");
const elSecond = document.querySelector(".second");

const baseURL = "https://islomapi.uz/api/present/"


regions.sort().forEach(region => {
  const elOption = document.createElement("option");
  elOption.innerHTML = region;
  elOption.value = region;
  elSelect.appendChild(elOption)
});


elSelect.addEventListener("change", e =>{
  elName.textContent = elSelect.value;

  fetch(baseURL + "day?region=" + elSelect.value)
  .then(res => res.json())
  .then(data => {
    // elSelect.innerHTML = "";
    console.log(data);
    elTime.innerHTML = data.times.tong_saharlik;
    elSecondTime.innerHTML = data.times.quyosh;
    elThirdTime.innerHTML = data.times.peshin;
    elFourthTime.innerHTML = data.times.asr;
    elFifthTime.innerHTML = data.times.shom_iftor;
    elSixthTime.innerHTML = data.times.hufton;
  })
  .catch(err => console.log(err));


})


function updateDate(params) {
  elDay.textContent = new Date().getDate();
  elMonth.textContent = new Date().toLocaleString('uz-Cyrl-UZ', { month: 'long' });
  elYear.textContent = new Date().getFullYear();
}

updateDate()


function updateClock() {
  elHour.textContent = new Date().getHours();
  elMinute.textContent = new Date().getMinutes();
  elSecond.textContent = new Date().getSeconds();
  setTimeout(() => {
    updateClock()
  }, 1000);
}

updateClock()
