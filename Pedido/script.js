function comecar() {
  var nome = document.getElementById("exampleFormControlInput1").value;
  show(nome);
}
  
function show(nome) {
  document.getElementById("nomePrint").textContent = nome;
  var div = document.getElementById("selects-div");
  if (nome && nome.trim() !== "") {
    div.style.display = "block";
    document.getElementById("exampleFormControlInput1").style.background = "none";
  } else {
    document.getElementById("error").style.display = "flex";
  }
}

function fechar() {
  document.getElementById("error").style.display = "none";
  document.getElementById("exampleFormControlInput1").style.background =
    "lightpink";
}

function calcularTotal() {
  var selectPratos = document.getElementById("selectPrato");
  var selectBebidas = document.getElementById("selectBebida");
  var selectSobremesas = document.getElementById("selectSobremesa");
  var resultadoSpan = document.getElementById("resultado");

  var total = 0;
  var prato = 0;
  var bebida = 0;
  var sobremesa = 0;

  switch (selectPratos.value) {
    case "Prato feito":
      total += 12.90;
      prato = 12.90;
      break;
    case "Strogonof":
      total += 15.90;
      prato = 15.90;
      break;
    case "Prato Vegano":
      total += 17.90;
      prato = 17.90;
      break;
  }

  switch (selectBebidas.value) {
    case "Suco de Laranja":
      total += 6.00;
      bebida = 6.00;
      break;
    case "Guaraná 350ml":
    case "Coca-Cola 350ml":
      total += 7.50;
      bebida = 7.50;
      break;
  }

  switch (selectSobremesas.value) {
    case "Sobremesa de Morango":
      total += 3.60;
      sobremesa = 3.60;
      break;
    case "Pudim":
      total += 4.50;
      sobremesa = 4.50;
      break;
    case "Torta de Limão":
      total += 3.90;
      sobremesa = 3.90;
      break;
  }

  document.getElementById("prato-pronto").innerHTML = prato.toFixed(2);
  document.getElementById("bebida-pronto").innerHTML = bebida.toFixed(2);
  document.getElementById("sobremesa-pronto").innerHTML = sobremesa.toFixed(2);
  document.getElementById("total").style.display = "flex";

  resultadoSpan.textContent = "R$ " + total.toFixed(2);
}

function solicitarNumero() {
  document.getElementById("numeroTelefoneInput").style.display = "block";
  document.getElementById("numeroTelefoneInput").focus();
}

function enviarMensagemSim() {
  var numeroTelefoneInput = document.getElementById("numeroTelefoneInput");
  var enviarBotao = document.getElementById("enviarBotao");
  numeroTelefoneInput.style.display = "block";
  enviarBotao.style.display = "block";
}

function enviarMensagemWhatsApp(numeroTelefone) {
  if (numeroTelefone.trim() === "") {
      alert("Por favor, insira seu número de telefone.");
      return;
  }

  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  var linkWhatsapp = "https://wa.me/" + numeroTelefone + "?text=" + nome + " - " + mensagem;
  window.open(linkWhatsapp, "_blank");
}
  
function limpar() {
  document.getElementById("total").style.display = "none";
  document.getElementById("selects-div").style.display = "none";
  document.getElementById("exampleFormControlInput1").value = "";
  document.getElementById("resultado").value = "";
  document.getElementById("selectPrato").value = "Selecione um prato";
  document.getElementById("selectBebida").value = "Selecione uma bebida";
  document.getElementById("selectSobremesa").value = "Selecione uma sobremesa";
  document.getElementById("numeroTelefoneInput").value = "Insira seu WhatsApp";
}