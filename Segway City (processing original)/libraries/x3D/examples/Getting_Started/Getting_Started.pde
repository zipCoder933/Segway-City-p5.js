import com.trindle.x3d.*;
import com.trindle.x3d.developer.*;
import com.trindle.x3d.skyboxGraphics.*;

GraphicsRenderer GUI;

SkyBox sky1;
x3D x3d;
Developer dev;
void setup() {
  size(1200, 650, P3D);
  x3d = new x3D(this, true);
  dev = new Developer(x3d);

  SkyBox sky1 = new SkyBox(this, color(91, 220, 255), 

    new CubeMap(loadImage("skybox/top.jpg"), 
    loadImage("skybox/side1.jpg"), 
    loadImage("skybox/side2.jpg"), 
    loadImage("skybox/side3.jpg"), 
    loadImage("skybox/side4.jpg"), 
    loadImage("skybox/bottom.jpg"))
    );

  sky1.horizonColor = color(0, 1);

  GUI = new GraphicsRenderer(this, P2D);

  x3d.setSkybox(sky1);
}

void draw() {

drawGUI();


  x3d.Camera(0, 0, -250, 0, 0, 0, map(mouseY, 0, height, 0, 360), 0, map(mouseX, 0, width, 0, 360));
  x3d.$().lights();
  x3d.loc(dev.get(1));
  x3d.rot(dev.getX(0), dev.getY(0), dev.getZ(0));

  //x3d.applyMaterial(new Material(this, color(255, 0, 0, 100)));
  x3d.$().box(200, 200, 200);

  x3d.xrot(dev.getX(0), dev.getY(0), dev.getZ(0));
  x3d.loc(dev.get(1));
  x3d.endWorldGraphics();

  x3d.renderWorld();
  GUI.render();
}


void drawGUI() {
  GUI.$.beginDraw();
  GUI.$.clear();
  GUI.$.fill(255);
  GUI.$.textAlign(LEFT, TOP);
  GUI.$.textSize(20);
  GUI.$.text("This is the\n "+round(frameRate)+" fps", 40, 30);
  GUI.$.rect(245, 29, 100, 40, 10);
  GUI.$.fill(50);
  GUI.$.text("GUI", 265, 31);
  GUI.$.fill(255);
  GUI.$.rect(mouseX, mouseY, 10, 10);
  GUI.$.endDraw();
}

public void mouseClicked(){
dev.log("Hello there",msgType.none);
}
