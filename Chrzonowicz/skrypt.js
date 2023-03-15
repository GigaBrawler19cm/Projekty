
function losowanie(max)
{
    return Math.floor((Math.random() * max) + 50)
}
// szostka
function xd()
{
    var norm = document.querySelector("#norm").checked;
    var trd = document.querySelector("#trd").checked;
    var hell = document.querySelector("#hell").checked;
    var btn=document.querySelector("#Gra");
    var x=losowanie(400);
    var y=losowanie(400);
    if (norm == true)
    {
        if (losowanie(10)>55)
        {
            btn.style.transform="translate(" +x+ "%, "+y+ "%)";
            btn.style.transition="all .5s"
            return 0;
        }
        else
        {
            btn.style.transform="translate(-" +x+ "%,  "+y+ "%)";
            btn.style.transition="all .5s"
            return 1;
        } 
    }
    else if (trd == true)
    {
        if (losowanie(10)>55)
        {
            btn.style.transform="translate(" +x+ "%, "+y+ "%)";
            btn.style.transition="all .3s"
            return 0;
        }
        else
        {
            btn.style.transform="translate(-" +x+ "%,  "+y+ "%)";
            btn.style.transition="all .3s"
            return 1;
        } 
    }
    else if (hell == true)
    {
        if (losowanie(10)>55)
        {
            btn.style.transform="translate(" +x+ "%, "+y+ "%)";
            btn.style.transition="all .1s"
            return 0;
        }
        else
        {
            btn.style.transform="translate(-" +x+ "%,  "+y+ "%)";
            btn.style.transition="all .1s"
            return 1;
        }   
    }
}
function wygrana()
{
    alert("Gratuluje! Dostałeś szóstkę!")
    document.location.reload()
}