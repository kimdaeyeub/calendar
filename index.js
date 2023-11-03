const calendar = document.querySelector(".calendar-body");
const title = document.querySelector(".calendar-title");
const thisMonth = document.querySelector(".this-month");

const date = new Date();

const currentYear = new Date(date).getFullYear();
const currentMonth = new Date(date).getMonth() + 1;

const firstDay = new Date(date.setDate(1)).getDay();
const lastDay = new Date(currentYear, currentMonth, 0).getDate();

let htmlDummy = "";

// 한달전 날짜 표시하기
for (let i = 0; i < firstDay; i++) {
  htmlDummy += `<div class="noColor"></div>`;
}

// 이번달 날짜 표시하기
for (let i = 1; i <= lastDay; i++) {
  htmlDummy += `<div class="this-month" id={i}>${i}</div>`;
}

const limitDay = firstDay + lastDay;
const nextDay = Math.ceil(limitDay / 7) * 7;

// 다음달 날짜 표시하기
for (let i = limitDay; i < nextDay; i++) {
  htmlDummy += `<div class="noColor"></div>`;
}
calendar.innerHTML = htmlDummy;
title.innerHTML = `<span class="title">${currentMonth}</span>`;
