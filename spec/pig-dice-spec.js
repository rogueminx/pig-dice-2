import { Player } from '../src/pigDice.js';

describe('player', function() {

  var player1;

  beforeEach(function(){
    player1 = new Player();
  })

  it('return a number between 1 and 6', function () {
    var test = player1.random();
    expect(test).not.toEqual(7);
    expect(test).toMatch(/[1-6]/);
  });
  it('should add random roll number to score', function () {
    var test = player1.random();
    expect(player1.score).not.toEqual(0);
  });
});
