const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    // Animatsiya vaqtini o'lchash va boshqa elementlarga yetishib olish
    boxes.forEach((otherBox) => {
      if (otherBox !== box) {
        const computedStyle = getComputedStyle(otherBox);
        box.style.backgroundColor = computedStyle.backgroundColor;
        box.style.color = computedStyle.color;
        box.style.borderColor = computedStyle.borderColor;
      }
    });
  });

  // Hoverdan chiqib ketganda animatsiyani qayta tiklash
  box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "";
    box.style.color = "";
    box.style.borderColor = "";
  });
});
const flipButton = document.getElementById("click-btn");
if (flipButton) {
  flipButton.addEventListener("click", function () {
    const card = document.querySelector(".row-custom");
    if (card) {
      card.classList.toggle("flipped");
    }
  });
}

const aiChatIconUrl = "./beautiful_ai_logo.jpg";

function applyAiChatIcon() {
  const bubble = [...document.querySelectorAll("body div")].find((element) => {
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return (
      style.position === "fixed" &&
      style.zIndex === "2147483645" &&
      Math.round(rect.width) === 50 &&
      Math.round(rect.height) === 50 &&
      element.querySelector("svg")
    );
  });

  if (!bubble) {
    return;
  }

  bubble.dataset.toolFinderIcon = "ai";
  bubble.setAttribute("aria-label", "ToolFinder AI yordamchi");
  bubble.style.background = "#ffffff";
  bubble.style.backgroundImage = `url("${aiChatIconUrl}")`;
  bubble.style.backgroundRepeat = "no-repeat";
  bubble.style.backgroundPosition = "center";
  bubble.style.backgroundSize = "34px 34px";
  bubble.style.border = "2px solid rgba(0, 123, 255, 0.35)";

  const svg = bubble.querySelector("svg");
  if (svg) {
    svg.style.display = "none";
  }
}

const chatIconObserver = new MutationObserver(applyAiChatIcon);
chatIconObserver.observe(document.body, { childList: true, subtree: true });
window.addEventListener("load", applyAiChatIcon);
setTimeout(applyAiChatIcon, 1000);
setTimeout(applyAiChatIcon, 2500);
setTimeout(applyAiChatIcon, 4500);
setTimeout(applyAiChatIcon, 6500);
