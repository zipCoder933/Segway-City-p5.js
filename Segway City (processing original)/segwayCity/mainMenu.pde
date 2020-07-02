/**********************************************************************
 COPYRIGHT © All rights reserved. Segway City
 This software is liscenced under the GNU General Public license v3.0
**********************************************************************/

int rt2=10;
float rt3=275;
class MainMenu {
  PImage backgroundImage;

  public MainMenu(PApplet p) {
    startupLoop = new Movie(p, files.getLocalDir()+"/data/main_theme/startup_loop.mp4");
    backgroundImage = loadImage("data/main_theme/textures/background_splash.jpg");
    startupLoop.loop();
  }

  void _setup() {
    rt3=275;
  }

  float skillLevelTresh = 12;
  void _draw() {
    rt3 = c.biezer(rt3, (blankSky?175:140), 400);
    background(50);

    image(startupLoop, 0, 0, width, height);

    tint(rt2, rt3);

    if (width < 1620) image(backgroundImage, -75, 0, width+150, height);
    else image(backgroundImage, 0, 0, width, height);

    fill(25, 80);
    rect(0, 0, width, height);

    noTint();
    if (rt2<=160)rt2+=4;
    else if (rt2<=260)rt2+=2;
    if (rt2>255)rt2=255;

    showTitle();

    if (overButton1())fill(30, 217, 255);
    else fill(30);
    rect(width/2-110, height/2-90, 220, 70);

    if (overButton2() && skillLevel>skillLevelTresh)fill(30, 217, 255);
    else fill(30);
    rect(width/2-200, height/2-5, 400, 70);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("PLAY >", width/2, height/2-55);
    if (skillLevel < skillLevelTresh)fill(255, 255, 255, 100);
    text("PLAY FROM SKILL LEVEL >", width/2, height/2+30);
    fill(255);
    textSize(25);
    textAlign(LEFT, TOP);
    text("HIGHSCORES\n    points: "+(int)highScore+"\n    level: "+ ((float)(round(highLevel*100) )/100) +"\n\nSKILL LEVEL\n    level: "+ ((float)(round(skillLevel*100) )/100)+"\n    gained level: "+((float)(round(gainedLevel*100) )/100), width/2-100, height/2+110);
    textAlign(CENTER, BOTTOM);
    textSize(18);
    fill(200);
    if (onlineData == null)  text("C Segway City v"+version+"  "+(is32bit?"32":"64")+" bit.    You are currently Offline", width/2, height-8);
    else text("© Segway City v"+version+"  "+(is32bit?"32":"64")+" bit.    Click play or play from skill level to start game.", width/2, height-8);
  }

  void mouseClick() {
    if (message < cMsg) {
      
    } else {
      if (overButton1())startGame(true);
      if (overButton2() && skillLevel > skillLevelTresh)startGame(false);
    }
  }


  void showTitle() {
    translate(0,-30);
    textFont(font, 52);
    if (!blankSky) {
      fill(255);
      rect(width/2-200, height/3-31, 400, 78);
    }
    fill(40, 230, 255);
    //fill(255);
    textAlign(CENTER, TOP);
    textSize(65);
    text("SEGWAY CITY", width/2, height/3-(blankSky?25:110));

    textSize(65);
    if (!blankSky) {
      //fill(255);
      fill(50);
      text("\nADVENTURE", width/2, height/3-100);
    }
    translate(0,30);
  }

  boolean overButton1() {
    if (c.coords(mouseX, mouseY, width/2-110, height/2-90, 220, 70))return true;
    else return false;
  }

  boolean overButton2() {
    if (c.coords(mouseX, mouseY, width/2-200, height/2-5, 400, 70))return true;
    else return false;
  }


  private void startGame(boolean play) {
    background(50);

    if (width < 1620) image(backgroundImage, -70, 0, width+140, height);
    else image(backgroundImage, 0, 0, width, height);

    fill(25, 100);
    rect(0, 0, width, height);

    fill(255, 200, 0);
    textAlign(CENTER);
    textSize(50);
    textSize(65);
    fill(30, 217, 255);
    textAlign(CENTER);
    textSize(65);
    showTitle();
    fill(30, 217, 255);
    if (play)fill(30, 217, 255);
    else fill(40);
    rect(width/2-110, height/2-90, 220, 70);

    if (!play)fill(30, 217, 255);
    else fill(40);
    rect(width/2-200, height/2-5, 400, 70);
    fill(255, 255, 255, 100);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("PLAY >", width/2, height/2-55);
    text("PLAY FROM SKILL LEVEL >", width/2, height/2+30);
    textAlign(CENTER, BOTTOM);
    textSize(25);
    fill(200);
    text("starting...", width/2, height-5);
    delay(100);
    if (play)arena.playMode = 0;
    else arena.playMode = 1;
    Mode = 1;
  }
}
