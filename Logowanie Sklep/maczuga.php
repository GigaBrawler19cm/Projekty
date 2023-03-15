<?php
    session_start();
    if (is_null($_SESSION['zalogowany']) || $_SESSION['zalogowany']!=true)
    {
        header('Location: index.php');
        exit();
    }
?>
<!DOCTYPE html>
<html lang="pl-PL">
<head>
<link rel="stylesheet" href="sklepcss.css" type="text/css">
    <script src="sklep.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sklep</title>
</head>
<body onload="data()">
    <?php
        echo '<a style="margin-top:1em; position:absolute"> Witaj ' .$_SESSION['user'].'! </a><br><a style=" z-index:10; margin-top: 1em; position:absolute" href="logout.php">Wyloguj się</a><br>'
    ?>
    <div id="tytul">
        <h1>Maczugowo</h1>
        <nav>
            <ul id="nav">
                <li><a class="menu" href="sklep.php">Sklep</a></li>
                <li><a class="menu" href="onas.php">O nas</a></li>
            </ul>
        </nav>
    </div>
    <div id="sg">
        <div id="i1">
            <div id="is">
                <p>Pomyślnie zakupiłeś maczuge! <br> przewidywany czas dostawy: <br><a id="dostawa"></a></p>
                    <a href="sklep.php">Powrót do strony głównej</a>
                </p>
            </div>
        </div>
        <div class="r"><div class="rtekst">Miejsce na twoją reklamę!</div></div>
    </div>
</body>
</html>