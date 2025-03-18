function calcularMedia(){
    let n1 = parseFloat(document.getElementById("nota-1").value);
    let n2 = parseFloat(document.getElementById("nota-2").value);
    let n3 = parseFloat(document.getElementById("nota-3").value);
    let media = (n1 + n2 + n3) / 3;

    let resultado = media >= 7 ? "aprovado!!! :D" : "reprovado :(";
    document.getElementById("resultado-numero").innerText = `${media.toFixed(2)}`
    document.getElementById("resultado").innerText = `${resultado}`
}