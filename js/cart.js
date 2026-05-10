document.addEventListener("DOMContentLoaded", function () {


 

  function updateCartCount() {
    const items = document.querySelectorAll(".cart-item");
    document.getElementById("cart-count").textContent = items.length;
  }

  document.querySelectorAll(".btn-remove").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".cart-item");
      item.style.transition = "opacity 0.3s ease";
      item.style.opacity = "0";
      setTimeout(function () {
        item.remove();
        updateCartCount();
      }, 300);
    });
  });



  const removeAllBtn = document.querySelector(".btn-remove-all");

  if (removeAllBtn) {
    removeAllBtn.addEventListener("click", function () {
      const confirmed = confirm("Remove all items from your cart?");
      if (confirmed) {
        document.querySelectorAll(".cart-item").forEach(function (item) {
          item.remove();
        });
        updateCartCount();
      }
    });
  }



  document.querySelectorAll(".btn-save").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".cart-item");
      showToast("Item saved for later!");
      item.style.transition = "opacity 0.3s ease";
      item.style.opacity = "0";
      setTimeout(function () {
        item.remove();
        updateCartCount();
      }, 300);
    });
  });




  document.querySelectorAll(".btn-move").forEach(function (btn) {
    btn.addEventListener("click", function () {
      showToast("Item moved to cart!");
    });
  });


 

  const couponBtn = document.getElementById("coupon-btn");
  const couponInput = document.getElementById("coupon-input");

  const validCoupons = {
    "SAVE10": 10,
    "DISCOUNT20": 20,
    "WELCOME5": 5
  };

  if (couponBtn) {
    couponBtn.addEventListener("click", function () {
      const code = couponInput.value.trim().toUpperCase();

      if (code === "") {
        showToast("Please enter a coupon code.", "error");
        return;
      }

      if (validCoupons[code]) {
        const percent = validCoupons[code];
        showToast(`Coupon applied! ${percent}% off your order.`, "success");
        couponInput.value = "";
        couponInput.placeholder = `${code} applied ✓`;
        couponInput.disabled = true;
        couponBtn.textContent = "Applied";
        couponBtn.disabled = true;
      } else {
        showToast("Invalid coupon code. Try SAVE10.", "error");
      }
    });
  }


  // =========================
  // CHECKOUT BUTTON
  // =========================

  const checkoutBtn = document.querySelector(".btn-checkout");

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
      const items = document.querySelectorAll(".cart-item");
      if (items.length === 0) {
        showToast("Your cart is empty!", "error");
      } else {
        showToast("Redirecting to checkout...", "success");
      }
    });
  }



  function showToast(message, type = "success") {
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 13px;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      color: white;
      z-index: 9999;
      background: ${type === "error" ? "#e53935" : "#00b517"};
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
      animation: slideUp 0.3s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(function () {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s ease";
      setTimeout(function () { toast.remove(); }, 300);
    }, 2500);
  }


 

  const basePrices = [78.99, 39.00, 170.50];

  document.querySelectorAll(".qty-select").forEach(function (select, index) {
    select.addEventListener("change", function () {
      const qty = parseInt(select.value.replace("Qty: ", ""));
      const newPrice = (basePrices[index] * qty).toFixed(2);
      const priceEl = select.closest(".item-right").querySelector(".item-price");
      if (priceEl) {
        priceEl.textContent = "$" + newPrice;
      }
    });
  });


}); 
