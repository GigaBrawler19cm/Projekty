function ile()
{
    var powierzchnia= parseInt(document.getElementById("farba").value)
    var potrzebna_farba = Math.ceil(powierzchnia/4)
    document.getElementById("wynik").innerHTML="Liczba potrzebnych puszek: " +potrzebna_farba
}