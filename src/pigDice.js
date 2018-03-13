export function Player () {
  this.score = [];
  this.total = 0;


  Player.prototype.random = function() {
    var min = 1;
    var max = 6;
    var roll = Math.floor(Math.random() * (max - min + 1)) + min;
    if (roll === 1) {
      console.log(roll);
      return roll;
    //   $("#current-roll01").text(this.roll);
    //   $("#current-score01").text(this.score);
    } else {
    //   $("#current-roll01").text(this.roll);
      this.score.push(roll);
      console.log(this.score);
      return roll;
    //   if ((this.score + this.total) < 100) {
    //     $("#current-roll01").text(this.roll);
    //     $("#current-score01").text(this.score);
    //   } else {
    //     $("#current-roll01").text(this.roll);
    //     $("#total-score01").text(this.total + this.score+ " You Win!");
    }
  };
  Player.prototype.addScore = function (){
    return this.score;
  };
}
// player.prototype.Tally = function() {
//   if ((this.score + this.total) < 100) {
//     this.total += this.score;
//     $("#current-score01").text(this.score);
//     $("#total-score01").text(this.total);
//   } else {
//     $("#current-roll01").text(this.roll);
//     $("#total-score01").text((this.total + this.roll) + " You Win!");
//   }
//   this.score = 0;
//   this.roll = 0;
// };
