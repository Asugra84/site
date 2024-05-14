const headerText = document.querySelector('section div h1');
const commandLines = [
    '# ls',
    '/home/about',
    '# rm -rf / --no-preserve-root',
    '# '
];

let lineIndex = 0;
let characterIndex = 0;

function type() {
    if (lineIndex < commandLines.length) {
        if (characterIndex < commandLines[lineIndex].length) {
            headerText.innerHTML += commandLines[lineIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(type, 100); // Délai entre chaque caractère (ajustez selon vos préférences)
        } else {
            if (lineIndex === commandLines.length - 1) {
                setTimeout(blinkCursor, 500); // Démarre le clignotement du curseur après la dernière ligne
            } else {
                headerText.innerHTML += '<br>'; // Saut de ligne après chaque ligne sauf la dernière
            }
            lineIndex++;
            characterIndex = 0;
            setTimeout(type, 1000); // Délai entre chaque ligne (ajustez selon vos préférences)
        }
    }
}

function blinkCursor() {
    const cursor = document.createElement('span');
    cursor.id = 'cursor';
    cursor.textContent = '_';
    headerText.appendChild(cursor);

    setInterval(() => {
        cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);
}

type();
