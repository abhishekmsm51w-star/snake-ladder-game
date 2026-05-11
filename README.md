# 🎲 Snake and Ladder Game 🎲

A fun and interactive web-based implementation of the classic Snake and Ladder board game for two players!

## Features

- 🎮 **Two-Player Gameplay**: Play against another player on the same device
- 🎯 **10x10 Game Board**: Classic 100-cell board layout
- 🐍 **Snakes**: Challenging snakes that move you down
- 🪜 **Ladders**: Helpful ladders that move you up
- 🎲 **Dice Rolling**: Random dice roll (1-6) for fair gameplay
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Beautiful UI**: Modern, colorful, and easy-to-use interface

## How to Play

1. **Open** `index.html` in your web browser
2. **Player 1 (Red)** and **Player 2 (Blue)** take turns rolling the dice
3. **Roll the Dice**: Click your player's "Roll Dice" button
4. **Move Your Piece**: Your position advances by the number shown on the dice
5. **Climb Ladders**: If you land on a ladder bottom, you automatically climb to the top
6. **Slide Down Snakes**: If you land on a snake head, you slide down to its tail
7. **Win**: Be the first to reach position 100!

## Game Rules

- Players must roll the dice in turns
- You cannot move beyond position 100 (the dice value must land exactly or you skip your turn)
- Snakes move you down to their tail positions
- Ladders move you up to their top positions
- The first player to reach position 100 wins!

## Snakes in the Game

| Head | Tail |
|------|------|
| 17   | 4    |
| 54   | 31   |
| 62   | 19   |
| 87   | 36   |
| 93   | 73   |
| 95   | 75   |
| 98   | 79   |

## Ladders in the Game

| Bottom | Top |
|--------|-----|
| 2      | 38  |
| 7      | 14  |
| 15     | 26  |
| 21     | 42  |
| 28     | 84  |
| 51     | 67  |
| 72     | 91  |
| 78     | 98  |

## File Structure

```
snake-ladder-game/
├── index.html    # Main HTML file with game structure
├── style.css     # CSS styling and layout
├── script.js     # JavaScript game logic
└── README.md     # This file
```

## Technologies Used

- **HTML5**: Game structure and markup
- **CSS3**: Styling and responsive design
- **Vanilla JavaScript**: Game logic and interactivity

## How to Run

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Enjoy playing!

## Tips for Playing

- Plan your moves carefully - getting a high dice value might land you on a snake!
- Aim for cells that have ladders to climb faster
- Remember which snakes and ladders are on the board to avoid them when possible
- Work together with your opponent for a fun gaming experience

## Future Enhancements

- Single player mode with AI opponent
- Difficulty levels
- Customizable board size
- Multiplayer online support
- Sound effects and animations
- Different themes

## License

This project is open source and available for personal and educational use.

---

**Enjoy the game! 🎉**
