<?php include "database.php"?>
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
    <link rel="stylesheet" href="css/style2.css" type="text/css">
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
                            <li><a href="../Toys4Kids/san-pham.html">Sản Phẩm</a></li>
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
        <section>
            <!-- <div class="row">
                <div class="col-md-8">
                    <img src="img/9.jpg" class="img-responsive" alt="" />
                </div>
            </div> -->
            <div class="row row-suggest">
                <div class="jumbotron col-md-12">
                    <div class="row">
                        <h1>Toys4Kids</h1>
                    </div>
                    <div class="row top-row">
                        <div class="col-md-8">
                            <h4>ĐỒ CHƠI TRẺ EM - GIÚP BÉ PHÁT TRIỂN TOÀN DIỆN</h4>
                            <p>Đối với các gia đình có con nhỏ, việc lựa chọn quần áo cho bé trai hay quần áo cho bé gái đã nan giải, nan giải hơn là chọn những món đồ chơi phù hợp với lứa tuổi, giới tính của bé, giúp bé phát triển trí thông minh ngay từ những năm đầu đời. Giai đoạn từ 1- 6 tuổi là thời điểm trẻ có những nhận thức ban đầu về thế giới xung quanh. Với bản tính tò mò, hiếu động, trẻ thường có xu hướng chơi bất cứ món đồ chơi nào khiến chúng cảm thấy thú vị. Dưới con mắt non nớt của trẻ nhỏ đồ chơi không đơn thuần chỉ là món đồ giải trí mà nó còn là cách giúp trẻ nhỏ tăng cường khả năng quan sát, phân biệt màu sắc, trí tưởng tượng và cảm nhận tổng qua về thế giới xung quanh. Nếu như trẻ nhỏ là những chú gấu bông ngộ nghĩnh, những nàng công chúa Disney, những chiếc xe nhỏ, siêu nhân Pacman… thì với người lớn, đồ chơi tập trung vào những hoạt động giải trí lành mạnh, xả stress và mang tính sáng tạo.
                            </p>
                        </div>
                        <div class="col-md-4">
                            <a href="#"><img class="img-responsive img-rounded" src="img/section-img-one.jpg" alt=""></a>
                        </div>
                    </div>
                    <div class="row middle-row">
                        <div class="col-md-4">
                            <a href="#"><img class="img-responsive img-rounded" src="img/section-img-middle.jpg" alt=""></a>
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <h4>THẾ GIỚI ĐỒ CHƠI ĐẦY MÀU SẮC</h4>
                                <p>Thế giới trò chơi muôn màu muôn vẻ, và trẻ nhỏ cũng không chỉ thích thú với mỗi một loại đồ chơi. Chính vì lẽ đó, để đáp ứng nhu cầu cho những “chủ nhân tương lai” của đất nước, hàng loạt những món đồ chơi từ đơn giản, thô sơ cho đến những hàng công nghệ đắt tiền lần lượt ra đời.
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-xs-4">
                                    <h5>Hoạt động ngoài trời</h5>
                                    <p>
                                        Các trò chơi dành cho hoạt động ngoài trời gồm đồ câu cá, bóng và dụng cụ, diều, leo núi, cắm trại, các loại đồ chơi vận động, patin, ván trượt và phụ kiện… Thương hiệu: Colligo, Kracie, Thinkfun, Benho...
                                    </p>
                                </div>
                                <div class="col-xs-4">
                                    <h5>Trò chơi, hóa trang cosplay</h5>
                                    <p>
                                        Thẻ bài, board games, đồ chơi xúc xắc, xí ngầu, các loại cờ, các trò khác, trang phục hóa trang, mặt nạ, đồ chơi đao kiếm, súng đồ chơi, đồ ảo thuật, vật phẩm hóa trang, mô hình nhân vật… là một trong những loại đồ chơi được không chỉ trẻ em tò mò mà ngay cả người lớn cũng thích thú với những món đồ này. Thương hiệu: Tomy, Toyroyal, Combi
                                    </p>
                                </div>
                                <div class="col-xs-4">
                                    <h5>Mô hình, đồ chơi điều khiển từ xa</h5>
                                    <p>
                                        Đi cùng sự cải tiến của công nghệ hiện đại, các loại đồ chơi ngày nay cũng phong phú không kém với các mô hình xe lửa, mô hình tàu thủy, mô hình công trình, mô hình xe ô tô, mô hình máy bay, ô tô, máy bay trực thăng, tàu ngầm tàu thủy, rô bốt, động vật, đồ chơi cảm biến hồng ngoại….giúp bé thoải sức giải trí cũng như trí tưởng tượng của mình thông qua các trò chơi. Thương hiệu: Xiaomi, Syma, Heli, Thomas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Độ phân giải video cần sửa lại vì hiển thị không như ý muốn -->
                <!-- <div class="col-md-6 col-xs-8 embed-responsive embed-responsive-16by9 ">
                        <iframe onload="videoSuggest()" class="embed-responsive-item" src="https://www.youtube.com/embed/FK6sJ9wWkmc" frameborder="0" allowfullscreen></iframe>
                    </div> -->
            </div>
            <div class="row row-price">
                <?php
                    $cate = new Database();
                    $cate->stmt = $cate->conn->prepare("SELECT * FROM product INNER JOIN category ON  product.category_id = category.category_id ORDER BY product.product_id");
                    $cate->stmt->execute();
                    $result = $cate->stmt->fetchAll(PDO::FETCH_ASSOC);
                ?>
                <div class="row">
                    <h2 class="h2Title"><span><img src="../Toys4Kids/img/hot.png" alt="" /></span>CÁC SẢN PHẨM BÁN CHẠY</h2>
                </div>
                <div class="col-md-3 col-xs-3">
                    <div class="thumbnail">
                        <img src="img/forKids1.jpg" class="img-responsive" alt="...">
                        <div class="caption">
                            <h3>Robot Điều Khiển</h3>
                            <p class="price-des">Đồ chơi vui dành cho người yêu thích</p>
                            <div class="row">
                                <div class="col-xs-6">
                                    <p class="price">900.000 VNĐ</p>
                                </div>
                                <div class="col-xs-6">
                                    <p class="reduce-price">2.000.000 VNĐ</p>
                                </div>
                            </div>
                            <a href="#"><img src="" alt=""></a>
                            <a href="#"><img src="" alt=""></a>
                            <p class="btn-group-justified">
                                <a href="#" class="btn btn-fix" role="button">Chi Tiết</a>
                                <a href="#" class="btn btn-fix" role="button">Mua</a>
                            </p>
                        </div>
                    </div>
                </div>
                <?php

                ?>
<!--                <div class="col-md-3 col-xs-3">-->
<!--                    <div class="thumbnail">-->
<!--                        <img src="img/forKids7.jpg" class="img-responsive" alt="...">-->
<!--                        <div class="caption">-->
<!--                            <h3>Đồ Chơi Màu Sắc</h3>-->
<!--                            <p class="price-des">Dành cho những cậu bé thích đồ chơi tự động</p>-->
<!--                            <div class="row">-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="price">600.000 VNĐ</p>-->
<!--                                </div>-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="reduce-price">1.000.000 VNĐ</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <a href="#"><img src="" alt=""></a>-->
<!--                            <a href="#"><img src="" alt=""></a>-->
<!--                            <p class="btn-group-justified">-->
<!--                                <a href="#" class="btn btn-fix" role="button">Chi Tiết</a>-->
<!--                                <a href="#" class="btn btn-fix" role="button">Mua</a>-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-md-3 col-xs-3">-->
<!--                    <div class="thumbnail">-->
<!--                        <img src="img/forKids2.jpg" class="img-responsive" alt="...">-->
<!--                        <div class="caption">-->
<!--                            <h3>Combo Các Món Đồ cho Bé</h3>-->
<!--                            <p class="price-des">Trọn bộ những đồ chơi và đồ dùng cho trẻ sơ sinh đầy đủ nhất</p>-->
<!--                            <div class="row">-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="price">600.000 VNĐ</p>-->
<!--                                </div>-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="reduce-price">1.500.000 VNĐ</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <p class="btn-group-justified">-->
<!--                                <a href="#" class="btn btn-fix" role="button">Chi Tiết</a>-->
<!--                                <a href="#" class="btn btn-fix" role="button">Mua</a>-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-md-3 col-xs-3">-->
<!--                    <div class="thumbnail">-->
<!--                        <img src="img/forKids3.jpg" class="img-responsive" alt="...">-->
<!--                        <div class="caption">-->
<!--                            <h3>Voi Gối Ôm Cho Bé</h3>-->
<!--                            <p class="price-des">Giúp bé có những giấc ngủ ngon hơn</p>-->
<!--                            <div class="row">-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="price">750.000 VNĐ</p>-->
<!--                                </div>-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="reduce-price">1.200.000 VNĐ</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <p class="btn-group-justified">-->
<!--                                <a href="#" class="btn btn-fix" role="button">Chi Tiết</a>-->
<!--                                <a href="#" class="btn btn-fix" role="button">Mua</a>-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="row row-price">-->
<!--                <div class="col-md-3 col-xs-3">-->
<!--                    <div class="thumbnail">-->
<!--                        <img src="img/forKids4.jpg" class="img-responsive" alt="...">-->
<!--                        <div class="caption">-->
<!--                            <h3>Đồ Chơi Vận Động</h3>-->
<!--                            <p class="price-des">Để các cháu hoạt động ngoài trời vui vẻ hơn và tốt cho sức khỏe nữa</p>-->
<!--                            <div class="row">-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="price">200.000 VNĐ</p>-->
<!--                                </div>-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="reduce-price">800.000 VNĐ</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <p class="btn-group-justified">-->
<!--                                <a href="#" class="btn btn-fix" role="button">Chi Tiết</a>-->
<!--                                <a href="#" class="btn btn-fix" role="button">Mua</a>-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-md-3 col-xs-3">-->
<!--                    <div class="thumbnail">-->
<!--                        <img src="img/forKids1.jpg" class="img-responsive" alt="...">-->
<!--                        <div class="caption">-->
<!--                            <h3>Robot Điều Khiển</h3>-->
<!--                            <p class="price-des">Dành cho những cậu bé thích đồ chơi tự động</p>-->
<!--                            <div class="row">-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="price">900.000 VNĐ</p>-->
<!--                                </div>-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="reduce-price">2.000.000 VNĐ</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <a href="#"><img src="" alt=""></a>-->
<!--                            <a href="#"><img src="" alt=""></a>-->
<!--                            <p class="btn-group-justified">-->
<!--                                <a href="#" class="btn btn-fix" role="button">Chi Tiết</a>-->
<!--                                <a href="#" class="btn btn-fix" role="button">Mua</a>-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-md-3 col-xs-3">-->
<!--                    <div class="thumbnail ">-->
<!--                        <img src="img/forKids5.jpg" class="img-responsive" alt="...">-->
<!--                        <div class="caption">-->
<!--                            <h3>Gái</h3>-->
<!--                            <p class="price-des">Giúp các cháu trai đỡ bứt rứt khi về đêm do vấn đề thiếu sữa trầm trọng</p>-->
<!--                            <div class="row">-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="price">2.000 VNĐ</p>-->
<!--                                </div>-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="reduce-price">2.000.000 VNĐ</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <p class="btn-group-justified">-->
<!--                                <a href="#" class="btn btn-fix" role="button">Chi Tiết</a>-->
<!--                                <a href="#" class="btn btn-fix" role="button">Mua</a>-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-md-3 col-xs-3">-->
<!--                    <div class="thumbnail">-->
<!--                        <img src="img/forKids6.jpg" class="img-responsive" alt="...">-->
<!--                        <div class="caption">-->
<!--                            <h3>Mô Hình Khủng Long</h3>-->
<!--                            <p class="price-des">Tự chơi game nâng cao kiến thức về khủng long</p>-->
<!--                            <div class="row">-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="price">300.000 VNĐ</p>-->
<!--                                </div>-->
<!--                                <div class="col-xs-6">-->
<!--                                    <p class="reduce-price">1.000 VNĐ</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <p class="btn-group-justified">-->
<!--                                <a href="#" class="btn btn-fix" role="button">Chi Tiết</a>-->
<!--                                <a href="#" class="btn btn-fix" role="button">Mua</a>-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
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
            <div class="row line2">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <p>
                        Copyright © 2016 Smart Toy LLC. All rights reserved. iPhone and iPod touch are trademarks of Apple Inc.
                    </p>
                </div>
            </div>
            <div class="row line3">
                <div class="col-md-4">
                </div>
                <div class="col-md-8">
                    <h4>Terms & Condition <span>|</span> Privacy Policy</h4>
                </div>
            </div>
            <div class="row line4">
                <div class="col-md-3 line4-left">
                    <a href="#" title=""><h5>Thương Hiệu</h5></a>
                    <div class="row">
                        <div class="col-xs-6">
                            <img class="img-responsive" src="../Toys4Kids/img/logo-01_02.png" alt="">
                        </div>
                        <div class="col-xs-6">
                            <img class="img-responsive" src="../Toys4Kids/img/logo-02_03.png" alt="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-6">
                            <img class="img-responsive" src="../Toys4Kids/img/logo-11_09.png" alt="">
                        </div>
                        <div class="col-xs-6">
                            <img class="img-responsive" src="../Toys4Kids/img/logo-12_01.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                </div>
                <div class="col-md-3 line4-right">
                    <a href="#" title=""><h5>Liên Lạc</h5></a>
                    <div class="row">
                        <div class="col-xs-3">
                            <a href="#"><img class="img-responsive" src="../Toys4Kids/img/facebook-letter.png" alt=""></a>
                        </div>
                        <div class="col-xs-3">
                            <a href="#"><img class="img-responsive" src="../Toys4Kids/img/twitter.png" alt=""></a>
                        </div>
                        <div class="col-xs-3">
                            <a href="#"><img class="img-responsive" src="../Toys4Kids/img/skype.png" alt=""></a>
                        </div>
                        <div class="col-xs-3">
                            <a href="#"><img class="img-responsive" src="../Toys4Kids/img/linkedin.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
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
    <!-- <script type="text/javascript" src="js/for-bootstrap.js"></script> -->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
</body>

</html>
