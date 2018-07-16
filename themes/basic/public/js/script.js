$(document).ready(function () {
	
	//Apllying active class to menu
	$(".navbar1 li a").each(function () {
		if ((window.location.pathname == $(this).attr('href'))) {
			$(this).addClass('active');
		}
		else {
			$(this).removeClass('active');
		}
	});

	//My Pictures
	//Modal Image 
	$('.image').click(function (imgs) {
		var expandImg = document.getElementById("expandedImg");
		var imgText = document.getElementById("imgtext");
		imgText.data-description = $(this)[0].data-description;
		expandImg.src = $(this)[0].src;
		expandImg.parentElement.style.display = "block";
	})

	//jquery for switching div(grid to gallery)
	//view Gallery
	$('.btn-gal').click(function () {
		$(this).addClass('active');
		$('.grid').addClass('disp');
		$('.rg-gallery').removeClass('disp');
		$('.btn-grid').removeClass('active');
	})

	//view grid
	$('.btn-grid').click(function () {
		$(this).addClass('active');
		$('.grid').removeClass('disp');
		$('.rg-gallery').addClass('disp');
		$('.btn-gal').removeClass('active');
	})

	//My Video Page
	//jquery to play video on image click	
	$('img.playVid').click(function (event) {
		$("#srcVid").attr("src", this.id)[0].play();
		var z = this.id;
		$(".videoFlip").each(function() {	
			if( z == $(this).find(".pausevid source").attr("src") ){		
				$('.pausevid').each(function() {
					$(this).get(0).pause();
				});
				$(this).find(".pausevid")[0].play();
			}			
		})
	});	

	// for play/pause
	$(".pausevid").click(function () {
		$('video').each(function () {
			this.pause();
		});
		$(this).get(0).play();
	});

	//flipster for music and video
	if ($("#carousel").length) {
		var carousel = $("#carousel").flipster({
			style: 'carousel',
			spacing: -0.5,
			nav: true,
			buttons: true,
		});
	}

	//jquery for switching div(grid to gallery)
	//view grid

	$('.btn-grid').click(function () {
		$(this).addClass('active');
		$('.galvid').addClass('disp');
		$('.gridvid').removeClass('disp');
		$('.btn-gal').removeClass('active');
	})

	//View gallery
	$('.btn-gal').click(function () {
		$(this).addClass('active');
		$('.galvid').removeClass('disp');
		$('.gridvid').addClass('disp');
		$('.btn-grid').removeClass('active');
	});

	//display details of grid 
	$(".vidDesc").click(function () {
		var title = $(this).attr('data-title');
		var artist = $(this).attr('data-artist');
		var genre = $(this).attr('data-genre');
		var length = $(this).attr('data-length');
		var rating = $(this).attr('data-rating');
		var index = 1;
		var img;
		var str = title + "<br/>" + artist + "<br/>" + genre + "<br/>" + length + "<br/>" + "Rating:"
		while (index <= rating) {
			str += ' <img src="/static/images/index.png">';
			index++;
		}
		$('.paraGridVid').html(str);
		$('.paraGalVid').html(str);
	});

	//My Music Page

	//jquery to play audio and view audio player on image click	
	$('img.audio').click(function (event) {
		$(".srcAudio").attr("src", this.id)[0].play();
		var x = this.id
		$("#statusInfo tr").each(function () {
			if( x == this.id) {
				$(this).find('.play-stop').html('Stop');
				$(this).siblings().find('.play-stop').html('Play');
				$(this).addClass('listOnOff');
				$(this).siblings().removeClass('listOnOff')
			}
		})
	});
	
	function desc(x){
		var title = $(x).attr('data-title');
		var artist = $(x).attr('data-artist');
		var genre = $(x).attr('data-genre');
		var length = $(x).attr('data-length');
		var rating = $(x).attr('data-rating');
		var index = 1;
		var img;
		var str = title + "<br/>" + artist + "<br/>" + genre + "<br/>" + length + "<br/>" + "Rating:"
		while (index <= rating) {
			str += ' <img src="/static/images/index.png">';
			index++;
		}
		$('.paraGridAud').html(str);
		$('.paraGalAud').html(str);
	}
	//display details of grid 
	$(".audDescription").click(function () {
		desc(this);
	});

	//View grid
	$('.btn-grid').click(function () {
		$(this).addClass('active');
		$('.galAudio').addClass('disp');
		$('.listAudio').addClass('disp');
		$('.gridAudio').removeClass('disp');
		$('.btn-gal').removeClass('active');
		$('.btn-list').removeClass('active');
		$('#player').addClass('divgridAud');
		$('#player').removeClass('audioPlayer');
		$('#player').removeClass('player-aud');
	})

	//View List
	$('.btn-list').click(function () {
		$(this).addClass('active');
		$('.listAudio').removeClass('disp');
		$('.galAudio').addClass('disp');
		$('.gridAudio').addClass('disp');
		$('.btn-grid').removeClass('active');
		$('.btn-gal').removeClass('active');
		$('#player').removeClass('divgridAud');
		$('#player').removeClass('audioPlayer');
		$('#player').addClass('player-aud');
	});

	//View gallery
	$('.btn-gal').click(function () {
		$(this).addClass('active');
		$('.galAudio').removeClass('disp');
		$('.gridAudio').addClass('disp');
		$('.listAudio').addClass('disp');
		$('.btn-grid').removeClass('active');
		$('.btn-list').removeClass('active');
		$('#player').removeClass('divgridAud');
		$('#player').removeClass('player-aud');
		$('#player').addClass('audioPlayer');
	});

	//to play audio in list view
	$('tr.audio-tr').click(function (event) {
		$(".srcAudio").attr("src", this.id)[0].play();
		desc(this);
	});

	//jquery to change the status in list view
	$("#statusInfo tr").click(function () {
		$(this).find('.play-stop').html('Stop');
		$(this).siblings().find('.play-stop').html('Play');
		$(this).addClass('listOnOff');
		$(this).siblings().removeClass('listOnOff')
	});

	//My Files Page
		$('[data-toggle="tooltip"]').tooltip();

	//active   
	$('.panel-heading').on('click', function () {
		$(this).addClass('active');
		$(this).parent().siblings().find('.panel-heading').removeClass('active');
	})
})