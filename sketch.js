let isAutonomousOn = false;
let isRogueActive = false;

let sound1, sound2, delay1, delay2, sound3, sound4, delay3, delay4;
let delayTimeSlider1,
  pitchSlider1,
  octaveSlider1,
  delayTimeSlider3,
  pitchSlider3,
  octaveSlider3;
let delayTimeSlider2,
  pitchSlider2,
  octaveSlider2,
  delayTimeSlider4,
  pitchSlider4,
  octaveSlider4;
let panSlider1, panSlider2, panSlider3, panSlider4;
let volumeSlider1, volumeSlider2, volumeSlider3, volumeSlider4;

let isPlaying = false;

const harmonicMinorScale = [1, 9 / 8, 6 / 5, 4 / 3, 3 / 2, 8 / 5, 15 / 8];

function randomHarmonicMinor() {
  return harmonicMinorScale[Math.floor(Math.random() * harmonicMinorScale.length)];
}

function preload() {
  sound1 = loadSound("RullyShabaraSampleV05.wav");
  sound2 = loadSound("RullyShabaraSampleV02.mp3");
  sound3 = loadSound("RullyShabaraSampleV26.mp3");
  sound4 = loadSound("RullyShabaraSampleT29.mp3");
}
let noiseOffset1, noiseOffset2, noiseOffset3, noiseOffset4;

function setup() {
  createCanvas(390, 600);
  background(55);

  noiseOffset1 = random(1000);
  noiseOffset2 = random(1000);
  noiseOffset3 = random(1000);
  noiseOffset4 = random(1000);
  noiseOffset5 = random(1000);
  noiseOffset6 = random(1000);
  noiseOffset7 = random(1000);
  noiseOffset8 = random(1000);
  noiseOffset9 = random(1000);
  noiseOffset10 = random(1000);
  noiseOffset11 = random(1000);
  noiseOffset12 = random(1000);
  noiseOffset13 = random(1000);
  noiseOffset14 = random(1000);
  noiseOffset15 = random(1000);
  noiseOffset16 = random(1000);
  noiseOffset17 = random(1000);
  noiseOffset18 = random(1000);
  noiseOffset19 = random(1000);
  noiseOffset20 = random(1000);

  delay1 = new p5.Delay();
  delay1.process(sound1, 0.12, 0.5, 2300);
  delay2 = new p5.Delay();
  delay2.process(sound2, 0.12, 0.5, 2300);
  delay3 = new p5.Delay();
  delay3.process(sound3, 0.12, 0.5, 2300);
  delay4 = new p5.Delay();
  delay4.process(sound4, 0.12, 0.5, 2300);

  // Add a start button
  let startButton = createButton("Start/Stop");
  startButton.class("button");
  startButton.position(159, 160);
  startButton.mousePressed(togglePlay);

  let autonomousButton = createButton("Xhabarabot Takeover");
  autonomousButton.class("button");
  autonomousButton.position(138, 380);
  autonomousButton.mousePressed(() => {
    isAutonomousOn = !isAutonomousOn;
    if (isAutonomousOn) {
      autonomousButton.html("Stop Xhabarabot Mode");
    } else {
      autonomousButton.html("Xhabarabot Takeover");
    }
  });

  function togglePlay() {
    isPlaying = !isPlaying;

    if (isPlaying) {
      sound1.play();
      sound1.loop();
      sound2.play();
      sound2.loop();
      sound3.play();
      sound3.loop();
      sound4.play();
      sound4.loop();
    } else {
      sound1.stop();
      sound2.stop();
      sound3.stop();
      sound4.stop();
    }
  }

  
  // Column 1
  textSize(8);
  fill(255);
  text("DELAY", 180, 35);
  text("RATE", 180, 55);

  text("PITCH", 180, 75);
  text("PAN", 180, 125);
  text("VOL", 180, 145);

  text("DELAY", 180, 215);
  text("RATE", 180, 235);
  text("PITCH", 180, 255);
  text("PAN", 180, 305);
  text("VOL", 180, 325);

  delayTimeSlider1 = createSlider(0, 1, 0.12, 0.01)
    .position(20, 40)
    .class("slider");
  pitchSlider1 = createSlider(0.5, 2, 1, 0.01);

  octaveSlider1 = createSlider(-2, 2, 0, 0.1);

  delayTimeSlider1.position(20, 20);
  pitchSlider1.position(20, 40).class("slider");

  octaveSlider1.position(20, 60).class("slider");

  panSlider1 = createSlider(-1, 1, 0, 0.01);
  panSlider1.position(20, 110).class("slider");

  volumeSlider1 = createSlider(0, 2, 1, 0.05);
  volumeSlider1.position(20, 130).class("slider");

  delayTimeSlider3 = createSlider(0, 1, 0.12, 0.01);
  pitchSlider3 = createSlider(0.5, 2, 1, 0.01);

  octaveSlider3 = createSlider(-2, 2, 0, 0.1);

  delayTimeSlider3.position(20, 200).class("slider");
  pitchSlider3.position(20, 220).class("slider");

  octaveSlider3.position(20, 240);

  panSlider3 = createSlider(-1, 1, 0, 0.01);
  panSlider3.position(20, 290).class("slider");

  volumeSlider3 = createSlider(0, 1, 1, 0.01);
  volumeSlider3.position(20, 310).class("slider");

  // Column 2
  delayTimeSlider2 = createSlider(0, 1, 0.12, 0.01);
  pitchSlider2 = createSlider(0.5, 2, 1, 0.01);

  octaveSlider2 = createSlider(-2, 2, 0, 0.1);

  delayTimeSlider2.position(230, 20).class("slider");
  pitchSlider2.position(230, 40).class("slider");

  octaveSlider2.position(230, 60).class("slider");

  panSlider2 = createSlider(-1, 1, 0, 0.01);
  panSlider2.position(230, 110).class("slider");

  volumeSlider2 = createSlider(0, 1, 0, 0.01);
  volumeSlider2.position(230, 130).class("slider");

  delayTimeSlider4 = createSlider(0, 1, 0.12, 0.01);
  pitchSlider4 = createSlider(0.5, 2, 1, 0.01);

  octaveSlider4 = createSlider(-2, 2, 0, 0.1);

  delayTimeSlider4.position(230, 200).class("slider");
  pitchSlider4.position(230, 220).class("slider");

  octaveSlider4.position(230, 240).class("slider");

  panSlider4 = createSlider(-1, 1, 0, 0.01);
  panSlider4.position(230, 290).class("slider");

  volumeSlider4 = createSlider(0, 1, 0, 0.01);
  volumeSlider4.position(230, 310).class("slider");
  
  const harmonicMinorScale = [1, 9 / 8, 6 / 5, 4 / 3, 3 / 2, 8 / 5, 15 / 8];


}

function draw() {
  if (!isPlaying) {
    return;
  }

  // Autonomous Mode
  let transitionSpeed = 0.025;


  if (isAutonomousOn) {
    
    if (isAutonomousOn) {
    // Check for rogue behavior
    if (random() < 0.01) { // 1% chance of activating rogue mode
      isRogueActive = true;
    }
    if (random() < 0.01) { // 1% chance of deactivating rogue mode
      isRogueActive = false;
    }

    if (isRogueActive) {
      // Rogue behavior for pitchSlider1
      pitchSlider1.value(
        lerp(
          pitchSlider1.value(),
          randomHarmonicMinor() * (noise(noiseOffset2) * 5), // Increase multiplier for more madness
          0.5 // Extreme transition speed
        )
      );
    } else {
      // Regular behavior for pitchSlider1
      pitchSlider1.value(
        lerp(
          pitchSlider1.value(),
          randomHarmonicMinor() * (noise(noiseOffset2) + 0.05),
          transitionSpeed
        )
      );
    }
  let targetPitch1 = randomHarmonicMinor() * (noise(noiseOffset2) + 0.005);
  let targetPitch2 = randomHarmonicMinor() * (noise(noiseOffset7) + 0.1);
  let targetPitch3 = randomHarmonicMinor() * (noise(noiseOffset12) + 0.005);
  let targetPitch4 = randomHarmonicMinor() * (noise(noiseOffset17) + 0.1);

  pitchSlider1.value(lerp(pitchSlider1.value(), targetPitch1, transitionSpeed));
  pitchSlider2.value(lerp(pitchSlider2.value(), targetPitch2, transitionSpeed));
  pitchSlider3.value(lerp(pitchSlider3.value(), targetPitch3, transitionSpeed));
  pitchSlider4.value(lerp(pitchSlider4.value(), targetPitch4, transitionSpeed));

// rest of your code...
octaveSlider1.value(lerp(octaveSlider1.value(), noise(noiseOffset3) * 4 - 2, transitionSpeed));
panSlider1.value(lerp(panSlider1.value(), noise(noiseOffset4) * 2 - 2, transitionSpeed));
volumeSlider1.value(lerp(volumeSlider1.value(), noise(noiseOffset5) * 1, transitionSpeed));

octaveSlider2.value(lerp(octaveSlider2.value(), noise(noiseOffset8) * 2 - 2, transitionSpeed));
panSlider2.value(lerp(panSlider2.value(), noise(noiseOffset9) * 2 - 2, transitionSpeed));
volumeSlider2.value(lerp(volumeSlider2.value(), noise(noiseOffset10) * 1, transitionSpeed));

octaveSlider3.value(lerp(octaveSlider3.value(), noise(noiseOffset13) * 4 - 2, transitionSpeed));
panSlider3.value(lerp(panSlider3.value(), noise(noiseOffset14) * 2 - 1, transitionSpeed));
volumeSlider3.value(lerp(volumeSlider3.value(), noise(noiseOffset15) * 1, transitionSpeed));

octaveSlider4.value(lerp(octaveSlider4.value(), noise(noiseOffset18) * 4 - 20, transitionSpeed));
panSlider4.value(lerp(panSlider4.value(), noise(noiseOffset19) * 2 - 1, transitionSpeed));
volumeSlider4.value(lerp(volumeSlider4.value(), noise(noiseOffset20) * 1, transitionSpeed));

noiseOffset1 += 0.005;
noiseOffset2 += 0.007;
noiseOffset3 += 0.009;
noiseOffset4 += 0.011;
noiseOffset5 += 0.013;
noiseOffset6 += 0.015;
noiseOffset7 += 0.017;
noiseOffset8 += 0.019;
noiseOffset9 += 0.021;
noiseOffset10 += 0.023;
noiseOffset11 += 0.025;
noiseOffset12 += 0.027;
noiseOffset13 += 0.029;
noiseOffset14 += 0.031;
noiseOffset15 += 0.033;
noiseOffset16 += 0.035;
noiseOffset17 += 0.037;
noiseOffset18 += 0.039;
noiseOffset19 += 0.041;
noiseOffset20 += 0.043;
    

  



  // Column 1
  delay1.delayTime(delayTimeSlider1.value());
  sound1.rate(pitchSlider1.value() * pow(2, octaveSlider1.value()));
  sound1.amp(volumeSlider1.value());
  sound1.pan(panSlider1.value());

  delay3.delayTime(delayTimeSlider3.value());
  sound3.rate(pitchSlider3.value() * pow(2, octaveSlider3.value()));
  sound3.amp(volumeSlider3.value());
  sound3.pan(panSlider3.value());

  // Column 2
  delay2.delayTime(delayTimeSlider2.value());
  sound2.rate(pitchSlider2.value() * pow(2, octaveSlider2.value()));
  sound2.amp(volumeSlider2.value());
  sound2.pan(panSlider2.value());

  delay4.delayTime(delayTimeSlider4.value());
  sound4.rate(pitchSlider4.value() * pow(2, octaveSlider4.value()));
  sound4.amp(volumeSlider4.value());
  sound4.pan(panSlider4.value());

}
  }
}