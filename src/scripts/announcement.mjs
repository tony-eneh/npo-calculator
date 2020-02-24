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
// const programmeDisplacement = document.querySelector('#programme-displacement');
// const programmeAdjacency = document.querySelector('#programme-adjacency');
// const independentProgramme = document.querySelector('#independent-programme');



const calcTotal = () => {
        let total = 0;
        switch (starSelector.value) {
            case 'EARLY_MORNING':
                switch (noOfWords.value) {
                    case '0-25':
                        total = 1500;
                        break;
                    case '26-50':
                        total = 1800;
                        break;
                    case '51-100':
                        total = 2000;
                        break;
                    case '101-150':
                        total = 3000;
                };
                break;
            case 'MORNING':
            case 'EVENING':
                switch (noOfWords.value) {
                    case '0-25':
                        total = 2500;
                        break;
                    case '26-50':
                        total = 3500;
                        break;
                    case '51-100':
                        total = 4500;
                        break;
                    case '101-150':
                        total = 5500;
                };
                break;
            case 'AFTERNOON':
                switch (noOfWords.value) {
                    case '0-25':
                        total = 2000;
                        break;
                    case '26-50':
                        total = 3000;
                        break;
                    case '51-100':
                        total = 4000;
                        break;
                    case '101-150':
                        total = 4500;
                };
                break;
            case 'NIGHT':
                switch (noOfWords.value) {
                    case '0-25':
                        total = 1800;
                        break;
                    case '26-50':
                        total = 2000;
                        break;
                    case '51-100':
                        total = 3000;
                        break;
                    case '101-150':
                        total = 4000;
                };
        }

        // display the total
        totalBox.textContent = `#${total}`;
    }
    //     let amount = getStarValue(starSelector.value) *
    //         getWordsValue(noOfWords.value) *
    //         getHypeLengthValue(hypeLength.value) *
    //         getJingleLengthValue(jingleLength.value);
    //     totalBox.textContent = `#${amount}`;
    // }

console.log(document.URL);

calcTotal();

// add event listeners for recalculating total
starSelector.addEventListener('input', calcTotal);
noOfWords.addEventListener('input', calcTotal);