let amount = 10;
let inputCur = "eur"
let outputCur = "usd"

function convert (amount, iCurrency, oCurrency) {
    // if input crr is eur.. convert to usd
    if (iCurrency == "eur")
        return amount * 1.17;
    else amount / 1.17;
    // else do opposite
}

console.log(convert(amount, inputCur, outputCur))