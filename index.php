<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Music application1</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="./css/style.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

		<!-- les composants -->

		<script src="./tags/App.riot" type="riot"></script>
		<script src="./tags/Artiste.riot" type="riot"></script>
		<script src="./tags/Album.riot" type="riot"></script>
		<script src="./tags/Chanson.riot" type="riot"></script>
		<script src="https://cdn.jsdelivr.net/npm/riot@4/riot+compiler.min.js"></script>

		<script src="js/serviceAjax.js"></script>
	</head>
	<body container>
		<app></app>
	</body>
	<script>
		riot.compile().then(()=>{
			riot.install(function(component){
				if(component.name == "app"){
					component.sa = makeServiceAjax();
				}
			})
			riot.mount('artiste');
			riot.mount('album');
			riot.mount('chanson');
			riot.mount('app');
		});
	</script>
</html>
