<html>
    <head>
        <meta charset="UTF-8">
        <title>Login</title>
    </head>
    <body>
        <?php 
            $login = $_POST["txtUser"];
            $pass = $_POST["txtPass"];
            
        ?>
            
        

            <h1>Bienvenido <?php echo $login; ?> </h1>

        <form action="">
            Login <input type="text" name="txtUser" value="<?php echo $login; ?>" />
            Contraseña: <input type="password" name="txtPass" value="<?php echo $login; ?>" /> <br/>
            <input type="submit" value="Ingresar">
        </form>
    </body>
</html>