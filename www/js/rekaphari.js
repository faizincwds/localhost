var server = "http://localhost/absensionline1/";
$('document').ready(function(){
	var nama = localStorage.getItem('namasiswa');
	var kelas = localStorage.getItem('kelasiswa');
	
	$("#id-kelas").html(kelas);
	
	//jumlah siswa
	$.getJSON(server+'jmsis.php?kls='+kelas,function(siswa){
		$("#jm-siswa span").remove();
		$.each(siswa,function(index,data){
			$("#jm-siswa").append(
			"<span> Jumlah siswa: "+data.jumlah+"</span>");
		});
	});
	//tanggal bulan
	var hariIni=tanggal();
	$("#tanggal").html(hariIni);
	
	//rekap presensi
	$.getJSON(server+'rekap_harian.php?kls='+kelas,function(siswa){
		$("#rekap div").remove();
		$.each(siswa,function(index,data){
			$("#rekap").append(
			"<div class='rekap'>"+
			"<p>"+data.nama+"<br/><b><i>("+data.nis+")</i></b><br/>"+
			"Ket : <b>"+data.ket+"</b></p>"+
			"</div>"
			);
		});
	});
	
});

function tanggal(){
	var d = new Date();
	var tanggal = d.getDate();
	var bulan = parseInt(d.getMonth())+1;
	var tahun = d.getFullYear();
	var hariIni=tanggal+'/'+bulan+'/'+tahun;
	
	return(hariIni);
}
