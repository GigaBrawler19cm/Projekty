function pozycjax(element)
{
    var pozycja = document.getElementById(element).getBoundingClientRect()
    return pozycja.x
}
function pozycjay(element)
{
    var pozycja = document.getElementById(element).getBoundingClientRect()
    return pozycja.y
}
function kolizjay(element)
{
    if (pozycjay("gracz")==(pozycjay(element)-64))
    {
        return 1
    }
    else
    {
        return 0
    }
}
function kolizjax(element)
{
    if (pozycjax("gracz")==pozycjax(element))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
document.body.onkeydown = function(przycisk)
{
    var pocz_kierunek_x = parseInt(document.getElementById("kierunek_x").innerHTML);
    var konc_kierunek_x;
    var pocz_kierunek_y = parseInt(document.getElementById("kierunek_y").innerHTML);
    var konc_kierunek_y;
    if (przycisk.key == "d")
    {
        if (kolizjax("granicag")==1)
        {
            return 0;   
        }
        else
        {
            konc_kierunek_x = pocz_kierunek_x+5;
            document.getElementById("kierunek_x").innerHTML=konc_kierunek_x
            document.getElementById("gracz").style.transform="translate("+konc_kierunek_x+"px, "+pocz_kierunek_y+"px)"
        }
    }
    if (przycisk.key == "a")
    {
        if (kolizjax("granicap")==1)
        {
            return 0;   
        }
        else
        {
            konc_kierunek_x = pocz_kierunek_x-5;
            document.getElementById("kierunek_x").innerHTML=konc_kierunek_x
            document.getElementById("gracz").style.transform="translate("+konc_kierunek_x+"px, "+pocz_kierunek_y+"px)"
        }
    }
    if (przycisk.key == "w")
    {
        if (pocz_kierunek_y==604)
        {
            konc_kierunek_y = pocz_kierunek_y-30;
            document.getElementById("kierunek_y").innerHTML=konc_kierunek_y;
            document.getElementById("gracz").style.transform="translate("+pocz_kierunek_x+"px, "+konc_kierunek_y+"px)"
            var spadekopoznienie = setInterval(spadek, 250)
        }
        else
        {
            return 0;
        }
    }
    console.log(pocz_kierunek_x, konc_kierunek_x, pocz_kierunek_y, konc_kierunek_y)
}
function spadek()
{
    document.getElementById("gracz").style.transform="translate("+parseInt(document.getElementById("kierunek_x").innerHTML)+"px, 604px)"
    document.getElementById("kierunek_y").innerHTML="604"
    clearInterval(spadekopoznienie)
}