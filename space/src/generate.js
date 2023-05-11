import $ from 'jquery';

const divsToTheMoon = 7985;
const numberOfDecimalPlaces = 2;

let units = ["miles", "Eiffel Towers", "football fields", "USAs", "Earths"]
let unitRatios = [1, 4.87534626039, 17.6, 0.00035688793, 0.0001261617]
let unitIndex = 0;

$( document ).ready(function() {
    // To the moon!
    for(let i = 0; i <= divsToTheMoon; i++) {
        $("#mainContainer").append('<div><br></>');
    }

    // Make buttons work
    $("#distanceTracker").click( function () {
        if (unitIndex < units.length - 1) {
            unitIndex = unitIndex + 1;
        }
        else {
            unitIndex = 0
        }
    
        UpdateTracker();
     });
});

$( document ).scroll(function() {
    UpdateTracker();
  });

function UpdateTracker() {
    let distance = $( document ).scrollTop();
    distance = distance * unitRatios[unitIndex];

    let unit = units[unitIndex];
    if (unit == "Earths") {
        distance = distance.toFixed(numberOfDecimalPlaces);
    }
    else {
        distance = Math.round(distance);
    }

    $("#distanceTracker").text(distance + " " + unit);
}