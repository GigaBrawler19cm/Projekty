//menu
function kalkulator()
{
  window.location.href= "kalkulator.html";
}
function gstrona()
{
  window.location.href="index.html"
}
function krkszk()
{
  window.location.href="koniecroku.html"
}
function wychowawca()
{
  window.location.href="wychowawca.html"
}
//kalkulator
function kalk()
{
  var wybr = document.getElementById("znak").value;
  var l1 = document.getElementById("liczba1").value;
  var l2 = document.getElementById("liczba2").value;
  var liczba1 = parseFloat(l1);
  var liczba2 = parseFloat(l2);
  if (wybr == "+")
  {
    var wynik = liczba1+liczba2;
    document.getElementById("wynik").innerHTML="Wynik to " +wynik;
  }
  if (wybr == "-")
  {
    var wynik = liczba1-liczba2;
    document.getElementById("wynik").innerHTML="Wynik to " +wynik;
  }
  if (wybr == "*")
  {
    var wynik = liczba1*liczba2;
    document.getElementById("wynik").innerHTML="Wynik to " +wynik;
  }
  if (wybr == "/")
  {
    var wynik = liczba1/liczba2;
    document.getElementById("wynik").innerHTML="Wynik to " +wynik;
  }
}
//rok szkolny
function odliczanie()
{
var dni = document.getElementById("Dni");
var godz = document.getElementById("Godz");
var min = document.getElementById("Min");
var sek = document.getElementById("Sek");
var koniec = new Date("2023-06-23");
var ile = koniec.getTime();
var dzisiaj = new Date;
var dzisiajile = dzisiaj.getTime();
var ilezostl = koniec - dzisiajile;
var min1 = 60 * 1000;
var godz1 = 60 * min1;
var dni1 = 24 * godz1;
if (ile < dzisiajile)
{
  document.getElementById("konodl").innerHTML="Odliczanie zakończone!";
}
else
{
  var zdni = Math.floor(ilezostl / dni1);
  var zgodz = Math.floor((ilezostl % dni1) / godz1)
  var zmin = Math.floor((ilezostl % godz1) / min1)
  var zsek = Math.floor((ilezostl % min1) / 1000)
  document.getElementById("Dni").innerHTML= +zdni;
  document.getElementById("Godz").innerHTML= +zgodz;
  document.getElementById("Min").innerHTML= +zmin;
  document.getElementById("Sek").innerHTML= +zsek;
}
}
let i = setInterval(odliczanie,1000);
//Ja tego nie robiłem a jak ktoś znajdzie dowody że to robiłem to żart
function zlo()
{
  document.getElementById("prank").innerHTML="<img src='zlo.jpg'>";
  document.getElementById("prank2").innerHTML="Jest to tyran, który zmusza uczniów do uczestniczenia w takich wydarzeniach jak to (pomocy)"
  var prankolor = document.getElementById("prank2");
  prankolor.style.color= "red";
}