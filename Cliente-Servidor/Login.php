<html>
    <head>
        <meta charset="UTF-8">
        <title>Login</title>
    </head>
    <body>
        <?php 
            $login = $_POST["txtLogin"];
            $pass = $_POST["txtPass"];
            
        ?>
            
        

        <h1>Holi</h1>
        <form action="">
            Login <input type="text" name="txtLogin" value="<?php echo $login; ?>" />
            Contraseña: <input type="password" name="txtPass" value="<?php echo $pass; ?>" /> <br/>
            <input type="submit" value="Ingresar">
        </form>
    </body>
</html>