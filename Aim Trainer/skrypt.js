document.getElementById("przycisk").style.transform="translate("+Math.round(Math.random()*(window.outerWidth-100))+"px, "+Math.round(Math.random()*(window.outerHeight-350))+"px)"
function czas()
{
    var x  = document.getElementById("progres").value;
    document.getElementById("progres").value=x-1
}
function start()
{
    setInterval(czas, 1000)
    setInterval(sprawdzenie, 1)
    document.getElementById("start").style.display="none"
    document.getElementById("start").hidden=true
}
function sprawdzenie()
{
    if (document.getElementById("progres").value==0)
    {
        window.location.reload()
        document.getElementById("progres").value=3
    }
}
function wyciskaj()
    {
        if(document.getElementById("start").hidden)
        {
            var a;
            var punkty = parseInt(document.getElementById("wynik1").innerHTML);
            document.getElementById("wynik1").innerHTML=punkty+1
            document.getElementById("wynik").innerHTML=punkty+1
            var wynik = document.getElementById("wynik").innerHTML;
            document.getElementById("progres").value+=1
            if(wynik>50 && wynik<75)
            {
                a=30
                document.getElementById("przycisk").style.width="50px";
                document.getElementById("przycisk").style.height="50px";
            }
            else if(wynik>75 && wynik<100)
            {
                a=25
                document.getElementById("przycisk").style.width="25px";
                document.getElementById("przycisk").style.height="25px";
            }
            else if(wynik>100)
            {
                a=10
                document.getElementById("przycisk").style.width="10px";
                document.getElementById("przycisk").style.height="10px";
            }
            else
            {
                a=50
            }
            var losowaniex = Math.round(Math.random()*(punkty*a))
            var losowaniey = Math.round(Math.random()*(punkty*a))
            if(losowaniex>window.outerWidth-100 && losowaniey<window.outerHeight-350)
            {
                losowaniex=window.outerWidth-100
                document.getElementById("przycisk").style.transform="translate("+losowaniex+"px, "+losowaniey+"px)"
                return 0;
            }
            else if(losowaniey>window.outerHeight-350 && losowaniex<window.outerWidth-100)
            {
                losowaniey=window.outerHeight-350
                document.getElementById("przycisk").style.transform="translate("+losowaniex+"px, "+losowaniey+"px)"
                return 0;
            }
            else if(losowaniex>window.outerWidth-100 && losowaniey>window.outerHeight-350)
            {
                losowaniey=window.outerHeight-350
                losowaniex=window.outerWidth-100
                document.getElementById("przycisk").style.transform="translate("+losowaniex+"px, "+losowaniey+"px)"
                return 0;
            }
            else
            {
                document.getElementById("przycisk").style.transform="translate("+losowaniex+"px, "+losowaniey+"px)"
            }
        }
        else
        {
           return 0;
        }
    }