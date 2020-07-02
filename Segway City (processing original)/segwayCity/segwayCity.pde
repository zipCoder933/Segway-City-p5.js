/**********************************************************************
 COPYRIGHT © All rights reserved. Segway City
 This software is liscenced under the GNU General Public license v3.0
**********************************************************************/

import org.SCS.DAOHL.FilesystemHandler;
import processing.sound.*;
import com.trindle.x3d.*;
import com.trindle.x3d.developer.*;
import com.trindle.x3d.skyboxGraphics.*;
import com.trindle.calc.*;
import processing.video.*;

/********************************************************************************************************************************************************************/
/********************************************************************************************************************************************************************/

String appDirectory = "..."; //CHANGE THIS LINE OF CODE TO MATCH THE LOCATION OF YOUR CLONED REPOSITORY

boolean developerMode = false; //developer mode 

boolean getFilepath = true; //gets real file path: files.getLocalPath(); 
//CHANGE THIS TO FALSE AS LONG AS YOU ARE STILL IN THE IDE. IF IT IS TRUE, AND YOR ARE STILL IN THE IDE, IT WILL RETURN SOMETHING LI
//C:\\Program Downloads\processing-3.5.4-windows64\processing-3.5.4

/********************************************************************************************************************************************************************/
/********************************************************************************************************************************************************************/


Prompt updatePrompt = null;
Movie startupLoop;
SoundFile mainTheme;
SoundFile click;
SoundFile collision;

void movieEvent(Movie m) {
  m.read();
}

SkyBox sky1;
Calc3D c;
x3D x3d;
Developer dev;

boolean htp=true;
boolean firstTime = true;
int Mode = 0;
int oldMode = -1;
PFont font;

Arena arena;
MainMenu m;

float highScore=0;
float highLevel=0;
float gainedLevel=0;
int playTimes=0;
boolean showHelp2 = false;
float highPos=0;
float skillLevel = 0;
boolean blankSky = false;
float runningVersion=0;
boolean is32bit=false;
float version;
boolean isUpdate=false;
String updateData[];
String onlineData="";
float tip = 0;
float message = 0;
float cTip = 0;
float cMsg = 0;
String tipText = "";
String messageText[] = {"", ""};

void settings() {
  size(1560, 880, P3D);
  PJOGL.setIcon("icon.png");
}

FilesystemHandler files;

void setup() {
  surface.setTitle("Segway City "+(developerMode?"(Dev Mode)":""));
  noStroke();

  font = loadFont("data/font.vlw");
  textFont(font, 32);
  cursor(loadImage("GUI/cursors/default.png"));

  background(10);
  fill(180);
  textSize(45);
  textAlign(CENTER, CENTER);
  text("LOADING ...", width/2, height/2);
  textSize(20);
  fill(100);
  text("This may take a second...", width/2, height-100);
}

public void init() {
  if (getFilepath) {
    files = new FilesystemHandler();
  } else {
    files = new FilesystemHandler(appDirectory); 
  }

  println("Local Directory = "+files.getLocalDir());
  processVersionData();

  x3d = new x3D(this, developerMode);
  c = new Calc3D(this, true);
  dev = new Developer(x3d);
  initSkybox();
  m = new MainMenu(this);
  arena = new Arena(this);
  firstTime=true;
  click = new SoundFile(this, "data/audio/click1.wav");
  mainTheme  = new SoundFile(this, "data/audio/main.wav");
  collision = new SoundFile(this, "data/audio/collision.wav");
  mainTheme.loop();
}

void initSkybox() {
  File skyfile = new File(files.getLocalDir()+"/data/main_theme/textures/sky");
  if (skyfile.exists()) {
    blankSky = false;
  } else blankSky = true;

  println("skybox directory "+(skyfile.exists()?"exists":"does not exist"));

  if (blankSky) {
    sky1 = new SkyBox(this, color(240));
  } else {
    sky1 = new SkyBox(this, color(240), 
      new CubeMap(loadImage("data/main_theme/textures/sky/top.jpg"), 
      loadImage("data/main_theme/textures/sky/side3.jpg"), 
      loadImage("data/main_theme/textures/sky/side4.jpg"), 
      loadImage("data/main_theme/textures/sky/side1.jpg"), 
      loadImage("data/main_theme/textures/sky/side2.jpg"), 
      loadImage("data/main_theme/textures/sky/bottom.jpg")) 
      );
  }

  sky1.horizonColor = color(0, 1);
  x3d.setSkybox(sky1);
}

float amp = 0;
int oldW=0;

void draw() {
  if (firstTime) {
    println("INITIALIZING...");
    init();
    surface.setTitle("Segway City"+(blankSky?"":" - Adventure")+(developerMode?" (Dev Mode)":""));
    processLocalData();
    firstTime=false;
  }
  if (mainTheme.isPlaying()) {
    mainTheme.amp(amp);
    amp=c.biezer(amp, 0.2, 20);
  }
  switch(Mode) {
  case 0:
    if (oldMode!=Mode) {
      oldMode=Mode;
      m._setup();
    }
    m._draw();
    break;
  case 1:
    if (oldMode!=Mode) {
      arena._setup();
      oldMode=Mode;
    }
    arena.draw();
    break;
  default:
    pageError();
  }
  if (updatePrompt != null) {
    updatePrompt.draw();
    if (updatePrompt.overButton1()&&mousePressed)updatePrompt = null;
  }
}

void mousePressed() {
  click.play();
}

void keyPressed() {
  switch(Mode) {
  case 1:
    arena.keyDown();
    break;
  }
}
int spdM=-1;
int spCo=0;
int spdM2 = 1;
void keyReleased() {

  if (spdM==1) {
    spdM=-1;
  }
  if (spdM==0) {
    spdM=1;
    keyCode=0;
  }
  switch(Mode) {
  case 1:
    arena.keyUp();
    break;
  }
}

void mouseReleased() {
  switch(Mode) {
  case 0:
    m.mouseClick();
    break;
  case 1:
    arena.mouseUp();
    break;
  }
}
void pageError() {
  background(0, 0, 0);
  textSize(40);
  fill(170, 0, 0);
  textAlign(CENTER);
  translate(width/2, height/2);
  rect(-225, -50, 450, 70);
  translate(0-width/2, 0-height/2);
  fill(255);
  text("SOFTWARE OUT OF DATE", width/2, height/2);
  fill(255, 255, 255, 200);
  textSize(20);
  text("Segway City "+version+" is no longer supported.\n"+(isUpdate?"Click anywhere to download Segway City "+runningVersion:"Upgrade to Segway City "+runningVersion+" or higher."), width/2, height/2+50);
}

void dispose() {
  System.err.println("----- Segway City Terminated -----");
  mainTheme.stop();
  saveGame();
  println("done saving");
}
