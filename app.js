let btn = document.getElementById("btn");
let count = 1;
let incrementing = true;

btn.addEventListener("click", () => {
    if (incrementing) {
      if ( count === 1){
        btn.textContent = "Click me!"
      }
        if (count < 10) {
            count++;
        } else {
            incrementing = false;
            count--;
        }
    } else {
        if (count > 1) {
            count--;
        } else {
            incrementing = true;
            count++;
        }
    }
    btn.textContent = "Clicked " + count;
});
