
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
            <!--loader-->      <script type=module src="../../javascript/assetsLib.js"></script>
            <!--icon on tab--> <link rel="icon" href="../../images/ncallogo.png">
            <!--icons-->       <script src="https://kit.fontawesome.com/b6c5c6dbd1.js" crossorigin="anonymous"></script>
            <!--main-->        <link rel="stylesheet" href="../../styles/chess.css">
            <!--Chess.js-->    <script src="../../javascript/Chess.js"></script>
            <!--For Xmas-->    <!--<script src="../../javascript/snowStorm.js"></script>-->
            <script data-ad-client="ca-pub-9325217213056739" async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
        <!-- Side navigation -->
        <div class="sidenav">
            <div class="flex-row" id="MenuButtons">
                <button onclick="showContent()" class="menuselector active"><i class="fa-solid fa-chess"></i> Oyunlar</i></button>
                <button onclick="showContent()" class="menuselector"><i class="fa-solid fa-user"></i> Sonuçlar</button>
            </div>
            <div class="flex-col activeflex" id="noscrollbar">
                <button class="collapsible" style="padding-top: 1em; padding-bottom: 1em;">II. Genç Dimağ Müsabakaları </button>
                <div class="collapsible_content" id="chessScrollbar">
                    <as-gamesnav2023></as-gamesnav2023>
                </div>
                <button class="collapsible" style="padding-top: 1em; padding-bottom: 1em;">I. Genç Dimağ Müsabakaları </button>
                <div class="collapsible_content" id="chessScrollbar">
                    <as-gamesnav2022></as-gamesnav2022>
                </div>
            </div>

            <div class="flex-col" id="noscrollbar">
                <button class="collapsible" style="padding-top: 1em; padding-bottom: 1em;">I. Genç Dimağ Müsabakaları </button>
                <div class="collapsible_content" id="noscrollbar" style="padding: 0;">
                    <div class="namepoint" style="padding-bottom: 3%;">
                        <li class="labels">Ad-Soyad</li><li style="position: relative; right: 8rem;">Puan</li>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
                    <div class="labels" style="font-size: 2vh;">
                        <b class="champName"></b>
                        <div class="resultsMenu"></div>
                    </div>
    
                    <!-- Example resultsMenu
                    <div class="labels" style="font-size: 2vh;">
                        <b>Efe ÖZBİLİKER</b>
                        (8000) 🇹🇷
                        <div class="resultsMenu">1</div>
                    </div> -->
                </div>
            </div>

        </div>
            
            <section>
    
            </section>
            <section class="features" style="margin: auto; width: 80%;">
                <div style="width: 100%; height: 100%;">
                    <div>
                        <li class="labels" style="text-align: left; padding-left: 20vw; color: #0a0a0a;">${nameOBlack}</li>
                        <iframe class="chessboard" width=900 height=600 src="${urlOGame}?theme=brown&bg=light" allowtransparency="true" frameborder=0></iframe>
                        <li class="labels" style="text-align: left; padding-left: 20vw; color: #0a0a0a;">${nameOWhite}</li>
                    </div> 
                </div>
            </section>
            
            <script>
                var header = document.getElementById("MenuButtons");
    
                var btns = header.getElementsByClassName("menuselector");
    
                var current = document.getElementsByClassName("active");
                var currentFlex = document.getElementsByClassName("flex-col");
                
    
                for (var i = 0; i < btns.length; i++) {
                    btns[i].addEventListener("click", function () {
    
    
                        current[0].className = current[0].className.replace(" active", "");
                        this.className += " active";
                    });
                }
    
                function showContent(ev) {
                    (ev||event).preventDefault();
                    if(current[0].textContent == " Oyunlar"){
                        currentFlex[0].className = currentFlex[0].className.replace(" activeflex", "")
                        currentFlex[1].className += " activeflex";
                    }else{
                        currentFlex[1].className = currentFlex[1].className.replace(" activeflex", "")
                        currentFlex[0].className += " activeflex";
                    }
    
                }
            </script>

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

function downloadHtml(nameOBlack, nameOWhite) {
    filename = `${nameOWhite}${nameOBlack}.html`;
    html = result.value;
    var blob = new Blob([html], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

submit_btn.addEventListener("click", () => {
    generate(nameOWhite.value, urlOGame.value, nameOBlack.value);
    downloadHtml(nameOBlack.value, nameOWhite.value);
    nameOWhite.value = "";
    urlOGame.value = "";
    nameOBlack.value = "";
});

copy_btn.addEventListener("click", () => {
    copy();
});

window.addEventListener("unload", () => {
    result.value = "";
});

