function zakup() 
{
    window.location.href = "maczuga.php"
}
function data()
{
    var dzis = new Date()
    dzis.setDate(dzis.getDate()+2)
    document.getElementById("dostawa").innerHTML=dzis.toLocaleDateString();
}