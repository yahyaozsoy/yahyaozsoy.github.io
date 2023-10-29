/*Deafult
document.onscroll=function() {changeColor()}*/

//#FreeUkraine
// window.onload = Ukraine;
// window.onafterprint = Ukraine;

//#29EkimKutluOlsun
window.onload = Ekim29;
windown.onafterprint = Ekim29;

//#Grief
// window.onload = Grief;
// window.onafterprint = Grief;

function changeColor() {
    if(window.pageYOffset < 400){
        wave1.setAttribute("fill","#8ecdf9")
        wave3.setAttribute("fill","#72c1f8")
        wave5.setAttribute("fill","#52b5f8")
        wave7.setAttribute("fill","#469dda")
        wave9.setAttribute("fill","#3986bc")
    }else if(document.body.scrollTop > 15){
        wave1.setAttribute("fill","#78a8cf")
        wave3.setAttribute("fill","#5b97c5")
        wave5.setAttribute("fill","#3986bc")
        wave7.setAttribute("fill","#3174a2")
        wave9.setAttribute("fill","#296289")
    }
    
    else if(document.body.scrollTop < 15){
        wave1.setAttribute("fill","#8ecdf9")
        wave3.setAttribute("fill","#72c1f8")
        wave5.setAttribute("fill","#52b5f8")
        wave7.setAttribute("fill","#469dda")
        wave9.setAttribute("fill","#3986bc")
    }else if(document.body.scrollTop < 20){
        wave1.setAttribute("fill", "#8ecdf9")
        wave3.setAttribute("fill","#72c1f8")
        wave5.setAttribute("fill","#52b5f8")
        wave7.setAttribute("fill","#469dda")
        wave9.setAttribute("fill","#3986bc")
    }
    
}

function Ukraine(){
    if(window.pageYOffset <= 0){
        wave1.setAttribute("fill","#2a6ec7")
        wave3.setAttribute("fill","#005bbb")
        wave5.setAttribute("fill","#ffd500")
        wave7.setAttribute("fill","#ffd500")
        wave9.setAttribute("fill","#dcb802")
    }
}

function Grief(){
    wave1.setAttribute("fill", "#303030")
    wave3.setAttribute("fill", "#292929")
    wave5.setAttribute("fill", "#222222")
    wave7.setAttribute("fill", "#1B1B1B")
    wave9.setAttribute("fill", "#151515")
}

function Ekim29(){
    wave1.setAttribute("fill", "#f5f5f5")
    wave3.setAttribute("fill", "#f89893")
    wave5.setAttribute("fill", "#ea6161")
    wave7.setAttribute("fill", "#d60034")
    wave9.setAttribute("fill", "#d60034")
}