function preload(){
  sound = loadSound('sounds/activation.mp3');
}

function setup(){
  let cnv = createCanvas(700,700);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.3);
}

function draw(){
  background('#cae7e0');

  let spectrum = fft.analyze();
  noStroke();
  fill('#381a21');
  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
  }

  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke('#381a21');
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();

  textSize(32);
  noStroke();
  fill('#381a21');
  textFont('Roboto');
  text('click to play', 80, 80);
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}