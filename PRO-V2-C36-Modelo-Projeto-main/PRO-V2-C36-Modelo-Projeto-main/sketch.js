var canvas, backgroundImage;

var questions;

var question, contestant, quiz;

function setup() {
  canvas = createCanvas(2000, 2000);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}

function draw() {
  background("pink");
}