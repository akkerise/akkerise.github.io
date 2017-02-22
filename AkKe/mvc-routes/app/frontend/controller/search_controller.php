<?php

/**
 * Created by PhpStorm.
 * User: nguyenthanh
 * Date: 8/12/16
 * Time: 15:01
 */
class search_controller extends base_controller
{
    public function view()
    {
        $this->model->loadModel('search');
    }
}