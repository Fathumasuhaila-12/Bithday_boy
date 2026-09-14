/* =========================================================
   BIRTHDAY WISH WEBPAGE - script.js
   Plain JavaScript only. No libraries/frameworks.
   Handles: section navigation (menu <-> galleries) and
   a simple birthday message animation trigger.
   ========================================================= */

// Run everything after the HTML has fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // ---------------------------------------------------------
  // 1. GRAB THE MAIN SECTIONS
  // ---------------------------------------------------------
  // These are the three "pages" of our single-page site.
  // Update the IDs here if your HTML uses different names.
  const homeSection = document.getElementById("home-section");
  const favoritePersonSection = document.getElementById("favorite-person-section");
  const beautifulMomentsSection = document.getElementById("beautiful-moments-section");

  // Put them together in one array so we can loop through easily
  const allSections = [homeSection, favoritePersonSection, beautifulMomentsSection];

  // ---------------------------------------------------------
  // 2. GRAB THE BUTTONS / LINKS
  // ---------------------------------------------------------
  const favoritePersonBtn = document.getElementById("favorite-person-btn");
  const beautifulMomentsBtn = document.getElementById("beautiful-moments-btn");

  // "Back to home" buttons (one inside each gallery section)
  const backButtons = document.querySelectorAll(".back-home-btn");

  // ---------------------------------------------------------
  // 3. HELPER FUNCTION - SHOW ONE SECTION, HIDE THE REST
  // ---------------------------------------------------------
  function showSection(sectionToShow) {
    allSections.forEach(function (section) {
      if (!section) return; // skip if that section wasn't found in the HTML

      if (section === sectionToShow) {
        section.classList.remove("hidden"); // reveal the chosen section
        section.classList.add("active");
      } else {
        section.classList.add("hidden");    // hide all others
        section.classList.remove("active");
      }
    });

    // Scroll smoothly to the top whenever we switch sections
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------------------------------------------------------
  // 4. PHOTO MENU - BUTTON CLICK EVENTS
  // ---------------------------------------------------------

  // Show "My Favorite Person" solo photo gallery
  if (favoritePersonBtn) {
    favoritePersonBtn.addEventListener("click", function () {
      showSection(favoritePersonSection);
    });
  }

  // Show "Beautiful Moments" candid/memory photo gallery
  if (beautifulMomentsBtn) {
    beautifulMomentsBtn.addEventListener("click", function () {
      showSection(beautifulMomentsSection);
    });
  }

  // ---------------------------------------------------------
  // 5. NAVIGATION - RETURN TO HOME FROM ANY GALLERY
  // ---------------------------------------------------------
  backButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      showSection(homeSection);
    });
  });

  // ---------------------------------------------------------
  // 6. BIRTHDAY MESSAGE ANIMATION
  // ---------------------------------------------------------
  // The main animation look (fade/float/etc.) lives in CSS.
  // Here we just add a class once the page loads, which
  // triggers that CSS animation to play smoothly.
  const birthdayMessage = document.getElementById("birthday-message");

  if (birthdayMessage) {
    // Small delay so the animation feels intentional, not instant
    setTimeout(function () {
      birthdayMessage.classList.add("show-message");
    }, 300);
  }

  // ---------------------------------------------------------
  // 7. INITIAL STATE - MAKE SURE ONLY HOME IS VISIBLE ON LOAD
  // ---------------------------------------------------------
  showSection(homeSection);

});