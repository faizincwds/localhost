$('document').ready(function(){
	//periksa apakah sudah login
	var user = localStorage.getItem("namasiswa");
	var kelas = localStorage.getItem("kelasiswa");
	
	$("#id-nama").html("Nama : "+user);
	$("#id-kelas").html("Kelas : "+kelas);
	
	if(user =='00' || kelas =='00'){
		window.location='index.html';
	}
});