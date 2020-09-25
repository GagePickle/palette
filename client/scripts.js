const display = document.querySelector("main > div");
const palettes = document.querySelectorAll("div > div");

// computedStyles will include all of the 'numbered color properties'
const computedStyles = getComputedStyle(palettes[0]);

// Use the index of the 'palette' to assign a color from custom properties
palettes.forEach((palette, index) => {
  palette.style.setProperty(
    "background-color",
    computedStyles.getPropertyValue(`--${index}`)
  );

  palette.addEventListener("click", () => {
    display.style.setProperty(
      "background-color",
      palette.style.getPropertyValue("background-color")
    );

    palette.classList.add("grayscale");
  });
});
