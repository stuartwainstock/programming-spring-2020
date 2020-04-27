let synth, soundLoop;
 let notePattern = [90, 100, 110, 120, 130, 140];
 let cnv;

 function preload() {
  // set the global sound formats
  soundFormats('mp3');

  // load esound
  mySoundA = loadSound('sounds/robotmachine.mp3');
  mySoundB = loadSound('sounds/spooky.mp3');
}


 function setup() {
   let cnv = createCanvas(500, 500);
   cnv.mousePressed(canvasPressed);

   colorMode(HSB);
   background(0, 0, 86);
   text('RoBoT bEaTs', 10, 20);


   //the looper's callback is passed the timeFromNow
   //this value should be used as a reference point from
   //which to schedule sounds
   let intervalInSeconds = 0.5;
   soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);

   synth = new p5.MonoSynth();

  
}
function draw() {
   if (key === 'a') {
     mySoundA.play();
  } else if (key === 'b') {
     mySoundB.play();
  }
 
}

function canvasPressed() {
  // ensure audio is enabled
  userStartAudio();

  if (soundLoop.isPlaying) {
    soundLoop.stop();
  } else {
    // start the loop
    soundLoop.start();
  }
}


function onSoundLoop(timeFromNow) {
  let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
  let note = midiToFreq(notePattern[noteIndex]);
  synth.play(note, 0.5, timeFromNow);
  background(noteIndex * 360 / notePattern.length, 50, 100);
}