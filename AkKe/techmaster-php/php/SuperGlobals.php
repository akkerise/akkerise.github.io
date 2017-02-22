<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Super Globals</title>
</head>
<body>


<?php
    /* SUPER GLOBALS : $GLOBALS*/

        //        $x = 25;
        //        $y = 75;
        //        function addition() {
        //            $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y']; // muốn lấy biến vào trong function thì ta phải dùng $GLOBALS
        //        }
        //        addition();
        //        echo $z;

    /* SUPER GLOBALS : $_SERVER*/

//        echo $_SERVER['PHP_SELF'];          // output : /php/demo_global_server.php
//        echo "<br>";
//        echo $_SERVER['SERVER_NAME'];       // output : www.w3schools.com
//        echo "<br>";
//        echo $_SERVER['HTTP_HOST'];         // output : www.w3schools.com
//        echo "<br>";
//        echo $_SERVER['HTTP_REFERER'];      // output : http://www.w3schools.com/php/showphp.asp?filename=demo_global_server
//        echo "<br>";
//        echo $_SERVER['HTTP_USER_AGENT'];   // output : Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36
//        echo "<br>";
//        echo $_SERVER['SCRIPT_NAME'];       // output : /php/demo_global_server.php
//        $_SERVER['PHP_SELF']	Returns the filename of the currently executing script
//        $_SERVER['GATEWAY_INTERFACE']	Returns the version of the Common Gateway Interface (CGI) the server is using
//        $_SERVER['SERVER_ADDR']	Returns the IP address of the host server
//        $_SERVER['SERVER_NAME']	Returns the name of the host server (such as www.w3schools.com)
//        $_SERVER['SERVER_SOFTWARE']	Returns the server identification string (such as Apache/2.2.24)
//        $_SERVER['SERVER_PROTOCOL']	Returns the name and revision of the information protocol (such as HTTP/1.1)
//        $_SERVER['REQUEST_METHOD']	Returns the request method used to access the page (such as POST)
//        $_SERVER['REQUEST_TIME']	Returns the timestamp of the start of the request (such as 1377687496)
//        $_SERVER['QUERY_STRING']	Returns the query string if the page is accessed via a query string
//        $_SERVER['HTTP_ACCEPT']	Returns the Accept header from the current request
//        $_SERVER['HTTP_ACCEPT_CHARSET']	Returns the Accept_Charset header from the current request (such as utf-8,ISO-8859-1)
//        $_SERVER['HTTP_HOST']	Returns the Host header from the current request
//        $_SERVER['HTTP_REFERER']	Returns the complete URL of the current page (not reliable because not all user-agents support it)
//        $_SERVER['HTTPS']	Is the script queried through a secure HTTP protocol
//        $_SERVER['REMOTE_ADDR']	Returns the IP address from where the user is viewing the current page
//        $_SERVER['REMOTE_HOST']	Returns the Host name from where the user is viewing the current page
//        $_SERVER['REMOTE_PORT']	Returns the port being used on the user's machine to communicate with the web server
//        $_SERVER['SCRIPT_FILENAME']	Returns the absolute pathname of the currently executing script
//        $_SERVER['SERVER_ADMIN']	Returns the value given to the SERVER_ADMIN directive in the web server configuration file (if your script runs on a virtual host, it will be the value defined for that virtual host) (such as someone@w3schools.com)
//        $_SERVER['SERVER_PORT']	Returns the port on the server machine being used by the web server for communication (such as 80)
//        $_SERVER['SERVER_SIGNATURE']	Returns the server version and virtual host name which are added to server-generated pages
//        $_SERVER['PATH_TRANSLATED']	Returns the file system based path to the current script
//        $_SERVER['SCRIPT_NAME']	Returns the path of the current script
//        $_SERVER['SCRIPT_URI']	Returns the URI of the current page

    /* SUPER GLOBALS : $_REQUEST*/

            /*
                <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>"> // khai báo action giống như onclick bên javascript
                Name: <input type="text" name="fname">
                    <input type="submit">
                </form>

                <?php
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    // collect value of input field
                    $name = $_REQUEST['fname'];         // Dữ liệu của tag input sẽ được gán vào biến $name
                    if (empty($name)) {                 // empty($name) ==> rỗng . Tại sao lại không để là $name = " " ??
                        echo "Name is empty";
                    } else {
                        echo $name;
                    }
                }
                ?>

            */
        
    /* SUPER GLOBALS : $_POST*/

            /*
             *  Tương tự bên $_REQUEST
             <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
                Name: <input type="text" name="fname">
                  <input type="submit">
                </form>

                <?php
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    // collect value of input field
                    $name = $_POST['fname'];            // Bản chất giống với ~ $name = $_POST['fname'];
                    if (empty($name)) {
                        echo "Name is empty";
                    } else {
                        echo $name;
                    }
                }
                ?>
             */

    /* SUPER GLOBALS : $_GET*/
            /*
                <a href="test_get.php?subject=PHP&web=W3schools.com">Test $GET</a>
                <?php
                    echo "Study " . $_GET['subject'] . " at " . $_GET['web'];

                    //    $_GET['subject'] = PHP
                    //    $_GET['web']     = W3schools.com

                ?>
              */
    /* SUPER GLOBALS : $_FILES*/

    /* SUPER GLOBALS : $_ENV*/
    /* SUPER GLOBALS : $_COOKIE*/
    /* SUPER GLOBALS : $_SESSION*/

?>
</body>
</html>