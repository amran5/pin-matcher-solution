function getPin() {
    const pin = Math.round(Math.random() * 100000);
    const pinString = pin + '';
    if(pinString.length == 5){
        return pin;
    }
    else{
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}