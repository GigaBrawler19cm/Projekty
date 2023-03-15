var o =
{
    d0:'Yes',
    d1:'No',
    d2:'hohoho',
    d3:'ugh'
}
function zadzwon()
{
    document.getElementById("ob").src="start.gif";
    var start1 = "start.mp3";
    var start = new Audio (start1);
    start.play()
    document.getElementById("pytanie").hidden = false;
    document.getElementById("btn").setAttribute('onclick','ben()')
    document.getElementById("obraz").setAttribute('onmouseover', 'this.src="glosc.png"');
    document.getElementById("obraz").setAttribute('onmouseleave', 'this.src="glos.png"');
    document.getElementById("obraz").setAttribute('src', 'glos.png');
}



function ben()
{
    var pyt = (document.getElementById("pytanie").value).length;
    if (pyt == 0 )
    {
        return 0;
    }
    else
    {
        var liczb=Math.round(Math.random()*3)
        var los=eval("o.d"+liczb)
        var dzwk1 = 'd'+liczb+'.mp3'
        var obrz='d'+liczb+'.gif'
        var dzwk = new Audio(dzwk1)
        dzwk.play()
        document.getElementById("ob").src=obrz
    }
}