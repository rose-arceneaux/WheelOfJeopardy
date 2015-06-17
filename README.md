# Wheel Of Jeopardy
This is a group project for EN.605.401.83.SU15 Foundations of Software Engineering (Summer 2015) at JHU. The professor is Sam Schappelle and Joe Demasco. The developers are James Matsumura, Elliotte Kim and Jean Sik(@jsik).

## Project Description
This game is a computer version of a combination of two TV game programs: Wheel of
Fortune and Jeopardy!. If you don’t know how to play either of these games, your first
assignment is to spend a few hours watching these shows on TV. Usually these two
programs are aired back to back in the 7:00pm – 8:00pm hour. Check your local listings
for details. The following is a description of the rules for The Wheel of Jeopardy (WoJ)
game.

## Game Rules
The players take turns spinning the wheel and answering questions. When
it is your turn, you will spin the wheel, and do whatever it says on the sector of the wheel.
The wheel has the following 12 sectors, randomly distributed:

• One sector for each of the six categories on the Jeopardy! board. When the player
spins one of these sectors, he or she must answer the next question in that category.
The questions are answered in the order of increasing point value. If the player
answers correctly, he or she is awarded the corresponding points and gets to spin
again. If incorrect, the corresponding points are subtracted from the player’s score,
and the player loses his turn. (Negative scores are possible.) If all of the questions in
the selected category have been answered, the player must spin again.
• One “lose turn” sector.
• One “free turn” sector. When this sector comes up, the player gets a token for a free
turn later in the game. The token could be used if the player loses his turn by
spinning a “lose turn” or answering a question incorrectly in a future turn. If this
happens, the player could redeem the token and would get to spin the wheel again.
The number of tokens is unlimited. 
• One “bankrupt” sector. When this sector comes up, the player loses all of his or her
points for the current round. The player loses his turn, and can’t use a token for a
second chance.
• One “player’s choice” sector. When this sector comes up, the player gets to choose
which category to answer.
• One “opponents’ choice” sector. When this sector comes up, the player’s opponents
get to select the category.
• One “spin again” sector. When this sector comes up, the player must spin again.

The game is played in two rounds. In the second round, the point values are doubled
from the first round (as in Jeopardy!). At the end of the game, the scores for the two
rounds are added together. The player with the largest total score is the winner. In each
round there are a maximum of 50 spins of the wheel. A counter should be displayed
indicating the number of spins remaining in the round. A round is over if either all of the
questions have been answered or if the spin count goes to zero.

In Jeopardy!, the questions are actually in the form of answers, and the answers should be
worded as questions. (However, for this program, you may word the questions in the
form of questions rather than answers, if you wish. ) There should be a time limit on
answering a question. If the time expires, no points are subtracted from the player’s
score, but he loses his turn. If he has a token, he can redeem it for another spin. There is
no “buzzing in” in this game. 

