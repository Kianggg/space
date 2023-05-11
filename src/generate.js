import $ from 'jquery';

// Global Variables
const spansToTheMoon = 2659;
const numberOfDecimalPlaces = 2;

let units = ["miles",
            "km",
            "Eiffel Towers",
            "football fields",
            "USAs",
            "Earths"];
let unitRatios =    [1,
                    1.60934,
                    4.87534626039,
                    17.6,
                    0.00035688793,
                    0.0001261617];
let unitIndex = 0;

$( document ).ready(function() {

    // To the moon!
    for(let i = 0; i <= spansToTheMoon; i++) {
        $("#mainContainer").append("<span id=" + i + "><br></>");
    }

    // Add space objects

    // ISS
    $("#mainContainer").append("<a id='iss' href='https://en.wikipedia.org/wiki/International_Space_Station' target='_blank'>International Space Station</><p style='font-size: large'>On board:</p>");
    
    var numberOfPeopleOnISS = 0;
    $.getJSON('http://api.open-notify.org/astros.json', function(data) {
        $.each(data["people"], function (key, value) {
            if (value["craft"] == "ISS") {
                $('#iss').append("<p class='astronaut'/>")
            }
        });
    });

    // Hubble Space Telescope
    $("#mainContainer").append("<a id='hubble' href='https://en.wikipedia.org/wiki/Hubble_Space_Telescope' target='_blank'>Hubble Space Telescope</>");

    // About telescopes
    $("#20").text("We just saw the ISS and the Hubble Space Telescope. They have to be very close to the top in order to appear on this scale at all.")

    // Hubble image
    $("#40").text("Space telescopes like Hubble are used to take incredible photos of our universe that we couldn't capture any other way.")
    $("#mainContainer").append("<p id='hubbleImage'>Like this one!</p>");

    // One Earth
    $("#mainContainer").append("<p id='earth'>You have now scrolled the distance of one Earth!<br><br>If you haven't already, try clicking on the distance tracker to explore other ways to measure how far you've come!</p>");

    // Most of space is just space
    $("#125").text("Most of space is just... space. It's okay to skip ahead a little bit.")

    // Geosynchronous orbiting satellites
    $("#mainContainer").append("<p id='geosync'>This is the distance at which geosynchronous satellies must orbit. These objects orbit Earth at exactly the same rate that the Earth spins; this means that they will stay above the same spot on Earth no matter what!</p>");

    // Quarter point
    $("#" + Math.round((spansToTheMoon / 4)) + "").text("One quarter of the way there!")

    // Halfway point
    $("#" + Math.round((spansToTheMoon / 2)) + "").text("Halfway there!")

    // End message
    $("#" + (spansToTheMoon - 4) + "").text("Congratulations! You've made it to the moon!")

    // Surface of the moon
    $("#mainContainer").append("<p id='moon'></p>");

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
    if ((unit == "Earths") || (unit == "USAs")) {
        distance = distance.toFixed(numberOfDecimalPlaces);
    }
    else {
        distance = Math.round(distance);
    }

    $("#distanceTracker").text(distance + " " + unit);
}