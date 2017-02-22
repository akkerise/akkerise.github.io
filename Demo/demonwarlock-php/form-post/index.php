<?php
//     class meeting_test {
//         public $username;
//         function set_username($ten){
//             return $this->username = $ten;
//         }

//         function goodbye(){
//             return "This is parameter : " . $this->username;
//         }
//     }
//     $say_test = new meeting_test;
//     $say_test->set_username('Nguyen');
//     echo $say_test->goodbye();
//     // $say_test = new meeting_test;
//     // echo "Say goodbye" . $say_test->hello();
//     // echo "<br>";
//     // echo "Say Hello " . $say_test->goodbye();
//
//     echo "<br>";
//     print_r($say_test);
//
//     class meeting {

//     public $name = 'Thach';

//     function hello()
//     {
//         return $this->name . ' saying hello';
//     }

//     function goodbye()
//     {
//         return $this->name . ' saying goodbye';
//     }
// }
//     $say = new meeting;
//     echo "<pre>";
//     var_dump($say);
//     echo "</pre>";
//
        /**
        *
        */

       /* HAM KHOI TAO
       __construct($var1,var2,var3){
            $this->publicVar->$var[i];
       }*/
        // class fuk{
        //     public $name;
        //     public $skill;
        //     function __construct($ten,$kynang)
        //     {
        //         // Thông số mặc định sẽ là $ten và $kynang
        //         $this->name = $ten;
        //         $this->skill = $kynang;
        //         # code...
        //     }
        //     function hello(){
        //         echo "My name is :" . $this->name . " .And skill of me is :" . $this->skill;
        //     }
        // }
        // $fuk_test = new fuk('abc','xyz'); // Truyền vào tham số mặc định
        // echo $fuk_test->hello();          // Function hello() sẽ nhận tham số truyền vào và gán lại cho biến $this->name và $this->skill

       class Car(){
            public $name;
            public $color;
            public $type;
            public function car_info(){
                // Tranh loi undefined variable
                (!isset($output)) ? $output = null: "";
                echo "<ul>";
                echo "<li>Name is : $this->name  </li>";
                echo "<li>Name is : $this->color </li>";
                echo "<li>Name is : $this->type  </li>";
                echo "</ul>";
                return $output;
            }
       }

       /**
       *
       */
       class BMW extends Car
       {
            $this->name = "BMW";
            $this->color = "White";
            $this->type = "Sport";
       }

       $bmw = new BMW;
       $bmw->car_info();

 ?>