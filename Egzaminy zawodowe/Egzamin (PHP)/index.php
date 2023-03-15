<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sekretariat</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <section>
        <div id="lewy">
            <h1>Akta pracownicze</h1>
            <?php
            $polaczenie = mysqli_connect('localhost', 'root', '', 'firma');
            $dane = mysqli_fetch_assoc($polaczenie->query('SELECT imie, nazwisko, adres, miasto, czyRODO, czyBadania FROM pracownicy where id=5'));
            echo "<h3>Dane</h3>";
            echo "<p>" . $dane['imie'] . " " . $dane['nazwisko'] . "</p>";
            echo "<hr>";
            echo "<h3>Adres</h3>";
            echo "<p>" . $dane['adres'] . "</p><p>" . $dane['miasto'] . "</p>";
            echo "<hr>";
            if($dane['czyRODO']==1)
            {
                echo "<p>RODO: podpisano </p>";
            }
            else
            {
                echo "<p>RODO: niepodpisano </p>";
            }
            if($dane['czyBadania']==1)
            {
                echo "<p>Badania: aktualne </p>";
            }
            else
            {
                echo "<p>Badania: nieaktualne </p>";
            }
            ?>
            <hr>
            <h3>Dokumenty pracownika</h3>
            <a href="cv.txt" download="cv.txt">Pobierz</a>
            <h1>Liczba zatrudnionych pracowników</h1>
            <p><?php
            echo $liczba_pracownikow = mysqli_num_rows($polaczenie->query('SELECT * from pracownicy'));
            ?></p>
            
        </div>
        <div id="prawy">
            <?php
            $id_dane = mysqli_fetch_assoc($polaczenie->query("SELECT id, imie, nazwisko FROM pracownicy WHERE id=2"));
            echo "<img src='" . $id_dane['id'] . ".jpg' alt='pracownik'>";
            echo "<h2>" . $id_dane['imie'] . " " . $dane['nazwisko'] . "</h2>";
            $stanowisko = mysqli_fetch_assoc($polaczenie->query("SELECT pracownicy.id, stanowiska.nazwa, stanowiska.opis FROM pracownicy INNER JOIN stanowiska ON stanowiska.id = pracownicy.stanowiska_id WHERE pracownicy.id=5"));
            echo "<h4>" . $stanowisko['nazwa'] . "</h4>";
            echo "<h5>" . $stanowisko['opis'] . "</h5>";
            $polaczenie->close();
            ?>
        </div>
    </section>
    <footer>
        Autorem aplikacji jest: 694202137
        <ul>
            <li>skontaktuj się</li>
            <li>poznaj naszą firmę</li>
        </ul>
    </footer>
</body>
</html>