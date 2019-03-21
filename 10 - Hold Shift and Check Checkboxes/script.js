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
        console.log("Starting check them in between");
      }
      checkbox.checked = inBetween && true;
      console.log(inBetween);
    });
  }
  lastChecked = target;
};
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
