class A_Header extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `    
            <header>
                <nav>
                    <ul class="topnav">
                        <li class="logo"><a href="../"></a></li>
                        <li><a href=""><b>ANASAYFA</b></a></li>
                        <li class="dropdown">
                            <button class="dropbtn"><b>PROJELERİM</b></button>
                            <div class="dropdown-content">
                                <a href="./pages/projects#okul">OKUL</a>
                                <a href="./pages/projects#oyun">OYUN</a>
                            </div>
                        </li>
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
            <a href="https://www.linkedin.com/in/yahya-ozsoy" target="_blank" class="fa-brands fa-linkedin-in"></a>
            <a href="https://discord.com/users/347321474748776450" target="_blank" class="fa-brands fa-discord"></a>
        </div>
        `;
    }
}

customElements.define('as-footer', A_Footer);

class gamesNav extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `    
            <li style="padding-bottom: 2%;">6. Tur</li>
            <div>
                <a href="./games/arifkadir">
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
                <a href="./games/erenemir">
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
                <a href="./games/osamaismet">
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
                <a href="./games/erginermal">
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
                <a href="./games/burakoguzhan">
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
                <a href="./games/rojhatihsan">
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
                <a href="./games/zelisaneren">
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
                <a href="./games/erginosama">
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
                <a href="./games/furkanmete">
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
                <a href="./games/emirmuhammed">
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
                <a href="./games/oguzhanosman">
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
                <a href="./games/mertihsan">
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
                <a href="./games/kadirberat">
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
                <a href="./games/rojhatatahan">
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
                <a href="./games/erenismet">
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
                <a href="./games/atahanihsan">
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
                <a href="./games/yusufismet">
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
                <a href="./games/mertomer">
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
                <a href="./games/beratermal">
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
                <a href="./games/erenayhan">
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
                <a href="./games/erginaslan">
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
                <a href="./games/erenbesmele">
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
                <a href="./games/kadirosama">
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
                <a href="./games/enesfurkan">
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
                <a href="./games/oguzhanmert">
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
                <a href="./games/uguremin">
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
                <a href="./games/arifrojhat">
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
                <a href="./games/mertrojhat">
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
                <a href="./games/burakkerem">
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
                <a href="./games/mertemir">
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
                <a href="./games/besmelemuhammed">
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
                <a href="./games/ismetatahan">
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
                <a href="./games/yusufihsan">
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
                <a href="./games/berataslan">
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
                <a href="./games/arifergin">
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
                <a href="./games/osmanzelisan">
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
                <a href="./games/enesermal">
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
                <a href="./games/erenmuhammet">
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
                <a href="./games/omerayhan">
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
                <a href="./games/mehmetmete">
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
                <a href="./games/erenkadir">
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
                <a href="./games/agahosama">
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
                <a href="./games/furkanoguz">
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
                <a href="./games/osmanomer">
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
                <a href="./games/agahatahan">
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
                <a href="./games/mertmete">
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
                <a href="./games/ihsaneren">
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
                <a href="./games/aslanrojhat">
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
                <a href="./games/muhammedcanosama">
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
                <a href="./games/ayhanzelisan">
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
                <a href="./games/yusufkadir">
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
                <a href="./games/oguzhanbeyzanur">
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
                <a href="./games/arifenes">
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
            <a href="./games/rojhatosman">
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
            <a href="./games/osamaihsan">
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
            <a href="./games/mehmetyusuf">
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
            <a href="./games/meteayhan">
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
            <a href="./games/agahcivan">
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
            <a href="./games/aslanomer">
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
            <a href="./games/erginbesmele">
                <div class="labels">
                    <b>Ergin Şafak Erdoğan</b>
                    <div class="results"><b>1</b></div>
                </div>
                <div class="labels">
                    <b>Besmele Muhammetoğlu</b>
                    <div class="results"><b>0</b></div>
                </div>
            </a>
            <a href="./games/kadirkerem">
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

customElements.define('as-gamesnav', gamesNav);