<html>
    <head>
        <title>Schedule</title>
    </head>
    <body>
        <?php 
            $login = $_POST["txtLogin"];
            $pass = $_POST["txtPass"];
            $suma = "$login - $pass";
        ?>
            <h1>HOLA LA SUMA ES: <?php echo $suma; ?> </h1>
        

        <h1>Schedule your next travel</h1>
        <form action="">
            Login <input type="text" name="txtLogin" value="<?php echo $login; ?>" />
            Contraseña: <input type="password" name="txtPass" value="<?php echo $pass; ?>" /> <br/>
            <input type="submit" value="Ingresar">
        </form>
    </body>
</html>