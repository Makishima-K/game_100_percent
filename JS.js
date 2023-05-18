const list = document.getElementById("Main");
const Top = document.getElementById('Top')
const Sidebar2 = document.getElementById('sidebar')

var Langg = 1

function Odin(){
    if(Langg === 1){
        Top.innerHTML =`About Us`
        list.innerHTML = `
        <p id="Main" class="Text">
         Welcome to our site with game guides! We are a source of reliable and useful information providing gamers with quality guides, tips and strategies for various gaming projects. Our team of experienced writers carefully research each game to provide you with the most complete and understandable guides.

On our site you will find a variety of guides covering various aspects of the game, including the passage of the main story, secret missions, missions, tips for building and upgrading characters, tactics for battles and much more. Regardless of your level of experience, our guides will provide you with valuable insights and help you deal with any difficulties you may encounter in games.


Whether you're a beginner or an experienced gamer, our game guide site will provide you with the knowledge and tools you need to succeed. Welcome to our community of gamers, where you will find all the information you need to enjoy your gaming experience and reach new heights!</p>
        
        `
    }
    if(Langg === 2){
        Top.innerHTML =`О нас`
        list.innerHTML = `
        
        
        <p id="Main" class="Text">
        Добро пожаловать на наш сайт с гайдами для игр! Мы - источник надежной и полезной информации, предоставляющий геймерам качественные руководства, советы и стратегии для различных игровых проектов. Наша команда опытных авторов тщательно исследует каждую игру, чтобы предоставить вам самые полные и понятные гайды.

На нашем сайте вы найдете разнообразные руководства, охватывающие различные аспекты игры, включая прохождение основного сюжета, секретные задания, миссии, советы по строительству и улучшению персонажей, тактики для сражений и многое другое. Независимо от вашего уровня опыта, наши гайды предоставят вам ценные инсайты и помогут справиться с любыми трудностями, с которыми вы можете столкнуться в играх.


Независимо от того, являетесь ли вы новичком или опытным геймером, наш сайт с гайдами для игр предоставит вам необходимые знания и инструменты для достижения успеха. Добро пожаловать в наше сообщество геймеров, где вы найдете всю необходимую информацию, чтобы наслаждаться игровым процессом и достигать новых высот!</p>
        `

    }
    if(Langg === 3){
        Top.innerHTML =``
        list.innerHTML = `<p id="Main" class="Text">
        Laipni lūdzam mūsu vietnē ar spēļu ceļvežiem! Mēs esam uzticamas un noderīgas informācijas avots, nodrošinot spēlētājiem kvalitatīvas rokasgrāmatas, padomus un stratēģijas dažādiem spēļu projektiem. Mūsu pieredzējušo rakstnieku komanda rūpīgi izpēta katru spēli, lai sniegtu jums vispilnīgākos un saprotamākos ceļvežus.

        Mūsu vietnē jūs atradīsiet dažādus ceļvežus, kas aptver dažādus spēles aspektus, tostarp galvenā stāsta fragmentu, slepenās misijas, misijas, padomus varoņu veidošanai un uzlabošanai, kauju taktiku un daudz ko citu. Neatkarīgi no jūsu pieredzes līmeņa, mūsu ceļveži sniegs jums vērtīgu ieskatu un palīdzēs tikt galā ar jebkādām grūtībām, ar kurām varat saskarties spēlēs.
        
        
        Neatkarīgi no tā, vai esat iesācējs vai pieredzējis spēlētājs, mūsu spēļu ceļveža vietne sniegs jums nepieciešamās zināšanas un rīkus, lai gūtu panākumus. Laipni lūdzam mūsu spēlētāju kopienā, kur atradīsit visu nepieciešamo informāciju, lai izbaudītu spēļu pieredzi un sasniegtu jaunas virsotnes!
        </p>`
    }


}

function Dva(){
    if(Langg === 1){
        Top.innerHTML =`Our guides`
        list.innerHTML = `
        
<h2 id="Top">1)Red Dead Redemption 2</h2>
<p id="Main" class="Text">
Red Dead Redemption 2 is a popular video game developed by Rockstar Games. It serves as a prequel to the original game "Red Dead Redemption" and features an open world in the action-adventure genre set in the late 19th century Wild West. Players can explore a vast world, engage in hunting, fishing, missions, and battles, as well as interact with various characters. RDR2 has received high praise from critics and has become one of the most successful games in history, thanks to its deep storyline and stunningly detailed world.
</p>
<h2 id="Top">2)GTAV</h2>
<p id="Main" class="Text">
GTAV is a popular video game developed by Rockstar North. It is an open world action-adventure game set in the fictional city of Los Santos, based on Los Angeles. Players can freely roam the city, perform various missions, participate in heists and battles, and interact with other characters. GTA5 has garnered widespread acclaim for its deep story, realistic gameplay, and diverse possibilities it offers to players.
</p>
<br><br>
<h2 id="Top">3)GTAIV</h2>
is a computer game developed by Rockstar North. It is an open world action-adventure game set in the fictional New York-inspired city of Liberty City. Players take on the role of the main character Niko Bellic and explore the city, complete missions, take part in robberies, battles and interact with various characters. GTA 4 was highly praised for its detailed world, characters' personalities, and gripping storyline.
<br><br>
</p>
        
        `
    }
    if(Langg === 2){
        Top.innerHTML =`Наши гайды`
        list.innerHTML = `  
        <h2 id="Top"> <a href="RDR2.html" >1) Red Dead Redemption 2 </a></h2>
        <br><br><p id="Main" class="Text">
        Является популярной компьютерной игрой, разработанной компанией Rockstar Games. Она является приквелом к оригинальной игре "Red Dead Redemption" и представляет собой открытый мир в жанре экшн-приключений, действие которого происходит в конце 19-го века на Диком Западе. Игроки могут исследовать огромный мир, участвовать в охоте, рыбалке, заданиях и сражениях, а также взаимодействовать с различными персонажами. РДР2 получила высокую оценку критиков и стала одной из самых успешных игр в истории, благодаря своей глубокой сюжетной линии и потрясающему детализированному миру.
        </p>
        <h2 id="Top"><a href="GTAV.html" >2)GTAV </a></h2>
        <p id="Main" class="Text">
        Это популярная компьютерная игра, разработанная компанией Rockstar North. Она является открытым миром в жанре экшн-приключений, действие которого происходит в вымышленном городе Лос-Сантос, основанном на Лос-Анджелесе. Игроки могут свободно перемещаться по городу, выполнять различные задания, участвовать в ограблениях и сражениях, а также взаимодействовать с другими персонажами. ГТА5 получила широкое признание благодаря своей глубокой истории, реалистичному геймплею и разнообразным возможностям, которые она предоставляет игрокам.
        </p>
        <br><br>
        <h2 id="Top"><a href="GTAIV.html" >3)GTAIV </a></h2>
        <p id="Main" class="Text">
        
        это компьютерная игра, разработанная компанией Rockstar North. Она представляет собой открытый мир в жанре экшн-приключений, действие которого происходит в вымышленном городе Либерти-Сити, инспирированном Нью-Йорком. Игроки воплощаются в главном герое Нико Беллике и исследуют город, выполняют миссии, участвуют в ограблениях, сражениях и взаимодействуют с различными персонажами. ГТА4 была высоко оценена за свою детализацию мира, характеры персонажей и захватывающий сюжет.
        
        </p>
        <br><br>
        </p>
        `

    }
    if(Langg === 3){
        Top.innerHTML =`
        Mūsu ceļveži
        `



        list.innerHTML = `

        <h2 id="Top"> <a href="RDR2.html" > 1) Red Dead Redemption 2 </a> </h2>
         <p id="Main" class="Text">
         Tā ir populāra datorspēle, ko izstrādājusi Rockstar Games. Tas ir priekšvēstnesis oriģinālajam Red Dead Redemption un ir asa sižeta piedzīvojumu atvērtā pasaule, kas norisinās 19. gadsimta beigās Mežonīgajos Rietumos. Spēlētāji var izpētīt plašo pasauli, piedalīties medībās, makšķerēšanā, meklējumos un cīņās, kā arī mijiedarboties ar dažādiem varoņiem. RDR2 ir guvis kritiķu atzinību un ir kļuvusi par vienu no veiksmīgākajām spēlēm vēsturē, pateicoties tās dziļajam sižetam un satriecoši detalizētajai pasaulei.
         </p>
         <h2 id="Top"> <a href="GTAV.html" >2)GTAV</a></h2>
         <p id="Main" class="Text">
         Tā ir populāra datorspēle, ko izstrādājusi Rockstar North. Tā ir atvērtas pasaules asa sižeta piedzīvojumu spēle, kas norisinās izdomātajā Losandželosas pilsētā Los Santosā. Spēlētāji var brīvi pārvietoties pa pilsētu, veikt dažādus uzdevumus, piedalīties laupīšanā un cīņās, kā arī mijiedarboties ar citiem varoņiem. GTA 5 ir plaši pazīstams ar savu dziļo stāstu, reālistisku spēli un spēlētājiem piedāvāto iespēju daudzveidību.
         </p>
         <br>
         <h2 id="Top"> <a href="GTAIV.html" >3)GTAIV </a></h2>
         <p id="Main" class="Text">
        
         ir Rockstar North izstrādāta datorspēle. Tā ir atvērtas pasaules asa sižeta piedzīvojumu spēle, kas norisinās izdomātajā Ņujorkas iedvesmotajā pilsētā Liberty City. Spēlētāji iejūtas galvenā varoņa Niko Bellika lomā un pēta pilsētu, izpilda misijas, piedalās laupīšanā, cīņās un mijiedarbojas ar dažādiem varoņiem. GTA 4 tika ļoti slavēts par tā detalizēto pasauli, varoņu personībām un aizraujošo sižetu.
        
         </p>
         <br><br>
         </p>`
    }


}
function Tri(){
    if(Langg === 1){
        Top.innerHTML =`Creators`
        list.innerHTML = `<p id="Main" class="Text">
        Maxim Karnakov - Wrote a website, Found information, made a domain on github, made a Word document<br>
        Daniils Kergalvis - Chose colors on pages from GTA5<br>
        Vladimir Shevchenko - Sat in the discord
       </p>
        `
    }
    if(Langg === 2){
        Top.innerHTML =`Создатели`
        list.innerHTML = `<p id="Main" class="Text">
       Максим Карнаков - Написал сайт, Нашёл информацию, сделал домен на гитхабе, сделал ворд документ<br>
       Даниилс Кергалвис - Цвета выброл на страницы с гта5<br>
       Владимир Шевченко - Сидел в дискорде
       </p>
        `

    }
    if(Langg === 3){
        Top.innerHTML =`Radītāji`
        list.innerHTML = `<p id="Main" class="Text">
        Maksims Karnakovs — uzrakstīja vietni, atrada informāciju, izveidoja domēnu vietnē github, izveidoja Word dokumentu<br>
        Daniils Kergalvis - Izvēlējās krāsas lapās no GTA5<br>
        Vladimirs Ševčenko - sēdēja DS</p>
        `
    }
}

function Chetiri(){
    if(Langg === 1){
        Top.innerHTML =`Sources`
        list.innerHTML = `
        <p id="Main" class="Text">https://vgtimes.ru/guides/52899-prohozhdenie-red-dead-redemption-2-na-100-gayd.html <br> https://etalongame.com/red-dead-redemption-2-vse-lokacii-neznakomcev/red-dead-redemption-2-vse-lokatsii-neznakomtsev-3/
        https://gta.fandom.com/ru/wiki/100%25_прохождение_GTA_IV <br> https://gta.com.ua/gta4-maps.phtml <br> https://gta.com.ua/gta5-maps.phtml <br> https://gta.fandom.com/ru/wiki/100%25_прохождение_GTA_IV </p>
        `
    }
    if(Langg === 2){
        Top.innerHTML =`Ссылки`
        list.innerHTML = `<p id="Main" class="Text">https://vgtimes.ru/guides/52899-prohozhdenie-red-dead-redemption-2-na-100-gayd.html <br> https://etalongame.com/red-dead-redemption-2-vse-lokacii-neznakomcev/red-dead-redemption-2-vse-lokatsii-neznakomtsev-3/
        https://gta.fandom.com/ru/wiki/100%25_прохождение_GTA_IV <br> https://gta.com.ua/gta4-maps.phtml <br> https://gta.com.ua/gta5-maps.phtml <br> https://gta.fandom.com/ru/wiki/100%25_прохождение_GTA_IV
        </p>
        
        `

    }
    if(Langg === 3){
        Top.innerHTML =`Saites`
        list.innerHTML = `
        
        https://vgtimes.ru/guides/52899-prohozhdenie-red-dead-redemption-2-na-100-gayd.html <br> https://etalongame.com/red-dead-redemption-2-vse-lokacii-neznakomcev/red-dead-redemption-2-vse-lokatsii-neznakomtsev-3/
        https://gta.fandom.com/ru/wiki/100%25_прохождение_GTA_IV <br> https://gta.com.ua/gta4-maps.phtml <br> https://gta.com.ua/gta5-maps.phtml <br> https://gta.fandom.com/ru/wiki/100%25_прохождение_GTA_IV
        `
    }


}




function Pyaty(){
    if(Langg === 1){
        Top.innerHTML =`About Us`
        list.innerHTML = `
        aga        
        `
    }
    if(Langg === 2){
        Top.innerHTML =`О нас`
        list.innerHTML = `
        Этот сайт про то как пройти игру на 100%
        `

    }
    if(Langg === 3){
        Top.innerHTML =``
        list.innerHTML = `
        Этот сайт про то как пройти игру на 100%
        `
    }


}


function Options(){ if(Langg === 1){
    Top.innerHTML =` `
    list.innerHTML = `
    
    <h2 >My options</h2>
    <ul>
      <li ><button onclick="LangEng()" > <h3>Eng!</h3></button><button onclick="LangRu()" > <h3>Ru</h3></button><button onclick="LangLv()" > <h3>LV</h3></button></li>
     
    </ul>`} 
    
    
    if(Langg === 2){Top.innerHTML =` `
        list.innerHTML = 
        `<h2 >Мои настройки</h2>
<ul>
      <li ><button onclick="LangEng()" > <h3>Eng</h3></button><button onclick="LangRu()" > <h3>Ru!</h3></button><button onclick="LangLv()" > <h3>LV</h3></button></li>
      
    </ul>`
    }

    if(Langg === 3){Top.innerHTML =` `
        list.innerHTML = 
        `<h2 >Mani iestatījumi</h2>
<ul>
      <li ><button onclick="LangEng()" > <h3>Eng</h3></button><button onclick="LangRu()" > <h3>Ru</h3></button><button onclick="LangLv()" > <h3>LV!</h3></button></li>
     
    </ul>`
    }
}


var Langg = 1




function LangEng(){
    Langg = 1
    Lang()
    Options()
}
function LangRu(){
    Langg = 2
    Lang()
    Options()
}
function LangLv(){
    Langg = 3
    Lang()
    Options()
}


function Lang(){



    if(Langg === 1){
    Sidebar2.innerHTML = `
    
    
    <h2 id="sidebar" >Navigation</h2>
        <ul>
          <li id="Plan" ><button onclick="Odin()" > <h3>About Us</h3></button></li>
          <li > <button onclick="Dva()"> <h3>Our guides</h3></button></li>
            <li >  <button onclick="Tri()"> <h3> Creators</h3></button></li>
            <li >  <button onclick="Chetiri()"> <h3> Sources</h3></button></li>
            
            <li >  <button onclick="Options()"> <h3> Options</h3></button></li>
        </ul>
      
    
    
    `
    
    }



    if(Langg === 2){
        Sidebar2.innerHTML = `
        <h2 id="sidebar" >Навигация</h2>
        <ul>
          <li id="Plan" ><button onclick="Odin()" > <h3> О нас</h3></button></li>
          <li > <button onclick="Dva()"> <h3> Наши гайды </h3></button></li>
            <li >  <button onclick="Tri()"> <h3> Создатели</h3></button></li>
            <li >  <button onclick="Chetiri()"> <h3> Источники</h3></button></li>
           
            <li >  <button onclick="Options()"> <h3> Options</h3></button></li>
        </ul>
      `}




        if(Langg === 3){
            Sidebar2.innerHTML = `
            <h2 id="sidebar" >Navigācija</h2>  <ul>
            <li id="Plāns" ><button onclick="Odin()" > <h3>Par mums</h3></button></li>
           <li > <button onclick="Dva()"> <h3>Mūsu ceļveži</h3></button></li>
             <li > <button onclick="Tri()"> <h3> veidotāji</h3></button></li>
             <li > <button onclick="Chetiri()"> <h3> Avoti</h3></button></li>
            
             <li > <button onclick="Options()"> <h3> Opcijas</h3></button></li>
          </ul>
          `}
            
}


Odin()
Lang()
