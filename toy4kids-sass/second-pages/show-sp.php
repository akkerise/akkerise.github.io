<?php
    include "database.php";
?>
<?php
$cate = new Database();
$cate->stmt = $cate->conn->prepare("SELECT * FROM category");
$cate->stmt->execute();

$result = $cate->stmt->fetch(PDO::FETCH_ASSOC);
echo "<pre>";
var_dump($result['category']);

echo "</pre>";
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Toys4Kids</title>
    <!-- Bootstrap -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- <link rel="stylesheet" type="text/css" href="css/for-bootstrap.css"> -->
    <style type="text/css">

    </style>
    <!--    <script type="text/javascript" rel="js/script.js" type="text/javascript"></script>-->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]> <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script> <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> <![endif]-->
</head>

<body>
    <div class="container">
        <header>
            <div class="row">
                <div class="banner">
                    <img src="img/bammer.jpg" class="img-responsive" alt="">
                    <img src="img/Shop-by-Age_400x400.png" class="img-des-logo img-responsive" alt="Shop by Age" />
                </div>
            </div>
            <div class="row">
                <nav class="navbar navbar-default">
                    <div class="container">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">Trang Chủ</a></li>
                            <li><a href="#">Giới Thiệu</a></li>
                            <li><a href="#">Dịch Vụ</a></li>
                            <li><a href="#">Hỗ Trợ</a></li>
                            <li><a href="#">Giảm Giá</a></li>
                            <li><a href="san-pham.php">Sản Phẩm</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <button type="button" class="btn btn-default btn-lg" id="myBtn-login">Login</button>
                            <!-- Modal Login -->
                            <div class="modal fade" id="myModal-login" role="dialog">
                                <div class="modal-dialog">
                                    <!-- Modal content-->
                                    <div class="modal-content">
                                        <div class="modal-header" style="padding:35px 50px;">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4><span class="glyphicon glyphicon-lock"></span> Login</h4>
                                        </div>
                                        <div class="modal-body" style="padding:40px 50px;">
                                            <form role="form">
                                                <div class="form-group">
                                                    <label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>
                                                    <input type="text" class="form-control" id="usrname" placeholder="Enter email">
                                                </div>
                                                <div class="form-group">
                                                    <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>
                                                    <input type="text" class="form-control" id="psw" placeholder="Enter password">
                                                </div>
                                                <div class="checkbox">
                                                    <label>
                                                        <input type="checkbox" value="" checked>Remember me</label>
                                                </div>
                                                <div class="btn-logreg">
                                                    <button type="submit" class="btn btn-success btn-block"><span class="glyphicon glyphicon-off"></span> Login</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <p>Not a member? <a href="#">Sign Up</a></p>
                                            <p>Forgot <a href="#">Password?</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Trigger the modal with a button -->
                            <button type="button" class="btn btn-logreg btn-default btn-lg" id="myBtn-register"><a href="second-pages/register.html" title="Đăng Ký">Register</a></button>
                            <!-- Modal Register -->
                            <!-- <div class="modal fade" class="myModal-register" role="dialog"> -->
                            <!-- <div class="modal-dialog"> -->
                            <!-- Modal content-->
                            <!-- <div class="modal-content"> -->
                            <!-- <div class="modal-header" style="padding:35px 50px;">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4><span class="glyphicon glyphicon-lock"></span> Login</h4>
                                        </div> -->
                            <!-- <div class="modal-body" style="padding:40px 50px;">
                                            <form role="form">
                                                <div class="form-group">
                                                    <label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>
                                                    <input type="text" class="form-control" id="usrname" placeholder="Enter email">
                                                </div>
                                                <div class="form-group">
                                                    <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>
                                                    <input type="text" class="form-control" id="psw" placeholder="Enter password">
                                                </div>
                                                <div class="checkbox">
                                                    <label>
                                                        <input type="checkbox" value="" checked>Remember me</label>
                                                </div>
                                                <button type="submit" class="btn btn-success btn-block"><span class="glyphicon glyphicon-off"></span> Login</button>
                                            </form>
                                        </div> -->
                            <!-- <div class="modal-footer">
                                            <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> Cancel</button>
                                            <p>Not a member? <a href="#">Sign Up</a></p>
                                            <p>Forgot <a href="#">Password?</a></p>
                                        </div> -->
                            <!-- </div> -->
                            <!-- </div> -->
                            <!-- </div> -->
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="row shopByAge">
                <div class="col-md-2">
                    <a href="#" title=""><img class="img-responsive" src="../Toys4Kids/img/toys-tile_age_0-2_416x560.jpg" alt=""></a>
                    <p>Từ Đến 3 Tuổi</p>
                </div>
                <div class="col-md-2">
                    <a href="#" title=""><img class="img-responsive" src="../Toys4Kids/img/toys-tile_age_2-4_416x560_2._V285658462_.jpg" alt=""></a>
                    <p>Từ 3 Đến 6 Tuổi</p>
                </div>
                <div class="col-md-2">
                    <a href="#" title=""><img class="img-responsive" src="../Toys4Kids/img/toys-tile_age_5-7_416x560.jpg" alt=""></a>
                    <p>Từ 6 Đến 9 Tuổi</p>
                </div>
                <div class="col-md-2">
                    <a href="#" title=""><img class="img-responsive" src="../Toys4Kids/img/toys-tile_age_8-13_416x560._V293380366_.jpg" alt=""></a>
                    <p>Từ 9 Đến 12 Tuổi</p>
                </div>
                <div class="col-md-2">
                    <a href="#" title=""><img class="img-responsive" src="../Toys4Kids/img/toys-tile_age_14-up_416x560.jpg" alt=""></a>
                    <p>Từ 12 Đến 15 Tuổi</p>
                </div>
            </div>
        </header>
        <!-- /header -->
        <section>
            <div class="row">
                <div class="col-md-4">
                    <img src="img/forKids1.jpg" alt="For Kids 1">
                </div>
                <div class="col-md-5">
                    <div class="row">
                            <h3><?php echo $result['name']; ?></h3>
                        <br>
                        <p><span></span><?php echo $result['description']; ?></p>
                        <br>
                        <h5>Cách Sử Dụng</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsam provident voluptates veritatis, eaque totam.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsam.</p>
                    </div>
                    <div class="row">
                        <div class="col-xs-4">
                            <img src="" alt="">
                            <a href="" title=""></a>
                        </div>
                        <div class="col-xs-4">
                            <img src="" alt="">
                            <a href="" title=""></a>
                        </div>
                        <div class="col-xs-4">
                            <img src="" alt="">
                            <a href="" title=""></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <a href="" title="">Share</a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p>260+Shares</p>
                    </div>
                    <span><a href=""></a></span>
                    <span></span>
                    <select name="quantity" autocomplete="off" id="quantity" class="a-native-dropdown">
                        <option value="1" selected="">1
                        </option>
                        <option value="2">2
                        </option>
                        <option value="3">3
                        </option>
                        <option value="4">4
                        </option>
                        <option value="5">5
                        </option>
                        <option value="6">6
                        </option>
                        <option value="7">7
                        </option>
                        <option value="8">8
                        </option>
                        <option value="9">9
                        </option>
                        <option value="10">10
                        </option>
                        <option value="11">11
                        </option>
                        <option value="12">12
                        </option>
                        <option value="13">13
                        </option>
                        <option value="14">14
                        </option>
                        <option value="15">15
                        </option>
                        <option value="16">16
                        </option>
                        <option value="17">17
                        </option>
                        <option value="18">18
                        </option>
                        <option value="19">19
                        </option>
                        <option value="20">20
                        </option>
                        <option value="21">21
                        </option>
                        <option value="22">22
                        </option>
                        <option value="23">23
                        </option>
                        <option value="24">24
                        </option>
                        <option value="25">25
                        </option>
                        <option value="26">26
                        </option>
                        <option value="27">27
                        </option>
                        <option value="28">28
                        </option>
                        <option value="29">29
                        </option>
                        <option value="30">30
                        </option>
                    </select>
                    <br>
                    <input type="checkbox" name="" value="">
                    <p>Yes, I want <span>FREE Two-Day Shipping</span> with <a href="" title="">Amazon Prime</a></p>
                    <button type="submit"><img src="" alt=""><p>Thêm Vào Giỏ</p></button><br>
                    <label>Ship to : </label><br>

                    <select name="" class="a-native-dropdown">
                        <option value="">Ha Noi</option>
                        <option value="">Ho Chi Minh</option>
                    </select>
                </div>
            </div>
        </section>
        <!-- /section -->
        <footer>
            <div class="row line1">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">

                        <h5><a href="#">GIAO HÀNG TẬN NƠI</a></h5>


                        <h5><a href="#">GIAO HÀNG NHANH</a></h5>


                        <h5><a href="#">CÔNG TY</a></h5>


                        <h5><a href="#">BÁN SỈ</a></h5>


                        <h5><a href="#">HỖ TRỢ</a></h5>


                        <h5><a href="#">LIÊN LẠC</a></h5>

                </div>
            </div><!-- END .line1 -->
            <div class="row line2">
                <div class="col-md-2"></div>
                <div class="col-md-8">

                </div>
            </div><!-- END .line2 -->

            <div class="row line3">

            </div><!-- END .line3 -->
            <div class="row line4">

            </div><!-- END .line4 -->
        </footer>
    </div>

    <!-- <script type="text/javascript" src="js/for-bootstrap.js"></script> -->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
</body>

</html>
