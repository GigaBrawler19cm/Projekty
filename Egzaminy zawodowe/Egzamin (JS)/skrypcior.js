function kolor()
{
    var s = 100
    var kod = document.getElementById('kolorek').value;
    for (var i=0; i<5; i++)
    {
        var ns = s-(20*i)
        document.getElementById("t"+i).style.backgroundColor='HSL('+kod+', '+ns+'%, 50%)'
    }
}