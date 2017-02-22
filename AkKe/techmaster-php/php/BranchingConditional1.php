<?php
/**
 * Created by PhpStorm.
 * User: nguyenthanh
 * Date: 7/20/16
 * Time: 09:37
 */

    /* */
    function timSoLonNhat($a,$b){
        $x = $a - $b;
        if(is_numberic($a) && is_numberic($b) && $x > 0){
            echo "So lon nhat la : " . $a;
        }else{
            echo "So nho nhat la : " . $b;
        }
    }


    /* Tính Giai Thừa */
//    function tinhGiaiThua($n){
//    }
    print_r(tinhGiaiThua(3));

?>
    



