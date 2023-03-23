//VARIÁVEIS DA BOLINHA///////////////////

  let xBolinha = 300;
  let yBolinha= 200;
  let dBolinha = 20;

//VARIÁVEIS DA RAQUETE

  let xRaquete = 5;
  let yRaquete = 165;
  let comprimentoRaquete = 10;
  let alturaRaquete = 80;


//colisão
  let colidiu = false;

//VARIÁVEIS DA RAQUETE OPONENTE

  let xRaqueteOponente = 585;
  let yRaqueteOponente = 165;
  let comprimentoRaqueteOponente = 10;
  let alturaRaqueteOponente = 80;
  let chanceDeErrar = 0;



//VARIÁVEIS DE VELOCIDADE DA BOLINHA
    let Velocidadexbolinha = 6;
    let Velocidadeybolinha = 6; 

//VARIÁVEIS DE VELOCIDADE DA RAQUETE OPONENTE
    let velocidadeyoponente;

//VARIÁVEIS DE RAIO
      let raioBolinha = dBolinha / 2               //raio da bolinha
      let raioxRaquete = comprimentoRaquete / 2   //raio do x da raquete
      let raioyRaquete = alturaRaquete / 2        // raio do y da raquete
      
//VARIÁVEIS DE PLACAR
      
      let meusPontos = 0;
      let pontosOponente = 0;

//SONS DO JOGO, FUNDO E SUAS VARIÁVEIS

      let raquetada;
      let ponto;
      let trilha;
let fundo;

        function preload(){
          trilha = loadSound("fundo instertelar 8bit.mp3");
          ponto = loadSound("ponto.mp3");
          raquetada = loadSound("raquetada.mp3");
          fundo = loadImage("imagemfundo.jpg");
          blackHole = loadImage("Bn.webp");
      }
      
////////////////////////////////////////
//PRINCIPAL////////////////////////////

      function setup() {
        createCanvas(600, 400);
        trilha.loop();
      }

        function draw() {
          background(fundo);
          image(blackHole,165, 80,250, 250);
          mostrarBolinha();
          mostrarRaquete(xRaquete, yRaquete);
          mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
          movimentaBolinha();
          movimentaRaquete();
          movimentaRaqueteOponente();
          verificarColisaoBolinha();
          verificarColisaoRaqueteBiblioteca(xRaquete, yRaquete);
          verificarColisaoRaqueteoOponenteBiblioteca(xRaqueteOponente, yRaqueteOponente);
          incluiPlacar();
          marcarPonto(); 
}

////////////////////////////////////////
//MOSTRAR A BOLINHA////////////////////

      function mostrarBolinha(){
            
        circle(xBolinha, yBolinha, dBolinha);
}
//MOSTRAR A RAQUETE

        function mostrarRaquete(x, y){
          
        rect(x, y, comprimentoRaquete, alturaRaquete);         
}

////////////////////////////////////////
//MOVIMENTA A BOLINHA//////////////////

        function movimentaBolinha(){

        xBolinha += Velocidadexbolinha;
        yBolinha += Velocidadeybolinha;
        bolinhaNaoFicaPresa();
}

        function bolinhaNaoFicaPresa(){
        if (xBolinha - raioBolinha < 0){
        XBolinha = 23;
          }
      }

//MOVIMENTA A RAQUETE

      function movimentaRaquete(){
        if(keyIsDown(UP_ARROW)){
            yRaquete -= 10
        }else if(keyIsDown(DOWN_ARROW)){
            yRaquete += 10}
         if (yRaquete + alturaRaquete < 85)
    yRaquete = 0 ;
        if (yRaquete + alturaRaquete > 400)
        yRaquete = 320
            }


//MOVIMENTA RAQUETE OPONENTE

      function movimentaRaqueteOponente(){
        
        velocidadeyoponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
        yRaqueteOponente += velocidadeyoponente + chanceDeErrar
        calculaChanceDeErrar()
        if (yRaqueteOponente + alturaRaqueteOponente < 85)
    yRaqueteOponente = 0
        if (yRaqueteOponente + alturaRaqueteOponente > 400)
        yRaqueteOponente = 320
            
      }
////////////////////////////////////////
//VERIFICAR A COLISÃO//////

//BOLINHA
          function verificarColisaoBolinha(){
             if(xBolinha + raioBolinha > width){
                Velocidadexbolinha = -6;

                  }else if(xBolinha - raioBolinha < 0){
                    Velocidadexbolinha = 6;

                   }else if(yBolinha + raioBolinha > height){
                      Velocidadeybolinha = -6
                      }else if(yBolinha - raioBolinha < 0){
                        Velocidadeybolinha = 6;}
}         
 

//RAQUETE DO JOGADOR
         
            
            function verificarColisaoRaqueteBiblioteca(x, y){
        colidiu =
        collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha,raioBolinha);
              
        if(colidiu){
                
        Velocidadexbolinha *= -1;     
        raquetada.play();
}
}

//RAQUETE OPONENTE

  function verificarColisaoRaqueteoOponenteBiblioteca(x, y){
        colidiu =
        collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
        if(colidiu){              
        Velocidadexbolinha *= -1;
        raquetada.play();
}
}

//VERIFICAR A CHANCE DE ERRAR
    function calculaChanceDeErrar(){
      if(pontosOponente >= meusPontos){
        chanceDeErrar += 1
      if(chanceDeErrar >= 39){
        chanceDeErrar = 48}
      }else{
      chanceDeErrar -= 1
      if(chanceDeErrar <= 35){
      chanceDeErrar = 35
}}
}
////////////////////////////////////////
//PLACARES/////////////////////////////


//INCLUIR PLACARES
    function incluiPlacar(){
      stroke(255);
      textAlign(CENTER);
      textSize(20);
      fill(color(70,130,180));
      rect(130, 6, 40, 25, 6);
      fill(255);
      text(meusPontos, 150, 26);
      fill(color(70,130,180));
      rect(430, 6,40, 25, 6);
      fill(255);
      text(pontosOponente, 450, 26);
      }      
  
//ADICIONAR PONTOS
    function marcarPonto(){
      
      if(xBolinha > 590){
        meusPontos += 1;
        ponto.play();
}
      if(xBolinha < 10){
        pontosOponente += 1;
        ponto.play();
}
        
}
        
