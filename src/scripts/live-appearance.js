//implement the amount displaying component
const totalBox = document.querySelector('#total');
const starSelector = document.querySelector('#stars');

// announcement.html
const duration = document.querySelector('#duration');

const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');

//surcharges
const fixedTime = document.querySelector('#fixed-time');
const politicalContent = document.querySelector('#political-content');
// const newsContent = document.querySelector('#news-content');
const religiousContent = document.querySelector('#religious-content');
const programmeDisplacement = document.querySelector('#programme-displacement');
const programmeAdjacency = document.querySelector('#programme-adjacency');
const independentProgramme = document.querySelector('#independent-programme');



const calcTotal = () => {
    let amount = 0;
    switch (starSelector.value) {
        case 'EARLY_MORNING':
            switch (duration.value) {
                case '5mins':
                    amount = 16500;
                    break;
                case '10mins':
                    amount = 20300;
                    break;
                case '15mins':
                    amount = 22600;
                    break;
                case '30mins':
                    amount = 35000;
                    break;
                case '45mins':
                    amount = 39200;
                    break;
                case '60mins':
                    amount = 55000;
            };
            break;
        case 'MORNING':
        case 'EVENING':
            switch (duration.value) {
                case '5mins':
                    amount = 30000;
                    break;
                case '10mins':
                    amount = 40000;
                    break;
                case '15mins':
                    amount = 50000;
                    break;
                case '30mins':
                    amount = 60000;
                    break;
                case '45mins':
                    amount = 80000;
                    break;
                case '60mins':
                    amount = 100000;
            };
            break;
        case 'AFTERNOON':
            switch (duration.value) {
                case '5mins':
                    amount = 26500;
                    break;
                case '10mins':
                    amount = 35000;
                    break;
                case '15mins':
                    amount = 40000;
                    break;
                case '30mins':
                    amount = 55000;
                    break;
                case '45mins':
                    amount = 68000;
                    break;
                case '60mins':
                    amount = 90000;
            };
            break;
        case 'NIGHT':
            switch (duration.value) {
                case '5mins':
                    amount = 22600;
                    break;
                case '10mins':
                    amount = 30000;
                    break;
                case '15mins':
                    amount = 35000;
                    break;
                case '30mins':
                    amount = 45000;
                    break;
                case '45mins':
                    amount = 55000;
                    break;
                case '60mins':
                    amount = 80000;
            };
    };


    // check number of days
    let days = 1;
    if (startDate.value && endDate.value) {
        days = 1 + ((new Date(endDate.value)) - (new Date(startDate.value))) / (24 * 60 * 60 * 1000);
    }
    // check surcharges
    const surcharges = (fixedTime.checked ? 2 : 1) *
        (politicalContent.checked ? 2 : 1) *
        // (newsContent.checked ? 2 : 1) *
        (religiousContent.checked ? 1.5 : 1) *
        (programmeDisplacement.checked ? 2 : 1) *
        (programmeAdjacency.checked ? 1.2 : 1) *
        (independentProgramme.checked ? 1.5 : 1);
    // display the total
    totalBox.textContent = `#${Math.round(amount * days * surcharges)}`;
}

// add event listeners for recalculating total
starSelector.addEventListener('input', calcTotal);
duration.addEventListener('input', calcTotal);
startDate.addEventListener('input', calcTotal);
endDate.addEventListener('input', calcTotal);
fixedTime.addEventListener('input', calcTotal);
politicalContent.addEventListener('input', calcTotal);
// newsContent.addEventListener('input', calcTotal);
religiousContent.addEventListener('input', calcTotal);
programmeDisplacement.addEventListener('input', calcTotal);
programmeAdjacency.addEventListener('input', calcTotal);
independentProgramme.addEventListener('input', calcTotal);

calcTotal();