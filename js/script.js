/* global monogatari */

// Define the messages used in the game.
monogatari.action("message").messages({
  Help: {
    title: "Help",
    subtitle: "Some useful Links",
    body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome",
    body: "This is the Monogatari VN Engine",
    icon: "",
  },
});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({
});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {
  Intro: "Intro.mp3",
  Menu: "menusample1.mp3",
  Train: "train.mp3"
});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
  AonaharaGate: "bg1.png",
  Train: "castle.png",
  Menu: "Main.png",
});

// Define the Characters
monogatari.characters({
  n:{
    type_animation: false
  },
  nm: {
    name: "Nom Nom",
    color: "#5bcaff",
    Directory: "nomnom",
    sprites: {
      Normal: "NomNomNormal.png",
      Happy: "NomNomHappy.png",
      Pog: "NomNomPog.png",
      Sad: "NomNomSad.png",
      Smug: "NomNomSmug.png",
      TF: "NomNomTF.png"
    },
    expressions: {
      happy: 'expressions/happy.png'
    }
  },
  snm: {
    name: "Sage Nom",
    color: "#ffffff",
    Directory: "sagenom",
    sprites: {
      Normal: "sagenom.png",
    },
  },
  y: {
    name: "Totaly not a propaganda person",
    color: "#5bcaff",
    Directory: "nitsu",
    sprites: {
      Normal: "nitsu1.png",
    },
  },
  psgr: {
    name: "Passenger",
    color: "salmon",
    Directory: "passangger",
    sprites: {
      Normal: "PassangerNormal.png"
    }
  },
});

monogatari.script({
  _SplashScreen: [
    "show scene black with fadeIn",
    "centered The assets used are placeholder",
    "centered The purpose of this demo version is to give everyone an idea on what's the end propaganda would look like so people who want to help can start executing their plan.",
    "wait 2000",
    "show image i1.png center with fadeIn",
    "play music Intro with loop",
    "centered Not so long time ago, Aonahara kingdom was founded.",
    "centered The kingdom that will later be known for its greatness.",
    "hide image i1.png with fadeOut",
    "show image i2.png center with fadeIn",
    "centered The kingdom is lead by the royal craftsmen with fooooooood as their leader and his 6 loyal role leaders.",
    "hide image i2.png with fadeOut",
    "show image i3.png with fadeIn",
    "centered Each role in the royal castle is working together to create goods for the people.",
    "centered These goods make people happy and more productive.",
    "hide image i3.png with fadeOut",
    "show image i4.png with fadeIn",
    "centered Under fooooooood's command the kingdom able to produce a lot of high-quality goods, and all the people involved are happily making them.",
    "hide image i4.png with fadeOut",
    "centered The people living there were happy and the kingdom was properosus, they are having the best time of their life.",
    "centered Unfortunately this didn't last long...",
    "centered The royal craftsmen became something different.",
    "show image i5.png with fadeIn",
    "centered Colder than the ice darker than the night, as if someone or something changed their mind and soul overnight.",
    "centered Since then communication between the royal craftsmen and the people become worse and the production rate of goods plummeted.",
    "centered The kingdom is now in shamble, everyone is wondering what is going on deep inside the castle of the royal craftsmen.",
    "hide image i5.png with fadeOut",
    "show image i6.png with fadeIn",
    "centered Each person who dares to seek the answer never returned, never to be seen again...",
    "stop music Intro with fade 3",
    "show scene #ffffff with fadeIn",
    "wait 2500",
    "show scene Menu with fadeIn",
    "wait 2500",
    "end",
  ],
  Start: [
    "show scene #ffffff with fadeIn",
    "show scene Train with fadeIn",
    "show character nm Happy left with fadeIn",
    "play music Train with loop volume 50",
    "nm Whoa!",
    "Familiar scenery scrolls past the train window.",
    "Outside lies the city area of Aonahara Kingdom illuminated by the light that penetrates the deep ocean.",
    "A silhouette of a big castle is visible in the distance.",
    "show character nm Pog left",
    "Nom stare at the windows with face full of amazement.",
    "show character psgr Normal right with fadeIn",
    "psgr Your excitement is leaking out.",
    "show character nm Sad left",
    "nm I-I'm sorry, did I bother you?",
    "psgr Don't worry it's fine.",
    "show character nm Happy left",
    "psgr I've noticed that you are already full of excitement back at the Canada Train Station.",
    "psgr Are you perhaps going to Aonahara Kingdom for the first time?",
    "Nom decide to move a little bit closer to the window and open it.",
    "He points his finger in the direction of the kingdom.",
    "nm Yes, I'm going there but not for the first time.",
    "nm I'm really familiar with this place, last summer I spent the whole season living here.",
    "nm It looks as beautiful as the day I left.",
    "psgr I agree, that place is such a spectacle.",
    "psgr I've heard good news about that place but recently I've heard a rumor flying around.",
    "show character nm TF left",
    "nm Huh? what rumor?",
    "psgr I don't know the detail it's about the royal craftsmen, I think you shouldn't worry about it too much just go there and meet your friends and family.",
    "show character nm Sad left",
    "Hearing that nom feel a little bit worried because some of his friend are part of the royal craftsmen.",
    "Nom shake his head and decides to not trust some random stranger.",
    "show character nm Happy left",
    "nm Right, guess I'll find out once I arrived there.",
    "Confused nom close the windows and sit back on his seat.",
    "An hour has passed, the train has come to a full stop",
    "We have arrived at Aonahara Station, please check your belongings before leaving the train and have a good day.",
    "Nom check his belongings and stand up",
    "psgr I'm going to the Resort so I won't stop here. Good luck out there and be careful!",
    "Nom give a thumbs up.",
    "show character nm Smug left",
    "nm You too",
    "end"
  ],
});
