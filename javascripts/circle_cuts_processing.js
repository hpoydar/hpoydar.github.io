
int thirds_x = screen_width / 3;
int thirds_y = screen_height / 3;

void setup() {
  size(screen_width, screen_height);
  smooth();
  ellipseMode(RADIUS);
  oc1 = new OuterCircle('FFA500');
  oc2 = new OuterCircle('FFFFFF');
  oc3 = new OuterCircle('FFFFFF');
}

void draw() {
  
  background(255);
  
  oc1.update();
  oc2.update();
  oc3.update();
  
  oc1.display();
  oc2.display();
  oc3.display();
}

class OuterCircle {
  
  int x, y;
  float radius, line_width;
  int move_x = 0;
  int move_y = 0;
  float s = 0.0;
  float a = 0.0;
  String color = '#FFFFFF';
  
  OuterCircle(String c) {
    x = thirds_x * 2 + random(-20,20);
    y = thirds_y * 2  + random(-20,20);
    color = c;
    radius = screen_width / 2 + random(-10,10);
    line_width = random(40) * 0.1;
  }
  
  void update() {
    move_x += random(-1,1);
    move_y += random(-1,1);
    a = a + 0.04;
    s = cos(a)*2;
  }
  
  void display() {
    pushMatrix();
    translate(move_x, move_y);
    scale(s);
    fill(color);
    strokeWeight(line_width); 
    stroke(0);
    ellipse(x, y, radius, radius);
    popMatrix();
  }
  
}