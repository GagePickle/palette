const display = document.querySelector("main > div");
const palettes = document.querySelectorAll("div > div");

// computedStyles will include all of the 'numbered color properties'
const computedStyles = getComputedStyle(palettes[0]);

const addPaletteColor = (palette, index) => {
  // Generates the palette
  palette.style.setProperty(
    "background-color",
    computedStyles.getPropertyValue(`--${index}`)
  );

  palette.addEventListener("click", () => {
    resetPalette();

    display.style.setProperty(
      // Which property
      "background-color",
      // What is the value? Get it from the 'indexed' color variables
      palette.style.getPropertyValue("background-color")
    );

    palette.classList.add("grayscale");
  });
};

const resetPalette = () => {
  // This will be on 'null' on first click
  const grayed = document.querySelector(".grayscale");

  // This will prevent console error when 'grayed' is null on first click
  if (grayed) {
    grayed.classList.remove("grayscale");
  }
};

// Use the index of the 'palette' to assign a color from custom properties
palettes.forEach(addPaletteColor);
