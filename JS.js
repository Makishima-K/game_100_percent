const list = document.getElementById("Main");
const Top = document.getElementById('Top')
const Sidebar2 = document.getElementById('sidebar')

var Langg = 1

function Odin(){
    if(Langg === 1){
        Top.innerHTML =`About Us`
        list.innerHTML = `
        <div id="Main" class="Text">
        This site is about how to complete the game 100%</div>
        
        `
    }
    if(Langg === 2){
        Top.innerHTML =`О нас`
        list.innerHTML = `
        
        
        <p id="Main" class="Text">
        Этот сайт про то как пройти игру на 100%</p>
        `

    }
    if(Langg === 3){
        Top.innerHTML =``
        list.innerHTML = `
        Этот сайт про то как пройти игру на 100%
        `
    }


}

function Dva(){
    if(Langg === 1){
        Top.innerHTML =`Our guides`
        list.innerHTML = `
        
<h2 id="Top">1) Red Dead Redemption 2</h2>
<br><br><p id="Main" class="Text">
Red Dead Redemption 2 is a popular video game developed by Rockstar Games. It serves as a prequel to the original game "Red Dead Redemption" and features an open world in the action-adventure genre set in the late 19th century Wild West. Players can explore a vast world, engage in hunting, fishing, missions, and battles, as well as interact with various characters. RDR2 has received high praise from critics and has become one of the most successful games in history, thanks to its deep storyline and stunningly detailed world.
</p>
<h2 id="Top">2) GTAV</h2>
<p id="Main" class="Text">
GTAV is a popular video game developed by Rockstar North. It is an open world action-adventure game set in the fictional city of Los Santos, based on Los Angeles. Players can freely roam the city, perform various missions, participate in heists and battles, and interact with other characters. GTA5 has garnered widespread acclaim for its deep story, realistic gameplay, and diverse possibilities it offers to players.
</p>
<br><br>
<h2 id="Top">3) AGA</h2>
AGA
<br><br>
</p>
        
        `
    }
    if(Langg === 2){
        Top.innerHTML =`Игры`
        list.innerHTML = `  
        <h2 id="Top"> 1) Red Dead Redemption 2 </h2>
        <br><br><p id="Main" class="Text">
        Является популярной компьютерной игрой, разработанной компанией Rockstar Games. Она является приквелом к оригинальной игре "Red Dead Redemption" и представляет собой открытый мир в жанре экшн-приключений, действие которого происходит в конце 19-го века на Диком Западе. Игроки могут исследовать огромный мир, участвовать в охоте, рыбалке, заданиях и сражениях, а также взаимодействовать с различными персонажами. РДР2 получила высокую оценку критиков и стала одной из самых успешных игр в истории, благодаря своей глубокой сюжетной линии и потрясающему детализированному миру.
        </p>
        <h2 id="Top">2)GTAV</h2>
        <p id="Main" class="Text">
        Это популярная компьютерная игра, разработанная компанией Rockstar North. Она является открытым миром в жанре экшн-приключений, действие которого происходит в вымышленном городе Лос-Сантос, основанном на Лос-Анджелесе. Игроки могут свободно перемещаться по городу, выполнять различные задания, участвовать в ограблениях и сражениях, а также взаимодействовать с другими персонажами. ГТА5 получила широкое признание благодаря своей глубокой истории, реалистичному геймплею и разнообразным возможностям, которые она предоставляет игрокам.
        </p>
        <br><br>
        AGA
        <br><br>
        </p>
        `

    }
    if(Langg === 3){
        Top.innerHTML =``

    }


}
function Tri(){
    if(Langg === 1){
        Top.innerHTML =`Creators`
        list.innerHTML = `<p id="Main" class="Text">
        Maxim Karnakov - Wrote a website, Found information, made a domain on github.
       Daker - hz
       Vovan - hz
       </p>
        `
    }
    if(Langg === 2){
        Top.innerHTML =`Поцаны`
        list.innerHTML = `<p id="Main" class="Text">
       Максим Карнаков - Написал сайт, Нашёл информацию, сделал домен на гитхабе.
       Daker - hz
       Vovan - hz
       </p>
        `

    }
    if(Langg === 3){
        Top.innerHTML =``
        list.innerHTML = `
        Этот сайт про то как пройти игру на 100%
        `
    }
}

function Chetiri(){
    if(Langg === 1){
        Top.innerHTML =`Sources`
        list.innerHTML = `
        <p id="Main" class="Text">
        https://vgtimes.ru/guides/52899-prohozhdenie-red-dead-redemption-2-na-100-gayd.html <br> https://etalongame.com/red-dead-redemption-2-vse-lokacii-neznakomcev/red-dead-redemption-2-vse-lokatsii-neznakomtsev-3/
        </p>
        `
    }
    if(Langg === 2){
        Top.innerHTML =`Ссылки`
        list.innerHTML = `<p id="Main" class="Text">
        https://vgtimes.ru/guides/52899-prohozhdenie-red-dead-redemption-2-na-100-gayd.html <br> https://etalongame.com/red-dead-redemption-2-vse-lokacii-neznakomcev/red-dead-redemption-2-vse-lokatsii-neznakomtsev-3/
        
        </p>
        
        `

    }
    if(Langg === 3){
        Top.innerHTML =``
        list.innerHTML = `
        Этот сайт про то как пройти игру на 100%
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
    
    list.innerHTML = `
    
    <h2 >My options</h2>
    <ul>
      <li ><button onclick="LangEng()" > <h3>Eng!</h3></button><button onclick="LangRu()" > <h3>Ru</h3></button><button onclick="LangLv()" > <h3>LV</h3></button></li>
      <li > <button onclick="black()"> <h3>Color</h3></button></li>
        <li >  <button onclick="MyPlan()"> <h3> Maps</h3></button></li>
        <li >  <button onclick="Options()"> <h3> Options</h3></button></li>
    </ul>`} 
    
    
    if(Langg === 2){
        list.innerHTML = 
        `<h2 >Мои настройки</h2>
<ul>
      <li ><button onclick="LangEng()" > <h3>Eng</h3></button><button onclick="LangRu()" > <h3>Ru!</h3></button><button onclick="LangLv()" > <h3>LV</h3></button></li>
      <li > <button onclick="black()"> <h3>Color</h3></button></li>
        <li >  <button onclick="MyPlan()"> <h3> Maps</h3></button></li>
        <li >  <button onclick="Options()"> <h3> Options</h3></button></li>
    </ul>`
    }

    if(Langg === 3){
        list.innerHTML = 
        `<h2 >Mana что-то</h2>
<ul>
      <li ><button onclick="LangEng()" > <h3>Eng</h3></button><button onclick="LangRu()" > <h3>Ru</h3></button><button onclick="LangLv()" > <h3>LV!</h3></button></li>
      <li > <button onclick="black()"> <h3>Color</h3></button></li>
        <li >  <button onclick="MyPlan()"> <h3> Maps</h3></button></li>
        <li >  <button onclick="Options()"> <h3> Options</h3></button></li>
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
    
    
        <h2 id="sidebar" >My ENG Sidebar</h2>
        <ul>
          <li id="Plan" ><button onclick="Odin()" > <h3>About Us</h3></button></li>
          <li > <button onclick="Dva()"> <h3>Our guides</h3></button></li>
            <li >  <button onclick="Tri()"> <h3> Creators</h3></button></li>
            <li >  <button onclick="Chetiri()"> <h3> Sources</h3></button></li>
            <li >  <button onclick="Pyaty()"> <h3> Other</h3></button></li>
            <li >  <button onclick="Options()"> <h3> Options</h3></button></li>
        </ul>
      
    
    
    `
    
    }



    if(Langg === 2){
        Sidebar2.innerHTML = `
        <h2 id="sidebar" >My RU Sidebar</h2>
        <ul>
          <li id="Plan" ><button onclick="Odin()" > <h3> О нас</h3></button></li>
          <li > <button onclick="Dva()"> <h3> Наши гайды </h3></button></li>
            <li >  <button onclick="Tri()"> <h3> Создатели</h3></button></li>
            <li >  <button onclick="Chetiri()"> <h3> Источники</h3></button></li>
            <li >  <button onclick="Pyaty()"> <h3> Шняга</h3></button></li>
            <li >  <button onclick="Options()"> <h3> Options</h3></button></li>
        </ul>
      `}




        if(Langg === 3){
            Sidebar2.innerHTML = `
            <h2 id="sidebar" >My LV Sidebar</h2>
            <ul>
            <li id="Plan" ><button onclick="Odin()" > <h3>Plans</h3></button></li>
            <li > <button onclick="Dva()"> <h3>Missions and events</h3></button></li>
              <li >  <button onclick="Tri()"> <h3> Collectibles</h3></button></li>
              <li >  <button onclick="Chetiri()"> <h3> Directory</h3></button></li>
              <li >  <button onclick="Pyaty()"> <h3> Other</h3></button></li>
              <li >  <button onclick="Options()"> <h3> Options</h3></button></li>
          </ul>
          `}
            
}


Odin()
Lang()