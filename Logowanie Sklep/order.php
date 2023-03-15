<?php
        session_start();
        if ($_SESSION['zalogowany']!=true)
        {
            header('Location: index.php');
            exit();
        }
?>
<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <style>
        input[type=number]
        {
            margin-top:2em;
        }
        table, tr, td, th
        {
            border-collapse: collapse;
            border: 1px solid black;
            padding:.5em;
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Podsumowanie</title>
</head>
<body>
    <?php
        echo 'Witaj ' . $_SESSION['user'] . '! <a href="logout.php">Wyloguj się</a>';
        $paczki = $_POST['paczek'];
        $grzebienie = $_POST['grzebien'];
        $suma_p = 0.99*$paczki;
        $suma_g = 1.29*$grzebienie;
        $suma = $suma_p+$suma_g;
        echo<<<END
            <h2>Podsumowanie</h2>
            <table>
                <tr><th>Nazwa</th><th>Ilość</th><th>Cena za szt.</th><th>Suma</th></tr>
                <tr><td>Pączki</td><td>$paczki</td><td>0.99 zł</td><td>$suma_p zł</td></tr>
                <tr><td>Grzebienie</td><td>$grzebienie</td><td>1.29 zł</td><td>$suma_g zł</td></tr>
            </table>
            <p>Suma całkowita: $suma zł</p>
            <br>
            <a href="index.php">Powrót do strony głównej.</a>
        END;
    ?>
</body>
</html>