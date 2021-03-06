var API = {};

API._makeRequest = function (url) {
	return $.getJSON(ROOT + url);
};

API.createMediasPostRelationship = function (postId, files, identifier) {
	return $.post(ROOT + '/admin/media/attach/'+postId, {medias: files.map(function (file) { return file.id; }), identifier: identifier});
};

API.detachMediaFromPost = function (postId, relationshipId) {
	return $.post(ROOT + '/admin/media/detach/'+postId, {relationshipId: relationshipId});
};

API.updatePostFields = function (postId, fields) {
	return $.post(ROOT + '/admin/post/change/'+postId, fields);
};

API.getFolders = function () {
	return this._makeRequest('/library/folders');
};

API.getFolderContents = function (folderId) {
	return this._makeRequest('/library/folder/' + folderId);
};

API.createFolder = function (parentId) {
	return this._makeRequest('/library/create-folder/' + parentId);
};

API.renameFolder = function (folderId, newName) {
	return this._makeRequest('/library/', {method: 'post'});
};

API.uploadFiles = function (folderId, files) {
	$.ajax({
		url: ROOT + '/library/upload-to/' + folderId,
		processData: false,
		contentType: false,
		type: 'POST',
		data: new FormData(files)
	});
};