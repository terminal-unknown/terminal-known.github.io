// JavaScript source code
function writeCookie() {

    var cookievalue = escape(prompt("Type in a value to store in a cookie"));
    document.cookie = "name=" + cookievalue;

    document.write();
}