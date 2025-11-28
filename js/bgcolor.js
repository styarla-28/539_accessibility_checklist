const colors = ['#feffb1', '#c1ffb1', '#b1fbff', '#ffe2b1', '#fab1ff', '#ddb1ff'];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Apply random colors to all sticky notes when page loads
document.addEventListener('DOMContentLoaded', function () {
    const stickyNotes = document.querySelectorAll('.sticky-note');

    stickyNotes.forEach(note => {
        note.style.background = getRandomColor();
    });
});