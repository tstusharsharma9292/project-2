document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("location-modal");
  const openBtn = document.getElementById("change-location-btn");
  const closeBtn = document.getElementById("close-location");
  const applyBtn = document.getElementById("save-location");
  const locationInput = document.getElementById("location-input");
  const deliveryText = document.getElementById("delivery-location");

  if (openBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  if (applyBtn && locationInput && deliveryText) {
    applyBtn.addEventListener("click", () => {
      const location = locationInput.value.trim();

      if (location !== "") {
        deliveryText.textContent = `Delivering to ${location}`;
        localStorage.setItem("deliveryLocation", location);
        modal.style.display = "none";
        locationInput.value = "";
      }
    });
  }

  const savedLocation = localStorage.getItem("deliveryLocation");

  if (savedLocation && deliveryText) {
    deliveryText.textContent = `Delivering to ${savedLocation}`;
  }

  const backdropImages = document.querySelectorAll(".hero img");
  let currentImage = 0;

  if (backdropImages.length > 0) {
    function rotateBackdrop() {
      backdropImages.forEach((img, index) => {
        img.style.opacity = index === currentImage ? "1" : "0";
      });

      currentImage = (currentImage + 1) % backdropImages.length;
    }

    rotateBackdrop();
    setInterval(rotateBackdrop, 5000);
  }

  // --- ADD TO CART SECTION WITH NEW ALERT ---
  let cartCount = 0;
  const cartBadge = document.getElementById("cart-count");
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      cartCount++;

      if (cartBadge) {
        cartBadge.textContent = cartCount;
      }

      // 1. Log a backup to the console to make sure the click fired
      console.log("Add to Cart clicked. Current items: " + cartCount);

      // 2. Trigger the missing alert message!
      alert("Success! Item has been added to your cart.");

      button.textContent = "Added ✓";
      button.style.background = "#73c2fb";

      setTimeout(() => {
        button.textContent = "Add to Cart";
        button.style.background = "#ffd814";
      }, 1200);
    });
  });

  const searchInput = document.querySelector(".search-input");
  const cards = document.querySelectorAll(".shop-card");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.toLowerCase().trim();

      cards.forEach((card) => {
        const text = card.innerText.toLowerCase();

        if (text.includes(term)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  const languageBtn = document.getElementById("language-btn");
  const languageModal = document.getElementById("language-modal");
  const languageLabel = document.getElementById("selected-language");

  if (languageBtn) {
    languageBtn.addEventListener("click", () => {
      languageModal.style.display = "flex";
    });
  }

  if (languageModal) {
    languageModal.addEventListener("click", (e) => {
      if (e.target === languageModal) {
        languageModal.style.display = "none";
      }
    });
  }

  document.querySelectorAll('input[name="lang"]').forEach(radio => {
    radio.addEventListener("change", () => {
      languageLabel.textContent = radio.value;
      localStorage.setItem("amazonLanguage", radio.value);
      languageModal.style.display = "none";
    });
  });

  const savedLang = localStorage.getItem("amazonLanguage");

  if (savedLang) {
    languageLabel.textContent = savedLang;
    const selected = document.querySelector(`input[value="${savedLang}"]`);
    if (selected) {
      selected.checked = true;
    }
  }

  const track = document.querySelector(".carousel-track");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (track && nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: 800, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -800, behavior: "smooth" });
    });
  }

  document.querySelectorAll(".see-all-btn").forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const content = this.previousElementSibling;

      const isHidden = content.style.display === "none" || content.style.display === "";

      if (isHidden) {
        content.style.display = "block";
        this.innerHTML = 'See Less <i class="fa-solid fa-angle-up"></i>';
      } else {
        content.style.display = "none";
        this.innerHTML = 'See All <i class="fa-solid fa-angle-down"></i>';
      }
    });
  });

  const scrollTopBtn = document.getElementById("scroll-top-btn");

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const copyright = document.getElementById("copyright-notice");

  if (copyright) {
    copyright.innerHTML = `©️ 1996–${new Date().getFullYear()}, Amazon.com, Inc. or its affiliates`;
  }

  const dropdown = document.querySelector(".search-dropdown");
  const dropdownBox = document.querySelector(".search-dropdown-box");

  if (dropdown && dropdownBox) {
    const label = document.createElement("span");
    label.textContent = dropdown.value;
    dropdownBox.insertBefore(label, dropdownBox.firstChild);

    dropdown.addEventListener("change", () => {
      label.textContent = dropdown.value;
    });
  }

});