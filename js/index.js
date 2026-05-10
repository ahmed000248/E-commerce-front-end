// Wait for page to fully load before running ANY JavaScript
document.addEventListener("DOMContentLoaded", function () {


  // =========================
  // GRID / LIST VIEW TOGGLE
  // Only runs if buttons exist (listing page only)
  // =========================

  const gridBtn = document.getElementById("grid-view");
  const listBtn = document.getElementById("list-view");
  const products = document.querySelector(".products");

  if (gridBtn && listBtn && products) {
    gridBtn.onclick = function () {
      products.classList.add("grid");
      products.classList.remove("list");
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
    };

    listBtn.onclick = function () {
      products.classList.add("list");
      products.classList.remove("grid");
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
    };
  }


  // =========================
  // SEARCH BAR
  // =========================

  const searchInput = document.querySelector(".search-container input");
  const searchButton = document.querySelector(".search-container button");
  const categorySelect = document.querySelector('select[aria-label="Select category"]');

  if (searchButton) {
    searchButton.addEventListener("click", function () {
      const searchValue = searchInput.value.trim();
      const categoryValue = categorySelect.value;

      if (searchValue !== "") {
        window.location.href =
          `listing.html?query=${encodeURIComponent(searchValue)}&category=${encodeURIComponent(categoryValue)}`;
      } else {
        alert("Please enter something to search!");
      }
    });
  }


  // =========================
  // LOGO CLICK — go to homepage
  // =========================

  const logo = document.querySelector(".brand-logo img");

  if (logo) {
    logo.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }


  // =========================
  // HERO BUTTONS (index page only)
  // =========================

  const joinBtn = document.querySelector(".join-now");
  const loginBtn = document.querySelector(".login");

  if (joinBtn) {
    joinBtn.addEventListener("click", function () {
      alert("Join feature coming soon!");
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      alert("Login page coming soon!");
    });
  }


  // =========================
  // NEWSLETTER SUBSCRIBE
  // =========================

  const emailInput = document.querySelector("#newsletter-email");
  const subscribeBtn = document.querySelector(".send-mail button");

  if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener("click", function () {
      const email = emailInput.value.trim();

      if (email === "") {
        alert("Please enter an email address!");
      } else if (!email.includes("@")) {
        alert("Please enter a valid email!");
      } else {
        alert("Subscribed successfully!");
        emailInput.value = "";
      }
    });
  }


  // =========================
  // FILTER TAG REMOVAL (listing page only)
  // =========================

  document.querySelectorAll(".remove-tag").forEach((button) => {
    button.addEventListener("click", function () {
      button.parentElement.remove();
    });
  });

  const clearAll = document.querySelector(".clear-all");
  if (clearAll) {
    clearAll.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll(".filter-tag").forEach(function (tag) {
        tag.remove();
      });
    });
  }


  // =========================
  // COUNTDOWN TIMER (index page only)
  // =========================

  const timerDays = document.getElementById("timer-days");
  const timerHours = document.getElementById("timer-hours");
  const timerMins = document.getElementById("timer-mins");
  const timerSecs = document.getElementById("timer-secs");

  if (timerDays) {
    const dealEndDate = new Date("2025-06-01T00:00:00");

    function updateCountdown() {
      const now = new Date();
      const diff = dealEndDate - now;

      if (diff <= 0) {
        timerDays.textContent = "00";
        timerHours.textContent = "00";
        timerMins.textContent = "00";
        timerSecs.textContent = "00";
        return;
      }

      timerDays.textContent = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
      timerHours.textContent = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      timerMins.textContent = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      timerSecs.textContent = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }


}); 