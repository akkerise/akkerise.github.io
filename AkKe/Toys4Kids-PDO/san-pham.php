<?php include "database.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Sản Phẩm</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <!-- Bootstrap -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <link rel="stylesheet" href="css/style-san-pham.css" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    <!-- <script type="text/javascript" src="js/for-w3css.js"></script> -->
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
                    <img src="../Toys4Kids//img/bammer.jpg" class="img-responsive" alt="">
                    <img src="../Toys4Kids//img/Shop-by-Age_400x400.png" class="img-des-logo img-responsive" alt="Shop by Age" />
                </div>
            </div>
            <div class="row">
                <nav class="navbar navbar-default">
                    <div class="container">
                        <ul class="nav navbar-nav">
                            <li><a href="../Toys4Kids/index.html">Trang Chủ</a></li>
                            <li><a href="#">Giới Thiệu</a></li>
                            <li><a href="#">Dịch Vụ</a></li>
                            <li><a href="#">Hỗ Trợ</a></li>
                            <li><a href="#">Giảm Giá</a></li>
                            <li><a href="san-pham.php" class="active">Sản Phẩm</a></li>
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
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="row">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="../Toys4Kids/index.html">Trang Chủ</a></li>
                    <li class="breadcrumb-item"><a href="san-pham.php">Sản Phẩm</a></li>
                </ol>
            </div>
        </header>
        <section>
            <div class="container">
                <div class="row row-top">
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-sm-5">
                                <img src="../Toys4Kids/img/forKids1.jpg" alt="Sản Phẩm 1">
                            </div>
                            <div class="col-sm-2">
                                <div class="row">
                                    <a href="#" title=""><img src="" alt=""></a>
                                </div>
                                <div class="row">
                                    <a href="#" title=""><img src="" alt=""></a>
                                </div>
                                <!-- <div class="row">
                                    <a href="#" title=""><img src="" alt=""></a>
                                </div>
                                <div class="row">
                                    <a href="#" title=""><img src="" alt=""></a>
                                </div> -->
                            </div>
                            <div class="col-sm-5">
                                <h2>ROBOT ĐIỀU KHIỂN</h2>
                                <h4>Đặt Online hoặc Gọi 18006601</h4>
                                <div class="clear"></div>
                                <p>
                                    Ưu tiên khuyến mãi (SL có hạn): Cơ hội trúng chuyến du lịch trị giá 70.000.000đ/tuần <span><a href="#" title="">Xem Chi Tiết ...</a></span>
                                    <br> Giảm 40% Bảo hành vàng <span><a href="#" title="">Xem Chi Tiết ...</a></span>
                                </p>
                                <div class="btn btn-reponsive div-btn-first">
                                    <h5>Đặt Trước Online</h5>
                                    <p>(Giữ hàng tại shop không mua không sao)</p>
                                </div>
                                <div class="btn btn-reponsive div-btn-second">
                                    <h5>Trả Góp </h5>
                                    <p>Từ 600K VND 3M VND</p>
                                </div>
                                <div class="btn btn-reponsive div-btn-third">
                                    <h5>Gọi Đặt Hàng Ngay</h5>
                                    <p>Tư vấn nhanh , cước miễn phí</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-col-des col-md-3">
                        <h5>Bảo hành</h5>
                        <div class="clear"></div>
                        <p>
                            Bảo hành 12 tháng tại các trung tâm chính hãng được ủy quyền, đổi mới 30 ngày đầu tiên, đổi mới phụ kiện đi kèm 3 tháng nếu lỗi do nhà sản xuất <span id="span-xt"><a href="#">Xem thêm</a></span>
                        </p>
                        <h5>Bảo hành mở rộng</h5>
                        <div class="clear"></div>
                        <p>Bảo hành 12 tháng rơi vỡ, rơi nước S-Diamond:+từ 899.000₫ Bảo hành chính hãng thêm 1 năm:+từ <span>589.000₫</span> Bảo hành chính hãng thêm 2 năm:+từ <span>879.000₫</span></p>
                        <h5>Tình trạng</h5>
                        <div class="clear"></div>
                        <p>
                            Máy mới nguyên hộp, IMEI trùng hộp Vận chuyển Miễn phí giao hàng, thu tiền tại nhà
                        </p>
                    </div>
                </div>
                <div class="row row-middle">
                    <!-- Tap/Pills Material Design for Bootstrap -->
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9">
                                <!-- Nav tabs -->
                                <div class="card" style="height:550px;">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Giới Thiệu</a></li>
                                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Hướng Dẫn Sử Dụng</a></li>
                                        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Hướng Dẫn Video</a></li>

                                    </ul>
                                    <!-- Tab panes -->
                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="home">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                        <div role="tabpanel" class="tab-pane" id="profile">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                                        <div role="tabpanel" class="tab-pane" id="messages"><div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Mkw6OL8YRoo"></iframe>
  </div></div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div align="center">
                                    <br>
                                    <input type="submit" value="Add To Cart" class="add_to_cart_button">
                                    <br>
                                </div>
                                <table border="0" cellpadding="2" cellspacing="0">
                                    <tbody>
                                        <tr valign="bottom">
                                            <td>&nbsp;</td>
                                            <td class="small" align="center"><b>Order Quantity</b></td>
                                            <td class="small" align="center"><b>Price</b></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="button" value="+" name="1" onclick="addQuantity(1)" class="plus_button">
                                            </td>
                                            <td align="center">
                                                <input type="hidden" name="sku" value="PL017-1">
                                                <input type="text" name="quantity_1" size="2" value="1" style="font-size:24px;text-align:center;">
                                            </td>
                                            <td align="center" style="font-size:24px;text-align:center;">$21.95</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-bottom">
                    <div class="row">
                        <h3>Sản Phẩm Mới Nhất<span><a href="#" title="Xem thêm ..."> Xem thêm ...</a></span></h3>
                        <div class="clear"></div>
                        <div class="col-md-3 col-xs-3">
                            <img class="img-responsive" src="../Toys4Kids/img/spimg1.jpg" alt="">
                            <p>Mèo Thỏ</p>
                        </div>
                        <div class="col-md-3 col-xs-3">
                            <img class="img-responsive" src="../Toys4Kids/img/spimg2.jpg" alt="">
                            <p>Cậu bé Lego</p>
                        </div>
                        <div class="col-md-3 col-xs-3">
                            <img class="img-responsive" src="../Toys4Kids/img/spimg3.jpg" alt="">
                            <p>Búp bê Baby</p>
                        </div>
                        <div class="col-md-3 col-xs-3">
                            <img class="img-responsive" src="../Toys4Kids/img/spimg4.jpg" alt="">
                            <p>Pikachu cute</p>
                        </div>
                    </div>
                    <div class="row">
                        <h3>Sản Phẩm Bán Chạy Tháng<span><a href="#" title="Xem thêm ..."> Xem thêm ...</a></span></h3>
                        <div class="clear"></div>
                        <div class="col-md-3 col-xs-3">
                            <img class="img-responsive" src="../Toys4Kids/img/spimg5.jpg" alt="">
                            <p>Búp bê Công Chúa</p>
                        </div>
                        <div class="col-md-3 col-xs-3">
                            <img class="img-responsive" src="../Toys4Kids/img/spimg6.jpg" alt="">
                            <p>Sinh vật lạ</p>
                        </div>
                        <div class="col-md-3 col-xs-3">
                            <img class="img-responsive" src="../Toys4Kids/img/spimg7.jpg" alt="">
                            <p>Ninja Rùa</p>
                        </div>
                        <div class="col-md-3 col-xs-3">
                            <img class="img-responsive" src="../Toys4Kids/img/spimg8.jpg" alt="">
                            <p>Robot Lego</p>
                        </div>
                    </div>
                    <div class="row">
                        <h3>Sản Phẩm Bán Chạy Năm<span><a href="#" title="Xem thêm ..."> Xem thêm ...</a></span></h3>
                        <div class="clear"></div>
                        <div class="col-md-3 col-xs-3">
                            <img class="img-responsive" src="../Toys4Kids/img/spimg9.jpg" alt="">
                            <p>Giỏ đồ chơi đi chợ</p>
                        </div>
                        <div class="col-md-3 col-xs-3">
                            <img class="img-responsive" src="../Toys4Kids/img/spimg10.jpg" alt="">
                            <p>Chó thám tử</p>
                        </div>
                        <div class="col-md-3 col-xs-3">
                            <img class="img-responsive" src="../Toys4Kids/img/spimg11.jpg" alt="">
                            <p>Chó chiến đấu</p>
                        </div>
                        <div class="col-md-3 col-xs-3">
                            <img class="img-responsive" src="../Toys4Kids/img/spimg12.jpg" alt="">
                            <p>Người nhện</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
            </div>
            <!-- END .line1 -->
            <div class="row line2">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                </div>
            </div>
            <!-- END .line2 -->
            <div class="row line3">
            </div>
            <!-- END .line3 -->
            <div class="row line4">
            </div>
            <!-- END .line4 -->
        </footer>
    </div>
    <script type="text/javascript">
    $(document).ready(function() {
        $("#myBtn-login").click(function() {
            $("#myModal-login").modal();
        });
    });
    $(document).ready(function() {
        $("#myBtn-register").click(function() {
            $("#myModal-register").modal();
        });
    });
    </script>
    <!-- END .container -->
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
</body>

</html>
