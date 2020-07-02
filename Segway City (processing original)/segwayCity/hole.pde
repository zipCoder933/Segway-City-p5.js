/**********************************************************************
 COPYRIGHT © All rights reserved. Segway City
 This software is liscenced under the GNU General Public license v3.0
**********************************************************************/

class Hole {
  boolean black = false;
  Material texture;
  Model hole;

  public Hole(PApplet p) {
    texture = new Material(p, loadImage("data/main_theme/textures/holeUV.jpg"));
    hole = new Model(p, x3d, files.getLocalDir()+"/data/models/hole.obj");
    hole.setMaterial(texture);
  }
  void render() {
    noLights();
    x3d.scale(0.49);  
    x3d.rot(0);
    x3d.model(hole);
    x3d.xrot(0);
    x3d.xscale(0.49); 
    displayLights();
  }
};


class StripedHole {
  boolean black = false;
  Material texture;
  Model hole1;

  public StripedHole(PApplet p) {
    texture = new Material(p, loadImage("data/main_theme/textures/holeUV.jpg"));
    hole1 = new Model(p, x3d, files.getLocalDir()+"/data/models/striped hole.obj");
    hole1.setMaterial(texture);
  }
  void render() {
    noLights();
    x3d.scale(0.49);  
    x3d.rot(0);
    x3d.model(hole1);
    x3d.xrot(0);
    x3d.xscale(0.49); 
    displayLights();
  }
};
