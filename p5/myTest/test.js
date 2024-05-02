var h =  200;
var w = 200;

function setup() {
  // Create a canvas element and
  // assign it to cnv.
  let cnv = createCanvas(displayWidth, displayHeight);

  background(233,150,122);
  textSize(80);


  describe('Text across a background.');

  // Call randomColor() when the canvas
  // is pressed.
  cnv.mousePressed(randomColor);

  describe('A Darksalmon background changes color when the mouse is pressed.');
}

function draw(){
	 text('♡ °̩̥˚̩̩̥͙°̩̥ ·͙*̩̩͙˚̩̥̩̥*̩̩̥͙·̩̩̥͙*̩̩̥͙˚̩̥̩̥*̩̩͙‧͙ °̩̥˚̩̩̥͙°̩̥ ♡Linda♡ °̩̥˚̩̩̥͙°̩̥ ·͙*̩̩͙˚̩̥̩̥*̩̩̥͙·̩̩̥͙*̩̩̥͙˚̩̥̩̥*̩̩͙‧͙ °̩̥˚̩̩̥͙°̩̥ ♡', 500, 500);
}

	 
// Paint the background hex colors
function randomColor() {
  let c = random(['#f88379', '#e15246', '#f58f84', '#f9a298','#e9967a','#f8cabb']);
  background(c);
}