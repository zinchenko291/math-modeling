"use strict";

let colors = {
    green: "#54A48B",
    yellow: "#c0a761"
};

let lessonsBtn = document.querySelector("#lessonsBtn");
let worksBtn = document.querySelector("#worksBtn");

let lessonsList = document.querySelector("#lessonsList");
let worksList = document.querySelector("#worksList");
let header = document.querySelector("header");

lessonsBtn.addEventListener("click", (e) => {
    lessonsBtn.classList.add("active");
    worksBtn.classList.remove("active");

    lessonsList.classList.remove("hidden");
    worksList.classList.add("hidden");
    header.classList.remove("work");
})

worksBtn.addEventListener("click", (e) => {
    lessonsBtn.classList.remove("active");
    worksBtn.classList.add("active");

    lessonsList.classList.add("hidden");
    worksList.classList.remove("hidden");
    header.classList.add("work");
})