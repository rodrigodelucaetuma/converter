function convert_celsius() {
    var temperature_in_celsius = document.getElementById("celsius").value

    if(temperature_in_celsius == ""){
        alert("Please enter the temperature in Celsius you would like to convert");
        return false;
    }
    var output_temperature_fahrenheit = (temperature_in_celsius*9/5) + 32;

    document.getElementById("output_fahrenheit").innerHTML = output_temperature_fahrenheit +"\u00B0" +"F";
}

function convert_fahrenheit() {
    var temperature_in_fahrenheit = document.getElementById("fahrenheit").value
    
    if(temperature_in_fahrenheit == ""){
        alert("Please enter the temperature in Fahrenheit you would like to convert");
        return false;
    }
    
    var output_temperature_celsius = (temperature_in_fahrenheit - 32) / (9/5);

    document.getElementById("output_celsius").innerHTML = output_temperature_celsius +"\u00B0" +"C";
}

function convert_kilos() {
    var weight_in_kilos = document.getElementById("kilo").value

    if(weight_in_kilos == ""){
        alert("Please enter the weight in kilos you would like to convert");
        return false;
    }
    
    var output_weight_pounds = (weight_in_kilos * 2.205);

    document.getElementById("output_pound").innerHTML = output_weight_pounds +"lbs";
}

function convert_pounds() {
    var weight_in_pounds = document.getElementById("pounds").value

    if(weight_in_pounds == ""){
        alert("Please enter the weight in pounds you would like to convert");
        return false;
    }
    
    var output_weight_kilos = (weight_in_pounds / 2.205);

    document.getElementById("output_kilo").innerHTML = output_weight_kilos +"kg";
}

function convert_km() {
    var distance_in_km = document.getElementById("km").value

    if(distance_in_km == ""){
        alert("Please enter the distance in kilometers you would like to convert");
        return false;
    }
    
    var output_distance_miles = (distance_in_km * 0.62137);

    document.getElementById("output_miles").innerHTML = output_distance_miles +"miles";
}

function convert_miles() {
    var distance_in_miles = document.getElementById("miles").value

    if(distance_in_miles == ""){
        alert("Please enter the distance in miles you would like to convert");
        return false;
    }
    
    var output_distance_km = (distance_in_miles / 0.62137);

    document.getElementById("output_km").innerHTML = output_distance_km +"km";
}


window.onload = function () {

    const celsiusInput = document.getElementById("celsius")
    const fahrenheitInput = document.getElementById("fahrenheit")
    const kiloInput = document.getElementById('kilo');
    const poundsInput = document.getElementById('pounds');
    const kmInput = document.getElementById('km');
    const milesInput = document.getElementById('miles');

    celsiusInput.addEventListener('focus', function () {
        document.getElementById('output_fahrenheit').innerHTML = '';
    });
    fahrenheitInput.addEventListener('focus', function () {
        document.getElementById('output_celsius').innerHTML = '';
    });
    kiloInput.addEventListener('focus', function () {
        document.getElementById('output_pound').innerHTML = '';
    });
    poundsInput.addEventListener('focus', function () {
        document.getElementById('output_kilo').innerHTML = '';
    });
    kmInput.addEventListener('focus', function () {
        document.getElementById('output_miles').innerHTML = '';
    });
    milesInput.addEventListener('focus', function () {
        document.getElementById('output_km').innerHTML = '';
    });
    

};