
// Question a)
var firstName = 'Mpho';
var institution = 'IT Varsity';
var gitHubName = 'Zurane';

console.log(`Hi My name is ${firstName} , im a student at ${institution} and my Github username is ${gitHubName}`)

// Question b)
/*

Best Consumer Solution
Best Enterprise Solution
Most Innovative Solution
Best Gaming Solution
Best Health Solution
Best Agricultural Solution
Best Educational Solution
Best Financial Solution
Best Hackathon Solution
Best “South African” Solution
Best Campus Cup Solution
Best African Solution

*/

let outputEl = document.getElementById('output')
catergories = ['Best Consumer Solution', 'Best Enterprise Solution', 'Most Innovative Solution',
    'Best Gaming Solution', 'Best Health Solution', 'Best Agricultural Solution', 'Best Educational Solution', 'Best Financial Solution', 'Best Hackathon Solution',
    'Best South African Solution', 'Best Campus Cup Solution', 'Best African Solution', 'Huawei App Gallery'];


function myDiceRoll() {
    let dice = Math.floor(Math.random() * catergories.length);
    let roll = catergories[dice];
    outputEl.textContent = roll;

}

// Question c)

fetch('mtn_best_campus_challenge_winner_2021.txt')
    .then((response) => response.text())
    .then((text) => console.log(text))


var inputFile = document.getElementById('file-input');

var outputFile = document.getElementById('file-output');

inputFile.addEventListener("change", function () {

    if (this.files && this.files[0]) {

        var myFile = this.files[0];
        var render = new FileReader();

        render.addEventListener('load', function (e) {
            outputFile.textContent = e.target.result;

        });

        render.readAsBinaryString(myFile);
    }
});


