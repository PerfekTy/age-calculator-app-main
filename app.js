const btn = document.querySelector(".btn"),
  showYears = document.querySelector(".years"),
  showMonths = document.querySelector(".months"),
  showDays = document.querySelector(".days"),
  form = document.querySelector("form"),
  result = document.querySelector(".result");

form.addEventListener("submit", e => {
  e.preventDefault();
  let year = Number(form.year.value),
    month = Number(form.month.value),
    day = Number(form.day.value);

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  const birthday = new Date(`${year}-${month}-${day}`);
  const currentDay = new Date();
  let yearDiff = currentDay.getFullYear() - birthday.getFullYear(),
    monthDiff = currentDay.getMonth() - birthday.getMonth(),
    dayDiff = currentDay.getDate() - birthday.getDate();

  if (monthDiff < 0 || dayDiff < 0) {
    yearDiff--;
  }

  if (monthDiff < 0) {
    monthDiff += 12;
  }

  if (dayDiff < 0) {
    dayDiff += new Date(
      currentDay.getFullYear(),
      currentDay.getMonth(),
      0
    ).getDate();
  }

  if (day <= 0 || day > 31) {
    showDays.innerText = "--";
  } else {
    showDays.innerText = dayDiff;
  }

  if (month <= 0 || month > 12) {
    showMonths.innerText = "--";
  } else {
    showMonths.innerText = monthDiff;
  }

  if (year <= 0 || year > currentDay.getFullYear()) {
    showYears.innerText = "--";
  } else {
    showYears.innerText = yearDiff;
  }

  result.classList.toggle("active");
});
