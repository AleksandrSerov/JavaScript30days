const panels = document.querySelectorAll(".panel");

panels.forEach(panel =>
  panel.addEventListener("click", () => {
    panel.classList.toggle("open");
    setTimeout(() => {
      panel.classList.toggle("open-active");
    }, 800);
  })
);
