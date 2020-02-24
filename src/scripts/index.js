//implement the amount displaying component
const totalBox = document.querySelector('#total');
const starSelector = document.querySelector('#stars');

const getStarValue = (s.value) => {
    let stars = undefined;
    switch (s.value) {
        case 'EARLY_MORNING':
            stars = 2500;
            break;
        case 'MORNING':
            stars = 4500;
            break;
        case 'AFTERNOON':
            stars = 4000;
            break;
        case 'EVENING':
            stars = 3500;
            break;
        case 'NIGHT':
            stars = 3000;
    };
    return stars;
};

// hype.html
const hypeLength = document.querySelector('#duration');
// announcement.html
const noOfWords = document.querySelector('#no-of-words');
// jingle.html
const jingleLength = document.querySelector('#jingle-length');
// live-appearance.html
const liveAppearanceDuration = document.querySelector('#duration');
// news-coverage.html
const eventType = document.querySelector('#event-type');
const liveCoverage = document.querySelector('#live-coverage');
const newsCoverage = document.querySelector('#news-coverage')
    // programme-sponsorship.html
const programmeLength = document.querySelector('#programme-length');

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

const calcAnnouncement = () => {

}

const calcHype = () => {

}

const calcJingle = () => {

}

const calcLiveAppearance = () => {

}

const calcNewsCoverage = () => {

}

const calcProgrammeSponsorship = () => {

}

const calcTotal = () => {
    // switch (document.URL) {
    //     case '':
    //         calcAnnouncement(s);
    //         break;
    //     case 'hype.html':
    //         calcHype();
    //         break;
    // }

    let amount = getStarValue(starSelector.value) *
        getWordsValue(noOfWords.value) *
        getHypeLengthValue(hypeLength.value) *
        getJingleLengthValue(jingleLength.value);
    totalBox.textContent = `#${amount}`;
}

console.log(document.URL);
console.log(eventType);

// calcTotal();

// add event listeners for recalculating total
starSelector.addEventListener('input', calcTotal);