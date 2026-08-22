const hourHand = document.querySelector("[data-hour]");
const minuteHand = document.querySelector("[data-minute]");
const secondHand = document.querySelector("[data-second]");
const localEl = document.querySelector("[data-local]");
const utcEl = document.querySelector("[data-utc]");

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatStamp(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type) => parts.find((part) => part.type === type)?.value ?? "00";
  return `${get("hour")}:${get("minute")}:${get("second")}`;
}

function tick() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const millis = now.getMilliseconds();

  const secondDeg = (seconds + millis / 1000) * 6;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const hourDeg = (hours + minutes / 60) * 30;

  if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;
  if (minuteHand) minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  if (secondHand) secondHand.style.transform = `rotate(${secondDeg}deg)`;
  if (localEl) localEl.textContent = `${pad(now.getHours())}:${pad(minutes)}:${pad(seconds)}`;
  if (utcEl) utcEl.textContent = `${formatStamp(now, "UTC")}Z`;
}

tick();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reducedMotion) {
  setInterval(tick, 1000);
} else {
  const loop = () => {
    tick();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
