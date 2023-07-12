const buttons = document.querySelectorAll('.container button');
const divs = document.querySelectorAll('.tog');

// Add click event listeners to the buttons
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Hide all divs
    divs.forEach((div) => {
      div.classList.remove('display');
      div.classList.add("display-none")
    });

    //show the wanted div
    divs[index].classList.add("display");
    divs[index].classList.remove("display-none");
  });
});
