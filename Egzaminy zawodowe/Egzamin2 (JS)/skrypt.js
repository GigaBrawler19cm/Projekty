function wyswietl(id)
{
    var informacje = document.getElementById(id);
    informacje.style.display='block'
    var aktualny_blok = parseInt(id.slice(4));
    for (var i=1;i<5;i++)
    {
        if(i==aktualny_blok)
        {
            return;
        }
        else
        {
            document.getElementById("info"+i).style.display='none'
        }
    }
}