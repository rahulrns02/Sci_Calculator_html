function dis(val) {
   const display = document.getElementById('result');
   display.value += val;
}

function slove() { // keep the name since HTML calls it slove
   const display = document.getElementById('result');
   try {
       let x = display.value;
       let y = eval(x);
       display.value = y;
   } catch (err) {
       display.value = "Error";
   }
}

function del() {
   const display = document.getElementById('result');
   display.value = '';
}

// Power functions
function x2() { setPow(2); }
function x3() { setPow(3); }
function x4() { setPow(4); }
function x5() { setPow(5); }
function x6() { setPow(6); }
function x7() { setPow(7); }
function x9() { setPow(9); }

function setPow(exp) {
   const display = document.getElementById('result');
   display.value = Math.pow(Number(display.value), exp);
}

// Trig and inverse functions
function sin() {
   const display = document.getElementById('result');
   display.value = Math.sin(toRadians(display.value));
}

function sinh() {
   const display = document.getElementById('result');
   display.value = Math.sinh(toRadians(display.value));
}

function asin() {
   const display = document.getElementById('result');
   display.value = Math.asin(toRadians(display.value));
}

function asinh() {
   const display = document.getElementById('result');
   display.value = Math.asinh(toRadians(display.value));
}

function cos() {
   const display = document.getElementById('result');
   display.value = Math.cos(toRadians(display.value));
}

function cosh() {
   const display = document.getElementById('result');
   display.value = Math.cosh(toRadians(display.value));
}

function acos() {
   const display = document.getElementById('result');
   display.value = Math.acos(toRadians(display.value));
}

function acosh() {
   const display = document.getElementById('result');
   display.value = Math.acosh(toRadians(display.value));
}

function tan() {
   const display = document.getElementById('result');
   display.value = Math.tan(toRadians(display.value));
}

function tanh() {
   const display = document.getElementById('result');
   display.value = Math.tanh(toRadians(display.value));
}

function atan() {
   const display = document.getElementById('result');
   display.value = Math.atan(toRadians(display.value));
}

function atanh() {
   const display = document.getElementById('result');
   display.value = Math.atanh(toRadians(display.value));
}

function toRadians(degrees) {
   return Number(degrees) * (Math.PI / 180);
}

// BONUS: Automatically fix broken "oneclick" attributes
document.addEventListener("DOMContentLoaded", () => {
   const allButtons = document.querySelectorAll("button[oneclick]");
   allButtons.forEach(btn => {
       const fnCall = btn.getAttribute("oneclick");
       btn.setAttribute("onclick", fnCall);
   });

   const allSmalls = document.querySelectorAll("small[oneclick]");
   allSmalls.forEach(el => {
       const fnCall = el.getAttribute("oneclick");
       el.setAttribute("onclick", fnCall);
       el.style.cursor = "pointer"; // make them clickable
   });
});

function dis(val) {
   const display = document.getElementById('result');
   display.value += val;
}

function slove() {
   const display = document.getElementById('result');
   try {
       let x = display.value;
       let y = eval(x);
       display.value = y;
       document.getElementById('output-box').innerText = "Output: " + y;
   } catch (err) {
       display.value = "Error";
       document.getElementById('output-box').innerText = "Output: Error";
   }
}

function del() {
   const display = document.getElementById('result');
   display.value = '';
   document.getElementById('output-box').innerText = "";
}

function setPow(exp) {
   const display = document.getElementById('result');
   const result = Math.pow(Number(display.value), exp);
   display.value = result;
   document.getElementById('output-box').innerText = "Output: " + result;
}

function x2() { setPow(2); }
function x3() { setPow(3); }
function x4() { setPow(4); }
function x5() { setPow(5); }
function x6() { setPow(6); }
function x7() { setPow(7); }
function x9() { setPow(9); }

function toRadians(deg) {
   return Number(deg) * (Math.PI / 180);
}

function trigWrapper(fn) {
   const display = document.getElementById('result');
   const result = Math[fn](toRadians(display.value));
   display.value = result;
   document.getElementById('output-box').innerText = "Output: " + result;
}

function sinh() { trigWrapper("sinh"); }
function sin() { trigWrapper("sin"); }
function asin() { trigWrapper("asin"); }
function asinh() { trigWrapper("asinh"); }
function cos() { trigWrapper("cos"); }
function cosh() { trigWrapper("cosh"); }
function acos() { trigWrapper("acos"); }
function acosh() { trigWrapper("acosh"); }
function tan() { trigWrapper("tan"); }
function tanh() { trigWrapper("tanh"); }
function atan() { trigWrapper("atan"); }
function atanh() { trigWrapper("atanh"); }

// ✅ Fix incorrect "oneclick" attributes
document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll("button[oneclick], small[oneclick]").forEach(el => {
       const call = el.getAttribute("oneclick");
       el.setAttribute("onclick", call);
       el.style.cursor = "pointer";
   });
});
