/**********************************************************************
 COPYRIGHT © All rights reserved. Segway City
 This software is liscenced under the GNU General Public license v3.0
**********************************************************************/

class Segway {
  float x = 0; 
  float y = 400;
  float x2;
  float jf = 0;
  boolean of=false;
  float jj=12;
  float oy=0;
  float z2 = 2.5;
  float zjj=1;
  float y2=0;
  float yd;
  float r=0;
  float r2=0;
  int jj2=0;
  float z=0;

  Material texture;
  Model segway;
  Arena a;

  public Segway(PApplet p, Arena a) {
    this.a=a;
    texture = new Material(p, loadImage("data/main_theme/textures/segwayUV.jpg"));
    segway = new Model(p, x3d, files.getLocalDir()+"/data/models/segway.obj");
    segway.setMaterial(texture);
  }
  void render() {
    if (a.jump) {
      r=0;
      y2=-0.02;
      jf+=jj;
      jj-=1.8;//jump rate

      if (jf<0.1)a.jump=false;
    } else {
      jj2=0;
      jf=0;
      jj=12;
    }
    if (a.fall) {
      r=0;
      z2+=zjj;
      zjj-=1.35;

      if (z2<-100000)a.fall=false;
      of=true;
    } else {
      if (a.lose && of==true)z2=-100000;
      else z2=0;
      zjj=2.5;
    }

    noStroke();
    float d= dist(x, 0, x2, 0);
    float rd = dist(r, 0, r2, 0); 

    yd= 0- dist(oy, 0, y, 0)/400;
    if (yd>-0.041)yd=0;
    float yd2 = dist(yd, 0, y2, 0);

    if (a.rws<6) {
      if (x2>x)x2-=d/8;
      else if (x2<x)x2+=d/8;
    } else if (a.rws<8) {
      if (x2>x)x2-=d/4;
      else if (x2<x)x2+=d/4;
    } else {
      if (x2>x)x2-=d/3.5;
      else if (x2<x)x2+=d/3.5;
    }

    r2 = c.biezer(r2,r,5);

    if (y2>yd)y2-=yd2/10;
    else if (y2<yd)y2+=yd2/10;


    if (jf<0)jf=0;
    z=jf+z2;
    
    
    x3d.loc(x2, y, z);
    x3d.rot( y2*180, 0, r2*180);//--------------------------
    x3d.scale(0.25);
    x3d.model(segway);
    x3d.xscale(0.25);
    x3d.xrot( y2*180, 0, r2*180);//------------------------------
    x3d.xloc(x2, y, z);

    oy=y;
  }
};
