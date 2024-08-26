function EncriptarTexto()
{
        //Replace: metodo para remplazar textos en una cadena.
        //Const: se indica que se modificara varias veces
        //Fuente de busqueda: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace

   var miTexto = RecuperarTexto();
   
   const myNewText = miTexto
   .replace(/i/g, "ivc")
   .replace(/a/g, "ai")
   .replace(/e/g, "ehg")
   .replace(/o/g, "ober")
   .replace(/u/g, "umry");
   NuevoTexto(myNewText);

}
function DesencriptarTexto()
{
    var miTexto2 = RecuperarTexto();
        //Replace: metodo para remplazar textos en una cadena.
        //Const: se indica que se modificara varias veces
        //Fuente de busqueda: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace

     const myNewText2 = miTexto2
    .replace(/ivc/g, "i")
    .replace(/ai/g, "a")
    .replace(/ehg/g, "e")
    .replace(/ober/g, "o")
    .replace(/umry/g, "u");
    NuevoTexto(myNewText2);
    
 
}
function RecuperarTexto()
{
    var elTexto = document.getElementById("Valor").value;
    
    return elTexto
}
function NuevoTexto(elNuevoTexto)
{
    document.getElementById("Resultado").value = "";
    document.getElementById("Valor").value = "";
    document.getElementById("Resultado").value = elNuevoTexto;
}
function Copiar()
{
    var MiValor = document.getElementById('Resultado');
    navigator.clipboard.writeText(MiValor.value);
}