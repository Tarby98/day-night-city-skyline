// JAVASCRIPT FOR CITY SKYLINE //

// TOGGLE DAY / NIGHT MODE //


 const toggleButton = document.getElementById("toggleMode");

  function updateButtonLabel() {
    toggleButton.textContent = document.body.classList.contains("night-mode") 
      ? "🌙 Night Time" 
      : "☀️ Day Time";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
    updateButtonLabel();
  });

  updateButtonLabel();