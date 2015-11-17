<?php

use \Slim\Slim;

namespace Core;

class Controller {

	protected $app;
	protected $models = [];

	public function __construct($app) {
		$this->app = $app;

		foreach ($this->models as $model) {
			$this->{$model} = $this->app->rqModel($model);
		}
	}

	public function render($template, $data = array(), $layout = false) {
		$view = $this->app->view->fetch($template, $data);

		if (!$layout)
			$layout = 'default';

		$this->app->render($layout . '.php', ['content_for_layout' => $view]);
	}

}