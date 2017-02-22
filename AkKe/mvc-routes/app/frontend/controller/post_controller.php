<?php

/**
 * Created by PhpStorm.
 * User: nghia
 * Date: 8/8/16
 * Time: 2:35 PM
 */
class post_controller extends base_controller
{
    public function view($param = null)
    {
        if (empty($param)) {
//            $this->loadView('post');
            // Pram rỗng
            $this->loadModel('post');
            $getAllData = $this->model->getAllData();
            $getTotalPost = $this->model->getTotalPost();
            if (!isset($_GET['page'])) {
                $page = 1;
            } else {
                $page = $_GET['page'];
            }
            $getDataByPage = $this->model->getDataByPage($page);
            $this->loadView('post', array(
                'data' => $getDataByPage,
                'total' => $getTotalPost['total'],
                'current_page' => isset($_GET['page']) ? $_GET['page'] : 1
            ));
        }

        else {
//            Xử lí param trước
            if (!filter_var($param, FILTER_SANITIZE_NUMBER_INT)) {
                header("Location:" . BASE_PATH . "/p404");
            }else {
//                echo "<pre>"; var_dump($param); echo "</pre>";exit();
                $this->loadModel('post');

                if( $this->model->checkPostExist($param) == false ){
//                    header("Location: " . BASE_PATH . "/p404");
                        echo "FUCK YOU";
                    die();
                }
                $result = $this->model->getDataById($param);
                $this->loadView('detail-post', array(
                    'data' => $result
                ));
            }
        }
    }

//    public function checkPostExitsController()
//    {
//        $this->loadModel('post');
//        $checkPostExits = $this->model->checkPostExist();
//        if ($result = null){
//            header("Location:" . BASE_PATH . "/p404");
//        }else{
//            header("Location:" . BASE_PATH . $_POST['page']);
//        }
////        $this->loadView
//    }
}