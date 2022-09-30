function PrintQuote() {

    var name = document.getElementById('name').value;
    var quote = document.getElementById('quote').value;
    var msg = `${name} once said, "${quote}"`;
    document.getElementById("msg").innerHTML = msg;

    document.getElementById('name').value = '';
    document.getElementById('quote').value = '';
}
