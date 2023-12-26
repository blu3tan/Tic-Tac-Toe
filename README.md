# Tic Tac Toe #

<div align="center">
<a href="https://blu3tan.github.io/Tic-Tac-Toe/">
<img src="./assets/Tic-Tac-Toe.gif">
</a>

Game developed for the Odin Project Javascript curriculum
[Live Demo](https://blu3tan.github.io/Tic-Tac-Toe/)

</div>

# Concept #

The main idea for this project was to keep the ui simple but not boring, 
so i thought to make the board as the only interactive object of the app.
To achieve such minimal style i made the background part of the game ui 
to reinforce the end game state and visuals.

Started this project with very little inspiration, instead it turned out to be
a very engaging and fun experience both from the coding and visual aspect.

Being this a very simple game i saw no point on developing a pvp version.
The first player to move is randomly chosen between bot and player.
The ai is very basic, the bot just select a random empty spot on the board

The game is fully mobile responsive and tested on chrome and safari.



# Modular game logic #

The focus of this exercise was to develop the code hiding as much as possible
from the global scope using factories and IIFEs
I have splitted the logic on 2 different scripts, one for the board with the
rendering functions and the board array containing the game state, another
for the game flow, with the ui interaction and the game stages.

The third script contains the only exposed object **GameApp** with the methods
revealed from the other modules added as properties



# Visual and ux #

I wanted to mimic a real game app experience using only vanilla JS and CSS
The end result is a very clean and minimal ui and a smooth ux.
The layout adopted to achieve this is actually a little complex (nothing outrageous tho)

Basically the whole game is made by 4 boards, each one containing one stage of the app:</br>
**Start screen** - **Name input** - **Playable board** - **End screen**

<div align="center">
<img src="./assets/Tic_Tac_Toe_layers.jpg">
</div>

As the user interacts with the ui, the game flow controller hides the precedent stage revealing 
the one below.
When the game ends the final stage show a custom message based on the 3 end conditions, win, loose, tie.

On restart i have used a "curtain" to hide all the ui while the app in the background is resetting to the initial stage.

-----------------------------------------------------------------------------

