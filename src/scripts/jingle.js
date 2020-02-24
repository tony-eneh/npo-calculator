//implement the amount displaying component
const totalBox = document.querySelector('#total');
const starSelector = document.querySelector('#stars');

// announcement.html
const jingleLength = document.querySelector('#jingle-length');

const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');

//surcharges
const fixedTime = document.querySelector('#fixed-time');
const politicalContent = document.querySelector('#political-content');
const newsContent = document.querySelector('#news-content');
const religiousContent = document.querySelector('#religious-content');
// const programmeDisplacement = document.querySelector('#programme-displacement');
const programmeAdjacency = document.querySelector('#programme-adjacency');
// const independentProgramme = document.querySelector('#independent-programme');



const calcTotal = () => {
    let amount = 0;
    switch (starSelector.value) {
        case 'EARLY_MORNING':
            switch (jingleLength.value) {
                case '5secs':
                    amount = 900;
                    break;
                case '10secs':
                    amount = 1100;
                    break;
                case '15secs':
                    amount = 1400;
                    break;
                case '30secs':
                    amount = 1800;
                    break;
                case '45secs':
                    amount = 2000;
                    break;
                case '60secs':
                    amount = 3000;
            };
            break;
        case 'MORNING':
        case 'EVENING':
            switch (jingleLength.value) {
                case '5secs':
                    amount = 1300;
                    break;
                case '10secs':
                    amount = 1700;
                    break;
                case '15secs':
                    amount = 2200;
                    break;
                case '30secs':
                    amount = 4000;
                    break;
                case '45secs':
                    amount = 4500;
                    break;
                case '60secs':
                    amount = 5000;
            };
            break;
        case 'AFTERNOON':
            switch (jingleLength.value) {
                case '5secs':
                    amount = 1100;
                    break;
                case '10secs':
                    amount = 1400;
                    break;
                case '15secs':
                    amount = 1800;
                    break;
                case '30secs':
                    amount = 3200;
                    break;
                case '45secs':
                    amount = 4200;
                    break;
                case '60secs':
                    amount = 4800;
            };
            break;
        case 'NIGHT':
            switch (jingleLength.value) {
                case '5secs':
                    amount = 1000;
                    break;
                case '10secs':
                    amount = 1300;
                    break;
                case '15secs':
                    amount = 1600;
                    break;
                case '30secs':
                    amount = 3000;
                    break;
                case '45secs':
                    amount = 4000;
                    break;
                case '60secs':
                    amount = 4500;
            };
    }

    // check number of days
    let days = 1;
    if (startDate.value && endDate.value) {
        days = 1 + ((new Date(endDate.value)) - (new Date(startDate.value))) / (24 * 60 * 60 * 1000);
    }
    // check surcharges
    const surcharges = (fixedTime.checked ? 2 : 1) *
        (politicalContent.checked ? 2 : 1) *
        (newsContent.checked ? 2 : 1) *
        (religiousContent.checked ? 1.5 : 1) *
        // (programmeDisplacement.checked ? 2 : 1) *
        (programmeAdjacency.checked ? 1.2 : 1) *
        // (independentProgramme.checked ? 1.5 : 1) *
        1;
    // display the total
    totalBox.textContent = `#${Math.round(amount * days * surcharges)}`;
}

// add event listeners for recalculating total
starSelector.addEventListener('input', calcTotal);
jingleLength.addEventListener('input', calcTotal);
startDate.addEventListener('input', calcTotal);
endDate.addEventListener('input', calcTotal);
fixedTime.addEventListener('input', calcTotal);
politicalContent.addEventListener('input', calcTotal);
newsContent.addEventListener('input', calcTotal);
religiousContent.addEventListener('input', calcTotal);
// programmeDisplacement.addEventListener('input', calcTotal);
programmeAdjacency.addEventListener('input', calcTotal);
// independentProgramme.addEventListener('input', calcTotal);

calcTotal();