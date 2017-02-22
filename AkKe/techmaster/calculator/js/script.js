function number0() { document.getElementById("outputVar").value += "0"; }
function number1() { document.getElementById("outputVar").value += "1"; }
function number2() { document.getElementById("outputVar").value += "2"; }
function number3() { document.getElementById("outputVar").value += "3"; }
function number4() { document.getElementById("outputVar").value += "4"; }
function number5() { document.getElementById("outputVar").value += "5"; }
function number6() { document.getElementById("outputVar").value += "6"; }
function number7() { document.getElementById("outputVar").value += "7"; }
function number8() { document.getElementById("outputVar").value += "8"; }
                function number9() { document.getElementById("outputVar").value += "9"; }
function cham() { document.getElementById("outputVar").value += "."; }
function cong() { document.getElementById("outputVar").value += "+"; }
function tru() { document.getElementById("outputVar").value += "-"; }
function nhan() { document.getElementById("outputVar").value += "*"; }
function chia() { document.getElementById("outputVar").value += "/"; }
function xoa() { document.getElementById("outputVar").value = ""; }
function clearLastChar() {
    var str = document.getElementById("outputVar").value;
    document.getElementById("outputVar").value = str.slice(0, str.length - 1);
}

function remember() {
    var strRemember = document.getElementById("outputVar").value;

}
var PI = 3.14159265359;

function sin() {
    var str = document.getElementById("outputVar").value;
    document.getElementById("outputVar").value = s
}

function tinh() {
    var tinh = eval(document.getElementById("outputVar").value);
    var n = parseFloat(tinh);
    document.getElementById("outputVar").value = Math.round(n * 1000) / 1000;
}