<?php
    session_start(); // start globalnej sesji
    require_once "ms.php"; // import informacji o bazie danych
    mysqli_report(MYSQLI_REPORT_OFF); //Wyłączenie fatal errorów
    $con= @new mysqli($host, $db_user, $db_pass, $db_name); // połączenie 
    
    if ($con->connect_errno!=0) //sprawdzanie błędu
    {
        echo "Błąd: " .$con->connect_errno; //kod błędu
    }
    else
    {
        $login=$_POST['login'];
        $haslo=$_POST['pass'];
        $login = htmlentities($login, ENT_QUOTES, "UTF-8");
        $haslo = htmlentities($haslo, ENT_QUOTES, "UTF-8"); // encje (żeby nie pierdolil sie skrypt)

        if ($rez = $con->query(sprintf("SELECT * FROM uzt WHERE login='$login' AND haslo='$haslo'")))
        {
            $rek = $rez->num_rows; // Ile jest rezultatów;
            if ($rek==1)
            {
                $_SESSION['zalogowany'] = true;
                $wiersz=$rez->fetch_assoc();
                $_SESSION['user']=$wiersz['login'];
                unset($_SESSION['blad']);
                header('Location: sklep.php');
            }
            else
            {
                $_SESSION['blad'] = '<a style="color:red; font-weight:bold;">Nieprawdiłowy login lub hasło!</a>';
                header('Location: index.php');
            }
        }

        $con->close(); // zamknięcie połączenia
    }
    
?>