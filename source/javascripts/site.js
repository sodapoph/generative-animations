// This is where it all goes :)
function setup (){

  createCanvas(600,600);
  smooth();
  frameRate(3);
  stroke(126,67,237);


}

function draw(){

  background(126,232,192);

  var eyeBrow = floor(random(230,260));

  var ear = floor(random( 50,100));

  var mouth = floor(random(340,410));

strokeWeight(4);

triangle(50,425,550,425,300,560); //neck

fill(252,229,229);

ellipse(50,300,60,ear);  //left ear
ellipse(550,300,60,ear); //right ear
ellipse(300,300,490,400); //head

fill(212,213,252);
  arc(180,280,85,85,0,PI, CHORD); //left eye
  arc(420,280,85,85,0,PI, CHORD); //right eye
    fill(162,134,255);
    arc(180,280,65,65,0,PI, CHORD); //left pupil
    arc(420,280,65,65,0,PI, CHORD); //right pupil

fill(212,213,252);
triangle(300, mouth, 156, 380, 460, 380);  //mouth
line(300,310,300,260); //nose

strokeWeight(25);
  line(145,eyeBrow,215,eyeBrow); //left eyebrow
  line(455,eyeBrow,385,eyeBrow); //right eyebrow

strokeWeight(4);
arc(300,80,275,255,0,PI, CHORD); //hair
arc(300,60,255,235,0,PI, CHORD); //hair

}
