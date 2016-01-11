<?php

use \Core\Controller;

namespace Controller;

class MediasController extends \Core\Controller {

	protected $models = ['Media'];

	public function uploadTo($folderId) {
		// debug($folderId);
		$this->Media->uploadFilesToFolder($_FILES['files'], $folderId);
	}

}