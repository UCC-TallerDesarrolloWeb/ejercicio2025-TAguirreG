/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function convertirUnidades(unidad, valor) {
    let metro, pie, pulgada, yarda;
    console.log(valor);
    console.log(isNaN(valor));
if(isNaN(valor)) {
    alert("El valor ingreado no es correcto");
    metro ="";
    pulgada="";
    yarda="";
    pie="";
}else {

    if (unidad == "unid_metro") {
        metro = valor;
        pie = 3.28 * metro;
        pulgada = 39.37 * metro;
        yarda = 1.0936 * metro;
    } else if (unidad == "unid_pie") {
        pie = valor;
        metro = 0.3848 * pie;
        pulgada = 12 * pie;
        yarda = 0.333 * pie;
    } else if (unidad == "unid_pulgada") {
        pulgada = valor;
        metro = pulgada/39.37;
        pie =pulgada/12;
        yarda =pulgada/0.333;
    } else if (unidad == "unid_yarda") {
        yarda = valor;
        metro = yarda/1.0936;
        pie =yarda/0.333;
        pulgada =yarda/12;
    }
}
    document.getElementById("metro").value = metro;
    document.getElementById("pie").value = pie;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("yarda").value = yarda;
}