/**********************************************************************
 COPYRIGHT © All rights reserved. Segway City
 This software is liscenced under the GNU General Public license v3.0
**********************************************************************/

//color panelColor = color(40, 190);

//class Arena {
//  Plane MP;
//  Crate MC;
//  Segway s;
//  Hole MH;
//  StripedHole MSH;

//  boolean fallOffEdges=true;  
//  float points2 = 0; 
//  float Hy=0;
//  float level = 1;
//  int time=0;
//  boolean lose=false; 
//  boolean reset=false;
//  boolean st=false;
//  int kx=0;
//  int playMode=0;
//  Prompt helpPrompt;

//  public Arena(PApplet p) {
//    s = new Segway(p, this);
//    MP = new Plane(p);
//    MC = new Crate(p);
//    MH = new Hole(p);
//    MSH = new StripedHole(p);
//    helpPrompt = new Prompt("HOW TO PLAY", "Control your segway by moving it back and fourth using the arrow keys. \n"+
//      "(press K (click on mouse) to change to mouse navigation.) or press \nP to pause. press forward arrow to accererate, (press forward arrow twice to\nturbo accelerate) and spacebar to jump.\n\n"+
//      "TO WIN: avoid crates, jump over holes, collect health crates,\n"+ (fallOffEdges ? "avoid the edge,":"") 
//      +" and avoid striped holes.\nEarn points by jumping over holes, riding turbos and lasting as long as you can.", "", "GOT IT", "DONT SHOW AGAIN");
//  }


//  boolean jump = false;
//  float initSegSpeed= 26;//19
//  float initSegSpeed2= 26;//19

//  float displayLevel;
//  String points = "";


//  boolean showHelp=true;


//  int mx=0;
//  boolean reverse = false;
//  int rt=0;
//  float acc=0;
//  float arenaIndex=0;
//  int runningLength = 0;
//  boolean navigateMouse=false;
//  boolean fall=false;
//  boolean speedMode = false;
//  int speedCounter=0;
//  float speedVal = 1;
//  String debugText="";

//  float mouseY2=0;

//  String rows[]={};
//  float startR=0;
//  int pr=0;

//  int newRow=0;
//  int rws = 2;
//  int ra = 0;
//  int bufferingRate = 30;
//  float a2=0;

//  boolean ft=false;
//  float sklevel=0;

//  boolean debugMode = false;



//  void _setup() {
//    //mainTheme.loop(1,1);
//    initSegSpeed = initSegSpeed2;
//    rt=0;
//    pr=0;
//    addP=false;
//    addPH=false;



//    time=0;

//    highPos = highScore*200;

//    ft=true; 
//    s.x=0;
//    mx=0;
//    kx=0;
//    rws=2;//.----------------------------------------------------------------------------------
//    health=1; //1
//    saved=false;
//    save=false;

//    s.of=false;
//    level=0;
//    points="";
//    points2=0;
//    int temp = rows.length;
//    for (int a=0; a<temp; a++) {
//      rows=shorten(rows);
//    }

//    s.jj=12;
//    s.jf=0;

//    fall=false;

//    lose=false;
//    pause=false;
//    ra=0;

//    s.y = 200;
//    s.x= ((int)rws/2)*200;
//    s.x2=((int)rws/2)*200;

//    level=0;
//    htp=showHelp2;
//    navigateMouse=false;
//    st=false;

//    s.oy=s.y;
//    s.yd=0;
//    s.y2=s.yd;
//    displayLevel=0;

//    if (playMode==1) {
//      level= skillLevel-8;
//      displayLevel= (float) round( (skillLevel-8) *10)/10;
//      sklevel=displayLevel;



//      rws=2;
//      for (int  i=0; i<10; i++) {//Initial rows
//        newRow(rws, false, 0, false, 0, false, 1, false, 0, rws);
//      }



//      if (skillLevel > 7) {
//        if (level> 2  ) {
//          rws=4;
//          initSegSpeed = initSegSpeed2;
//        }
//      } else if (skillLevel > 5) {
//        if (level> 4  ) {
//          rws=4;
//          initSegSpeed = initSegSpeed2;
//        }
//      }
//      if (level> 5  ) {
//        rws=4;
//        initSegSpeed = initSegSpeed2;
//      }

//      if (level> 15 ) {
//        rws=5;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 28 ) {
//        rws=6;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 40 ) {
//        rws=7;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 60   ) {
//        rws=8;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 80 ) {
//        rws=9;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 100 ) {
//        rws=10;
//        initSegSpeed = initSegSpeed2;
//      }

//      if (level> 140 ) {
//        rws=11;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 180 ) {
//        rws=12;
//        initSegSpeed = initSegSpeed2;
//      }

//      if (level> 250 ) {
//        rws=13;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 300 ) {
//        rws=14;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 350 ) {
//        rws=15;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 500 ) {
//        rws=16;
//        initSegSpeed = initSegSpeed2;
//      }

//      s.x= round((float)rws/2)*200;
//      s.x2=round((float)rws/2)*200;

//      for (int  i=0; i<5; i++) {
//        newRow(rws, false, 0, false, 0, false, 1, false, 0, rws);
//      }

//      for (int  i=0; i<2; i++) {//Initial rows
//        newRow(rws, false, 0, false, 0, false, 1, false, 0, rws);
//        newRow(rws, false, 0, false, 0, false, 1, false, 0, rws);
//        newRow(round(rws/1.5), false, 0, false, 0, false, 1, false, 0, rws);
//      }
//    } else {
//      rws=2;
//      for (int  i=0; i<10; i++) {
//        newRow(rws, false, 0, false, 0, false, 1, false, 0, rws);
//      }

//      for (int  i=0; i<10; i++) {//Initial rows
//        newRow(rws, false, 0, false, 0, false, 0, false, 0, rws);
//        newRow(1, false, 0, false, 0, false, 1, false, 0, rws);
//        newRow(rws, false, 0, false, 0, false, 1, false, 0, rws);
//      }
//      rws=3;
//    }
//    reverse=false;

//    rlt=0;
//    a2=200;
//  }

//  float rlt=0;
//float rltK=0;

//  //DRAW ---------------------------------------------------------------------------------------------------------------------------------------------------------------
//  void draw() {
//    background(100);
//    debugText =""+ time;

//    if (st && !lose)time++;

//    if (keyPressed) {
//      if (keyCode==38 && spdM==1 && spCo < 8) { //IF doing double boost
//        acc=4; 
//        spdM2=1; 
//        //points2-= (level/60 +0.15) ;  
//        addP=true;
//        addAm= 0- (int)((level/60 +0.15)*10) ;
//      } else if (keyCode==38) {
//        acc=2.5;
//        spdM=0;
//        spdM2=0;
//      }
//    } else acc=1;

//    if (spdM==1 && spdM2==0)spCo++;
//    else spCo=0;


//float minRLTscale = 260;

//float zFscale = map(rlt, 0, minRLTscale*2, 0, 1);
//if(zFscale > 1)zFscale = 1;

//float camZfreedom = map(zFscale, 0, 1, -0.2, -0.01);


//if(st){
//rltK = (runningLength*180)+75;
//if(rltK<minRLTscale)rltK=minRLTscale;
//}
//else rltK = 50;

//rlt = c.biezer(rlt,rltK,7);


//    if (!navigateMouse) mouseY2=mouseY;

//    x3d.Camera(0, 0, (0-rlt)/2 + 250, 
//      (s.x2), (s.y), 0, 

//      (map(mouseY2, 0, height, map(rlt, 0, 1000, -0.06, (rws>5? -0.145 : 0)), map(rlt, 0, 1000, 0.15, (rws>5? 0.03 : 0.0555)))+0.3)*180, 
//      0, (1 + map(mouseX, 0, width, 0-camZfreedom, camZfreedom)+startR)*180);


//    if (playMode==1) {
//      x3d.loc(rws*200-200, 2200, 320);
//      x3d.rot(90, 0, 180);
//      x3d.$().noStroke();
//      x3d.$().textFont(font, 50);
//      x3d.$().fill(88, 200, 255, 220);
//      x3d.$().rect(0, 0, rws*200, 100);
//      x3d.$().fill(255);
//      x3d.$().textSize(50);
//      x3d.$().textAlign(CENTER);
//      x3d.$().text("LEVEL "+sklevel, (rws*200)/2, 70, 1);
//      x3d.$().textAlign(LEFT, TOP);

//      x3d.xrot(90, 0, 180);
//      x3d.xloc(rws*200-200, 2200, 320);
//    }

//    if (highScore > 5) {
//      println(highPos);
//      x3d.loc(rws*200-200, highPos, 320);
//      x3d.rot(90, 0, 180);

//      x3d.$().noStroke();
//      x3d.$().textFont(font, 50);
//      x3d.$().fill(0, 190, 0, 220);
//      x3d.$().rect(0, 0, rws*200, 100);
//      x3d.$().fill(255);

//      x3d.$().textAlign(CENTER);
//      x3d.$().text("OLD HIGHSCORE", (rws*200)/2, 70, 1);
//      x3d.$().textAlign(LEFT, TOP);

//      x3d.xrot(90, 0, 180);
//      x3d.xloc(rws*200-200, highPos, 320);
//    }

//    displayLights();

//    if (st==true&&lose==false) {
//      float segSpeed=0;

//      if (reverse) {
//        segSpeed = 0-initSegSpeed; 
//        rt++;
//      } else { 
//        segSpeed = initSegSpeed*acc*speedVal;
//        rt=0;
//      }

//      if (rt>(rws>8? 100:130)) {
//        rt=0;
//        reverse=false;
//      }

//      if (rws>8)s.y+=segSpeed*1.3;
//      else s.y+=segSpeed;

//      points2 += (segSpeed/250)*(level/15+1);

//      if (points2<0)points2=0;

//      level+=segSpeed/30000; //LEVEL---------------------------------
//      displayLevel=(float) ( round(level*10) )/10;


//      if (navigateMouse) {
//        if (fallOffEdges) { 
//          mx=round(map(mouseX, width-300, 300, 0, runningLength-1));

//          if (mouseX > width-25) {
//            mx=-1;
//          } else if (mouseX < 25) {
//            mx=runningLength+1;
//          }
//        } else mx=round(map(mouseX, width-300, 300, 0, runningLength-1));

//        s.x=mx;
//      } else {



//        s.x=kx;
//      }

//      if (fallOffEdges) {
//        if (s.x<0) {
//          s.x=-1;
//          lose=true;
//          fall=true;
//          save=true;
//          //collision.play(1,1);
//        }
//        if (s.x>runningLength-1) {
//          s.x=runningLength;
//          lose=true;
//          fall=true;
//          save=true;
//          //collision.play(1,1);
//        }
//      } else {
//        if (s.x<0) {
//          s.x=0;
//        }
//        if (s.x>runningLength-1) {
//          s.x=runningLength-1;
//        }
//      }


//      s.x*=200;

//      if (level<100) {
//        initSegSpeed+=0.0006;
//      }
//    }


//    if (rws>15) {
//      points = (float) round(( (float) ((int)points2)/1000 )*100)/100 +"K";
//    } else if (rws>8) {
//      points = (float) round(( (float) ((int)points2)/100 )*100)/100 +"H";
//    } else {
//      points = (int)points2+"";
//    }


//    newRow++;

//    if (st==true && newRow > bufferingRate && lose==false) { //row buffering

//      //difficulty levels

//      if (skillLevel > 7) {
//        if (level> 2  ) {
//          rws=4;
//          initSegSpeed = initSegSpeed2;
//        }
//      } else if (skillLevel > 5) {
//        if (level> 4  ) {
//          rws=4;
//          initSegSpeed = initSegSpeed2;
//        }
//      }//lanes} else {
//      if (level> 5  ) {
//        rws=4;
//        initSegSpeed = initSegSpeed2;
//      }

//      if (level> 15 ) {
//        rws=5;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 28 ) {
//        rws=6;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 40 ) {
//        rws=7;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 60   ) {
//        rws=8;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 80 ) {
//        rws=9;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 100 ) {
//        rws=10;
//        initSegSpeed = initSegSpeed2;
//      }

//      if (level> 140 ) {
//        rws=11;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 180 ) {
//        rws=12;
//        initSegSpeed = initSegSpeed2;
//      }

//      if (level> 250 ) {
//        rws=13;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 300 ) {
//        rws=14;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 350 ) {
//        rws=15;
//        initSegSpeed = initSegSpeed2;
//      }
//      if (level> 500 ) {
//        rws=16;
//        initSegSpeed = initSegSpeed2;
//      }


//      if (!reverse) {
//        if (rws>7) {
//          newRow(rws, (pr==rws? true:false), 5, true, 1, true, 8, false, 0, rws);
//          newRow(rws, false, 0, true, 2, true, 8, true, 10, rws);
//        } else if (rws>4) {
//          newRow(rws, (pr==rws? true:false), 10, true, 1, true, 8, false, 0, rws);
//          newRow(rws, false, 0, true, 2, true, 8, false, 0, rws);
//        } else      newRow(rws, false, 0, false, 0, true, 10, false, 0, rws);


//        switch(rws) {//rows
//        case 2: 
//          newRow(1, false, 0, false, 0, true, 30, false, 0, rws); 
//          break;//newRow(1,0,rws);
//        case 3:
//          if (level < 0.6 )newRow(2, false, 1, false, 0, true, 20, false, 1, rws);
//          else newRow(2, true, 1, false, 0, true, 20, false, 1, rws); 
//          break;//newRow(2,0,rws);//40
//        case 4:

//          if (level < 10 ) newRow(rws-2, true, 1, true, 1, true, 15, false, 0, rws);
//          else newRow(rws-2, true, 1, true, 1, true, 15, true, 6, rws); 
//          break;//newRow(2,1,rws); 


//        case 5:
//          newRow(rws-2, true, 1, true, 1, true, 8, true, 4, rws); 
//          break;//newRow(2,1,rws); 
//          //case 6:
//          //newRow(round(random(rws/2.4,rws/3)),true,1,true,1,true,7,rws);// 2.4 3  - 2.7 3.2
//        default:
//          if (rws<10) {
//            newRow(rws==7 ? round(random(rws/3.5, rws/5.5)) : (rws < 7 ? round(random(rws/2.5, rws/4)) : round(random(rws/4, rws/6))), true, 1, true, 1, true, 8, true, 1, rws);
//          } else newRow(round(random(3, 7)), true, 1, true, 1, true, 8, true, 1, rws);
//          //newRow(round(random(rws/2.5,rws/1.6)),true,1,true,1,true,8,rws);
//        }

//        newRow(rws, false, 0, false, 0, true, 20, false, 0, rws);


//        newRow=0;
//        int rl= 45;
//        if (rows.length>rl) { //delete old rows to save memory
//          if (runningLength>4)ra+=4;
//          else ra+=3;
//          rows=reverse(rows);
//          rows=shorten(rows);
//          rows=shorten(rows);
//          rows=shorten(rows);
//          if (runningLength>4)rows=shorten(rows);
//          rows=reverse(rows);
//        }
//      }

//      pr=rws;
//    }
//    displayArena(rows, x3d.$());
//    if (speedMode) {
//      speedVal+=0.5;
//      if (speedVal>3)speedVal=3;
//      speedCounter++;
//    }
//    if (speedCounter > 42) {
//      speedMode=false;
//      speedVal=1;
//      speedCounter=0;
//    }

//    s.render();

//    x3d.endWorldGraphics();
//    x3d.renderWorld();
//    gui();
//  }

//  void keyDown() {
//    if (!htp) {
//      if (keyCode==96) {
//        debugMode = !debugMode; 
//        st=false;
//      } // ` key


//      if (!pause)st=true;
//      if (key=='k') {
//        navigateMouse = !navigateMouse;
//        if (navigateMouse) mx=kx;
//        else kx=mx;
//      }
//      if (key==' ')jump=true;
//      if (key=='p') {
//        pause= !pause; 
//        st= !pause;
//      }

//      if (keyCode==37) {
//        kx++;
//        s.r-=0.3;
//      }
//      if (keyCode==39) {
//        kx--;
//        s.r+=0.3;
//      }
//      if (!fallOffEdges) {
//        if (kx<0) {
//          kx=0;
//        }
//        if (kx>runningLength-1) {
//          kx=runningLength-1;
//        }
//      }
//    }
//  }

//  public void keyUp() {
//    s.r=0;
//  }
//  boolean addP=false;
//  int addAm=0;
//  int addC=0;
//  int t=0;

//  boolean addPH=false;
//  int addCH=0;
//  int addAmH=0;
//  int cpu=0;


//  void gui() {

//    if (navigateMouse) { //mouse navigtion
//      fill(200,100);
//      rect(300, height-20, width-600, 8);
//      fill(200,255);
//      //rect(mouseX,height-27,4,20);
//      ellipse(mouseX-7, height-15, 15, 15);
//    }

//    if (addP) {

//      int adC=0;
//      if (addC>18)adC = 0-(18-addC);
//      if (addAm>0)fill(0, 200, 10);
//      else fill(200, 0, 0);
//      rect(110, 60-(adC*4), 70, 36);
//      fill(255);
//      textAlign(CENTER, TOP);
//      textSize(28);
//      if (addAm>0)text("+"+addAm, 145, 66-(adC*4));
//      else text(addAm, 145, 66-(adC*4));
//      addC++;
//      if (addC > 25) {
//        addP=false;
//        addC=0;
//      }
//    }

//    if (addPH && !lose) {
//      int adCH=0;
//      if (addCH>18)adCH = 0-(18-addCH);
//      if (addAmH>0)fill(0, 200, 10);
//      else fill(200, 0, 0);
//      rect(width-110, 60-(adCH*4), 70, 36);
//      fill(255);
//      textAlign(CENTER, TOP);
//      textSize(28);
//      if (addAmH>0)text("+"+addAmH, width-75, 66-(adCH*4));
//      else text(addAmH, width-75, 66-(adCH*4));
//      addCH++;
//      if (addCH > 25) {
//        addPH=false;
//        addCH=0;
//      }
//    }



//    if (speedMode) {
//      textSize(28);
//      textAlign(CENTER, CENTER);
//      fill(250, 80, 0);
//      rect( (width/2) - 100, 10, 200, 45);
//      fill(255);
//      text("TURBO", width/2, 33);
//    }

//    textSize(20);
//    textAlign(LEFT, TOP);

//    fill(panelColor);
//    rect(15, 10, 520, 40);


//    rect(width+10, 10, -300, 40);


//    fill(150, 150, 170, 100);
//    if (c.coords(mouseX, mouseY, 25, 15, 75, 30)) {
//      fill(150, 150, 150, 200);
//    }
//    rect(25, 15, 75, 30);

//    fill(255); 
//    textAlign(LEFT, TOP);
//    if (playMode==1) text("    pause        points:"+points+"                             skill:"+displayLevel, 20, 20);
//    else text("    pause        points:"+points+"                             level:"+displayLevel, 20, 20);//sp2   points:"+points+" level:"+displayLevel


//    fill(255);
//    textAlign(RIGHT, TOP);
//    int sec = (int)( (time*1.5) /60);
//    int min = (sec/60);
//    sec-=min*60;
//    String playTime = (min>9?min:"0"+min)+":"+(sec>9?sec:"0"+sec);

//    text("time: "+playTime+"            health: "+health, width-40, 20);
//    textAlign(LEFT, TOP);

//    textSize(15);
//    fill(255);

//    if (playMode==1) {
//      if (points2 >= highScore)text("HIGHSCORE", 225, 20);
//      if (level>=gainedLevel)text("HIGHSCORE", 443, 20);
//    } else {
//      if (points2 >= highScore)text("HIGHSCORE", 225, 20);
//      if (level >= highLevel)text("HIGHSCORE", 443, 20);
//    }


//    fill(40, 50);
//    fill(panelColor);
//    textSize(20);
//    rect(10, height-50, 200, 40);
//    fill(255, 200);
//    text(navigateMouse ? "navigation: MOUSE" : "navigation: KEYBOARD", 20, height-40);


//    textAlign(LEFT, TOP);

//    if (!st && !pause) {
//      navigateMouse=false;
//      fill(panelColor);
//      rect(width/2-600, height/2-50, 1200, 100);
//      fill(255);
//      textSize(50);
//      textAlign(CENTER, CENTER);
//      text("PRESS ANY KEY OR CLICK ANYWHERE TO START", width/2, height/2);
//      textAlign(LEFT, TOP);
//      s.x=(int)rws/2;
//    }
//    if (lose) {
//      t++;
//      if (t>26) {
//        float sf = -0.25+1;

//        if (playMode==1) {
//          if (points2>=highScore)fill(255, 125, 13,240);
//          else if (level>=gainedLevel)fill(255, 125, 13,240);
//          else fill(150, 0, 0, 240);
//        } else {
//          if (points2>=highScore)fill(255, 125, 13);
//          else fill(150, 0, 0, 240);
//        }

//        rect(width/2-300, height/2-112, 600, 224);
//        fill(255);
//        textSize(50);
//        textAlign(CENTER, CENTER);

//        if (playMode==1) {
//          if (points2>=highScore)text("YOU BEAT THE HIGHSCORE!", width/2, height/2-64);
//          else if (level>=gainedLevel)text("LEVEL UP!", width/2, height/2-64);
//          else text("YOU LOST!", width/2, height/2-64);
//        } else { 
//          if (points2>=highScore)text("YOU BEAT THE HIGHSCORE!", width/2, height/2-64);
//          else text("YOU LOST!", width/2, height/2-64);
//        }

//        textSize(25);
//        if (playMode==1) text("points: "+points+"    gained level: "+((float)round(gainedLevel*10)/10)+"\nskill level: "+((float)(round(skillLevel*10) )/10)+"    time: "+playTime, width/2, height/2-0);
//        else text("points: "+points+"    level: "+displayLevel+"\nskill level: "+((float)(round(skillLevel*10) )/10)+"    time: "+playTime, width/2, height/2-0);


//        fill(255, 255, 255, 80);
//        if (c.coords(mouseX, mouseY, width/2-85, height/2+45, 90, 47)) {
//          fill(255, 255, 255, 100);
//        }
//        rect(width/2-85, height/2+45, 90, 47);

//        fill(255, 255, 255, 80);

//        if (c.coords(mouseX, mouseY, width/2+15, height/2+45, 75, 47)) {
//          fill(255, 255, 255, 100);
//        }
//        rect(width/2+15, height/2+45, 75, 47);
//        fill(255);
//        textSize(25);
//        //mainTheme.stop();
//        text("RETRY      QUIT", width/2, height/2+67);

//        textAlign(LEFT, TOP);
//      }
//    } else {
//      t=0;
//    }
//    //map(mouseX,width-300,300,0,runningLength-1



//    if (pause) {
//      float sf = -0.28+1;

//      fill(40, 250);
//      rect(width/2-400, height/2-250, 800, 500);
//      fill(255);
//      textSize(50);
//      text("GAME PAUSED", width/2-350, height/2-200);

//      textSize(25);
//      text("points: "+points+"\nlevel: "+(float)round(level*100)/100+"\nhealth: "+health+"\n\nskill level: "+(float)round(skillLevel*100)/100+"\ngained level: "+(float)round(gainedLevel*100)/100, width/2-350, height/2-100);
//      text("high score: "+(float)round(highScore*100)/100+"\nhigh level: "+(float)round(highLevel*100)/100, width/2-50, height/2-100);

//      textAlign(RIGHT, TOP);

//      fill(255, 160);

//      textSize(18);
//      if (c.coords(width/2+250, height/2+140, 130, 35)) {
//        fill(60, 220);
//      } else {
//        fill(60, 100);
//      }
//      rect(width/2+250, height/2+140, 130, 35);
//      fill(240);

//      text((mainTheme.isPlaying()?"dis":"en")+"able audio", width/2+360, height/2+150);

//      fill(255);

//      textAlign(LEFT, TOP);

//      textSize(20);
//      text((points2>=highScore?" HIGHSCORE":" "), width/2-210, height/2-96);
//      text((level>=highLevel?" HIGHSCORE":" "), width/2-210, height/2-66);
//      textSize(25);

//      fill(80);
//      if (c.coords(mouseX, mouseY, width/2-358, height/2+135, 120, 50)) {
//        fill(100);
//      }
//      rect(width/2-358, height/2+135, 120, 50);

//      fill(80);
//      if (c.coords(mouseX, mouseY, width/2-230, height/2+135, 120, 50)) {
//        fill(100);
//      }
//      rect(width/2-230, height/2+135, 120, 50);
//      fill(255);
//      text("CONTINUE         QUIT", width/2-350, height/2+150);
//    }

//    if (htp) {
//      st=false;
//      helpPrompt.draw();
//    }
//    textAlign(LEFT, TOP);


//    textAlign(RIGHT, BOTTOM);
//    textSize(16.5);
//    fill(panelColor);

//    if (debugMode) {
//      rect(200, height-50, width, 40);
//      fill(255); 
//      text(debugText+"        cpu: "+round(frameRate)+" fps ("+(round((float)cpu/10) == 1 ? "#":"  " )+")", width-10, height-20); 
//      cpu++; 
//      if (cpu>10) cpu=0;
//    } else {
//      rect(width-275, height-50, 400, 40);
//      fill(255); 
//      if (playMode==1) text("highscores: pts:"+(int)highScore+"  g-lvl:"+( (float) round(gainedLevel*10)/10), width-15, height-20); 
//      else text("highscores: pts:"+(int)highScore+"  lvl:"+( (float) round(highLevel*10)/10), width-15, height-20);
//    }
//  }
//  boolean pause=false;
//  float dia=0;

//  void mouseUp() {
//    if (htp) {
//      if (c.coords(mouseX, mouseY, width/2-358, height/2+135, 120, 50)) {
//        htp=false; 
//        st=false;
//      }
//      if (c.coords(mouseX, mouseY, width/2-240, height/2+135, 210, 50)) {
//        showHelp=false;
//        htp=false; 
//        st=false;
//        showHelp2=false;
//      }
//    } else {

//      if (st) {
//        //navigateMouse = !navigateMouse;
//        //if (navigateMouse) mx=kx;
//      } else kx=mx;

//      if (pause) {
//        if (c.coords(width/2+250, height/2+140, 130, 35)) {
//          if (mainTheme.isPlaying())mainTheme.stop();
//          else mainTheme.loop(1, 1);
//        }
//        if (c.coords(mouseX, mouseY, width/2-358, height/2+145, 120, 50)) {
//          pause=false; 
//          st=true;
//        }
//        if (c.coords(mouseX, mouseY, width/2-230, height/2+145, 120, 50)) {
//          save=true;
//          saveGame();
//          Mode=0;
//          rt2=10;
//        }
//      } else {
//        st=true;
//      }

//      if (c.coords(mouseX, mouseY, 25, 15, 75, 30)) {
//        st=false;
//        pause=true;
//        println("*****");
//      }

//      if (lose) {
//        if (c.coords(mouseX, mouseY, width/2-85, height/2+45, 90, 47)) {
//          reset=true;
//          saveGame();
//          _setup();
//        }
//        if (c.coords(mouseX, mouseY, width/2+15, height/2+45, 75, 47)) {
//          Mode=0;
//          rt2=0;
//        }
//      }
//    }
//  }


//  // int revTime=1000;
//  void displayArena(String a[], PGraphics g) {
//    for (int i=0; i<a.length; i++) {
//      displayRow(a[i], i, g);
//    }
//  }
//  //boolean moveAwayCrate=false;
//  int health=1;




//  void displayRow(String i, int yp, PGraphics g) {
//    int counter=0;
//    x3d.loc(0, (yp+ra)*200);
//    for (int a=0; a<i.length(); a++) {
//      x3d.loc((a)*200, 0, 0);

//      if (c.coords(0, s.y, -50, (yp+ra)*200 -100, 100, 200)) {
//        dev.pin();
//        counter++;
//        arenaIndex=yp;//yp+ra
//        arenaIndex=((float)arenaIndex/rows.length);

//        if (arenaIndex>.5)bufferingRate-=5;
//        if (arenaIndex<.5)bufferingRate+=5;

//        if (bufferingRate<5)bufferingRate=5;
//        if (bufferingRate>50)bufferingRate=50;
//      }

//      /*0 = empty
//       1 = crate
//       2 = jump hole
//       3 = turbo*/

//      if (i.substring(a, a+1).equals("0")) {
//        if (c.coords(s.x, s.y, (a)*200 -100, (yp+ra)*200 -50, 200, 150 )) {
//          MP.render(true);
//        } else MP.render(false);
//      }

//      if (i.substring(a, a+1).equals("3")) {
//        MP.turbo=true;
//        MP.render(false);
//        MP.turbo=false;
//        if (c.coords(s.x, s.y, (a)*200 -100, (yp+ra)*200 -50, 200, 90 )&&!jump) { 
//          speedMode=true; 
//          points+=25;  
//          addP=true;
//          addAm=25;
//        }
//      }

//      if (i.substring(a, a+1).equals("6")) {

//        //if (revTime<400) {
//        //  rows[yp] = rows[yp].substring(0, a)+"0"+rows[yp].substring(a+1, rows[yp].length());
//        //}

//        //if (revTime>400)MP.rev=true;
//        //MP.render(false);
//        //if (revTime>400)MP.rev=false; 

//        //if (c.coords(s.x, s.y, (dia)*200 -100, (yp+ra)*200 -50, 200, 90 )&&!jump && revTime> 500 ) {
//        //  revTime=0; 
//        //  reverse=true; 
//        //  points+=20;  
//        //  addP=true;
//        //  addAm=20;  
//        //  rows[yp] = rows[yp].substring(0, a)+"3"+rows[yp].substring(a+1, rows[yp].length());
//        //}
//      }

//      //revTime++;

//      if (i.substring(a, a+1).equals("2")) {
//        MH.render(); 

//        if (c.coords(s.x, s.y, (a)*200 -100, (yp+ra)*200 -50, 200, 90 )&&jump) {

//          //points2*=1.0005; 


//          addP=true;
//          addAm = round(((points2*1.0005) - points2)*5);
//          if (addAm<=0)addAm=1;
//        }


//        if (c.coords(s.x, s.y, (a)*200 -100, (yp+ra)*200 -50, 200, 90 )&&jump==false) {
//          health--;

//          addPH=true;
//          addAmH=-1;

//          if (health<=0) {
//            lose=true;
//            fall=true;
//            save=true;
//            //collision.play(1,1);
//          } else {
//            rows[yp] = rows[yp].substring(0, a)+"0"+rows[yp].substring(a+1, rows[yp].length());
//          }
//        }
//      } 
//      if (i.substring(a, a+1).equals("1")) {
//        MC.render();   
//        if (c.coords(s.x, s.y, (a)*200 -100, (yp+ra)*200 -100, 200, 200 )) {
//          health--;

//          addPH=true;
//          addAmH=-1;

//          if (health<=0) {
//            jump=true;
//            lose=true;
//            //collision.play(1,1);
//            save=true;
//          } else {
//            rows[yp] = rows[yp].substring(0, a)+"0"+rows[yp].substring(a+1, rows[yp].length());
//          }
//        }
//      }
//      if (i.substring(a, a+1).equals("5")) {
//        MSH.render();   
//        if (c.coords(s.x, s.y, (a)*200 -100, (yp+ra)*200 -50, 200, 90 )) {
//          health--;

//          addPH=true;
//          addAmH=-1;

//          if (health<=0) {
//            fall=true;
//            lose=true;
//            //collision.play(1,1);
//            save=true;
//          } else {
//            rows[yp] = rows[yp].substring(0, a)+"0"+rows[yp].substring(a+1, rows[yp].length());
//          }
//        }
//      }


//      if (i.substring(a, a+1).equals("4")) {

//        MC.h=true;
//        MC.render();    
//        MC.h=false;
//        if (c.coords(s.x, s.y, (a)*200 -100, (yp+ra)*200 -100, 200, 200 )) {
//          health++;

//          addPH=true;
//          addAmH=1;

//          rows[yp] = rows[yp].substring(0, a)+"0"+rows[yp].substring(a+1, rows[yp].length());
//        }
//      }

//      x3d.xloc((a)*200, 0, 0);
//    }
//    if (counter>0)runningLength = counter;
//    x3d.xloc(0, (yp+ra)*200);

//    if (lose)navigateMouse = false;
//    if (health<0)health=0;
//  }

//  void newRow(int outs, boolean holes, int hOdds, boolean turbo, int tOdds, boolean health, int hlOdds, boolean sHoles, int shp, int items) {
//    String it ="";//row

//    int ol[]={};//out locations
//    if (outs>=items) {
//      for (int i=0; i<outs; i++) {
//        ol = append(ol, i );
//      }
//    } else {
//      for (int i=0; i<outs; i++) { //creating out location
//        int rn = (int)random(0, items);  //create random number and check to make sure it does not match other previous locations
//        //if(i>0){
//        for (int a=0; a<i; a++) {
//          while (rn==ol[a]) {
//            rn = (int)random(0, items);
//          }
//        }
//        //}

//        ol = append(ol, rn );
//      }
//    }



//    for (int i=0; i<items; i++) { //create blocks
//      int e=round(random(0, shp));
//      if (e==0)e=5;
//      else e=1;

//      if (sHoles==false || i < 1 || i > (items-2) )e=1;

//      it+=""+e;
//    }

//    for (int i=0; i<items; i++) { //create outs spaces
//      for (int a=0; a<ol.length; a++) {

//        int ev=0;

//        if (holes) {
//          ev = round(random(0, hOdds)); //jump holes
//          if (ev == 0) ev=2;
//          else ev=0;
//        }

//        if (i==0||i==items-1||!holes)ev=0; //keeps holes from popping up on the edges

//        if (ev==0 && turbo) {
//          ev = round(random(0, tOdds*10));//ods of getting a turbo
//          if (ev == 0) ev=3;
//          else ev=0;
//        }

//        if (ev==0 && health) {
//          ev = round(random(0, hlOdds*150));//ods of getting a health   ev = round(random(0,hlOdds*150))
//          if (ev == 2) ev=4;
//          else ev=0;
//        }


//        if (i==ol[a]) {
//          it = it.substring(0, i)+  ""+ev+""   +it.substring(i+1, it.length());
//        }
//      }
//    }


//    rows = append(rows, it);
//  }
//}

//public void displayLights() {
//  x3d.rot(280, 0, 30);
//  x3d.$().lights();
//  x3d.xrot(280, 0, 30);
//}
