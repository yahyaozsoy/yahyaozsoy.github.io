
// var animateX = anime({
//     targets: '.wave1',
//     fill: "#72c1f8",
//     autoplay: false
// });

document.onscroll=function(){

    if(window.pageYOffset < 10){
        wave1.setAttribute("fill","#eeeeee")
        wave3.setAttribute("fill","#f6f6f6")
        wave5.setAttribute("fill","#ffffff")
        wave7.setAttribute("fill","#ffffff")
        wave9.setAttribute("fill","#ffffff")
    }else{
        wave1.setAttribute("fill", "#8ecdf9")
        wave3.setAttribute("fill","#72c1f8")
        wave5.setAttribute("fill","#52b5f8")
        wave7.setAttribute("fill","#469dda")
        wave9.setAttribute("fill","#3986bc")
    }
}