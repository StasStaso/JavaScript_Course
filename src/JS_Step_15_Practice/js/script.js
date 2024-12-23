"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const adv = document.querySelectorAll(".promo__adv img"),
  poster = document.querySelector(".promo__bg"),
  movieList = document.querySelector(".promo__interactive-list"),
  genre = poster.querySelector(".promo__genre");

adv.forEach((element) => {
  element.remove();
});

genre.textContent = "Драма";

poster.style.backgroundImage = "url('img/bg.jpg')";

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1}) ${film}
      <div class="delete"></div>
    </li>
  `;
});
