var server = "http://localhost/absensionline1/";
$('document').ready(function(){
	var kelas = localStorage.getItem('kelasiswa');
	$("#id-kelas").html(kelas);
	//jujmlah siswa
	$.getJSON(server+'jmsis.php?kls='+kelas,function(siswa){
		$("#jm-siswa span").remove();
		$.each(siswa,function(index,data){
			$("#jm-siswa").append(
			"<span> Jumlah siswa: "+data.jumlah+"</span>");
		});
	});
	
	var hariIni=tanggal();
	$("#tanggal").html(hariIni);
	//daftar siswa
	$.getJSON(server+'siswa.php?kls='+kelas,function(siswa){
		$("#daftar-siswa li").remove();
		$.each(siswa,function(index,data){
			$("#daftar-siswa").append(
			
			"<li class='input'>"+
			"<div>"+data.nama+"<br/>[ <b>"+data.nis+"</b>, ("+data.klm+") ]</div>"+
			"<a class='btn btn-primary tombol' onClick=updatePresensi('"+data.nis+"','Hadir')>Hadir</a>"+
			"<a class='btn btn-primary tombol' onClick=updatePresensi('"+data.nis+"','Sakit')>Sakit</a>"+
			"<a class='btn btn-success tombol' onClick=updatePresensi('"+data.nis+"','Ijin')>Ijin</a>"+
			"<a class='btn btn-danger tombol' onClick=updatePresensi('"+data.nis+"','Alpa')>Alpha</a>"+
			"</li>");
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

function updatePresensi(nis,ket){
	$.post(server+'upd-presensi.php',
        {
          nis: nis,
          ket: ket
        },
        function(data,status){
            alert("Proses Berhasil");
        });
}