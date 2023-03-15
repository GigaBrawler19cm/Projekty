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
    <script type="text/javascript" src="sklep.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sklep</title>
</head>
<body>
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
                <p><h3>Firma</h3>
                    Nasza firma zajmuje się sprzedażą maczug od 1238. Nasze maczugi są wykonywane z najlepszego drewna z Japonii i są niezawodne. <br> <br>
                    <h3>Kontakt</h3>
                    Mail: maczugowo@gmail.com <br>
                    Tel: 420 213 769
                </p>
            </div>
        </div>
        <div class="r"><div class="rtekst">Miejsce na twoją reklamę!</div></div>
    </div>
</body>
</html>