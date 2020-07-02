/**********************************************************************
 COPYRIGHT © All rights reserved. Segway City
 This software is liscenced under the GNU General Public license v3.0
**********************************************************************/

public class Prompt {

  String title, body, finePrint, button1, button2;

  public Prompt(String title, String body, String finePrint, String button1) {
    this.title=title; 
    this.body=body; 
    this.finePrint=finePrint; 
    this.button1 = button1; 
    this.button2 = null;
  }
  public Prompt(String title, String body, String finePrint, String button1, String button2) {
    this.title=title; 
    this.body=body; 
    this.finePrint=finePrint; 
    this.button1 = button1; 
    this.button2 = button2;
  }


  public void draw() {
    title = title.toUpperCase();
    textAlign(LEFT, TOP);

    fill(50,250);
    rect(width/2-400, height/2-250, 800, 500);
    fill(255);
    textSize(35);
    text(title, width/2-350, height/2-200);
    textSize(22);
    text(body, width/2-350, height/2-125);
    textSize(15);
    text(finePrint, width/2-350, height/2+100);

    fill(80);
    if (c.coords(mouseX, mouseY, width/2-358, height/2+135, 120, 50)) {
      fill(100);
    }
    rect(width/2-358, height/2+135, 100, 50);

    if (button2!=null) {
      fill(80);
      if (c.coords(mouseX, mouseY, width/2-240, height/2+135, 210, 50)) {
        fill(100);
      }
      rect(width/2-240, height/2+135, 210, 50);
    }

    textSize(25);
    fill(255);
    text(button1, width/2-340, height/2+150);

    if (button2!=null) {
      text(button2, width/2-230, height/2+150);
    }
  }
  
  public boolean overButton1(){
  return c.coords(mouseX, mouseY, width/2-358, height/2+135, 120, 50);
  }
  
}
