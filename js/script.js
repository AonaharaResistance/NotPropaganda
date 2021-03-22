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
monogatari.action("particles").particles({});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {});

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
  Aonahara1: {},
});

// Define the Characters
monogatari.characters({
  y: {
    name: "Totaly not a propaganda person",
    color: "#5bcaff",
    Directory: "nitsu",
    sprites: {
      Normal: "nitsu1.png",
    },
  },
});

monogatari.script({
  // The game starts here.
  Start: [
    "Not so long time ago, a kingdom was founded, a kingdom that will later be known for it's greatness.",
    "The kingdom is lead by elite aonaharian, their supreme leader food, and his 6 loyal role leaders.",
    "The people living there was happy and the kingdom was properosus, they are having the best time of their life.",
    "Unfortunately this didn't last long...",
    "The caring leaders and elite became something different...",
    "Colder than the ice darker than the night, as if someone or something changed their mind and soul overnight.",
    "The kingdom is now in shamble, everyone is wondering what is going on deep inside the royal palace of the elites.",
    "Each person who dare to seek the answer never returned, never to be seen again...",
  ],
});
