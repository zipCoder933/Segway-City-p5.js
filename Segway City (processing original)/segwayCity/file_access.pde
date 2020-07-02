/**********************************************************************
 COPYRIGHT © All rights reserved. Segway City
 This software is liscenced under the GNU General Public license v3.0
**********************************************************************/

boolean save=false;  
boolean saved=false;

import java.io.*;
import java.awt.*;
import java.net.*;
import java.util.Scanner;

String localDataFile = "C:\\Trident Data\\Segway City\\local.data";
String localDataDir = "C:\\Trident Data\\Segway City";


void processLocalData() {
  println("processing local data...");
  File f = new File(localDataFile);
  if (!f.exists()) {
    new File(localDataDir).mkdirs();
  }
  String a = files.readFile(localDataFile);
  println("file: "+a);

  if (a == null) {
    files.writeFile(localDataFile, "_");
    a="";
    println("File is null. Overwriting...");
  }

  if (a.equals("deactivated-1K9JFE"))Mode=-2;
  else {
    String abb[] = split(a, '-');
    String ab[] = split(abb[0], ' ');

    if (ab.length < 9) {
      files.writeFile(localDataFile, "0 0 0 1 1 0 0 0 0 0-\nhSc hLv Att flEd dHlp sYp sLv gLv tpIn msIn\n\nWARNING: Modifying this file may lead to loss of all game data or malfunction!"); 
      println("Insuficcient Data. Overwriting...");
    }
    //highScore highLevel playTimes fallOffEdges showHelp segwayYpos skillLevel gainedLevel tipIndex messageIndex

    a = files.readFile(localDataFile);

    String bb[] = split(a, '-');
    String b[] = split(bb[0], ' ');

    highScore = parseFloat(b[0]);
    highLevel = parseFloat(b[1]);
    playTimes = (int)parseFloat(b[2]);
    if ( (int)parseFloat(b[3]) == 0 ) {
      println("fallOfEdges = false");
      arena.fallOffEdges = false;
    }

    if ( (int)parseFloat(b[4]) == 1 ) {
      showHelp2=true;
      htp=true;
      println("need help");
    } else { 
      showHelp2=false;
      htp=false;
      println("dont need help");
    }

    highPos = (int)parseFloat(b[5]);
    skillLevel = parseFloat(b[6]);
    gainedLevel = parseFloat(b[7]);

    tip = parseFloat(b[8]);
    message = parseFloat(b[9]);
  }
}

void processVersionData() {
  String versionData[] = split(readFile("data/version.data"), "\n");  //system version
  printArray(versionData);

  if (versionData[0].equals("32_bit"))is32bit = true;
  version = parseFloat(versionData[1].substring(1, versionData[1].length()));
}


void saveGame() {

  if (save&&!saved) {

    if (arena.points2 > highScore) { 
      highScore = arena.points2; 
      arena.Hy= arena.Hy=highPos;
      if (arena.level > highLevel) highLevel = arena.level;

      int sh=0;
      if (showHelp2)sh=1;

      playTimes++;

      int stopTime = 0;
      if (playTimes>5)stopTime=1000;

      if (arena.time > stopTime) skillLevel = ( ((skillLevel + skillLevel +arena.level)/3) + highLevel ) / 2;

      if (arena.level>=gainedLevel && arena.playMode==1)gainedLevel=arena.level;

      int foe = 0;
      if (arena.fallOffEdges)foe=1;

      files.writeFile(localDataFile, highScore+" "+highLevel+" "+playTimes+" "+foe+" "+sh+" "+arena.Hy+" "+skillLevel+" "+gainedLevel+" "+tip+" "+message+
        "-\nhSc hLv Att flEd dHlp sYp sLv gLv tpIn msIn\n\nWARNING: Modifying this file may lead to loss of all game data or malfunction!");//playTimes+1

      save=false;
      saved=true;
    }

    if (arena.lose)arena.health=0;
    if (arena.reset) {
      oldMode=Mode;
      arena.st=false;
      arena.kx=0;
      arena._setup();
      arena.reset=false;
    }
  }
}

String readFile(String url) {
  String ret = "";
  String[] lines = loadStrings(url);
  for (int i = 0; i < lines.length; i++) {
    ret += lines[i];
    if (i != lines.length)ret += "\n";
  }
  return ret;
}
