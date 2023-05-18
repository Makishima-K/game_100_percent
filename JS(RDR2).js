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
    list.innerHTML = `Red Dead Redemption 2 has a lot of tasks and additional activities that you need to complete in order to complete the game in 100%. Let's take a closer look at what needs to be done for this.
    <br>
    For completing RDR 2 at 100%, you can get the achievement "Best in the West" (Best in the West). You can follow the progress through the menu "Pause" / "Progress" / "Complete completion". You won’t be able to miss something, since everything can be completed after the completion of the story campaign.
    <br>
    Progress is divided into 5 categories: quests and events, collectibles, reference, player, and more. For 100% completion, you do not have to complete absolutely everything that is in the game. The most time consuming will be collecting collectibles and passing tests.
    <br>
    <br>
    <img src="img/Misions.jpg" alt="asda">
    <br>
    <h2 id="Top">Missions and events</h2>
        <p id="Main" class="Text">Complete all story missions (104), be sure to complete the epilogue. <br>
        10 quest lines from strangers ("?" on the map), some strangers can only be found at certain times. Complete map of the game.
        <br>
        Catch 5 criminals. We find "Wanted" posters in the sheriff's offices of major cities: Valentine, Rhodes, Saint-Denis, Strawberry, Blackwater and Tumbleveil. Then we catch them and get a "reward for the head."
        Complete 25 random encounters. Traveling around the world of the game, you will stumble upon white dots on the map. they are endless and appear anywhere. More common near the city of Saint-Denis.
        Survive one gang attack. Sometimes you will be attacked. These events happen randomly.
        Clear six bandit hideouts. According to the plot, you will come across four, the rest you will have to look for yourself.</p>
        
        
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
        Top.innerHTML = `Новости`
    list.innerHTML = `фывфывфывыфвыфвыф`

    }


    if(Langg === 3){
        Top.innerHTML = `НовостиLV`
    list.innerHTML = `фывфывфывыфвыфвыф`

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
        Top.innerHTML = `Миссии и незнакомцы`
        list.innerHTML = `asdaqwqwqwqsdasdsadsadsa`
    
        }

        if(Langg === 3){
            Top.innerHTML = `Мисси и незнакомцы Лат`
            list.innerHTML = `asdaqwqwqwqsdasdsadsadsa`
        
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
   <img class="Map" src="img/cave1.jpg" alt="asda">  <br>

   <h2 id="Top"> Dinosaur bone </h2><br>
   <p id="Main" class="Text">have more health, and outwardly they almost do not differ from their counterparts. There are fifteen types of legendary animals
   In Red Dead Redemption 2, you can find a paleontologist (Paleontologist) and complete her task to collect dinosaur bones (Dinosaur Bones). Finding all dinosaur bones in RDR2 is required to complete the game in 100%.
   <br> Dinosaur bone map in Red Dead Redemption 2 <br>
   
   </p>
   <img class="Map" src="img/cave2.jpg" alt="asda">

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




}
if(Langg === 2){




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
        if(Langg === 3){
            
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
            if(Langg === 3){}
    

}


// Options
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
        Sidebar2.innerHTML = `
        <h2 id="sidebar" >My RU Sidebar</h2>
        <ul>
          <li id="Plan" ><button onclick="Odin()" > <h3>Plan</h3></button></li>
          <li > <button onclick="Dva()"> <h3>Missions and events</h3></button></li>
            <li >  <button onclick="Tri()"> <h3> Collectibles</h3></button></li>
            <li >  <button onclick="Chetiri()"> <h3> Directory</h3></button></li>
            <li >  <button onclick="Pyaty()"> <h3> Other</h3></button></li>
            <li >  <button onclick="Options()"> <h3> Options</h3></button></li>
        </ul>
      `}




        if(Langg === 3){
            Sidebar2.innerHTML = `
            <h2 id="sidebar" >My LV Sidebar</h2>
            <ul>
            <li id="Plan" ><button onclick="Odin()" > <h3>Plan</h3></button></li>
            <li > <button onclick="Dva()"> <h3>Missions and events</h3></button></li>
              <li >  <button onclick="Tri()"> <h3> Collectibles</h3></button></li>
              <li >  <button onclick="Chetiri()"> <h3> Directory</h3></button></li>
              <li >  <button onclick="Pyaty()"> <h3> Other</h3></button></li>
              <li >  <button onclick="Options()"> <h3> Options</h3></button></li>
          </ul>
          `}
            
}

function black(){
    Sidebar2.style.backgroundColor = 'red'
}
Odin()
Lang()