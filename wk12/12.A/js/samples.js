let synth, soundLoop;
 let notePattern = [60, 62, 64, 67, 69, 72];

 function setup() {
   let cnv = createCanvas(100, 100);
   cnv.mousePressed(canvasPressed);
   colorMode(HSB);
   background(0, 0, 86);
   text('tap to start/stop', 10, 20);

   //the looper's callback is passed the timeFromNow
   //this value should be used as a reference point from
   //which to schedule sounds
   let intervalInSeconds = 0.2;
   soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);

   synth = new p5.MonoSynth();
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