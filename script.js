


const bar = document.querySelector('.bar');
// Select the <p> element with the class 'hp'
const percentageElement = document.querySelector('.hp p.subtitle');

var percentage = 0;
// Check if the element exists
if (percentageElement) {
    // Extract the text content
    const textContent = percentageElement.textContent.trim(); // Trim any leading/trailing whitespace
    
    // Split the text content by "/"
    const parts = textContent.split('/');
    
    // Extract the numeric value before the "/"
    percentage = 100 / parts[1] * parts[0];

    
}

if (bar) {
    if(percentage <= 50){
        bar.style.backgroundColor = 'rgba(255,255,0,1)';
        if(percentage <= 10){
            bar.style.backgroundColor = 'rgba(255,0,0,1)';
        }
    }
    bar.style.width = percentage + '%';
}


