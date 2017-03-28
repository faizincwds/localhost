var server = "http://localhost/absensionline1/"
	localStorage.setItem("namasiswa","00");
	localStorage.setItem("kelasiswa","00");
$(document).ready(function(){

	$("#lg-btn").click(function(){
		var user = $("#userid").val();
		var pass = $("#password").val();
		$.post(server+"login.php", {
		
		userid : user,
		pwd : pass
		}, function (hasil){
			//$("#login").html(hasil);
			session(hasil);
		});
	});
	
});

function session(data){
	//split variabel data dengan karakter |
	var user = data.split("|");
	//bikin session
	localStorage.setItem("namasiswa",user[0]);
	localStorage.setItem("kelasiswa",user[1]);
	window.location='menutama.html';
}