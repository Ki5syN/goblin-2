
import Game from '../js/app';

test('randomNumber', () => {
  const newGame = new Game
  const result = newGame.randomNumber();
    
  expect(result).toBeLessThanOrEqual(Game.FIELD_SIZE);
});

