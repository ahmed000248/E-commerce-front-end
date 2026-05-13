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
