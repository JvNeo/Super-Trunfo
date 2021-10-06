var carta1 = {
  nome: "Chaos",
  imagem:
    "https://cdn.discordapp.com/attachments/693940051410813072/883091212003848262/unknown.png",
  atributos: {
    for: 16,
    dez: 13,
    con: 23,
    int: 20,
    sab: 12,
    car: 11
  }
};
var carta2 = {
  nome: "Kalvyn",
  imagem:
    "https://cdn.discordapp.com/attachments/876196239228678174/892079352106340352/unknown.png",
  atributos: {
    for: 14,
    dez: 21,
    con: 20,
    int: 10,
    sab: 18,
    car: 11
  }
};
var carta3 = {
  nome: "Merlin",
  imagem:
    "https://cdn.discordapp.com/attachments/876196239228678174/892079725550403594/unknown.png",
  atributos: {
    for: 11,
    dez: 14,
    con: 14,
    int: 22,
    sab: 15,
    car: 11
  }
};
var carta4 = {
  nome: "Artorias",
  imagem:
    "https://cdn.discordapp.com/attachments/876196239228678174/892079025378455552/Screenshot_5.png",
  atributos: {
    for: 15,
    dez: 24,
    con: 21,
    int: 12,
    sab: 21,
    car: 24
  }
};
var carta5 = {
  nome: "Yuki",
  imagem:
    "https://cdn.discordapp.com/attachments/876196239228678174/892075401776599080/Screenshot_1.png",
  atributos: {
    for: 14,
    dez: 16,
    con: 15,
    int: 10,
    sab: 15,
    car: 22
  }
};
var carta6 = {
  nome: "Draven",
  imagem:
    "https://cdn.discordapp.com/attachments/693940051410813072/718919247404990534/fabbbyyy.png",
  atributos: {
    for: 18,
    dez: 22,
    con: 12,
    int: 9,
    sab: 11,
    car: 14
  }
};
var carta7 = {
  nome: "Angelia",
  imagem:
    "https://cdn.discordapp.com/attachments/876196239228678174/892076657521856582/Screenshot_4.png",
  atributos: {
    for: 14,
    dez: 20,
    con: 13,
    int: 10,
    sab: 18,
    car: 10
  }
};
// var carta8 = {
//   nome: "??i????",
//   atributos: {
//     vida: ?,
//     for: ?,
//     dez: ?,
//     con: ?,
//     int: ?,
//     sab: ?,
//     Car: ?,
//   }
// };

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 7);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 7);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 7);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  // exibirOpcoes();
  exibirCartaJogador();
}

// function exibirOpcoes() {
//   var opcoes = document.getElementById("opcoes");
//   var opcoesTexto = "";

//   for (var atributo in cartaJogador.atributos) {
//     opcoesTexto +=
//       "<input type='radio' name='atributo' value='" +
//       atributo +
//       "'>" +
//       atributo;
//   }
//   opcoes.innerHTML = opcoesTexto;
// }

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-statusm'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}