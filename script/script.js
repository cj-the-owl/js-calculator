function display(val) {
    document.getElementById('answer').value+=val
    return value
};

function equals() {
    let x = document.getElementById('answer').value
    let y = eval(x);
    document.getElementById('answer').value = y
    return y
}

function AC() {
    document.getElementById('answer').value=""
    return null
}



