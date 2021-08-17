let screen = document.getElementById("screen");
screen.classList.add('p-4', 'font-medium');
const buttons = document.querySelectorAll('.button-value');

function updateScreenValue(buttonText) {
    screen.value += buttonText;
}

for (const button of buttons) {
    button.classList.add(
      "p-4",
      "text-center",
      "font-bold",
      "bg-green-400",
      "rounded-full",
      "cursor-pointer");
    button.addEventListener('click', function (event) {
        let buttonText = event.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            updateScreenValue(buttonText);
        }
        else if (buttonText == '=') {
            screen.value = eval(screen.value);
        }
        else if (buttonText == 'C') {
            screen.value = screen.value.slice(0, -1);
        }
        else if (buttonText == 'Clear' || buttonText == 'emp') {
            screen.value = '';
        }
        else {
            updateScreenValue(buttonText);
        }
        }
    )
}