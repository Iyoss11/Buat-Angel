const messages = [
    "Beneran ni? ",
    "Boong aja",
    "serius lah sikit",
    " Hiekkk?",
    "Think again bro",
    "Nangis nih guwaa",
    "Beneran inii",
    "I will be very very very sad...",
    "Dahlah ngambek guaa",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
