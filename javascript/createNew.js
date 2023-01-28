
let nameOWhite = document.querySelector("#nameOWhite");
let urlOGame = document.querySelector("#urlOGame");
let nameOBlack = document.querySelector("#nameOBlack");
let result = document.querySelector(".result_text");
let submit_btn = document.querySelector("#submit");
let copy_btn = document.querySelector(".copy_btn");


function generate(nameOWhite, urlOGame, nameOBlack){
    let final_string =  `<!DOCTYPE html>
        <html lang="tr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Satranç Turnuvası</title>
                <!--icon on tab-->  <link rel="icon" href="../../images/ncallogo.png">
                <!--icons-->     <script src="https://kit.fontawesome.com/b6c5c6dbd1.js" crossorigin="anonymous"></script>
                <!--main-->      <link rel="stylesheet" href="../../styles/chess.css">
                <!--Chess.js-->    <script src="../javascript/Chess.js"></script>
                <!--For Xmas-->    <script src="../javascript/snowStorm.js"></script>
            </head>
            <body id="noscrollbar">
                <header>
                    <nav>
                        <ul class="topnav">
                            <li class="ncal"><a href="../chess#active-matches"></a></li>
                            <li><a href="../chess#active-matches"><b>Turnuvaya Dön</b></a></li>
                            <!-- <li class="dropdown">
                                <button class="dropbtn"><b>PROJELERİM</b></button>
                                <div class="dropdown-content">
                                <a href="../projects#okul">OKUL</a>
                                <a href="../projects#oyun">OYUN</a>
                                </div>
                            </li> -->
                        </ul>
                    </nav>
                </header>
        
                <section>
        
                </section>
                <section class="features">
                    <div style="width: 100%; height: 100%;">
                        <div>
                            <li class="labels" style="text-align: left; padding-left: 20vw; color: #0a0a0a;">${nameOBlack}</li>
                            <iframe class="chessboard" width=900 height=600 src="${urlOGame}?theme=brown&bg=light" allowtransparency="true" frameborder=0></iframe>
                            <li class="labels" style="text-align: left; padding-left: 20vw; color: #0a0a0a;">${nameOWhite}</li>
                        </div> 
                    </div>
                </section>
            
                <div class="footerparent">
                    <footer>
                            <div class="sm-footer">
                                <a href="https://www.instagram.com/ncalsatranc/" target="_blank" class="fa-brands fa-instagram"></a>
                                <!-- <a href="" target="_blank" class="fa-brands fa-whatsapp"></a> -->
                            </div>
                            <b>&copy;
                                <span id="copyright">
                                    <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script>
                                </span>
                            </b>
                    </footer>
                </div>
            </body>
        </html>`;
    result.value = final_string;
    var opened = window.open("");
    opened.document.write(final_string);
}

function copy(){
    result.select();
    document.execCommand("copy");
}

submit_btn.addEventListener("click", () => {
    generate(nameOWhite.value, urlOGame.value, nameOBlack.value);
    nameOWhite.value = "";
    urlOGame.value = "";
    nameOBlack.value = "";
});

copy_btn.addEventListener("click", () => {
    copy();
})

window.addEventListener("unload", () => {
    result.value = "";
})

