function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

function downloadPDF() {
    const pdfURL = 'images/Jordan_Wauran.pdf';
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'Jordan_Wauran.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link1.addEventListener('click', () => {
    scrollToElement('.header');
})

link2.addEventListener('click', () => {
    scrollToElement('.second');
})