import './styles.css';
import { Player } from './pigDice';


$(document).ready(function(){
  var newPlayer = new Player();
  $("#roll01").click(function(event){
    event.preventDefault();
    newPlayer.random();
  });
  $("#hold01").click(function(event){
    event.preventDefault();
    newPlayer.Tally();
  });
});
