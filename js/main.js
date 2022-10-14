let btnFirst1 = document.querySelector(".btn1")
let btnFirst2= document.querySelector(".btn2")
let btnFirst3 = document.querySelector(".btn3")
let elImg = document.querySelector("img")
let elCss = document.querySelector("css")

btnFirst1.addEventListener("click", function() {
    alert("HTML")
    console.log(prompt("HTML yordamida qanday ishlarni amalga oshirsa bo'ladi?"));
    console.log(prompt("Saytni yaratishda HTMLni o'rni qanchalik darajada muxum?"));
    console.log(prompt("HTMLni nechta versiyasi bor?"));
    console.log(prompt("Eng oxirgi versiyasi qachon chiqqan?"));
    console.log(prompt("HTML qanday muxitda ishlaydi?"));
})
btnFirst2.addEventListener("click", function() {
    alert("CSS")
    console.log(prompt("CSS qanday htmlga ulanadi?"));
    console.log(prompt("CSSni nechta versiyasi bor?"));
    console.log(prompt("Eng oxirgi versiyasi qachon chiqqan?"));
    console.log(prompt("CSS yordamida qanday ishlarni amalga oshirish mumkun?"));
    console.log(prompt("CSS bilan SCSSni qanday farqi bor?"));
})
btnFirst3.addEventListener("click", function() {
    alert("JS")
    console.log(prompt("Dasturlash tili necha xil bo'ladi?"));
    console.log(prompt("JS qanday tilga kiradi?"));
    console.log(prompt("JS htmlga qanday ulanadi?"));
    console.log(prompt("JS nechta versiyasi bor?"));
    console.log(prompt("JSni ishlashi uchun bizga nima kerak bo'ladi"));
})