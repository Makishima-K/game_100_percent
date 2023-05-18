const list = document.getElementById("Main");
const Top = document.getElementById('Top')
const Sidebar = document.getElementById('sidebar')
const Sidebar2 = document.getElementById('Sidebar')
const Color = document.getElementsByClassName('Color')
const Plan = document.getElementById('Plan')

var Langg = 1

// Content


function Odin(){
    if(Langg === 1){
    
    Top.innerHTML = `Plan`
    list.innerHTML = `
    <p id="Main" class="Text">
    Red Dead Redemption 2 has a lot of tasks and additional activities that you need to complete in order to complete the game in 100%. Let's take a closer look at what needs to be done for this.
    <br>
    For completing RDR 2 at 100%, you can get the achievement "Best in the West" (Best in the West). You can follow the progress through the menu "Pause" / "Progress" / "Complete completion". You won’t be able to miss something, since everything can be completed after the completion of the story campaign.
    <br>
    Progress is divided into 5 categories: quests and events, collectibles, reference, player, and more. For 100% completion, you do not have to complete absolutely everything that is in the game. The most time consuming will be collecting collectibles and passing tests.
    <br>
    <br></p>
    <img src="img/Misions.jpg" alt="asda">
    <br>
    <h2 id="Top">Missions and events</h2>
        <p id="Main" class="Text">Complete all story missions (104), be sure to complete the epilogue. <br>
        10 quest lines from strangers ("?" on the map), some strangers can only be found at certain times. Complete map of the game.
        <br>
        Catch 5 criminals. We find "Wanted" posters in the sheriff's offices of major cities: Valentine, Rhodes, Saint-Denis, Strawberry, Blackwater and Tumbleveil. Then we catch them and get a "reward for the head."
        Complete 25 random encounters. Traveling around the world of the game, you will stumble upon white dots on the map. they are endless and appear anywhere. More common near the city of Saint-Denis.
        Survive one gang attack. Sometimes you will be attacked. These events happen randomly.
        Clear six bandit hideouts. According to the plot, you will come across four, the rest you will have to look for yourself.
        </p>
        
        
        <h2 id="Top">Collectibles</h2>
        <img src="img/Oleny.jpg" alt="asda">
        <p id="Main" class="Text">Attractions. Attractions. There is only one attraction in the game.

        Graves. It is necessary to find nine graves of comrades. The task will become available only after completing the story campaign.
        
        Sets of cigarette cards. You need to collect 144 cigarette cards.
        
        
        Dinosaur bones. You need to find 30 dinosaur bones. <br> 
        <br>
        Legendary fish. You need to find 13 types of legendary fish. <br> 
        <br>
        Exotic. You need to go through a series of tasks from a stranger Algeron Vaspa. It is in the upper left corner of Saint-Denis. He will ask you to collect various materials and plants for him. <br> 
        <br>
        Cave drawings. You need to find 10 drawings on the rocks. <br> 
        <br>
        hunting orders. It is necessary to tear off posters at railway stations. So you will receive hunting orders - additional tasks for hunting animals. We hunt, bring the carcass to the post office and send it to the customer. You need to complete them all. <br> 
        <br>
        Treasure hunter. In the game, you can meet various strangers who will ask you to find the treasure. It is enough to complete one of the list of tasks to search for gold bars.  <br> 
        <br>
        Dream Catcher. You need to find 20 dream catchers, these are such items hung on trees. </p>


        <h2 id="Top">Directory</h2>
        <p id="Main" class="Text">
Animals. Kill 50 types of animals. There are 178 species in total in the game, so making this one will be quite simple.<br> 
<br>

Equipment. You need to find 10 of the 72 types of equipment. Five (lasso, binoculars, fishing rod, flashlight and camera) you will find during the passage of the story.
<br> 
        <br>

Fish. You need to catch 10 types of fish out of 30.
<br> 
        <br>
Gangs. Find all gangs. They will meet you as you progress through the story.
<br> 
        <br>
Horses. You need to find 10 breeds of horses. You can just walk the streets of cities and study everyone in a row.
<br> 
        <br>
Plants. You need to find 20 out of 43 plant species. The eagle eye skill (L3+R3 or left + right sticks) will help a lot, as some are hard to spot.
<br> 
        <br>
Weapon. There are 59 types of weapons in the game, but to complete the task, you need to find 48. Weapons can be bought, picked up from a dead enemy, or received for completing a task.
</p>

<h2 id="Top">Other</h2><p id="Main" class="Text">
Huts. You need to find 5 wooden huts. There are more of them on the map, you will find them by the end of the game.
<br> 
        <br>
Legendary Animals. You need to kill 5 out of 14.
<br> 
        <br>
Board games. There are 4 types of board games in the game: five-finger fillet, blackjack, dominoes and poker, you need to play each at least once. .

<br> 
        <br>
Special characters. In the cities you can meet various characters who shout something. You need to find five and talk to them. The easiest way to find them is in Saint-Denis.
<br> 
        <br>
Bath. Take a bath in a hotel in Valentine or Strawberry. It costs 25 cents.
<br> 
        <br>
Show. You can watch the show in Valentine at the beginning of the game. You can watch from chapter 2. A mark in the form of a theatrical mask will appear on the map. Worth 50 cents.
<br> 
        <br>
Theater. The theater can be accessed in Saint-Denis. Worth 2 dollars. You have to sit through the whole show to the end.
<br> 
        <br>
Recipes. You need to cook at least once: a dish, tonic, ammunition, a hunting item, a horse item and a weapon.
<br> 
        <br>
Robbery. You need to rob at least once: a carriage, a house, a store, a train.
</p>




    `}

    if(Langg === 2){
        Top.innerHTML = `Коллекция`
     list.innerHTML = `
     <p id="Основной" класс="Текст">
     В Red Dead Redemption 2 есть множество заданий и дополнительных активностей, которые нужно выполнить, чтобы пройти игру на 100%. Рассмотрим подробнее, что для этого нужно сделать.
     <br>
     За прохождение RDR 2 на 100% можно получить достижение "Лучший на Западе" (Best in the West). Следить за прогрессом можно через меню "Пауза"/"Прогресс"/"Полное завершение". Вы не сможете что-то пропустить, так как все можно будет пройти после завершения сюжетной кампании.
     <br>
     Прогресс разделен на 5 категорий: квесты и события, предметы коллекционирования, ссылка, игрок и другое. Для 100% прохождения не обязательно проходить абсолютно все, что есть в игре. Больше всего времени займет сбор коллекционных предметов и прохождение испытаний.
     <br>
     <br></p>
     <img src="img/Misions.jpg" alt="asda">
     <br>
     <h2 id="Top">Миссии и события</h2>
         <p id="Main" class="Text">Выполните все сюжетные миссии (104), обязательно завершите эпилог. <br>
         10 линий квестов от незнакомцев ("?" на карте), некоторых незнакомцев можно найти только в определенное время. Полная карта игры.
         <br>
         Поймать 5 преступников. Мы находим плакаты «Разыскивается» в офисах шерифа крупных городов: Валентайн, Родос, Сен-Дени, Строберри, Блэкуотер и Тамблвейл. Потом ловим их и получаем "награду за голову".
         Завершите 25 случайных встреч. Путешествуя по миру игры, вы будете натыкаться на белые точки на карте. они бесконечны и появляются где угодно. Чаще встречается возле города Сен-Дени.
         Пережить одну атаку банды. Иногда на вас будут нападать. Эти события происходят случайно.
         Зачистите шесть укрытий бандитов. По сюжету вам попадутся четверо, остальных вам придется искать самостоятельно.
         </p>
        
        
         <h2 id="Top">Предметы коллекционирования</h2>
         <img src="img/Oleny.jpg" alt="asda">
         <p id="Main" class="Text">Достопримечательности. Достопримечательности. В игре есть только один аттракцион.

         Могилы. Нужно найти девять могил товарищей. Задание станет доступно только после прохождения сюжетной кампании.
        
         Наборы сигаретных карточек. Вам нужно собрать 144 сигаретные карты.
        
        
         Кости динозавра. Вам нужно найти 30 костей динозавров. <br>
         <br>
         Легендарная рыба. Вам нужно найти 13 видов легендарных рыб. <br>
         <br>
         Экзотика. Вам необходимо пройти ряд заданий от незнакомца Алджерона Васпы. Он находится в верхнем левом углу Сен-Дени. Он попросит вас собрать для него различные материалы и растения. <br>
         <br>
         Пещерные рисунки. Вам нужно найти 10 рисунков на камнях. <br>
         <br>
         охотничьи заказы. Плакаты на вокзалах срывать надо. Так вы будете получать охотничьи заказы - дополнительные задания на охоту на зверей. Охотимся, привозим тушку на почту и отправляем заказчику. Вам нужно выполнить их все. <br>
         <br>
         Охотник за сокровищами. В игре вы можете встретить разных незнакомцев, которые будут просить вас найти сокровище. Достаточно выполнить одно из списка заданий по поиску золотых слитков. <br>
         <br>
         Ловец снов. Вам нужно найти 20 ловцов снов, это такие предметы, развешенные на деревьях. </p>


         <h2 id="Верх">Каталог</h2>
         <p id="Основной" класс="Текст">
Животные. Убейте 50 видов животных. Всего в игре 178 видов, так что сделать этот будет довольно просто.<br>
<br>

Оборудование. Вам нужно найти 10 из 72 видов снаряжения. Пятерку (лассо, бинокль, удочку, фонарик и фотоаппарат) вы найдете по ходу прохождения сюжета.
<br>
         <br>

Рыба. Вам нужно поймать 10 видов рыбы из 30.
<br>
         <br>
Банды. Найдите все банды. Они встретятся с вами по мере прохождения сюжета.
<br>
         <br>
Лошади. Вам нужно найти 10 пород лошадей. Можно просто ходить по улицам городов и изучать всех подряд.
<br>
         <br>
Растения. Вам нужно найти 20 из 43 видов растений. Навык орлиного глаза (L3+R3 или левый + правый джойстики) очень поможет, так как некоторые из них трудно обнаружить.
<br>
         <br>
Оружие. Всего в игре 59 видов оружия, но для выполнения задания нужно найти 48. Оружие можно купить, подобрать у мертвого врага или получить за выполнение задания.
</p>

<h2 id="Top">Другое</h2><p id="Main" class="Text">
Хижины. Вам нужно найти 5 деревянных хижин. На карте их больше, вы найдете их к концу игры.
<br>
         <br>
Легендарные животные. Вам нужно убить 5 из 14.
<br>
         <br>
Настольные игры. В игре есть 4 вида настольных игр: пятипальцевое филе, блэкджек, домино и покер, в каждую нужно сыграть хотя бы один раз. .

<br>
         <br>
Специальные символы. В городах можно встретить различных персонажей, которые что-то кричат. Вам нужно найти пятерых и поговорить с ними. ЧтЛегче всего их найти в Сен-Дени.
<br>
         <br>
Ванна. Примите ванну в отеле в Валентайне или Клубничке. Стоит 25 центов.
<br>
         <br>
Показывать. Посмотреть шоу можно в Валентайне в начале игры. Смотреть можно со 2 главы. На карте появится отметка в виде театральной маски. Стоит 50 центов.
<br>
         <br>
Театр. В театр можно попасть в Сен-Дени. Стоит 2 доллара. Вы должны высидеть все шоу до конца.
<br>
         <br>
Рецепты. Нужно приготовить хотя бы раз: блюдо, тоник, боеприпасы, предмет для охоты, предмет для лошади и оружие.
<br>
         <br>
Ограбление. Нужно хотя бы раз ограбить: вагон, дом, магазин, поезд.
</p>




     `
    }


    if(Langg === 3){
        Top.innerHTML = `Plāns`
     list.innerHTML = `
     <p id="Galvenā" class="Teksts">
     Red Dead Redemption 2 ir daudz uzdevumu un papildu aktivitāšu, kas jums jāveic, lai spēli pabeigtu 100%. Sīkāk apskatīsim, kas šim nolūkam ir jādara.
     <br>
     Pabeidzot RDR 2 ar 100%, jūs varat iegūt sasniegumu "Labākais Rietumos" (Labākais Rietumos). Progresam varat sekot, izmantojot izvēlni "Pauze" / "Progress" / "Pilnīga pabeigšana". Jūs nevarēsiet kaut ko palaist garām, jo visu var pabeigt pēc stāstu kampaņas pabeigšanas.
     <br>
     Progress ir sadalīts 5 kategorijās: uzdevumi un notikumi, kolekcionējamie priekšmeti, atsauces, atskaņotājs un citi. Lai pabeigtu 100%, jums nav jāaizpilda pilnīgi viss, kas ir spēlē. Visvairāk laikietilpīga būs kolekcionējamo priekšmetu vākšana un testu nokārtošana.
     <br>
     <br></p>
     <img src="img/Misions.jpg" alt="asda">
     <br>
     <h2 id="Top">Misijas un pasākumi</h2>
         <p id="Main" class="Text">Izpildi visas stāsta misijas (104), noteikti pabeidziet epilogu. <br>
         10 meklējumu rindas no svešiniekiem ("?" kartē), dažus svešiniekus var atrast tikai noteiktos laikos. Pilnīga spēles karte.
         <br>
         Noķer 5 noziedzniekus. Plakātus "Wanted" atrodam lielāko pilsētu šerifa birojos: Valentīna, Rodas, Sendenē, Zemeņu, Blekvoteras un Tumbleveilas. Tad mēs tos noķeram un saņemam "atlīdzību par galvu".
         Pabeidziet 25 nejaušas tikšanās. Ceļojot pa spēles pasauli, jūs uz kartes paklupsiet baltus punktus. tie ir bezgalīgi un parādās jebkur. Biežāk sastopams Saint-Denis pilsētas tuvumā.
         Izdzīvo vienu bandas uzbrukumu. Dažreiz jums uzbruks. Šie notikumi notiek nejauši.
         Iztīrīt sešus bandītu slēpņus. Pēc sižeta sanāks četras, pārējais būs jāmeklē pašam.
         </p>
        
        
         <h2 id="Top">Kolekcionējamie priekšmeti</h2>
         <img src="img/Oleny.jpg" alt="asda">
         <p id="Main" class="Text">Atrakcijas. Atrakcijas. Spēlē ir tikai viena atrakcija.

         Kapi. Jāatrod deviņi biedru kapi. Uzdevums kļūs pieejams tikai pēc stāstu kampaņas pabeigšanas.
        
         Cigarešu karšu komplekti. Jums jāsavāc 144 cigarešu kartes.
        
        
         Dinozauru kauli. Jums jāatrod 30 dinozauru kauli. <br>
         <br>
         Leģendāra zivs. Jums jāatrod 13 leģendāro zivju veidi. <br>
         <br>
         Eksotisks. Jums ir jāiziet virkne uzdevumu no svešinieka Aldžerona Vaspas. Tas atrodas Saint-Denis augšējā kreisajā stūrī. Viņš lūgs jums savākt dažādus materiālus un augus viņam. <br>
         <br>
         Alu zīmējumi. Uz akmeņiem jāatrod 10 zīmējumi. <br>
         <br>
         medību pavēles. Vajag noplēst plakātus dzelzceļa stacijās. Tātad jūs saņemsiet medību pasūtījumus - papildu uzdevumus dzīvnieku nomedīšanai. Nomedām, atvedam liemeni uz pastu un nosūtām klientam. Jums tie visi ir jāpabeidz. <br>
         <br>
         Dārgumu meklētājs. Spēlē jūs varat satikt dažādus svešiniekus, kuri lūgs jums atrast dārgumu. Lai meklētu zelta stieņus, pietiek ar vienu no uzdevumu saraksta izpildi. <br>
         <br>
         Sapņu ķērājs. Jums jāatrod 20 sapņu ķērāji, tie ir tādi priekšmeti, kas izkārti kokos. </p>


         <h2 id="Top">Katalogs</h2>
         <p id="Galvenā" class="Teksts">
Dzīvnieki. Nogalini 50 veidu dzīvniekus. Kopā spēlē ir 178 sugas, tāpēc izveidot šo būs pavisam vienkārši.<br>
<br>

Aprīkojums. Jums jāatrod 10 no 72 aprīkojuma veidiem. Pieci (laso, binoklis, makšķere, kabatas lukturītis un fotoaparāts) jūs atradīsiet stāsta fragmentā.
<br>
         <br>

Zivis. Ir jānoķer 10 zivju veidi no 30.
<br>
         <br>
Bandas. Atrodiet visas bandas. Viņi tiksies ar jums, kad turpināsiet stāstu.
<br>
         <br>
Zirgi. Jums jāatrod 10 zirgu šķirnes. Jūs varat vienkārši staigāt pa pilsētu ielām un pētīt visus pēc kārtas.
<br>
         <br>
Augi. Jums jāatrod 20 no 43 augu sugām. Ērgļa acs prasme (L3+R3 vai kreisais + labais nūjas) ļoti palīdzēs, jo dažas ir grūti pamanāmas.
<br>
         <br>
Ierocis. Spēlē ir 59 ieroču veidi, bet, lai izpildītu uzdevumu, ir jāatrod 48. Ieročus var nopirkt, paņemt no miruša ienaidnieka vai saņemt par uzdevuma izpildi.
</p>

<h2 id="Top">Cits</h2><p id="Main" class="Text">
Būdas. Jāatrod 5 koka būdiņas. Kartē to ir vairāk, tos atradīsi līdz spēles beigām.
<br>
         <br>
Leģendārie dzīvnieki. Jums jānogalina 5 no 14.
<br>
         <br>
Galda spēles. Spēlē ir 4 veidu galda spēles: piecu pirkstu fileja, blekdžeks, domino un pokers, katra ir jāspēlē vismaz vienu reizi. .

<br>
         <br>
Īpašās rakstzīmes. Pilsētās var sastapt dažādus tēlus, kuri kaut ko kliedz. Jums jāatrod pieci un jārunā ar viņiem. ThVienkāršākais veids, kā tos atrast, ir Saint-Denis.
<br>
         <br>
Vanna. Nomazgājieties viesnīcā Valentīnā vai Zemeņos. Tas maksā 25 centus.
<br>
         <br>
Rādīt. Raidījumu Valentīnā varat noskatīties spēles sākumā. Jūs varat skatīties no 2. nodaļas. Kartē parādīsies atzīme teātra maskas formā. 50 centu vērts.
<br>
         <br>
Teātris. Teātris ir pieejams Saint-Denis. 2 dolāru vērts. Jāsēž visa izrāde līdz galam.
<br>
         <br>
Receptes. Jums ir nepieciešams gatavot vismaz vienu reizi: trauks, toniks, munīcija, medību priekšmets, zirga priekšmets un ierocis.
<br>
         <br>
Laupīšana. Vajag vismaz vienu reizi aplaupīt: vagonu, māju, veikalu, vilcienu.
</p>




     `

    }

}

// Missions
function Dva(){
    if(Langg === 1){
    Top.innerHTML = `Missions`
    list.innerHTML = `<h2 id="Top">Strangers</h2>
    <p id="Main" class="Text">
    Strangers in Red Dead Redemption 2 are side quests that run parallel to the main storyline and often pave the way for even more action in the game's vast open world.

    The Stranger quest is optional and does not appear on the map automatically, only as a question mark on a white icon on the map when you get close.
    
    From there, you need to narrow down the location before starting the quest. Some of the missions involve collectibles and other activities, and some are quest lines in their own right - it's up to you to decide if you'll take them on.
    
    The locations of the Strangers are listed in the order in which they met us in the story. Remember that if you miss them, you can always come back to them later - just get close and they should reappear on the map (with the exception of some tasks).
    </p>



    <h2 id="Top"> CHAPTER 2 <br>
1. MOST NOBLE MEN AND WOMAN LEGENDARY ARROWS</h2>
<img class="Strangers" src="img/Chapter22.jpg" alt="asda">  <img class="Strangers" src="img/chapter21.jpg" alt="asda">
<p id="Main" class="Text">
A stranger can be found in a saloon in the northeastern part of Valentine. This biographer will give you four photographs of the shooters and ask you to track them down. Look in your bag and read the back of each photo to add their location to the map.
</p>

<h2 id="Top"><br>
2. SMOKING AND OTHER HOBBIES<br>
CIGARETTE CARDS</h2>
<img class="Strangers" src="img/Chapter23.jpg" alt="asda">  <img class="Strangers" src="img/chapter24.jpg" alt="asda">
<p id="Main" class="Text">
This Stranger is at Flatneck Station, behind the outhouse. He will tell you about collectible cigarette cards. Collect a complete set, and you can profitably sell them to him.
</p>
<h2 id="Top"><br>
3. TREASURE HUNTER<br>
JACK HALL GANG TREASURE CARDS</h2>

<img class="Strangers" src="img/Chapter25.jpg" alt="asda">  <img class="Strangers" src="img/chapter26.jpg" alt="asda">
<p id="Main" class="Text">
A stranger is located near the rocks to the west of the Flatrock station and north of the railway. Buy a treasure map from the explorer for $10 and you can start the Jack Hall Gang Treasure Map quest and get gold bars.
<br></p>
<h2 id="Top"><br>
4. QUEST "TEST OF FAITH"
DINOSAUR BONES</h2>
<img class="Strangers" src="img/Chapter27.jpg" alt="asda">  <img class="Strangers" src="img/chapter28.jpg" alt="asda"><br>
<p id="Main" class="Text">
The location is northwest of Flatneck Station, in the desert. Look for the wagon and the Stranger standing above the excavation site. You will meet a paleontologist who wants you to send her dinosaur bones.
</p>
<h2 id="Top">
5. LOCATION OF THE STRANGER WITH THE QUEST "IDYL FOR AMATEURS"</h2><br>
<p id="Main" class="Text">
Southeast of Strawberry or southwest of Riggs Station, in the middle of the trees, this character is trying to take pictures of wild animals. After the cutscene, you must return the bag that was stolen by the coyote. To complete the challenge, simply chase the beast and it will drop the bag near the rock and then return it to the photographer.
</p>
<img class="Strangers" src="img/Chapter28.jpg" alt="asda">  <img class="Strangers" src="img/chapter29.jpg" alt="asda"><br>
<br><p id="Main" class="Text">
By the way, this is the first of several "Idyll for amateurs" tasks. Keep going through the main story and new ones will appear.
</p>

<h2 id="Top">
6. THE STRANGER'S POSITIONING IN THE MISSION "AMERICAN DREAMS" KILLER'S CLUES</h2><br>

<img class="Strangers" src="img/Chapter30.jpg" alt="asda">  <img class="Strangers" src="img/chapter31.jpg" alt="asda"><br>
<p id="Main" class="Text">
The stranger will only appear on the map when you have found all three pieces of the killer's clue. Once you've done that, head southwest from Valentine to make the area appear on the map. The place you are looking for is the basement doors next to the ruined hut on the way to the waterfall.
</p>
<h2 id="Top">
7. SMELL OF MAKEUP</h2><br>
<img class="Strangers" src="img/Chapter31.jpg" alt="asda">  <img class="Strangers" src="img/chapter32.jpg" alt="asda"><br>
<p id="Main" class="Text">
This Stranger mission starts at the Van Horn Trading Post Saloon, on the east side of the map. Arthur runs into the members of the touring show, Miss Marjorie and one of her actors named Bertram; a huge guy with a deformed head.
</p>
<h2 id="Top">
8. A STRANGER RAISING FOR CHARITY (ONLY AVAILABLE UNTIL CHAPTER 6)</h2><br>
 
<img class="Strangers" src="img/Chapter33.jpg" alt="asda">  <img class="Strangers" src="img/chapter34.jpg" alt="asda"><br>
<p id="Main" class="Text">
This unnamed woman is sitting on the corner in the northwest of Saint Denis trying to raise donations for the expansion of the Quincy Harris Memorial Hall and will talk to you about it for a few seconds. The donation costs only $20 and will give you a small positive boost in Honor.
</p>
<h2 id="Top">
9. GREAT NIGHT FOR THEM</h2><br>
 
<img class="Strangers" src="img/Chapter35.jpg" alt="asda">  <img class="Strangers" src="img/chapter36.jpg" alt="asda"><br>
<p id="Main" class="Text">
To unlock the side quest "A Beautiful Night for Them" and "The Stranger", you need to meet the "Night Crew" at least once. If you ride your horse through Bayou and Bluewater Marsh at night and hear voices, notice shadows or lights, or see any gray dot on the mini-map, look into the situation. This can be a nasty encounter, most often occurring around the large lake in the center of the area.
<br> 
<img class="Strangers" src="img/Chapter37.jpg" alt="asda">  <img class="Strangers" src="img/chapter38.jpg" alt="asda"><br>

If a suitable encounter with the Night Crew occurs, then the Stranger's Mission appears at night on the road leading to/from Lagras. An elderly man sits in front of the tent and tells that the "Night Gang" is in charge here - the murderous villains who captured his house.
</p>
<h2 id="Top">
10. GEOLOGY FOR BEGINNERS<br>
CAVE DRAWINGS</h2><br>
<img class="Strangers" src="img/Chapter39.jpg" alt="asda">  <img class="Strangers" src="img/chapter40.jpg" alt="asda"><br>

<p id="Main" class="Text">
Northwest of Strawberry, on the porch of a hut sits a guy (he's marked on the map as you approach him). This is Francis Sinclair, talking to him will activate the "Geology for Beginners" mission and unlock the quest to find the rock carvings. He will tell you about 10 rock paintings, and ask you to send him the coordinates of each of them.
</p>
<h2 id="Top">
11. GIFTS OF NATURE</h2><br>

<img class="Strangers" src="img/Chapter41.jpg" alt="asda">  <img class="Strangers" src="img/chapter42.jpg" alt="asda"><br>
<p id="Main" class="Text">
This mission was added to the game after the release on PC. You meet a traveler who asks Arthur to collect herbs in exchange for a reward (horse potion). You'll find the Traveler right above the L in the Heartlands on the map, between two trails in the wilderness. Talk to him and he will explain what the mission has to offer. Looks like you will meethim more than once.
</p>


<h2 id="Top">

CHAPTER 3 <br>
12. OF COURSE BRITISH</h2><br>
<img class="Strangers" src="img/Chapter43.jpg" alt="asda">  <img class="Strangers" src="img/chapter44.jpg" alt="asda"><br>
<p id="Main" class="Text">
Starting from the third chapter, in the state of Lemoyne, south of the Emerald Ranch, Arthur will be able to find a broken caravan of circus performers. There sits a lost sad man. He says he is a female animal fighter named Margaret and his animals have escaped. Without the animals, his show is no longer a show and he will ask to find his lost Zebra, Tiger and Lion.
</p>
<h2 id="Top">
13. THE STRANGER’S PLACE WITH THE TASK “FISH CATCHER”
LEGENDARY FISH</h2><br>
<img class="Strangers" src="img/Chapter45.jpg" alt="asda">  <img class="Strangers" src="img/chapter46.jpg" alt="asda"><br>
<p id="Main" class="Text">
We suspect that it may be necessary to complete the Soul Catcher quest in Chapter 2 first before this Stranger appears. In any case, you'll find him southeast of Flatneck Station, on the pier between Flatneck and Rhodes. The task will allow you to find 13 locations and catch the legendary fish.
</p>
<h2 id="Top">
14. HISTORICAL INJUSTICE</h2><br><p id="Main" class="Text">
Stranger Jeremiah Compson can be encountered somewhere in Chapter 3 on a bench in front of the Rhodes' Train Station. He appears to be homeless and drunk.
</p>
<img class="Strangers" src="img/Chapter47.jpg" alt="asda">  <img class="Strangers" src="img/chapter48.jpg" alt="asda"><br>
<p id="Main" class="Text">
He will tell you that he has lost everything - home, values, work and honor. The last two are difficult to recover, but Arthur agrees to find his personal heirlooms: a watch, a revolver, and an account book.
</p>
<h2 id="Top">
15. NO GOOD DEED</h2><br>
<img class="Strangers" src="img/Chapter49.jpg" alt="asda">  <img class="Strangers" src="img/chapter50.jpg" alt="asda"><br>
<p id="Main" class="Text">
Looks like you need to finish the mission "True Love Story" (Chapter 3) before that. In the middle of chapter 3, Arthur can find the Stranger sitting in front of the churchyard in Rhodes. He is very scared because his medicine van has been stolen.
</p>
<h2 id="Top">
CHAPTER 4 <br>
16. Oh my brother
You must complete The Golden Cage (Chapter 4).</h2><br>

<img class="Strangers" src="img/Chapter51.jpg" alt="asda">  <img class="Strangers" src="img/chapter52.jpg" alt="asda"><br>
<p id="Main" class="Text">
Somewhere in the middle of chapter 4, people can be found arguing near the store in Valentine. A pair of twins - Proyt and Acrisius - fight for one woman, Helen. They both want to prove their love to her and show who is the bravest of them with your help. This is probably the most fun side quest.
</p>
<h2 id="Top">
17. A SCIENTIST AND HIS KIDS </h2><br>
<p id="Main" class="Text">
This task is activated only during the day and before it, at the beginning of Chapter 4, you need to finish the "Benefits of Civilization".
</p>
<img class="Strangers" src="img/Chapter53.jpg" alt="asda">  <img class="Strangers" src="img/chapter54.jpg" alt="asda"><br>
<p id="Main" class="Text">
At the beginning of the fourth chapter in the western part of Saint-Denis, you can meet a new Stranger. It is located by the pond in the park. His name is Marko Dragic and he is the inventor of all sorts of new technological innovations. He wants to showcase his new remote control equipment to potential investors. Since they suspect that this equipment may be tampered with in some way, they ask someone with no understanding to demonstrate the new technology. Arthur is suitable for the experiment. After two parts of the quest, you will receive the "Artificial Intelligence" achievement/trophy.
</p>
<h2 id="Top">
18. SCIENTIFIC MERCY</h2><br>
<img class="Strangers" src="img/Chapter55.jpg" alt="asda">  <img class="Strangers" src="img/chapter56.jpg" alt="asda"><br>
<p id="Main" class="Text">
At the beginning of the fourth chapter on the northern outskirts of Saint-Denis, Arthur will be able to find another Stranger only after completing the Goods of Civilization. He introduces himself as a professor and asks to get a lot of moonshine for him. Not for personal consumption, but for scientific purposes, rest assured. This will begin the quest, which consists of seven parts.
</p>
<h2 id="Top">
19. PATH OF THE ARTIST</h2><br>
<img class="Strangers" src="img/Chapter57.jpg" alt="asda">  <img class="Strangers" src="img/chapter58.jpg" alt="asda"><br>
<p id="Main" class="Text">
Requires completing "Benefits of Civilization". At the beginning of the fourth chapter, we can meet a rather interesting character in a saloon in the north of Saint-Denis. His name is Charles Chatenet, French artist, Casanova and a promising funny guy to talk to.
</p>
<h2 id="Top">
20. HELP YOUR BROTHER</h2><br>
<img class="Strangers" src="img/Chapter59.jpg" alt="asda">  <img class="Strangers" src="img/chapter60.jpg" alt="asda"><br>
<p id="Main" class="Text">
An optional Honor mission, only available in Chapter 4. After the first mission in Chapter 4, in the eastern part of Saint-Denis, Arthur can find a monk asking for donations. Alms give a small positive honor boost. The monk will tell you that, despite the year 1899, there are still slaves in the city waiting to be sold.
</p>
<h2 id="Top">
21. TIES BINDING US</h2><br>
<img class="Strangers" src="img/Chapter61.jpg" alt="asda">  <img class="Strangers" src="img/chapter62.jpg" alt="asda"><br>
<p id="Main" class="Text">
On a hill next to the train tracks in the southeast of Rhodes, Arthur notices two men fighting on the ground. Judging by their clothes, they had just escaped from prison. They need new clothes, but they can't go to town because of the wanted posters. They ask Arthur for help.
</p>
<h2 id="Top">
22. DUCHESES AND OTHER Beasts</h2><br>
<img class="Strangers" src="img/Chapter63.jpg" alt="asda">  <img class="Strangers" src="img/chapter64.jpg" alt="asda"><br>
<p id="Main" class="Text">
It is necessary to complete the Golden Cage quest Chapter 4. In the middle of the fourth chapter, we have the opportunity to meet another unique Stranger. He lives in the Growing House behind the Blue Hotel north of Saint Denis. It's a collector named Algernon Wasp, looking for exotic things, mostly orchids and bird feathers. Be patient, as the search for exotics will be long, you will receive $ 760, a hat and a revolver as a reward.
</p>
<h2 id="Top">
23. PRAGMATISM FOR IDEALISTS
MAYOR'S TASKS</h2><br>
<img class="Strangers" src="img/Chapter65.jpg" alt="asda">  <img class="Strangers" src="img/chapter66.jpg" alt="asda"><br>
<p id="Main" class="Text">
You need to complete the task "The Golden Cage" (the beginning of the 4th chapter) and receive Mayor Lemieux's letter. To start this quest, watch for an on-screen message about not opening mail in the upper left corner.
</p>
<img class="Strangers" src="img/Chapter67.jpg" alt="asda">  <img class="Strangers" src="img/chapter68.jpg" alt="asda"><br>

<p id="Main" class="Text">
Go to any post office and get your mail. After reading Lemieux's letter, you can meet him at his residence in northwestern Saint-Denis, at night.
</p>
<h2 id="Top">
CHAPTER 5 <br>
24. THE WISDOM OF THE ELDERS</h2><br>
<img class="Strangers" src="img/Chapter69.jpg" alt="asda">  <img class="Strangers" src="img/chapter70.jpg" alt="asda"><br>
<p id="Main" class="Text">
Beneath the railroad tracks west of Van Horn, Arthur can find a muttering man on the ground who looks like he needs help. He basically repeats the name of his village, Butcher Creek, which is located to the north of us. It will be good if you put him on a horse and return that Yes. Another person, a little less crazy, is happy to see his fellow villager and will now take care of him. The person you just helped will attack you without warning. It seems that strange things are happening in and around this village - we need to check this a little later.
</p>





<h2 id="Top">

25. WIDOW CHARLOTT OF WILLARD'S REST<br>
Only available until Chapter 6. In the wilderness, on the northeast edge of the map (at the very end of the map), in a homestead called Willard's Rest.
</h2><br>
<img class="Strangers" src="img/Chapter71.jpg" alt="asda">  <img class="Strangers" src="img/chapter72.jpg" alt="asda"><br>
<p id="Main" class="Text">
In chapters 5 and 6, Arthur can meet an unfamiliar woman north of Annesburg, who is sitting by the grave. She lost her husband and does not know how to live on. Arthur offers to give her a ride to town, but she refuses. But still agrees to Arthur's offer to show her how to hunt and thus provide for herself.
</p>
<h2 id="Top">
CHAPTER 6<br>
26. VETERAN
GIANT BOAR</h2><br>
<img class="Strangers" src="img/Chapter73.jpg" alt="asda">  <img class="Strangers" src="img/chapter74.jpg" alt="asda"><br>
<p id="Main" class="Text">
Once you reach Chapter 6, north of Emerald Ranch, near Lake O'Creagh's Run, there is a new Stranger. And this time he is not strange, but a nice guy. A man named Hamish Sinclair, a veteran in need of your help, is leaning against a boulder. Buell the horse threw him off and ran off with a prosthetic leg. He would be grateful if we could find him. Upon completion, get the tusk of a giant boar and a stubborn but strong horse.
</p>
<h2 id="Top">
EPILOGUE 1<br>
27. AMERICAN HELL BURNED OUT</h2><br>
<img class="Strangers" src="img/Chapter75.jpg" alt="asda">  <img class="Strangers" src="img/chapter75.jpg" alt="asda"><br>
<p id="Main" class="Text">
After completing the "Landholding Class" mission. West of Blackwater, on a hill overlooking West Elizabeth, we can find a man sitting and writing. He introduces himself as Evelyn Miller, an author whom Dutch used to read frequently. After a short conversation, he invites you to visit him in a hut near Tanner's Ranch, a little south.
</p>
`

    }

    if(Langg === 2){
        Top.innerHTML = `Миссии`
     list.innerHTML = `<h2 id="Top">Незнакомцы</h2>
     <p id="Основной" класс="Текст">
     Незнакомцы в Red Dead Redemption 2 — это побочные квесты, которые проходят параллельно основной сюжетной линии и часто прокладывают путь к еще большему действию в огромном открытом мире игры.

     Квест «Незнакомец» является необязательным и не появляется на карте автоматически, а только в виде вопросительного знака на белом значке на карте, когда вы приближаетесь.
    
     Оттуда вам нужно сузить местоположение, прежде чем начинать квест. Некоторые из миссий включают в себя предметы коллекционирования и другие действия, а некоторые представляют собой самостоятельные линии квестов — вам решать, возьметесь ли вы за них.
    
     Места Незнакомцев перечислены в том порядке, в котором они встречались нам по сюжету. Помните, что если вы их пропустите, вы всегда сможете вернуться к ним позже — просто подойдите поближе, и они должны снова появиться на карте (за исключением некоторых заданий).
     </p>



     <h2 id="Верх"> ГЛАВА 2 <br>
1. САМЫЕ ЗНАМЕНИТЫЕ МУЖЧИНЫ И ЖЕНЩИНЫ ЛЕГЕНДАРНЫЕ СТРЕЛЫ</h2>
<img class="Незнакомцы" src="img/Chapter22.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter21.jpg" alt="asda">
<p id="Основной" класс="Текст">
Незнакомца можно найти в салуне в северо-восточной части Валентайна. Этот биограф даст вам четыре фотографии стрелков и попросит выследить их. Загляните в свою сумку и прочитайте оборотную сторону каждой фотографии, чтобы добавить их местоположение на карту.
</p>

<h2 id="Верх"><br>
2. КУРЕНИЕ И ДРУГИЕ ХОББИ<br>
СИГАРЕТНЫЕ КАРТЫ</h2>
<img class="Незнакомцы" src="img/Chapter23.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter24.jpg" alt="asda">
<p id="Основной" класс="Текст">
Этот незнакомец находится на станции Флэтнек, за флигелем. Он расскажет вам о коллекционных сигаретных карточках. Соберите полный набор, и вы сможете выгодно продать их ему.
</p>
<h2 id="Верх"><br>
3. ОХОТНИК ЗА СОКРОВИЩАМИ<br>
КАРТЫ СОКРОВИЩ БАНКИ ДЖЕКА ХОЛЛА</h2>

<img class="Незнакомцы" src="img/Chapter25.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter26.jpg" alt="asda">
<p id="Основной" класс="Текст">
Незнакомец находится возле скал к западу от станции Флэтрок и к северу от железной дороги. Купите карту сокровищ у исследователя за 10 долларов, и вы сможете начать квест «Карта сокровищ банды Джека Холла» и получить золотые слитки.
<br></p>
<h2 id="Верх"><br>
4. КВЕСТ "ПРОВЕРКА ВЕРЫ"
КОСТИ ДИНОЗАВРА</h2>
<img class="Незнакомцы" src="img/Chapter27.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter28.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Место находится к северо-западу от станции Флэтнек, в пустыне. Ищите фургон и Незнакомца, стоящего над местом раскопок. Вы встретите палеонтолога, который хочет, чтобы вы отправили ей кости динозавра.
</p>
<h2 id="Верх">
5. ЛОКАЦИЯ НЕЗНАКОМКА С КВЕСТОМ "ИДИЛИЯ ДЛЯ ЛЮБИТЕЛЕЙ"</h2><br>
<p id="Основной" класс="Текст">
К юго-востоку от Strawberry или к юго-западу от станции Riggs, посреди деревьев этот персонаж пытается сфотографировать диких животных. После заставки вы должны вернуть сумку, которую украл койот. Чтобы выполнить задание, просто преследуйте зверя, и он бросит сумку возле скалы, а затем вернет ее фотографу.
</p>
<img class="Незнакомцы" src="img/Chapter28.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter29.jpg" alt="asda"><br>
<br><p id="Основной" класс="Текст">
Кстати, это первая из нескольких задач "Идиллия для любителей". Продолжайте проходить основную историю, и появятся новые.
</p>

<h2 id="Верх">
6. ПОЗИЦИОНИРОВАНИЕ НЕЗНАКОМЦА В МИССИИ "АМЕРИКАНСКИЕ МЕЧТЫ" УЛИЧНЫЕ ПОДСКАЗКИ</h2><br>

<img class="Незнакомцы" src="img/Chapter30.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter31.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Незнакомец появится на карте только тогда, когда вы найдете все три части улики убийцы. Как только вы это сделаете, идите на юго-запад от Валентайна, чтобы область появилась на карте. Место, которое вы ищете, — это двери в подвал рядом с разрушенной хижиной на пути к водопаду.
</p>
<h2 id="Верх">
7. ЗАПАХ МАКИЯЖА</h2><br>
<img class="Незнакомцы" src="img/Chapter31.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter32.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Эта миссия незнакомца начинается в салуне торгового поста Ван Хорна, на восточной стороне карты. Артур сталкивается с участниками гастрольного шоу, мисс Марджори и одним из ее актеров по имени Бертрам; огромный парень с деформированной головой.
</p>
<h2 id="Верх">
8. БЛАГОТВОРИТЕЛЬНЫЙ СБОР НЕЗНАКОМОГО (ДОСТУПЕН ТОЛЬКО ДО ГЛАВЫ 6)</h2><br>
 
<img class="Незнакомцы" src="img/Chapter33.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter34.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Эта неназванная женщина сидит на углу к северо-западу от Сен-Дени, пытаясь собрать пожертвования на расширение Мемориального зала Куинси Харриса, и несколько секунд будет говорить с вами об этом. Пожертвование стоит всего 20 долларов и даст вам небольшое положительное повышение чести.
</p>
<h2 id="Верх">
9. ОТЛИЧНАЯ НОЧЬ ДЛЯИХ</h2><br>
 
<img class="Незнакомцы" src="img/Chapter35.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter36.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Чтобы разблокировать побочный квест «Прекрасная ночь для них» и «Незнакомец», вам нужно хотя бы раз встретиться с «Ночной командой». Если вы едете на лошади через Байу и Блууотер-Марш ночью и слышите голоса, замечаете тени или свет или видите какую-либо серую точку на мини-карте, внимательно изучите ситуацию. Это может быть неприятное столкновение, чаще всего происходящее вокруг большого озера в центре области.
<br>
<img class="Незнакомцы" src="img/Chapter37.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter38.jpg" alt="asda"><br>

Если происходит подходящая встреча с Ночной Бригадой, то Миссия Незнакомца появляется ночью на дороге, ведущей в/из Лаграса. Перед палаткой сидит пожилой мужчина и рассказывает, что здесь заправляет «Ночная банда» — злодеи-убийцы, захватившие его дом.
</p>
<h2 id="Верх">
10. ГЕОЛОГИЯ ДЛЯ НАЧИНАЮЩИХ<br>
ПЕЩЕРНЫЕ РИСУНКИ</h2><br>
<img class="Незнакомцы" src="img/Chapter39.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter40.jpg" alt="asda"><br>

<p id="Основной" класс="Текст">
К северо-западу от Strawberry, на крыльце хижины сидит парень (он отмечен на карте, когда вы подходите к нему). Это Фрэнсис Синклер, разговор с ним активирует миссию «Геология для начинающих» и разблокирует квест по поиску наскальных рисунков. Он расскажет вам о 10 наскальных рисунках и попросит прислать ему координаты каждого из них.
</p>
<h2 id="Верх">
11. ДАРЫ ПРИРОДЫ</h2><br>

<img class="Незнакомцы" src="img/Chapter41.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter42.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Эта миссия была добавлена в игру после релиза на ПК. Вы встречаете путешественника, который просит Артура собрать травы в обмен на награду (конское зелье). Вы найдете Путешественника прямо над буквой L в Сердцеземье на карте, между двумя тропами в пустыне. Поговорите с ним, и он объяснит, что может предложить миссия. Похоже, вы еще не раз встретитесь с ним.
</p>


<h2 id="Верх">

ГЛАВА 3 <br>
12. КОНЕЧНО БРИТАНСКИЙ</h2><br>
<img class="Незнакомцы" src="img/Chapter43.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter44.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Начиная с третьей главы, в штате Лемойн, южнее Изумрудного ранчо, Артур сможет найти разбитый караван циркачей. Там сидит потерянный грустный человек. Он говорит, что он борец с животными по имени Маргарет, и его животные сбежали. Без животных его шоу уже не шоу, и он попросит найти пропавших Зебру, Тигра и Льва.
</p>
<h2 id="Верх">
13. МЕСТО ЧУЖОГО С ЗАДАНИЕМ «РЫБОЛОВ»
ЛЕГЕНДАРНАЯ РЫБА</h2><br>
<img class="Незнакомцы" src="img/Chapter45.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter46.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Мы подозреваем, что может быть необходимо сначала выполнить квест «Ловец душ» в главе 2, прежде чем появится этот незнакомец. В любом случае, вы найдете его к юго-востоку от станции Флэтнек, на пирсе между Флэтнеком и Родосом. Задача позволит найти 13 локаций и поймать легендарную рыбу.
</p>
<h2 id="Верх">
14. ИСТОРИЧЕСКАЯ НЕСПРАВЕДЛИВОСТЬ</h2><br><p id="Main" class="Text">
Незнакомца Джереми Компсона можно встретить где-то в главе 3 на скамейке перед железнодорожным вокзалом Родса. Похоже, он бездомный и пьяный.
</p>
<img class="Незнакомцы" src="img/Chapter47.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter48.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Он расскажет, что потерял все — дом, ценности, работу и честь. Последние два восстановить сложно, но Артур соглашается найти свои личные реликвии: часы, револьвер и бухгалтерскую книгу.
</p>
<h2 id="Верх">
15. НЕТ ДОБРОГО ДЕЛА</h2><br>
<img class="Незнакомцы" src="img/Chapter49.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter50.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Похоже, вам нужно закончить миссию «Настоящая история любви» (глава 3) до этого. В середине третьей главы Артур может найти Незнакомца, сидящего перед кладбищем на Родосе. Он очень напуган, потому что его медицинский фургон был украден.
</p>
<h2 id="Верх">
ГЛАВА 4 <br>
16. О, мой брат
Вы должны пройти «Золотую клетку» (глава 4).</h2><br>

<img class="Незнакомцы" src="img/Chapter51.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter52.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Где-то в середине четвертой главы можно найти спорящих возле магазина в Валентайне людей. Пара близнецов — Пройт и Акрисий — борются за одну женщину, Елену. Они оба хотят доказать ей свою любовь и с вашей помощью показать, кто из них самый смелый. Это, наверное, самый интересный побочный квест.
</p>
<h2 id="Верх">
17. УЧЕНЫЙ И ЕГО ДЕТИ </h2><br>
<p id="Основной" класс="Текст">
Это задание активируется только днем и перед ним, в начале 4 главы, вам нужно закончить "Преимущества цивилизации".
</p>
<img class="Незнакомцы" src="img/Chapter53.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter54.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
В начале четвертой главы в западной части Сен-Дени можно встретить нового Незнакомца. Находится у пруда в парке. Его зовут Марко Драгич, и он изобретатель всевозможных новых технологических инноваций. Он хочет продемонстрировать потенциальным инвесторам свое новое оборудование для дистанционного управления. Поскольку они подозревают, что это оборудование может быть каким-то образом изменено, они просят кого-то, кто не понимает, продемонстрировать новую технологию. Артур подходит для эксперимента. После двух частей квеста вы получите достижение/трофей «Искусственный интеллект».
</p>
<h2 id="Верх">
18. НАУЧНОЕ МИЛОСЕРДИЕ</h2><br>
<img class="Незнакомцы" src="img/Chapter55.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter56.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
В начале четвертой главы на северной окраине Сен-Дени Артур сможет найти другого Незнакомца только после выполнения Товаров Цивилизации. Он представляется профессором и просит добыть для него много самогона. Не для личного потребления, а в научных целях, будьте уверены. Так начнется квест, состоящий из семи частей.
</p>
<h2 id="Верх">
19. ПУТЬ ХУДОЖНИКА</h2><br>
<img class="Незнакомцы" src="img/Chapter57.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter58.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Требуется выполнить «Преимущества цивилизации». В начале четвертой главы мы можем встретить довольно интересного персонажа в салуне на севере Сен-Дени. Его зовут Шарль Шатене, французский художник, Казанова и многообещающий весельчак, с которым можно поговорить.
</p>
<h2 id="Верх">
20. ПОМОГИТЕ БРАТУ</h2><br>
<img class="Незнакомцы" src="img/Chapter59.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter60.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Необязательная миссия чести, доступная только в главе 4. После первой миссии в главе 4, в восточной части Сен-Дени, Артур может найти монаха, просящего пожертвования. Милостыня дает небольшое положительное повышение чести. Монах скажет вам, что, несмотря на 1899 год, в городе все еще есть рабы, ожидающие продажи.
</p>
<h2 id="Верх">
21. НАС СВЯЗЫВАЮТ УЗЫ</h2><br>
<img class="Незнакомцы" src="img/Chapter61.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter62.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
На холме рядом с железнодорожными путями на юго-востоке Родоса Артур замечает двух мужчин, сражающихся на земле. Судя по их одежде, они только что сбежали из тюрьмы. Им нужна новая одежда, но они не могут поехать в город из-за объявлений о розыске. Они просят Артура о помощи.
</p>
<h2 id="Верх">
22. ГЕРЦОГИНЦЫ И ПРОЧИЕ ЗВЕРИ</h2><br>
<img class="Незнакомцы" src="img/Chapter63.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter64.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Необходимо выполнить квест Золотая клетка Глава 4. В середине четвертой главы у нас есть возможность встретить еще одного уникального Незнакомца. Он живет в Растущем доме за Голубым отелем к северу от Сен-Дени. Коллекционер по имени Алджернон Оса ищет экзотические вещи, в основном орхидеи и птичьи перья. Наберитесь терпения, так как поиски экзотики будут долгими, в награду вы получите 760 долларов, шляпу и револьвер.
</p>
<h2 id="Верх">
23. ПРАГМАТИЗМ ДЛЯ ИДЕАЛИСТОВ
ЗАДАЧИ МЭРА</h2><br>
<img class="Незнакомцы" src="img/Chapter65.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter66.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Вам необходимо выполнить задание "Золотая клетка" (начало 4 главы) и получить письмо мэра Лемье. Чтобы начать этот квест, следите за сообщением на экране о том, что письмо не открывается в левом верхнем углу.
</p>
<img class="Незнакомцы" src="img/Chapter67.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter68.jpg" alt="asda"><br>

<p id="Основной" класс="Текст">
Зайдите в любое почтовое отделение и получите свою почту. Прочитав письмо Лемье, вы можете встретить его ночью в его резиденции на северо-западе Сен-Дени.
</p>
<h2 id="Верх">
ГЛАВА 5 <br>
24. МУДРОСТЬ СТАРШИХ</h2><br>
<img class="Незнакомцы" src="img/Chapter69.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter70.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Под железнодорожными путями к западу от Ван Хорна Артур может найти на земле бормочущего человека, который выглядит так, будто ему нужна помощь. Он в основном повторяет название своей деревни Бутчер-Крик, которая находится к северу от нас. Будет хорошо, если ты посадишь его на лошадь и вернешь это Да. Другой человек, чуть менее сумасшедший, рад видеть своего односельчанина и теперь будет о нем заботиться. Человек, которому вы только что помогли, нападет на вас без предупреждения. Кажется, в этой деревне и вокруг нее происходят странные вещи - нам нужно проверитьк это чуть позже.
</p>





<h2 id="Верх">

25. ВИДОВА ЧАРЛОТТ ИЗ УИЛЛАРДА РЕСТА<br>
Доступен только до 6 главы. В глуши, на северо-восточном краю карты (в самом конце карты), в усадьбе под названием Уиллардс-Рест.
</h2><br>
<img class="Незнакомцы" src="img/Chapter71.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter72.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
В главах 5 и 6 Артур может встретить к северу от Аннесбурга незнакомую женщину, которая сидит у могилы. Она потеряла мужа и не знает, как жить дальше. Артур предлагает подвезти ее до города, но она отказывается. Но все же соглашается на предложение Артура показать ей, как охотиться и таким образом обеспечить себя.
</p>
<h2 id="Верх">
ГЛАВА 6<br>
26. ВЕТЕРАН
ГИГАНТСКИЙ КАБАН</h2><br>
<img class="Незнакомцы" src="img/Chapter73.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter74.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
Как только вы доберетесь до Главы 6, к северу от Изумрудного ранчо, недалеко от озера О'Криг, появится новый Незнакомец. И на этот раз он не странный, а приятный парень. Человек по имени Хэмиш Синклер, ветеран, нуждающийся в вашей помощи, прислоняется к валуну. Лошадь Бьюэлл сбросила его и убежала с протезом ноги. Он был бы признателен, если бы мы смогли его найти. По завершению получите бивень гигантского вепря и упрямую, но сильную лошадь.
</p>
<h2 id="Верх">
ЭПИЛОГ 1<br>
27. АМЕРИКАНСКИЙ АД СЖАЛСЯ</h2><br>
<img class="Незнакомцы" src="img/Chapter75.jpg" alt="asda"> <img class="Незнакомцы" src="img/chapter75.jpg" alt="asda"><br>
<p id="Основной" класс="Текст">
После завершения миссии «Землевладение». К западу от Блэкуотера, на холме, возвышающемся над Западной Элизабет, мы можем найти человека, сидящего и пишущего. Он представляется как Эвелин Миллер, автор, которого Датч часто читал. После короткого разговора он приглашает вас навестить его в хижине недалеко от Ранчо Таннера, немного южнее.
</p>`
        }

        if(Langg === 3){
            Top.innerHTML = `Misijas`
     list.innerHTML = `<h2 id="Top">Svešinieki</h2>
     <p id="Galvenā" class="Teksts">
     Red Dead Redemption 2 svešinieki ir blakus uzdevumi, kas iet paralēli galvenajam sižetam un bieži vien paver ceļu vēl lielākai darbībai spēles plašajā atvērtajā pasaulē.

     Kvests Svešinieks nav obligāts un neparādās kartē automātiski, tikai kā jautājuma zīme uz baltas ikonas kartē, kad tu tuvojies.
    
     No turienes jums ir jāsamazina atrašanās vieta, pirms sākat uzdevumu. Dažas no misijām ir saistītas ar kolekcionējamiem priekšmetiem un citām aktivitātēm, un dažas ir pašas par sevi — tas ir jūsu ziņā, vai jūs tās uzņemsit.
    
     Svešinieku atrašanās vietas ir norādītas tādā secībā, kādā viņi mūs satika stāstā. Atcerieties, ka, ja jūs tos palaidat garām, jūs vienmēr varat atgriezties pie tiem vēlāk — vienkārši pietuvojieties, un tiem vajadzētu atkal parādīties kartē (izņemot dažus uzdevumus).
     </p>



     <h2 id="Top"> 2. NODAĻA <br>
1. CILTĀKĀS VĪRIEŠU UN SIEVIEŠU LEĢENDĀRĀS BULTAS</h2>
<img class="Svešie" src="img/Chapter22.jpg" alt="asda"> <img class="Svešie" src="img/chapter21.jpg" alt="asda">
<p id="Galvenā" class="Teksts">
Valentīnas ziemeļaustrumu daļā salonā var atrast svešinieku. Šis biogrāfs jums iedos četras šāvēju fotogrāfijas un lūgs jums tās izsekot. Ieskatieties savā somā un izlasiet katra fotoattēla aizmuguri, lai pievienotu to atrašanās vietu kartei.
</p>

<h2 id="Augšā"><br>
2. SMĒĶĒŠANA UN CITI HOBIJI<br>
CIGARETU KARTES</h2>
<img class="Svešie" src="img/Chapter23.jpg" alt="asda"> <img class="Svešie" src="img/chapter24.jpg" alt="asda">
<p id="Galvenā" class="Teksts">
Šis svešinieks atrodas Flatneck stacijā, aiz piebūves. Viņš pastāstīs par kolekcionējamām cigarešu kartēm. Savāc pilnu komplektu, un tu vari tos viņam izdevīgi pārdot.
</p>
<h2 id="Augšā"><br>
3. DĀRBU MEDNIEKS<br>
DŽEKA HOLA BANDAS DĀRGUMU KARTES</h2>

<img class="Svešie" src="img/Chapter25.jpg" alt="asda"> <img class="Svešie" src="img/chapter26.jpg" alt="asda">
<p id="Galvenā" class="Teksts">
Svešinieks atrodas netālu no akmeņiem uz rietumiem no Flatrokas stacijas un uz ziemeļiem no dzelzceļa. Iegādājieties dārgumu karti no pētnieka par 10 $, un varēsiet sākt Džeka Hola bandas dārgumu kartes meklējumus un iegūt zelta stieņus.
<br></p>
<h2 id="Augšā"><br>
4. QUEST "TICĪBAS PĀRBAUDE"
DINOZAURU KAULI</h2>
<img class="Svešie" src="img/Chapter27.jpg" alt="asda"> <img class="Svešie" src="img/chapter28.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Atrašanās vieta atrodas uz ziemeļrietumiem no Flatneck stacijas, tuksnesī. Meklējiet vagonu un svešinieku, kas stāv virs izrakumu vietas. Jūs satiksit paleontologu, kurš vēlas, lai jūs viņai nosūtītu dinozauru kaulus.
</p>
<h2 id="Augšā">
5. Svešinieka atrašanās vieta ar kvestu "Idyl for Amateurs" </h2> <br>
<p id="Galvenā" class="Teksts">
Uz dienvidaustrumiem no Strawberry vai uz dienvidrietumiem no Riggs stacijas, koku vidū, šis varonis mēģina fotografēt savvaļas dzīvniekus. Pēc ainas jums ir jāatdod soma, kuru nozaga koijots. Lai izpildītu izaicinājumu, vienkārši dzenājiet zvēru, un tas nometīs somu pie klints un pēc tam atdos to fotogrāfam.
</p>
<img class="Svešie" src="img/Chapter28.jpg" alt="asda"> <img class="Svešie" src="img/chapter29.jpg" alt="asda"><br>
<br><p id="Galvenā" class="Teksts">
Starp citu, šis ir pirmais no vairākiem "Idille amatieriem" uzdevumiem. Turpiniet iet cauri galvenajam stāstam, un parādīsies jauni.
</p>

<h2 id="Augšā">
6. SVEŠAJĀ POZIONĀCIJA MISIJAS "AMERIKĀŅU SAPŅI" KILLER'S CLUES</h2><br>

<img class="Svešie" src="img/Chapter30.jpg" alt="asda"> <img class="Svešie" src="img/chapter31.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Svešinieks parādīsies kartē tikai tad, kad būsi atradis visus trīs slepkavas pavedienus. Kad tas ir izdarīts, dodieties uz dienvidrietumiem no Valentīnas, lai apgabals tiktu parādīts kartē. Vieta, kuru meklējat, ir pagraba durvis blakus sagruvušajai būdiņai ceļā uz ūdenskritumu.
</p>
<h2 id="Augšā">
7. GRIMA SMARŽA</h2><br>
<img class="Svešie" src="img/Chapter31.jpg" alt="asda"> <img class="Svešie" src="img/chapter32.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Šī svešinieku misija sākas Van Horn tirdzniecības pasta salonā, kartes austrumu pusē. Artūrs sastopas ar turnejas šova dalībniecēm Mārdžorijas jaunkundzi un vienu no viņas aktieriem vārdā Bertrams; milzīgs puisis ar deformētu galvu.
</p>
<h2 id="Augšā">
8. SVEIDĪGS, KAS audzina labdarības nolūkos (PIEEJAMS TIKAI LĪDZ 6. NODAĻAI)</h2><br>
 
<img class="Svešie" src="img/Chapter33.jpg" alt="asda"> <img class="Svešie" src="img/chapter34.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Šī vārdā nenosauktā sieviete sēž uz stūra Sendenisas ziemeļrietumos, cenšoties savākt ziedojumus Kvinsija Harisa memoriālās zāles paplašināšanai, un dažas sekundes par to runās ar jums. Ziedojums maksā tikai USD 20 un dos jums nelielu pozitīvu stimulu Honor.
</p>
<h2 id="Augšā">
9. LIELISKS NAKTS PARVIŅI</h2><br>
 
<img class="Svešie" src="img/Chapter35.jpg" alt="asda"> <img class="Svešie" src="img/chapter36.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Lai atbloķētu sānu uzdevumus "Skaista nakts viņiem" un "Svešinieks", jums vismaz vienu reizi jāsatiekas ar "Nakts apkalpi". Ja naktī braucat ar zirgu cauri Bayou un Bluewater Marsh un dzirdat balsis, pamanāt ēnas vai gaismas vai minikartē redzat kādu pelēku punktu, izpētiet situāciju. Tā var būt nepatīkama sastapšanās, kas visbiežāk notiek ap lielo ezeru apgabala centrā.
<br>
<img class="Svešie" src="img/Chapter37.jpg" alt="asda"> <img class="Svešie" src="img/chapter38.jpg" alt="asda"><br>

Ja notiek piemērota sastapšanās ar Night Crew, tad Svešinieku misija parādās naktī uz ceļa, kas ved uz/no Lagras. Telts priekšā sēž padzīvojis vīrietis un stāsta, ka šeit saimnieko "Nakts banda" - slepkavas ļaundari, kuri sagrāba viņa māju.
</p>
<h2 id="Augšā">
10. ĢEOLOĢIJA IESĀCĒJIEM<br>
ALAS ZĪMĒJUMI</h2><br>
<img class="Svešie" src="img/Chapter39.jpg" alt="asda"> <img class="Svešie" src="img/chapter40.jpg" alt="asda"><br>

<p id="Galvenā" class="Teksts">
Uz ziemeļrietumiem no Strawberry uz būdas lieveņa sēž puisis (viņš ir atzīmēts kartē, kad tu viņam tuvojies). Tas ir Frensiss Sinklērs, runājot ar viņu, tiks aktivizēta misija "Ģeoloģija iesācējiem" un atbloķētu klinšu grebumu atrašanas meklējumus. Viņš jums pastāstīs par 10 klinšu gleznām un lūgs jums nosūtīt katras no tām koordinātas.
</p>
<h2 id="Augšā">
11. DABAS DĀVANAS</h2><br>

<img class="Svešie" src="img/Chapter41.jpg" alt="asda"> <img class="Svešie" src="img/chapter42.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Šī misija tika pievienota spēlei pēc izlaišanas datorā. Jūs satiekat ceļotāju, kurš lūdz Artūram savākt ārstniecības augus apmaiņā pret atlīdzību (zirgu dziru). Jūs atradīsiet Traveller tieši virs L Heartlands kartē, starp divām takām tuksnesī. Runājiet ar viņu, un viņš paskaidros, ko misija var piedāvāt. Šķiet, ka jūs viņu satiksit vairāk nekā vienu reizi.
</p>


<h2 id="Augšā">

3. NODAĻA <br>
12. PROTAMS BRITU</h2><br>
<img class="Svešie" src="img/Chapter43.jpg" alt="asda"> <img class="Svešie" src="img/chapter44.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Sākot no trešās nodaļas, Lemoinas štatā, uz dienvidiem no Emerald Ranch, Artūrs varēs atrast salauztu cirka mākslinieku karavānu. Tur sēž apmaldījies skumjš cilvēks. Viņš saka, ka ir sieviešu cīnītāja, vārdā Mārgareta, un viņa dzīvnieki ir izbēguši. Bez dzīvniekiem viņa izrāde vairs nav izrāde, un viņš lūgs atrast savu pazudušo zebru, tīģeri un lauvu.
</p>
<h2 id="Augšā">
13. SVEŠĀ VIETA AR UZDEVUMU “ZIVJU ķērējs”
LEĢENDĀRĀS ZIVIS</h2><br>
<img class="Svešie" src="img/Chapter45.jpg" alt="asda"> <img class="Svešie" src="img/chapter46.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Mums ir aizdomas, ka pirms šī svešinieka parādīšanās, iespējams, būs jāpabeidz Soul Catcher uzdevums 2. nodaļā. Jebkurā gadījumā jūs atradīsit viņu uz dienvidaustrumiem no Flatneck stacijas, uz piestātnes starp Flatneck un Rodu. Uzdevums ļaus atrast 13 vietas un noķert leģendārās zivis.
</p>
<h2 id="Augšā">
14. VĒSTURISKĀ NETAISNĪBA</h2><br><p id="Main" class="Text">
Svešinieku Džeremiju Kompsonu var sastapt kaut kur 3. nodaļā uz soliņa Rodas dzelzceļa stacijas priekšā. Šķiet, ka viņš ir bezpajumtnieks un piedzēries.
</p>
<img class="Svešie" src="img/Chapter47.jpg" alt="asda"> <img class="Svešie" src="img/chapter48.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Viņš pateiks, ka ir zaudējis visu – mājas, vērtības, darbu un godu. Pēdējos divus ir grūti atgūt, bet Arturs piekrīt atrast savas personīgās mantojuma lietas: pulksteni, revolveri un kontu grāmatiņu.
</p>
<h2 id="Augšā">
15. NAV LABA DARBĪBA</h2><br>
<img class="Svešie" src="img/Chapter49.jpg" alt="asda"> <img class="Svešie" src="img/chapter50.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Šķiet, ka pirms tam jāpabeidz misija "Patiesais mīlas stāsts" (3. nodaļa). 3. nodaļas vidū Arturs var atrast Svešinieku, kas sēž Rodas baznīcas pagalma priekšā. Viņš ir ļoti nobijies, jo viņam ir nozagts medikamentu furgons.
</p>
<h2 id="Augšā">
4. NODAĻA <br>
16. Ak, mans brālis
Jums ir jāaizpilda Zelta būris (4. nodaļa).</h2><br>

<img class="Svešie" src="img/Chapter51.jpg" alt="asda"> <img class="Svešie" src="img/chapter52.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Kaut kur 4. nodaļas vidū var atrast cilvēkus, kas strīdas pie veikala Valentīnā. Dvīņu pāris - Proits un Akrisijs - cīnās par vienu sievieti Helēnu. Viņi abi vēlas viņai pierādīt savu mīlestību un ar jūsu palīdzību parādīt, kurš no viņiem ir drosmīgākais. Šis, iespējams, ir jautrākais sānu uzdevums.
</p>
<h2 id="Augšā">
17. ZINĀTNIEKS UN VIŅA BĒRNI </h2><br>
<p id="Galvenā" class="Teksts">
Šis uzdevums tiek aktivizēts tikai dienas laikā un pirms tā, 4. nodaļas sākumā, jums jāpabeidz "Civilizācijas priekšrocības".
</p>
<img class="Svešie" src="img/Chapter53.jpg" alt="asda"> <img class="Svešie" src="img/chapter54.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Ceturtās nodaļas sākumā Saint-Denis rietumu daļā jūs varat satikt jaunu Svešinieku. Atrodas pie dīķa parkā. Viņu sauc Marko Dragičs, un viņš ir visu veidu jaunu tehnoloģisku inovāciju izgudrotājs. Viņš vēlas parādīt savu jauno tālvadības pults aprīkojumu potenciālajiem investoriem. Tā kā viņiem ir aizdomas, ka šis aprīkojums var būt kaut kādā veidā bojāts, viņi lūdz kādu, kas nesaprot, demonstrēt jauno tehnoloģiju. Artūrs ir piemērots eksperimentam. Pēc divām kvesta daļām jūs saņemsiet sasniegumu/trofeju "Mākslīgais intelekts".
</p>
<h2 id="Augšā">
18. ZINĀTNISKĀ Žēlsirdība</h2><br>
<img class="Svešie" src="img/Chapter55.jpg" alt="asda"> <img class="Svešie" src="img/chapter56.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Ceturtās nodaļas sākumā Sendenisas ziemeļu nomalē Artūrs varēs atrast citu svešinieku tikai pēc civilizācijas preču pabeigšanas. Viņš iepazīstina ar sevi kā profesoru un lūdz dabūt viņam daudz mēness. Ne personīgam patēriņam, bet gan zinātniskiem nolūkiem, esiet drošs. Tas sāks uzdevumu, kas sastāv no septiņām daļām.
</p>
<h2 id="Augšā">
19. MĀKSLINIEKA CEĻŠ</h2><br>
<img class="Svešie" src="img/Chapter57.jpg" alt="asda"> <img class="Svešie" src="img/chapter58.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Nepieciešams aizpildīt "Civilizācijas priekšrocības". Ceturtās nodaļas sākumā varam sastapt kādu diezgan interesantu tēlu salonā Sendenē ziemeļos. Viņu sauc Čārlzs Šatenē, franču mākslinieks Kazanova un daudzsološs, smieklīgs puisis, ar kuru parunāties.
</p>
<h2 id="Augšā">
20. PALĪDZIET SAVAM BRĀLIM</h2><br>
<img class="Svešie" src="img/Chapter59.jpg" alt="asda"> <img class="Svešie" src="img/chapter60.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Izvēles Goda misija, kas pieejama tikai 4. nodaļā. Pēc pirmās misijas 4. nodaļā Sendenisas austrumu daļā Artūrs var atrast mūku, kurš lūdz ziedojumus. Alms dod nelielu pozitīvu goda stimulu. Mūks jums pateiks, ka, neskatoties uz 1899. gadu, pilsētā joprojām ir vergi, kas gaida pārdošanu.
</p>
<h2 id="Augšā">
21. SAITES, KAS SAISTĒ MŪS</h2><br>
<img class="Svešie" src="img/Chapter61.jpg" alt="asda"> <img class="Svešie" src="img/chapter62.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Uzkalnā blakus vilciena sliedēm Rodas dienvidaustrumos Artūrs pamana divus vīriešus, kas cīnās uz zemes. Spriežot pēc apģērba, viņi tikko bija izbēguši no cietuma. Viņiem vajag jaunas drēbes, bet viņi nevar aizbraukt uz pilsētu meklēto plakātu dēļ. Viņi lūdz Artūra palīdzību.
</p>
<h2 id="Augšā">
22. HERCOGIENES UN CITI zvēri</h2><br>
<img class="Svešie" src="img/Chapter63.jpg" alt="asda"> <img class="Svešie" src="img/chapter64.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Nepieciešams izpildīt Zelta būra kvestu 4. nodaļa. Ceturtās nodaļas vidū mums ir iespēja satikt vēl vienu unikālu svešinieku. Viņš dzīvo Growing House aiz Blue Hotel uz ziemeļiem no Saint Denis. Tas ir kolekcionārs, vārdā Algernons lapsene, kurš meklē eksotiskas lietas, galvenokārt orhidejas un putnu spalvas. Esiet pacietīgs, jo eksotikas meklējumi būs ilgi, balvā saņemsiet 760 USD, cepuri un revolveri.
</p>
<h2 id="Augšā">
23. PRAGMATISMS IDEĀLISTIEM
MĒRA UZDEVUMI</h2><br>
<img class="Svešie" src="img/Chapter65.jpg" alt="asda"> <img class="Svešie" src="img/chapter66.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Jāizpilda uzdevums "Zelta būris" (4.nodaļas sākums) un jāsaņem mēra Lemjē vēstule. Lai sāktu šo uzdevumu, augšējā kreisajā stūrī skatiet ekrānā redzamo ziņojumu par pasta neatvēršanu.
</p>
<img class="Svešie" src="img/Chapter67.jpg" alt="asda"> <img class="Svešie" src="img/chapter68.jpg" alt="asda"><br>

<p id="Galvenā" class="Teksts">
Dodieties uz jebkuru pasta nodaļu un saņemiet savu pastu. Pēc Lemjē vēstules izlasīšanas jūs varat viņu naktī satikt viņa rezidencē Sendenē ziemeļrietumos.
</p>
<h2 id="Augšā">
5. NODAĻA <br>
24. VEČU GUDRĪBA</h2><br>
<img class="Svešie" src="img/Chapter69.jpg" alt="asda"> <img class="Svešie" src="img/chapter70.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Zem dzelzceļa sliedēm uz rietumiem no Van Hornas Arturs var atrast uz zemes murminošu vīrieti, kuram, šķiet, ir vajadzīga palīdzība. Viņš būtībā atkārto sava ciemata nosaukumu Butcher Creek, kas atrodas uz ziemeļiem no mums. Būs labi, ja tu viņu uzsēdināsi zirgā un atgriezīsi, ka Jā. Cits cilvēks, mazliet mazāk traks, priecājas, redzot savu ciema biedru, un tagad par viņu parūpēsies. Persona, kurai tikko palīdzējāt, uzbruks jums bez brīdinājuma. Šķiet, ka šajā ciematā un ap to notiek dīvainas lietas - vajag pārbaudītk šo nedaudz vēlāk.
</p>





<h2 id="Augšā">

25. Atraitne ŠARLOTA NO VILLARDA ATPŪTAS<br>
Pieejams tikai līdz 6. nodaļai. Tuksnesī, kartes ziemeļaustrumu malā (kartes pašās beigās), viensētā ar nosaukumu Willard's Rest.
</h2><br>
<img class="Svešie" src="img/Chapter71.jpg" alt="asda"> <img class="Svešie" src="img/chapter72.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
5. un 6. nodaļā Arturs var satikt nepazīstamu sievieti uz ziemeļiem no Annesburgas, kura sēž pie kapa. Viņa zaudēja vīru un nezina, kā dzīvot tālāk. Artūrs piedāvā viņai aizvest līdz pilsētai, bet viņa atsakās. Bet tomēr piekrīt Artūra piedāvājumam parādīt viņai, kā medīt un tādējādi nodrošināt sevi.
</p>
<h2 id="Augšā">
6. NODAĻA<br>
26. VETERĀNS
MILZU VIELIS</h2><br>
<img class="Svešie" src="img/Chapter73.jpg" alt="asda"> <img class="Svešie" src="img/chapter74.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Kad esat sasniedzis 6. nodaļu, uz ziemeļiem no Emerald Ranch, netālu no Lake O'Creagh's Run, ir jauns svešinieks. Un šoreiz viņš nav dīvains, bet jauks puisis. Vīrietis vārdā Hamišs Sinklērs, veterāns, kuram nepieciešama jūsu palīdzība, ir atspiedies pret laukakmeni. Zirgs Buels viņu nosvieda un aizskrēja ar kāju protēzi. Viņš būtu pateicīgs, ja mēs viņu atrastu. Pabeidzot, iegūstiet milzu kuiļa ilkni un spītīgu, bet spēcīgu zirgu.
</p>
<h2 id="Augšā">
EPILOGS 1<br>
27. AMERIKĀŅU ELLE IZDEGUŠA</h2><br>
<img class="Svešie" src="img/Chapter75.jpg" alt="asda"> <img class="Svešie" src="img/chapter75.jpg" alt="asda"><br>
<p id="Galvenā" class="Teksts">
Pēc "Landholding Class" misijas pabeigšanas. Uz rietumiem no Blekvoteras kalnā, no kura paveras skats uz Rietumelizabeti, mēs varam atrast vīrieti, kas sēž un raksta. Viņš sevi iepazīstina ar Evelīnu Milleri, autoru, kuru holandieši mēdza lasīt bieži. Pēc īsas sarunas viņš aicina ciemos pie sevis būdā netālu no Tannera rančo, nedaudz uz dienvidiem.
</p>`
            }


}

function Tri(){ if(Langg === 1){
    Top.innerHTML = `Plan`
    list.innerHTML = `<h2 id="Top">Cave paintings</h2><br>
  
    
    <p id="Main" class="Text">
    There are a total of 10 cave paintings in Red Dead Redemption 2, they must be found to complete the game 100%. Also, finding all the drawings is necessary to complete the task "Geology for Beginners" (Geology for Beginners). You can find them even after completing the main story.
<br>
    Rock Carving map in Red Dead Redemption 2
   </p>
   <img class="Map" src="img/Cave1.jpg" alt="asda">  <br>

   <h2 id="Top"> Dinosaur bone </h2><br>
   <p id="Main" class="Text">have more health, and outwardly they almost do not differ from their counterparts. There are fifteen types of legendary animals
   In Red Dead Redemption 2, you can find a paleontologist (Paleontologist) and complete her task to collect dinosaur bones (Dinosaur Bones). Finding all dinosaur bones in RDR2 is required to complete the game in 100%.
   <br> Dinosaur bone map in Red Dead Redemption 2 <br>
   
   </p>
   <img class="Map" src="img/Cave2.jpg" alt="asda">

   Legendary animals are stronger, have more health, and outwardly they almost do not differ from their counterparts. There are fifteen types of legendary animals in Red Dead Redemption 2. You will find some of them in the story. At the beginning of the game, you can get a map showing their approximate location.

Legendary Animals in Red Dead Redemption 2 - How and Where to Find Them (Hunting Map)
In the second chapter, José will send you on a hunt. You will need to find the legendary bear. After this task, you will receive a card. For killing all the animals, you can get the achievements "Skin Deep" and "Zoologist" (Zoologist). In order not to damage the skin, it is best to use a bow for hunting.

Each legendary animal can only be killed once, they are one of a kind. Be sure to collect all the loot, otherwise you will not be able to sell it and earn money. But if you died on the way and the skin disappeared, then don’t be too upset. Special items for the skin will still appear at the merchant in the store.

The game will carefully warn you if such an animal is near you. We also indicated on the map where each legendary animal in the game is located.

Legendary Animals in Red Dead Redemption 2 - How and Where to Find Them (Hunting Map)
Rare skins and other loot can be taken to the Trapper in Saint-Denis for unique clothing and accessories to help you stand out from the crowd.

There are sixteen legendary beasts to find, three of which are in a "special" area of the map. We have described them at the end of the guide. If you are afraid of spoilers, then return to the guide after passing through certain stages of the game.
</p>   
<h2 id="Top">
The graves of the dead companions </h2><br>

<p id="Main" class="Text">
To get the "Paying Respects" achievement, you need to find the graves of all your dead companions in Red Dead Redemption 2. There are nine in total.

Finding these graves is necessary not only to get the trophy, but also to complete the game in 100%. Graves are one of the varieties of collectibles in the game. And you can start looking for them only after completing the passage of the plot. The number of found graves can be found in the pause menu / progress / complete completion. It is necessary to approach the grave for the character to examine it. Beware, spoilers ahead!
</p><br>
Map of the location of all the graves of the dead companions  <br>
<img class="Map" src="img/cave3.jpg" alt="asda">

<h2 id="Top"> Dreamcatcher</h2><br><p id="Main" class="Text">
There are 20 Dreamcatchers in Red Dead Redemption 2. This is one of the types of collectibles required to complete the game 100%. Dreamcatchers hang from trees, and this guide shows their location.
<br>
You can collect them any time after reaching Chapter 2. You can track your progress in the Pause menu > Progress > Final Completion > Dream Catchers. We find all 20 places and get our reward in the Elysian Pool - a new perk.
</p><br>
Dreamcatcher Map <br>
<img class="Map" src="img/cave4.jpg" alt="asda">

<h2 id="Top">
Cigarette cards</h2><br>
<p id="Main" class="Text">
There are 144 cigarette cards in Red Dead Redemption 2. Finding all Cigarette Cards is required to complete the game 100%. Most of them can be found in various buildings. Cigarette cards are divided into 12 sets, each containing 12 cards. Each set contains one card that will only appear after you complete the Smoking and other Hobbies quest.
<br>
Some of the cards are in the areas of New Austin (New Austin) and Blackwater (Blackwater), which are guarded by deadly bounty hunters. Therefore, in order to gain access to this area, it is best to complete the story first.
<br>
The game has packs (Premium Cigarette Pack) that contain one random card. They can give you 1 out of 144 cards, if you're lucky, you'll get the missing card, and if not, you'll get a duplicate. The duplicates can be sold for cash at the merchant (Fences). But if you visit all the marked places on the map, then you are guaranteed to receive all 144 unique cards. You can find premium cigarette packs in many homes. In rare cases, they are found on enemies or can be stocked in general stores (limited supply).
<br>
At the end of the quest, you need to send the cards to Phineas from the post office and complete your quest. You can track your progress in menu / progress / collectibles / cigarette cards.
</p><br>
Location map of 144 cigarette cards<br>
<img class="Map" src="img/cave5.jpg" alt="asda">
`

}

if(Langg === 2){

    Top.innerHTML = `Коллекция`
    list.innerHTML = `<h2 id="Top">Наскальные рисунки</h2><br>
 
   
    <p id="Основной" класс="Текст">
    Всего в Red Dead Redemption 2 10 наскальных рисунков, их нужно найти, чтобы пройти игру на 100%. Также найти все чертежи необходимо для выполнения задания "Геология для начинающих" (Geology for Beginners). Вы можете найти их даже после прохождения основного сюжета.
<br>
    Карта наскальной резьбы в Red Dead Redemption 2
   </p>
   <img class="Карта" src="img/Cave1.jpg" alt="asda"> <br>

   <h2 id="Top"> Кость динозавра </h2><br>
   <p id="Main" class="Text">имеют больше здоровья, а внешне почти не отличаются от своих собратьев. Существует пятнадцать видов легендарных животных.
   В Red Dead Redemption 2 вы можете найти палеонтолога (Paleontologist) и выполнить ее задание по сбору костей динозавров (Dinosaur Bones). Чтобы пройти игру на 100%, необходимо найти все кости динозавров в RDR2.
   <br> Карта костей динозавров в Red Dead Redemption 2 <br>
  
   </p>
   <img class="Карта" src="img/Cave2.jpg" alt="asda">

   Легендарные животные сильнее, у них больше здоровья, а внешне они почти не отличаются от своих собратьев. В Red Dead Redemption 2 есть пятнадцать видов легендарных животных. Некоторые из них вы встретите по сюжету. В начале игры вы можете получить карту с указанием их примерного местоположения.

Легендарные животные в Red Dead Redemption 2 — как и где их найти (охотничья карта)
Во второй главе Хосе отправит вас на охоту. Вам нужно будет найти легендарного медведя. После этого задания вы получите карточку. За убийство всех животных можно получить достижения "Skin Deep" и "Zoologist" (Зоолог). Чтобы не повредить кожу, для охоты лучше всего использовать лук.

Каждое легендарное животное можно убить только один раз, они единственные в своем роде. Обязательно соберите весь лут, иначе вы не сможете его продать и заработать. Но если вы умерли в пути и кожа исчезла, то сильно не расстраивайтесь. Специальные предметы для скина по-прежнему будут появляться у торговца в магазине.

Игра тщательно предупредит вас, если такое животное окажется рядом с вами. Мы также указали на карте, где находится каждое легендарное животное в игре.

Легендарные животные в Red Dead Redemption 2 — как и где их найти (охотничья карта)
Редкие скины и другую добычу можно отнести к Ловцу в Сен-Дени за уникальной одеждой и аксессуарами, которые помогут вам выделиться из толпы.

Вам предстоит найти шестнадцать легендарных зверей, трое из которых находятся в «особой» области карты. Мы описали их в конце руководства. Если боитесь спойлеров, то возвращайтесь к гайду после прохождения определенных этапов игры.
</p>
<h2 id="Верх">
Могилы погибших товарищей </h2><br>

<p id="Основной" класс="Текст">
Чтобы получить достижение «Выплата уважения», вам нужно найти могилы всех ваших погибших товарищей в Red Dead Redemption 2. Всего их девять.

Найти эти могилы необходимо не только для получения трофея, но и для прохождения игры на 100%. Могилы — одна из разновидностей коллекционных предметов в игре. И начать их искать можно только после завершения прохождения сюжета. Количество найденных могил можно посмотреть в меню паузы/прогресса/полного завершения. К могиле необходимо подойти, чтобы персонаж мог ее осмотреть. Осторожно, впереди спойлеры!
</p><br>
Карта расположения всех могил погибших товарищей <br>
<img class="Карта" src="img/cave3.jpg" alt="asda">

<h2 id="Top"> Ловец снов</h2><br><p id="Main" class="Text">
В Red Dead Redemption 2 есть 20 ловцов снов. Это один из типов предметов коллекционирования, необходимых для прохождения игры на 100%. Ловцы снов свисают с деревьев, и в этом руководстве показано их местонахождение.
<br>
Вы можете собрать их в любое время после достижения главы 2. Вы можете отслеживать свой прогресс в меню «Пауза» > «Прогресс» > «Окончательное завершение» > «Ловцы снов». Находим все 20 мест и получаем свою награду в Елисейском бассейне - новый перк.
</p><br>
Карта ловца снов <br>
<img class="Карта" src="img/cave4.jpg" alt="asda">

<h2 id="Верх">
Сигаретные карточки</h2><br>
<p id="Основной" класс="Текст">
В Red Dead Redemption 2 есть 144 сигаретных карты. Чтобы пройти игру на 100%, необходимо найти все сигаретные карты. Большинство из них можно найти в различных зданиях. Сигаретные карточки разделены на 12 наборов по 12 карточек в каждом. Каждый набор содержит одну карту, которая появится только после того, как вы выполните квест «Курение и другие увлечения».
<br>
Часть карт находится в районах Нью-Остин (New Austin) и Блэкуотер (Blackwater), которые охраняют смертоносные охотники за головами. Поэтому, чтобы получить доступ к этой области, лучше всего сначала пройти историю.
<br>
В игре есть паки (Premium Cigarette Pack), которые содержат одну случайную карту. Вам могут дать 1 из 144 карт, если повезет, вы получите недостающую карту, а если нет, то дубликат. Дубликаты можно продать за наличные у торговца (Заборы). Но если вы посетитевсе отмеченные места на карте, то вы гарантированно получите все 144 уникальные карты. Вы можете найти пачки сигарет премиум-класса во многих домах. В редких случаях их можно найти у врагов или купить в обычных магазинах (количество ограничено).
<br>
В конце квеста вам нужно отправить карты Финеасу с почты и выполнить свой квест. Вы можете отслеживать свой прогресс в меню/прогресс/предметы коллекционирования/сигаретные карты.
</p><br>
Карта расположения 144 сигаретных карт<br>
<img class="Карта" src="img/cave5.jpg" alt="asda">
`


}
if(Langg === 3){

    Top.innerHTML = `Plāns`
    list.innerHTML = `<h2 id="Top">Alu gleznas</h2><br>
 
   
    <p id="Galvenā" class="Teksts">
    Red Dead Redemption 2 pavisam ir 10 alu gleznas, tās ir jāatrod, lai spēli pabeigtu 100%. Tāpat visu zīmējumu atrašana ir nepieciešama, lai izpildītu uzdevumu "Ģeoloģija iesācējiem" (Ģeoloģija iesācējiem). Jūs varat tos atrast pat pēc galvenā stāsta pabeigšanas.
<br>
    Rock Carving karte Red Dead Redemption 2
   </p>
   <img class="Map" src="img/Cave1.jpg" alt="asda"> <br>

   <h2 id="Top"> Dinozaura kauls </h2><br>
   <p id="Main" class="Text">ir vairāk veselības, un ārēji tie gandrīz neatšķiras no saviem kolēģiem. Ir piecpadsmit leģendāro dzīvnieku veidi
   Spēlē Red Dead Redemption 2 jūs varat atrast paleontologu (paleontologu) un izpildīt viņas uzdevumu savākt dinozauru kaulus (Dinosaur Bones). Lai spēli pabeigtu 100%, RDR2 ir jāatrod visi dinozauru kauli.
   <br> Dinozauru kaulu karte Red Dead Redemption 2 <br>
  
   </p>
   <img class="Map" src="img/Cave2.jpg" alt="asda">

   Leģendārie dzīvnieki ir spēcīgāki, tiem ir lielāka veselība, un ārēji tie gandrīz neatšķiras no saviem kolēģiem. Red Dead Redemption 2 ir piecpadsmit leģendāro dzīvnieku veidi. Dažus no tiem atradīsit stāstā. Spēles sākumā jūs varat iegūt karti, kurā parādīta viņu aptuvenā atrašanās vieta.

Leģendārie dzīvnieki spēlē Red Dead Redemption 2 — kā un kur tos atrast (medību karte)
Otrajā nodaļā Hosē jūs nosūtīs medībās. Jums būs jāatrod leģendārais lācis. Pēc šī uzdevuma jūs saņemsiet karti. Par visu dzīvnieku nogalināšanu jūs varat iegūt sasniegumus "Skin Deep" un "Zoologist" (zoologs). Lai nesabojātu ādu, medībām vislabāk ir izmantot loku.

Katru leģendāro dzīvnieku var nogalināt tikai vienu reizi, tie ir vienreizēji. Noteikti savāciet visu laupījumu, pretējā gadījumā jūs to nevarēsit pārdot un nopelnīt naudu. Bet, ja jūs nomira ceļā un āda pazuda, tad neesiet pārāk sarūgtināts. Īpašas preces ādai joprojām parādīsies pie tirgotāja veikalā.

Spēle jūs uzmanīgi brīdinās, ja šāds dzīvnieks atrodas jūsu tuvumā. Mēs arī norādījām kartē, kur atrodas katrs spēles leģendārais dzīvnieks.

Leģendārie dzīvnieki spēlē Red Dead Redemption 2 — kā un kur tos atrast (medību karte)
Retas ādas un citu laupījumu var aiznest uz Trapper Sendenisā, lai iegūtu unikālu apģērbu un aksesuārus, kas palīdzēs jums izcelties no pūļa.

Ir jāatrod sešpadsmit leģendāri zvēri, no kuriem trīs atrodas "īpašā" kartes apgabalā. Mēs tos esam aprakstījuši rokasgrāmatas beigās. Ja baidāties no spoileriem, atgriezieties ceļvedī pēc noteiktiem spēles posmiem.
</p>
<h2 id="Augšā">
Mirušo pavadoņu kapi </h2><br>

<p id="Galvenā" class="Teksts">
Lai iegūtu sasniegumu "Paying Respects", jums ir jāatrod visu savu mirušo pavadoņu kapi Red Dead Redemption 2. Kopā ir deviņi.

Šo kapu atrašana ir nepieciešama ne tikai, lai iegūtu trofeju, bet arī, lai pabeigtu spēli 100%. Kapi ir viena no kolekcionējamo priekšmetu šķirnēm spēlē. Un jūs varat sākt tos meklēt tikai pēc sižeta fragmenta pabeigšanas. Atrasto kapu skaitu var atrast pauzes izvēlnē / progress / pilnīga pabeigšana. Ir jāpieiet pie kapa, lai varonis to pārbaudītu. Uzmanieties, spoileri priekšā!
</p><br>
Karte ar visu mirušo pavadoņu kapu atrašanās vietām <br>
<img class="Map" src="img/cave3.jpg" alt="asda">

<h2 id="Top"> Sapņu ķērājs</h2><br><p id="Galvenā" class="Text">
Red Dead Redemption 2 ir 20 Dreamcatchers. Šis ir viens no kolekcionējamo priekšmetu veidiem, kas nepieciešami, lai spēli pabeigtu 100%. Sapņu ķērāji karājas kokos, un šajā rokasgrāmatā ir parādīta to atrašanās vieta.
<br>
Jūs varat tos savākt jebkurā laikā pēc 2. nodaļas sasniegšanas. Varat izsekot savam progresam izvēlnē Pauze > Progress > Galīgā pabeigšana > Sapņu ķērāji. Mēs atrodam visas 20 vietas un saņemam savu atlīdzību Elysian Pool — jaunu privilēģiju.
</p><br>
Sapņu ķērājs karte <br>
<img class="Map" src="img/cave4.jpg" alt="asda">

<h2 id="Augšā">
Cigarešu kartes</h2><br>
<p id="Galvenā" class="Teksts">
Red Dead Redemption 2 ir 144 cigarešu kartes. Lai spēli pabeigtu 100% apmērā, ir jāatrod visas cigarešu kartes. Lielāko daļu no tiem var atrast dažādās ēkās. Cigarešu kartes ir sadalītas 12 komplektos, katrā ir 12 kartītes. Katrā komplektā ir viena kartīte, kas parādīsies tikai pēc smēķēšanas un citu vaļasprieku uzdevumu izpildes.
<br>
Dažas kartes atrodas Ņūostinā (New Austin) un Blackwater (Blekvoterā), kuras apsargā nāvējoši devību mednieki. Tāpēc, lai piekļūtu šai zonai, vislabāk ir vispirms pabeigt stāstu.
<br>
Spēlei ir iepakojumi (Premium Cigarette Pack), kas satur vienu nejaušu karti. Viņi var jums iedot 1 no 144 kartēm, ja jums paveiksies, jūs saņemsiet trūkstošo karti, un, ja nē, jūs iegūsit dublikātu. Dublikātus var pārdot par skaidru naudu pie tirgotāja (Fences). Bet, ja jūs apmeklējatvisas atzīmētās vietas kartē, tad garantēti saņemsi visas 144 unikālās kartes. Daudzās mājās varat atrast augstākās kvalitātes cigarešu paciņas. Retos gadījumos tos var atrast pie ienaidniekiem vai tos var glabāt universālajos veikalos (ierobežots piedāvājums).
<br>
Uzdevuma beigās jums ir jānosūta kartītes uz Phineas no pasta un jāpabeidz uzdevums. Jūs varat izsekot savam progresam izvēlnē / progresā / kolekcionējamās / cigarešu kartēs.
</p><br>
144 cigarešu karšu atrašanās vietu karte<br>
<img class="Map" src="img/cave5.jpg" alt="asda">
`


}
}

function Chetiri(){if(Langg === 1){
    Top.innerHTML = `Directory`
    list.innerHTML = `<p id="Main" class="Text">
    <img  src="img/book.jpg" alt="asda">
    <br><br>
    Animals. Kill 50 types of animals. There are 178 species in total in the game, so making this one will be quite simple. 
    <br><br>
    Equipment. You need to find 10 of the 72 types of equipment. Five (lasso, binoculars, fishing rod, flashlight and camera) you will find during the passage of the story.
    <br><br>

    Fish. You need to catch 10 types of fish out of 30.
    <br><br>
    Gangs. Find all gangs. They will meet you as you progress through the story.
    <br><br>
    Horses. You need to find 10 breeds of horses. You can just walk the streets of cities and study everyone in a row.
    <br><br>
    Plants. You need to find 20 out of 43 plant species. The eagle eye skill (L3+R3 or left + right sticks) will help a lot, as some are hard to spot.
    <br><br>
    Weapon. There are 59 types of weapons in the game, but to complete the task, you need to find 48. Weapons can be bought, picked up from a dead enemy, or received for completing a task
    </p><br>`
}
    if(Langg === 2){Top.innerHTML = `Справочник`
    list.innerHTML = `
<p id="Main" class="Text">
    <img src="img/book.jpg" alt="asda">
    <br><br>
    Животные. Убейте 50 видов животных. В игре всего 178 видов, поэтому выполнение этой задачи будет довольно простым.
    <br><br>
    Оборудование. Вам нужно найти 10 из 72 видов оборудования. Пять из них (лассо, бинокль, удочка, фонарик и камера) вы найдете в процессе прохождения сюжета.
    
    <br><br>
    Рыба. Вам нужно поймать 10 видов рыбы из 30 возможных.
    <br><br>
    Банды. Найдите все банды. Они будут встречаться вам по мере продвижения в сюжете.
    <br><br>
    Лошади. Вам нужно найти 10 пород лошадей. Просто гуляйте по улицам городов и изучайте каждую из них.
    <br><br>
    Растения. Вам нужно найти 20 из 43 видов растений. Навык "орлиный глаз" (L3+R3 или левый + правый стики) очень поможет, так как некоторые растения сложно заметить.
    <br><br>
    Оружие. В игре есть 59 видов оружия, но для выполнения задачи вам нужно найти 48. Оружие можно купить, взять с погибшего противника или получить за выполнение задания.
</p><br></br>`
    }
        if(Langg === 3){Top.innerHTML = `Atsauce`
        list.innerHTML = `
            <p id="Galvenā" class="Teksts">
     <img src="img/book.jpg" alt="asda">
     <br><br>
     Dzīvnieki. Nogalini 50 veidu dzīvniekus. Spēlē ir tikai 178 sugas, tāpēc šī uzdevuma izpilde būs pavisam vienkārša.
     <br><br>
     Aprīkojums. Jums jāatrod 10 no 72 aprīkojuma veidiem. Piecus no tiem (laso, binoklis, makšķere, kabatas lukturītis un fotoaparāts) atradīsi stāsta nodošanas procesā.
    
     <br><br>
     Zivis. Jānoķer 10 zivju veidi no 30 iespējamajiem.
     <br><br>
     Bandas. Atrodiet visas bandas. Viņi tiksies ar jums, kad stāstā attīstīsities.
     <br><br>
     Zirgi. Jums jāatrod 10 zirgu šķirnes. Vienkārši pastaigājieties pa pilsētu ielām un izpētiet katru no tām.
     <br><br>
     Augi. Jums jāatrod 20 no 43 augu veidiem. Ērgļa acs prasme (L3+R3 vai kreisais + labais nūjas) ļoti palīdzēs, jo dažus augus ir grūti pamanīt.
     <br><br>
     Ierocis. Spēlē ir 59 ieroču veidi, bet, lai izpildītu uzdevumu, ir jāatrod 48. Ieročus var nopirkt, atņemt no miruša ienaidnieka vai saņemt par uzdevuma izpildi.
</p><br></br>`
        }
    
}
function Pyaty(){
    if(Langg === 1){
        Top.innerHTML = `Other`
        list.innerHTML = `<p id="Main" class="Text">
        PlayerUpgrade health, stamina, and Dead Eye to the maximum. Health is improved by physical activity. Endurance from running and swimming. "Dead eye" from its use.
<br><br>
Horse trust. You need to get the fourth level of friendship with the horse. To do this, you need to feed, clean and ride (you can not often overload the horse) on the selected horse.
<br><br>
Tests. You need to complete 9 challenges. Each test is divided into 10 tasks. There are 90 conditions in total. This is one of the most difficult and long points for 100% completion.
<br><br>
Huts. You need to find 5 wooden huts. There are more of them on the map, you will find them by the end of the game. 
<br><br>
Legendary Animals. You need to kill 5 out of 14.
<br><br>
Board games. There are 4 types of board games in the game: five-finger fillet, blackjack, dominoes and poker, you need to play each at least once.
<br><br>

Special characters. In the cities you can meet various characters who shout something. You need to find five and talk to them. The easiest way to find them is in Saint-Denis.
<br><br>
Bath. Take a bath in a hotel in Valentine or Strawberry. It costs 25 cents. 
<br><br>
Show. You can watch the show in Valentine at the beginning of the game. You can watch from chapter 2. A mark in the form of a theatrical mask will appear on the map. Worth 50 cents.
<br><br>
Theater. The theater can be accessed in Saint-Denis. Worth 2 dollars. You have to sit through the whole show to the end.
<br><br>
Recipes. You need to cook at least once: a dish, tonic, ammunition, a hunting item, a horse item and a weapon. Item crafting guide.
<br><br>
Robbery. You need to rob at least once: a carriage, a house, a store, a train.
        
        
</p><br>`
        
    }
        if(Langg === 2){Top.innerHTML = `Other`
        list.innerHTML = `
<p id="Main" class="Text">
        Прокачайте здоровье, выносливость и "Мертвый глаз" до максимума. Здоровье улучшается от физической активности. Выносливость - от бега и плавания. "Мертвый глаз" - от его использования.
<br><br>
Доверие лошади. Вам нужно достичь четвертого уровня дружбы с лошадью. Для этого нужно кормить, чистить и ездить на выбранной лошади (не перегружайте лошадь слишком часто).
<br><br>
Тесты. Вам нужно пройти 9 испытаний. Каждый тест состоит из 10 заданий. Всего 90 условий. Это один из самых сложных и длительных моментов для достижения 100% завершения игры.
<br><br>
Хижины. Вам нужно найти 5 деревянных хижин. Их больше на карте, вы найдете их к концу игры. 
<br><br>
Легендарные животные. Вам нужно убить 5 из 14.
<br><br>
Настольные игры. В игре есть 4 типа настольных игр: "пять камней", блэкджек, домино и покер, вам нужно сыграть в каждую из них хотя бы один раз. 
<br><br>
Особые персонажи. В городах вы можете встретить разных персонажей, кричащих что-то. Вам нужно найти пятерых и поговорить с ними. Самый легкий способ найти их - в Сен-Дени.
<br><br>
Ванна. Примите ванну в гостинице в Валентайне или Страуберри. Стоит 25 центов.
<br><br>
Шоу. Вы можете посмотреть шоу в Валентайне в начале игры. Вы можете смотреть с главы 2. На карте появится метка в виде театральной маски. Стоит 50 центов.
<br><br>
Театр. В театр можно попасть в Сен-Дени. Стоит 2 доллара. Вам придется просидеть на всё шоу до конца.
<br><br>
Рецепты. Вам нужно приготовить хотя бы один раз: блюдо, тоник, патроны, охотничью принадлежность, предмет для лошади и оружие. Руководство по созданию предметов.
<br><br>
Грабеж. Вам нужно совершить хотя бы одно ограбление: кареты, дома, магазина, поезда.

</p><br>

`
        }
            if(Langg === 3){


                Top.innerHTML = `Cits`
                list.innerHTML = `<p id="Galvenā" class="Teksts">
                Player Uzlabojiet veselību, izturību un Dead Eye līdz maksimumam. Veselību uzlabo fiziskās aktivitātes. Izturība no skriešanas un peldēšanas. "Dead eye" no tā lietošanas.
       <br><br>
       Zirgu uzticība. Ar zirgu jāiegūst ceturtais draudzības līmenis. Lai to izdarītu, jums ir jāpabaro, jātīra un jāj (jūs nevarat bieži pārslogot zirgu) uz izvēlētā zirga.
       <br><br>
       Pārbaudes. Jums ir jāizpilda 9 izaicinājumi. Katrs tests ir sadalīts 10 uzdevumos. Kopumā ir 90 nosacījumi. Šis ir viens no grūtākajiem un garākajiem punktiem 100% pabeigšanai.
       <br><br>
       Būdas. Jāatrod 5 koka būdiņas. Kartē to ir vairāk, tos atradīsi līdz spēles beigām.
       <br><br>
       Leģendārie dzīvnieki. Jums jānogalina 5 no 14.
       <br><br>
       Galda spēles. Spēlē ir 4 veidu galda spēles: piecu pirkstu fileja, blekdžeks, domino un pokers, katra ir jāspēlē vismaz vienu reizi.
       <br><br>
       
       Īpašās rakstzīmes. Pilsētās var sastapt dažādus tēlus, kuri kaut ko kliedz. Jums jāatrod pieci un jārunā ar viņiem. Vienkāršākais veids, kā tos atrast, ir Saint-Denis.
       <br><br>
       Vanna. Nomazgājieties viesnīcā Valentīnā vai Zemeņos. Tas maksā 25 centus.
       <br><br>
       Rādīt. Raidījumu Valentīnā varat noskatīties spēles sākumā. Jūs varat skatīties no 2. nodaļas. Kartē parādīsies atzīme teātra maskas formā. 50 centu vērts.
       <br><br>
       Teātris. Teātris ir pieejams Saint-Denis. 2 dolāru vērts. Jāsēž visa izrāde līdz galam.
       <br><br>
       Receptes. Jums ir nepieciešams gatavot vismaz vienu reizi: trauks, toniks, munīcija, medību priekšmets, zirga priekšmets un ierocis. Priekšmeta izgatavošanas rokasgrāmata.
       <br><br>
       Laupīšana. Vajag vismaz vienu reizi aplaupīt: vagonu, māju, veikalu, vilcienu.
               
               
       </p><br>`



            }
    

}


// Options
function Options(){ if(Langg === 1){
    
    list.innerHTML = `
    
    <h2 >My options</h2>
    <ul>
      <li ><button onclick="LangEng()" > <h3>Eng!</h3></button><button onclick="LangRu()" > <h3>Ru</h3></button><button onclick="LangLv()" > <h3>LV</h3></button></li>
      
    </ul>`} 
    
    
    if(Langg === 2){
        list.innerHTML = 
        `<h2 >Мои настройки</h2>
<ul>
      <li ><button onclick="LangEng()" > <h3>Eng</h3></button><button onclick="LangRu()" > <h3>Ru!</h3></button><button onclick="LangLv()" > <h3>LV</h3></button></li>
  
    </ul>`
    }

    if(Langg === 3){
        list.innerHTML = 
        `<h2 >Mana что-то</h2>
<ul>
      <li ><button onclick="LangEng()" > <h3>Eng</h3></button><button onclick="LangRu()" > <h3>Ru</h3></button><button onclick="LangLv()" > <h3>LV!</h3></button></li>
      
    </ul>`
    }
}

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
        Top.innerHTML = ` `
    Sidebar2.innerHTML = `
    
    
        <h2 id="sidebar" >Navigation</h2>
        <ul>
          <li id="Plan" ><button onclick="Odin()" > <h3>Plan</h3></button></li>
          <li > <button onclick="Dva()"> <h3>Missions and events</h3></button></li>
            <li >  <button onclick="Tri()"> <h3> Collectibles</h3></button></li>
            <li >  <button onclick="Chetiri()"> <h3> Directory</h3></button></li>
            <li >  <button onclick="Pyaty()"> <h3> Other</h3></button></li>
            <li >  <button onclick="Options()"> <h3> Options</h3></button></li>
        </ul>
      
    
    
    `
    
    }



    if(Langg === 2){
        Top.innerHTML = ` `
        Sidebar2.innerHTML = `
        <h2 id="sidebar" >Навигация</h2>
        <ul>
             <li id="Планировать" ><button onclick="Odin()" > <h3>Планировать</h3></button></li>
             <li > <button onclick="Dva()"> <h3>Миссии и события</h3></button></li>
               <li > <button onclick="Tri()"> <h3> Коллекция</h3></button></li>
               <li > <button onclick="Chetiri()"> <h3> Каталог</h3></button></li>
               <li > <button onclick="Pyaty()"> <h3> Другое</h3></button></li>
               <li > <button onclick="Options()"> <h3> Параметры</h3></button></li>
           </ul>
      `}




        if(Langg === 3){
            Top.innerHTML = ` `
            Sidebar2.innerHTML = `
            <h2 id="sidebar" >Navigācija</h2>
             <ul>
             <li id="Plāns" ><button onclick="Odin()" > <h3>Plāns</h3></button></li>
             <li > <button onclick="Dva()"> <h3>Misijas un pasākumi</h3></button></li>
               <li > <button onclick="Tri()"> <h3> Kolekcionējamie priekšmeti</h3></button></li>
               <li > <button onclick="Chetiri()"> <h3> direktorijs</h3></button></li>
               <li > <button onclick="Pyaty()"> <h3> Cits</h3></button></li>
               <li > <button onclick="Options()"> <h3> Opcijas</h3></button></li>
           </ul>
          `}
            
}

function black(){
    Sidebar2.style.backgroundColor = 'red'
}
Odin()
Lang()