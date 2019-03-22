const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

const handleCheck = e => {
  const target = e.target;
  const isShiftKey = e.shiftKey;

  let inBetween = false;
  if (isShiftKey && target.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = target;
};
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
