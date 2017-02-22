<?php
    $str = "1321 j 4 o 1 i 4139481 dkfkjdskgjkrs sdfgjdsgj dsfjkgds j";
    $arr = [123 ,456 , 789];

    echo strlen($str);
    echo "<br>";                            // ==> return 50 ký tự
    echo str_word_count($str);              // ==> return 7  chữ
    echo "<br>";
    echo strip_tags("<b>Thanh E</b>");      // ==> (return Thanh E) ; trả về nội dung của chuỗi không kèm theo thẻ tag element (nếu có)
    echo "<br>";
    echo substr($str, 2, 10);               // ==> return 21 j 4 o 1
    echo "<br>";
    echo strstr($str,"41");
?>