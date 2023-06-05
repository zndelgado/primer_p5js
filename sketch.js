function setup() {
    createCanvas(500, 500);
    background(230);
  
    //linea eje central
    strokeWeight(2);
    line(250, 0, 250, 250);
    strokeWeight(5);
    line(250, 190, 250, 250);
  
    //circulo
    strokeWeight(0);
    fill(255, 182, 174);
    ellipse(250, 250, 60, 60);
  
    //linea baja sol
    strokeWeight(2);
    line(250, 267, 250, 310);
  
    //medio circulo sol
    noFill();
    bezier(250, 190, 315, 190, 330, 295, 250, 310);
    bezier(250, 210, 300, 210, 300, 290, 250, 290);
  
    //aros saturno
    bezier(220, 250, 170, 260, 250, 260, 250, 260);
    bezier(220, 245, 80, 260, 250, 270, 250, 267);
  
    // punto referencia al medio circulo
    //strokeWeight(5)
    //point(310, 190)
    //point(310, 370)
  
    //lineas de referencia-
    //strokeWeight(1)
    //line(200, 250, 200, 260) //10
    //line(190, 250, 190, 270) //20
  }
  