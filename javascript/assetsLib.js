class A_Header extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `    
            <header>
                <nav>
                    <ul class="topnav">
                        <li class="logo"><a href="../"></a></li>
                        <li><img src="https://yahyaozsoy.github.io/images/siyah_kurdela_01.png" alt="kurdele" width="60rem" height="70rem"></li>
                        <!--<li><a href=""><b>ANASAYFA</b></a></li>
                        <li class="dropdown">
                            <button class="dropbtn"><b>PROJELERİM</b></button>
                            <div class="dropdown-content">
                                <a href="https://yahyaozsoy.github.io/pages/projects#okul">OKUL</a>
                                <a href="https://yahyaozsoy.github.io/pages/projects#oyun">OYUN</a>
                            </div>
                        </li>-->
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('as-header', A_Header);

class A_Footer extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `    
        <div class="sm-footer">
            <a href="https://github.com/yahyaozsoy" target="_blank" class="fa-brands fa-github"></a>
            <a href="https://www.instagram.com/yahyaozsoy34/" target="_blank" class="fa-brands fa-instagram"></a>
            <a href="https://www.facebook.com/yahya.zsoy/" target="_blank" class="fa-brands fa-facebook-f"></a>
            <a href="https://twitter.com/YahyaOzsoy_" target="_blank" class="fa-brands fa-twitter"></a>
            <a href="https://www.youtube.com/@YAHYAOZSOYY" target="_blank" class="fa-brands fa-youtube"></a>
            <a href="www.linkedin.com/in/yahya-ozsoy" target="_blank" class="fa-brands fa-linkedin-in"></a>
            <a href="https://discord.com/users/347321474748776450" target="_blank" class="fa-brands fa-discord"></a>
        </div>
        `;
    }
}

customElements.define('as-footer', A_Footer);

class games2023Nav extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `    
        <li style="padding-bottom: 2%;">0. Tur</li>
        <div>
            <a href="./games/newSystemExample">
                <div class="labels">
                    <b>Denek 1</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>0</b></div>
                </div>
                <div class="labels">
                    <b>Denek 2</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>0</b></div>
                </div>
            </a>
        </div>

            <li style="padding-bottom: 28%;"></li>
        `;
    }
}

customElements.define('as-gamesnav2023', games2023Nav);

class games2022Nav extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `    
            <li style="padding-bottom: 2%;">6. Tur</li>
            <div>
                <a href="./games/old/arifkadir">
                    <div class="labels">
                        <b>Arif Enes Çevik</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Kadir Yüzgüleç</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/erenemir">
                    <div class="labels">
                        <b>Eren Durkaya</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Emir Talha Baltacı</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/osamaismet">
                    <div class="labels">
                        <b>Osama Alhomsi</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>İsmet Can Kazdal</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/erginermal">
                    <div class="labels">
                        <b>Ergin Şafak Erdoğan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Ermal Metin Aydın</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/burakoguzhan">
                    <div class="labels">
                        <b>Burak Arı</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Oğuzhan Kaya</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/rojhatihsan">
                    <div class="labels">
                        <b>Rojhat Yardan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0.5</b></div>
                    </div>
                    <div class="labels">
                        <b>İhsan Can</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0.5</b></div>
                    </div>
                </a>
            </div>

            <li style="padding-bottom: 2%;">5. Tur</li>
            <div>
                <a href="./games/old/zelisaneren">
                    <div class="labels">
                        <b>Zelişan Nur Badur</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Eren Durkaya</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/erginosama">
                    <div class="labels">
                        <b>Ergin Şafak Erdoğan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Osama Alhomsi</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/furkanmete">
                    <div class="labels">
                        <b>Furkan Tangal</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Mete Hoş</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/emirmuhammed">
                    <div class="labels">
                        <b>Emir Talha Baltacı</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Muhammed Can Görgü</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/oguzhanosman">
                    <div class="labels">
                        <b>Oğuzhan Kaya</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0.5</b></div>
                    </div>
                    <div class="labels">
                        <b>Osman Keskin</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0.5</b></div>
                    </div>
                </a>
                <a href="./games/old/mertihsan">
                    <div class="labels">
                        <b>Mert Baran Kaplan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0.5</b></div>
                    </div>
                    <div class="labels">
                        <b>İhsan Can</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0.5</b></div>
                    </div>
                </a>
                <a href="./games/old/kadirberat">
                    <div class="labels">
                        <b>Kadir Yüzgüleç</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Seyfullah Berat Arslan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/rojhatatahan">
                    <div class="labels">
                        <b>Rojhat Yardan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Atahan Astanov</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/erenismet">
                    <div class="labels">
                        <b>Eren Şen</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>İsmet Can Kazdal</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
            </div>

            <li style="padding-bottom: 2%;">4. Tur</li>
            <div>
                <a href="./games/old/atahanihsan">
                    <div class="labels">
                        <b>Atahan Astanov</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>İhsan Can</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/yusufismet">
                    <div class="labels">
                        <b>Yusuf Talha Akdaş</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>İsmet Can Kazdal</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/mertomer">
                    <div class="labels">
                        <b>Mert Can Polat</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>İsmet Can Kazdal</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/beratermal">
                    <div class="labels">
                        <b>Seyfullah Berat Arslan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Ermal Metin Aydın</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/erenayhan">
                    <div class="labels">
                        <b>Eren Durkaya</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Ayhan Genç</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/erginaslan">
                    <div class="labels">
                        <b>Ergin Şafak Erdoğan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Aslan Tankılıç</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/erenbesmele">
                    <div class="labels">
                        <b>Eren Şen</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Besmele Muhammetoğlu</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/kadirosama">
                    <div class="labels">
                        <b>Kadir Yüzgüleç</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Osama Alhomsi</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/enesfurkan">
                    <div class="labels">
                        <b>Enes İlkan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Mert Baran Kaplan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/oguzhanmert">
                    <div class="labels">
                        <b>Oğuzhan Kaya</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Mert Baran Kaplan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/uguremin">
                    <div class="labels">
                        <b>Muhammed Uğur Gözegir</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Mehmet Emin Yalçın</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/arifrojhat">
                    <div class="labels">
                        <b>Arif Enes Çevik</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Rojhat Yardan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
            </div>
            
            <li style="padding-bottom: 2%;">3. Tur</li>
            <div>
                <a href="./games/old/mertrojhat">
                    <div class="labels">
                        <b>Mert Baran Kaplan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0.5</b></div>
                    </div>
                    <div class="labels">
                        <b>Rojhat Yardan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0.5</b></div>
                    </div>
                </a>
                <a href="./games/old/burakkerem">
                    <div class="labels">
                        <b>Burak Arı</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Kerem Dağlı</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/mertemir">
                    <div class="labels">
                        <b>Mert Can Polat</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Emir Talha Baltacı</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/besmelemuhammed">
                    <div class="labels">
                        <b>Besmele Muhammetoğlu</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Muhammed Can Görgü</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/ismetatahan">
                    <div class="labels">
                        <b>İsmet Can Kazdal</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Atahan Astanov</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/yusufihsan">
                    <div class="labels">
                        <b>Yusuf Taha Akdaş</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>İhsan Can</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/berataslan">
                    <div class="labels">
                        <b>Seyfullah Berat Arslan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Aslan Tankılıç</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/arifergin">
                    <div class="labels">
                        <b>Arif Enes Çevik</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Ergin Şafak Erdoğan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/osmanzelisan">
                    <div class="labels">
                        <b>Osman Keskin</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Zelişan Nur Badur</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/enesermal">
                    <div class="labels">
                        <b>Enes İlkan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Ermal Metin Aydın</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/erenmuhammet">
                    <div class="labels">
                        <b>Eren Şen</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Muhammet Uğur Gözegir</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/omerayhan">
                    <div class="labels">
                        <b>Ömer Faruk Yarkın</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Ayhan Genç</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/mehmetmete">
                    <div class="labels">
                        <b>Mehmet Emin Yalçın</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Mete Hoş</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/erenkadir">
                    <div class="labels">
                        <b>Eren Durkaya</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Kadir Yüzgüleç</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/agahosama">
                    <div class="labels">
                        <b>Agah Efe Kaya</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Osama Alhomsi</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/furkanoguz">
                    <div class="labels">
                        <b>Furkan Tangal</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Oğuzhan Kaya</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
            </div>
            
            <li style="padding-bottom: 2%;">2. Tur</li>
            <div>
                <a href="./games/old/osmanomer">
                    <div class="labels">
                        <b>Osman Keskin</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Ömer Faruk Yarkın</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/agahatahan">
                    <div class="labels">
                        <b>Agah Efe Kaya</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Atahan Astanov</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/mertmete">
                    <div class="labels">
                        <b>Mert Baran Kaplan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Mete Hoş</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/ihsaneren">
                    <div class="labels">
                        <b>İhsan Can</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Eren Şen</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/aslanrojhat">
                    <div class="labels">
                        <b>Aslan Tankılıç</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Rojhat Yardan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/muhammedcanosama">
                    <div class="labels">
                        <b>Muhammed Can Görgü</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                    <div class="labels">
                        <b>Osama Alhomsi</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                </a>
                <a href="./games/old/ayhanzelisan">
                    <div class="labels">
                        <b>Ahyan Genç</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Zelişan Nur Badur</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/yusufkadir">
                    <div class="labels">
                        <b>Yusuf Talha Akdaş</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Kadir Yüzgüleç</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/oguzhanbeyzanur">
                    <div class="labels">
                        <b>Oğuzhan Kaya</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Beyzanur Kayadayı</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
                <a href="./games/old/arifenes">
                    <div class="labels">
                        <b>Arif Enes Çevik</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>1</b></div>
                    </div>
                    <div class="labels">
                        <b>Enes İlkan</b>
                        <!-- (8000) 🇹🇷 -->
                        <div class="results"><b>0</b></div>
                    </div>
                </a>
            </div>

            <li style="padding-bottom: 3%;">1. Tur</li>
            <div>
                            <!-- Example match  -->
            <a href="./games/old/rojhatosman">
                <div class="labels">
                    <b>Rojhat Yardan</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>1</b></div>
                </div>
                <div class="labels">
                    <b>Osman Keskin</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>0</b></div>
                </div>
            </a>
            <a href="./games/old/osamaihsan">
                <div class="labels">
                    <b>Osama Alhomsi</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>0</b></div>
                </div>
                <div class="labels">
                    <b>İhsan Can</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>1</b></div>
                </div>
            </a>
            <a href="./games/old/mehmetyusuf">
                <div class="labels">
                    <b>Mehmet Emin Yalçın</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>0</b></div>
                </div>
                <div class="labels">
                    <b>Yusuf Talha Akdaş</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>1</b></div>
                </div>
            </a>
            <a href="./games/old/meteayhan">
                <div class="labels">
                    <b>Mete Hoş</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>1</b></div>
                </div>
                <div class="labels">
                    <b>Ayhan Genç</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>0</b></div>
                </div>
            </a>
            <a href="./games/old/agahcivan">
                <div class="labels">
                    <b>Agah Efe Kaya</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>1</b></div>
                </div>
                <div class="labels">
                    <b>Civan Yıldırım</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>0</b></div>
                </div>
            </a>
            <a href="./games/old/aslanomer">
                <div class="labels">
                    <b>Aslan Tankılıç</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>1</b></div>
                </div>
                <div class="labels">
                    <b>Ömer Faruk Yarkın</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>0</b></div>
                </div>
            </a>
            <a href="./games/old/erginbesmele">
                <div class="labels">
                    <b>Ergin Şafak Erdoğan</b>
                    <div class="results"><b>1</b></div>
                </div>
                <div class="labels">
                    <b>Besmele Muhammetoğlu</b>
                    <div class="results"><b>0</b></div>
                </div>
            </a>
            <a href="./games/old/kadirkerem">
                <div class="labels">
                    <b>Kadir Yüzgüleç</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>1</b></div>
                </div>
                <div class="labels">
                    <b>Kerem Dağlı</b>
                    <!-- (8000) 🇹🇷 -->
                    <div class="results"><b>0</b></div>
                </div>
            </a>
            </div>

            <li style="padding-bottom: 28%;"></li>
        `;
    }
}

customElements.define('as-gamesnav2022', games2022Nav);





var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("collapsible_active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight)
        {
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "rem";
        } 
    });
    }