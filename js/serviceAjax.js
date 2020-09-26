function makeServiceAjax(){
	var URLBase = "https://musicbrainz.org/ws/2/";

	var service = {
		getArtistByName:getArtistByName,
		getReleaseByName:getReleaseByName,
		getRecordingByName:getRecordingByName,
		getArtistById:getArtistById,
		getReleasesByArtist:getReleasesByArtist,
		getReleaseById:getReleaseById,
		getRecordingByRelease:getRecordingByRelease
	};

	function getArtistByName(nom, offset){
		return new Promise(function(resolve, reject){
			const xhr = new XMLHttpRequest();
			var URL = URLBase + "artist?query=" + nom + "&fmt=json&limit=9&offset=" + offset;
			xhr.open('GET', URL);
			xhr.responseType='json';
			xhr.onload = function(){
				if(xhr.status == 200) {
					resolve(xhr.response);
				} else {
					reject(xhr.statusText);
				}
			};
			xhr.onerror = function(){
				reject("Erreur reseau");
			};
			xhr.send();
		});
	}


	function getReleaseByName(nom, offset){
		return new Promise(function(resolve, reject){
			const xhr = new XMLHttpRequest();
			var URL = URLBase + "release?query=" + nom + "&fmt=json&limit=9&offset=" + offset;
			xhr.open('GET', URL);
			xhr.responseType='json';
			xhr.onload = function(){
				if(xhr.status == 200) {
					resolve(xhr.response);
				} else {
					reject(xhr.statusText);
				}
			};
			xhr.onerror = function(){
				reject("Erreur reseau");
			};
			xhr.send();
		});
	}

	function getRecordingByName(nom, offset){
		return new Promise(function(resolve, reject){
			const xhr = new XMLHttpRequest();
			var URL = URLBase + "recording?query=" + nom + "&fmt=json&limit=9&offset=" + offset;
			xhr.open('GET', URL);
			xhr.responseType='json';
			xhr.onload = function(){
				if(xhr.status == 200) {
					resolve(xhr.response);
				} else {
					reject(xhr.statusText);
				}
			};
			xhr.onerror = function(){
				reject("Erreur reseau");
			};
			xhr.send();
		});
	}

	function getArtistById(id){
		return new Promise(function(resolve, reject){
			const xhr = new XMLHttpRequest();
			var URL = URLBase + "artist/" + id + "?fmt=json";
			xhr.open('GET', URL);
			xhr.onload = function(){
				if(xhr.status == 200) {
					resolve(xhr.response);
				} else {
					reject(xhr.statusText);
				}
			};
			xhr.onerror = function(){
				reject("Erreur reseau");
			};
			xhr.send();
		});
	}

	function getReleasesByArtist(id, offset){
		return new Promise(function(resolve, reject){
			const xhr = new XMLHttpRequest();
			var URL = URLBase + "release?artist=" + id + "&inc=artist-credits&fmt=json&limit=9&offset=" + offset;
			xhr.open('GET', URL);
			xhr.responseType='json';
			xhr.onload = function(){
				if(xhr.status == 200) {
					resolve(xhr.response);
				} else {
					reject(xhr.statusText);
				}
			};
			xhr.onerror = function(){
				reject("Erreur reseau");
			};
			xhr.send();
		});
	}

	function getReleaseById(id){
		return new Promise(function(resolve, reject){
			const xhr = new XMLHttpRequest();
			var URL = URLBase + "release/" + id + "?fmt=json";
			xhr.open('GET', URL);
			xhr.onload = function(){
				if(xhr.status == 200) {
					resolve(xhr.response);
				} else {
					reject(xhr.statusText);
				}
			};
			xhr.onerror = function(){
				reject("Erreur reseau");
			};
			xhr.send();
		});
	}

	function getRecordingByRelease(id, offset){
		return new Promise(function(resolve, reject){
			const xhr = new XMLHttpRequest();
			var URL = URLBase + "recording?release=" + id + "&inc=artist-credits&fmt=json&limit=9&offset=" + offset;
			xhr.open('GET', URL);
			xhr.responseType='json';
			xhr.onload = function(){
				if(xhr.status == 200) {
					resolve(xhr.response);
				} else {
					reject(xhr.statusText);
				}
			};
			xhr.onerror = function(){
				reject("Erreur reseau");
			};
			xhr.send();
		});
	}

	console.log(service);

	return service;
}