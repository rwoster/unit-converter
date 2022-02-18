let lengthCon = document.getElementById("length");
let volumeCon = document.getElementById("volume");
let massCon = document.getElementById("mass");

let userInput = document.getElementById("unit");
let unit = "";
let test = 0;

userInput.addEventListener("keyup", () => {
    unit = userInput.value;
    length();
    volume();
    mass();
});

function length() {
    let meter = unit * 3.280839895;
    let meterRes = meter.toFixed(3);
    let foot = unit / 3.280839895;
    let footRes = foot.toFixed(3);

    if (unit === "1") {
        lengthCon.textContent = `${unit} meter = ${footRes} foot  |  ${unit} foot = ${meterRes} meter`;
    } else {
        lengthCon.textContent = `${unit} meters = ${footRes} feet  |  ${unit} feet = ${meterRes} meters`;
    }
}
function volume() {
    let liter = unit * 3.7854;
    let literRes = liter.toFixed(3);
    let gallon = unit / 3.7854;
    let gallonRes = gallon.toFixed(3);

    if (unit === "1") {
        volumeCon.textContent = `${unit} liter = ${gallonRes} gallon  |  ${unit} gallon = ${literRes} liter`;
    } else {
        volumeCon.textContent = `${unit} liters = ${gallonRes} gallons  |  ${unit} gallons = ${literRes} liters`;
    }
}
function mass() {
    let kilo = unit * 0.4535924;
    let kiloRes = kilo.toFixed(3);
    let pound = unit / 0.4535924;
    let poundRes = pound.toFixed(3);

    if (unit === "1") {
        massCon.textContent = `${unit} kilo = ${poundRes} pound  |  ${unit} pound = ${kiloRes} kilo`;
    } else {
        massCon.textContent = `${unit} kilos = ${poundRes} pounds  |  ${unit} pounds = ${kiloRes} kilos`;
    }
}
