
document.addEventListener("DOMContentLoaded", function () {



  const mainImage    = document.querySelector(".main-image img");
  const thumbnails   = document.querySelectorAll(".image-gallery img");

  if (mainImage && thumbnails.length > 0) {

    thumbnails.forEach(function (thumb) {

      thumb.addEventListener("click", function () {

        mainImage.src = thumb.src;
        mainImage.alt = thumb.alt;

        thumbnails.forEach(function (t) {
          t.classList.remove("active");
        });

        thumb.classList.add("active");
      });
    });

    thumbnails[0].classList.add("active");
  }



  const tabButtons = document.querySelectorAll(".navigation-buttons button");
  const tabPanels  = document.querySelectorAll(".tab-panel");

  if (tabButtons.length > 0) {

    tabButtons.forEach(function (btn) {

      btn.addEventListener("click", function () {

        tabButtons.forEach(function (b) {
          b.classList.remove("active");
        });

        btn.classList.add("active");

        tabPanels.forEach(function (panel) {
          panel.classList.remove("active");
          panel.style.display = "none";
        });

        const targetId = btn.getAttribute("data-tab");
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.style.display = "block";
          targetPanel.classList.add("active");
        }
      });
    });

    if (tabButtons[0]) {
      tabButtons[0].classList.add("active");
      const firstPanelId = tabButtons[0].getAttribute("data-tab");
      const firstPanel = document.getElementById(firstPanelId);
      if (firstPanel) {
        firstPanel.style.display = "block";
      }
    }

    tabPanels.forEach(function (panel, index) {
      if (index !== 0) {
        panel.style.display = "none";
      }
    });
  }



  const saveForLater = document.querySelector(".save-for-later");

  if (saveForLater) {

    const heartIcon = saveForLater.querySelector("i");
    const saveText  = saveForLater.querySelector("span");
    let isSaved = false;

    saveForLater.addEventListener("click", function () {

      isSaved = !isSaved; 

      if (isSaved) {
        heartIcon.classList.remove("fa-regular");
        heartIcon.classList.add("fa-solid");
        heartIcon.style.color = "#e53935";
        saveText.textContent = "Saved";
        saveForLater.style.color = "#e53935";
      } else {
        heartIcon.classList.remove("fa-solid");
        heartIcon.classList.add("fa-regular");
        heartIcon.style.color = "";
        saveText.textContent = "Save for Later";
        saveForLater.style.color = "";
      }
    });
  }



  const inquiryBtn = document.querySelector(".seller-buttons button:first-child");

  if (inquiryBtn) {

    const feedback = document.createElement("p");
    feedback.textContent = "✓ Inquiry sent! The seller will contact you soon.";
    feedback.style.cssText = `
      font-size: 11px;
      color: #00b517;
      text-align: center;
      display: none;
      margin-top: 4px;
      font-family: 'Poppins', sans-serif;
      animation: fadeIn 0.3s ease;
    `;
    inquiryBtn.parentElement.appendChild(feedback);

    inquiryBtn.addEventListener("click", function () {

      feedback.style.display = "block";

      inquiryBtn.disabled = true;
      inquiryBtn.textContent = "Sent!";
      inquiryBtn.style.background = "#00b517";

      setTimeout(function () {
        feedback.style.display = "none";
        inquiryBtn.disabled = false;
        inquiryBtn.textContent = "Send Inquiry";
        inquiryBtn.style.background = "";
      }, 3000);
    });
  }


  

  const allProductCards = document.querySelectorAll(
    ".you-may-like-box .product-card, .related-grid .related-card"
  );

  allProductCards.forEach(function (card) {

    card.style.position = "relative";

    const heartBtn = document.createElement("button");
    heartBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    heartBtn.setAttribute("aria-label", "Add to wishlist");
    heartBtn.style.cssText = `
      position: absolute;
      top: 6px;
      right: 6px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px solid #e5e7eb;
      background: white;
      color: #0d6efd;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 12px;
      transition: all 0.2s ease;
      z-index: 2;
    `;

    let wishlisted = false;
    heartBtn.addEventListener("click", function (e) {
      e.preventDefault(); 
      wishlisted = !wishlisted;

      const icon = heartBtn.querySelector("i");
      if (wishlisted) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        heartBtn.style.color = "#e53935";
        heartBtn.style.borderColor = "#e53935";
      } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        heartBtn.style.color = "#0d6efd";
        heartBtn.style.borderColor = "#e5e7eb";
      }
    });

    card.appendChild(heartBtn);
  });


});
