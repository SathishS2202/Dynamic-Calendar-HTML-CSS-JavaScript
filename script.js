const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
let date = new Date();

function renderCalendar() {
let month = date.getMonth();
let year = date.getFullYear();

document.querySelector(".month-name").textContent = `${monthNames[month]} ${year}`;

let firstDay = new Date(year, month, 1).getDay();
let lastDate = new Date(year, month + 1, 0).getDate();

let days = "";
for (let i = 1; i <= firstDay; i++) {
days += `<div></div>`;
}
for (let i = 1; i <= lastDate; i++) {
if (i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
days += `<div class="today">${i}</div>`;
} else {
days += `<div>${i}</div>`;
}
}
document.querySelector(".days").innerHTML = days;
}

document.querySelector(".prev").onclick = () => {
date.setMonth(date.getMonth() - 1);
renderCalendar();
};

document.querySelector(".next").onclick = () => {
date.setMonth(date.getMonth() + 1);
renderCalendar();
};

renderCalendar();
