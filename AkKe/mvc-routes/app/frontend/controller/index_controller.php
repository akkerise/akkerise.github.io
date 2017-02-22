<?php

/**
 * Created by PhpStorm.
 * User: Nimo
 * Date: 08/08/2016
 * Time: 8:23 CH
 */
class index_controller extends base_controller
{
    public function view()
    {
        $limit = 10;
        //load view nao
        $this->loadModel('index');
//        $this->model la 1 object cua model dc load
//        echo "<pre>"; var_dump($this->model->totalPost()['total']); echo "</pre>";exit();
        $total_post = $this->model->totalPost()['total'];

        $total_page = ceil($total_post / $limit);

        if (isset($_GET['page'])) {
            $result = $this->model->getData($limit, $_GET['page']);
        } else {
            $result = $this->model->getData($limit,1);
        }

//        echo "<pre>";var_dump($result);echo "</pre>"; exit;
        $this->loadView('index', array(
            'result' => $result,
            'title' => 'Đây Là Trang Số Mấy',
            'description' => "Fap The World???",
            'current_page' => isset($_GET['page']) ? $_GET['page'] : 1,
            'total_page' => $total_page
        ));





//        echo "<pre>";var_dump($result);echo "</pre>";


    }

}