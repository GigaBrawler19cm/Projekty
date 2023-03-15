function szyfr()
{
    var pass = document.getElementById("haslo").value;
    var t=[];
    var szyf="";
    for (var i=0; i<pass.length; i++)
    {
        t[i]=String.fromCharCode((pass.charCodeAt(i))+3)
        szyf+= t[i];
    }
    document.getElementById("Wynik").innerHTML="Zaszyfrowane hasło: " +szyf;
}
function deszyfr()
{
    var pass = document.getElementById("dehaslo").value;
    var t=[];
    var szyf="";
    for (var i=0; i<pass.length; i++)
    {
        t[i]=String.fromCharCode((pass.charCodeAt(i))-3)
        szyf+= t[i];
    }
    document.getElementById("Dewynik").innerHTML="Zaszyfrowane hasło: " +szyf;
}
