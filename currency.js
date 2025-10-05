let amount = document.getElementById("amount");
let currencies = ["eur", "usd"];
let inputCur = document.querySelector('input[name="fromCurrency"]:checked').value;
let outputCur = inputCur == "eur" ? "usd" : "eur";

function changeCur() {
    inputCur = document.querySelector('input[name="fromCurrency"]:checked').value;
    outputCur = inputCur == "eur" ? "usd" : "eur";
    let obj = document.getElementsByClassName("outCur");
    Object.entries(obj).map(entry => {
        for (let i=0; i<entry.length; i++) {
            entry[i].innerHTML = outputCur == "eur" ? "Euros" : "USD";
        }
    });
    convert();
}

function convert () {
    let output = document.getElementById("output");
    // if input crr is eur.. convert to usd
    if (inputCur == "eur") {
        var val = (amount.value * 1.17);
        output.innerHTML = parseFloat(val).toFixed(2);
        console.log(amount.value * 1.17);
    }
    else { 
        var val = (amount.value / 1.17);
        output.innerHTML = parseFloat(val).toFixed(2);
        console.log(amount.value / 1.17);
    // else do opposite
    }
}

// console.log(convert(amount, inputCur, outputCur))