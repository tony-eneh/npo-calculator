//implement the amount displaying component
const totalBox = document.querySelector('#total');
const starSelector = document.querySelector('#stars');

// announcement.html
const noOfWords = document.querySelector('#no-of-words');

const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');

//surcharges
const fixedTime = document.querySelector('#fixed-time');
const politicalContent = document.querySelector('#political-content');
const newsContent = document.querySelector('#news-content');
const religiousContent = document.querySelector('#religious-content');
const programmeDisplacement = document.querySelector('#programme-displacement');
const programmeAdjacency = document.querySelector('#programme-adjacency');
const independentProgramme = document.querySelector('#independent-programme');

// bookAd button
const bookAd = document.querySelector('#bookAd');
const saveAd = document.querySelector('#saveAd');



const calcTotal = () => {
    let amount = 0;
    switch (starSelector.value) {
        case 'EARLY_MORNING':
            switch (noOfWords.value) {
                case '0-25':
                    amount = 1500;
                    break;
                case '26-50':
                    amount = 1800;
                    break;
                case '51-100':
                    amount = 2000;
                    break;
                case '101-150':
                    amount = 3000;
            };
            break;
        case 'MORNING':
        case 'EVENING':
            switch (noOfWords.value) {
                case '0-25':
                    amount = 2500;
                    break;
                case '26-50':
                    amount = 3500;
                    break;
                case '51-100':
                    amount = 4500;
                    break;
                case '101-150':
                    amount = 5500;
            };
            break;
        case 'AFTERNOON':
            switch (noOfWords.value) {
                case '0-25':
                    amount = 2000;
                    break;
                case '26-50':
                    amount = 3000;
                    break;
                case '51-100':
                    amount = 4000;
                    break;
                case '101-150':
                    amount = 4500;
            };
            break;
        case 'NIGHT':
            switch (noOfWords.value) {
                case '0-25':
                    amount = 1800;
                    break;
                case '26-50':
                    amount = 2000;
                    break;
                case '51-100':
                    amount = 3000;
                    break;
                case '101-150':
                    amount = 4000;
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
        (programmeDisplacement.checked ? 2 : 1) *
        (programmeAdjacency.checked ? 1.2 : 1) *
        (independentProgramme.checked ? 1.5 : 1);
    // display the total
    totalBox.textContent = `#${Math.round(amount * days * surcharges)}`;
}

// add event listeners for recalculating total
starSelector.addEventListener('input', calcTotal);
noOfWords.addEventListener('input', calcTotal);
startDate.addEventListener('input', calcTotal);
endDate.addEventListener('input', calcTotal);
fixedTime.addEventListener('input', calcTotal);
politicalContent.addEventListener('input', calcTotal);
newsContent.addEventListener('input', calcTotal);
religiousContent.addEventListener('input', calcTotal);
programmeDisplacement.addEventListener('input', calcTotal);
programmeAdjacency.addEventListener('input', calcTotal);
independentProgramme.addEventListener('input', calcTotal);

calcTotal();

// save ad for later
const saveForLater = (e) => {
    // check if user is loggedin
    // prepare form data in api acceptable format
    // if yes, use loggedin credentials and formatted form data to send a post request to save a new ad for later
    // if post request returns ok display success alert and redirect to myAds page
}

const bookAd = (e) => {
    // check if user is loggedin
    // prepare form data in api acceptable format
    // if yes, use loggedin credentials and formatted form data to send a post request to paystack api page
    // TODO: implement paystack payment page with node
}