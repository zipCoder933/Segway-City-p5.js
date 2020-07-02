/**********************************************************************
 COPYRIGHT © All rights reserved. Segway City
 This software is liscenced under the GNU General Public license v3.0
**********************************************************************/

//class Plane {
//  //Your model contains 5 faces, and 20 verts (roughly 600 bytes)
//  Material texture;
//  Material texture2;
//  Material textureShadow;
//  Model plane;

//  boolean turbo = false;
//  boolean rev=false;

//  public Plane(PApplet p) {
//    texture = new Material(p, loadImage("data/main_theme/textures/plane.jpg"));
//    textureShadow = new Material(p, loadImage("data/main_theme/textures/plane.jpg"),color(200));
//    texture2 = new Material(p, loadImage("data/main_theme/textures/turbo.jpg"));
//    plane = new Model(p, x3d, files.getLocalDir()+"/data/models/plane.obj");
//  }
//  public void render(boolean shadow) {
//    if (turbo)plane.setMaterial(texture2);
//    else if(shadow) plane.setMaterial(textureShadow);
//    else plane.setMaterial(texture);
    
//    x3d.scale(0.5);
//    x3d.model(plane);
//    x3d.xscale(0.5);
//  }
//};
