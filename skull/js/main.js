// Proudly Coded by Lorenzo Bocchi
function scrollToAnchor(id, time, offset, easing, callback) {
	if(!$('html, body').is(':animated')) {
		if(!easing) easing = 'linear';
		if(!callback) $('html, body').stop().animate({scrollTop: $(id).offset().top - offset}, time, easing);
		else $('html, body').stop().animate({scrollTop: $(id).offset().top - offset}, time, easing).promise().done(function(){callback()});
	}
}

	$('#scroll1, #scroll2, #scroll3, #scroll4, #scroll5, #scroll6, #scroll7, #scroll8, #scroll9, #scroll10, #scroll11').click(function() {
		$('#scroll1, #scroll2, #scroll3, #scroll4, #scroll5, #scroll6, #scroll7, #scroll8, #scroll9, #scroll10, #scroll11').removeClass('active').children(".line").css({width: 0});
		$(this).addClass('active').children(".line").css({width: '100%'});
		scrollToAnchor($(this).attr('href'), 'slow', 0, 'easeOutCirc');
	});
	
$(window).load(function() {
	$("html").css({"overflow-y": "auto"});
		//$(".spinner").fadeOut(300, function() {
		$("#loading").fadeOut(300, function() {
			$(".content0").animate({marginTop:"-1200px"}, 350, "easeOutSine", function () {
				$(".line1").fadeIn(300, function() {
					$(".icon1").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {
						$(".title1").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {
							$(".sub1").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {	
								$(".clo1").show().animate({ marginBottom: "25px" }, 300, "easeOutElastic", function () {	
									$("#scrollcontainer").show().animate({ left: "30px" }, 300, "easeOutElastic", function () {	
										$(".text1_riga1").fadeIn(300, function() {
											$(".text1_riga2").fadeIn(300, function() {
												$(".text1_riga3").fadeIn(300, function() {
													$(".text1_riga4").fadeIn(300, function() {
														$(".text1_riga5").fadeIn(300, function() {
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});

$(document).ready(function() {
		$("#loading").spin({lines:15, length:0, width:4, radius:20, corners:2, rotate:0, color:'#FFF', speed:1.2, trail:80, shadow:false, hwaccel:false, className:'spinner', zIndex:2e9, top:'auto', left:'auto'});
			$("#logo1").show().animate({ marginLeft: "0px" }, 450, "easeOutElastic", function () {
				$("#logo2").show().animate({ marginLeft: "0px" }, 450, "easeOutElastic", function () {
					$("#logo3").delay(1200).show().animate({ marginLeft: "0px" }, 450, "easeOutElastic", function () {
					});
				});
			});

	$("html").css({"overflow-y": "hidden"});
	$("img").retina();
	$("#mappa").css("width", $(".content11").width() - 50).css("margin-left", 20);
	$("#mappa").css("height", $(".content11").height() - 20);
	$(".gallery").reslide({images:[{src: 'img/gallery/design/001.jpg'},
													   {src: 'img/gallery/design/002.jpg'}, 
													   {src: 'img/gallery/design/003.jpg'}, 
													   {src: 'img/gallery/design/005.jpg'}, 
													   {src: 'img/gallery/design/004.jpg'}, 
													   {src: 'img/gallery/design/006.jpg'}, 
													   {src: 'img/gallery/design/007.jpg'}, 
													   {src: 'img/gallery/design/008.jpg'}, 
													   {src: 'img/gallery/design/009.jpg'}, 
													   {src: 'img/gallery/design/010.jpg'}, 
													   {src: 'img/gallery/design/011.jpg'}, 
													   {src: 'img/gallery/design/012.jpg'}, 
													   {src: 'img/gallery/design/013.jpg'}, 
													   {src: 'img/gallery/design/014.jpg'}, 
													   {src: 'img/gallery/design/015.jpg'}, 
													   {src: 'img/gallery/design/016.jpg'}, 
													   {src: 'img/gallery/design/017.jpg'}, 
													   {src: 'img/gallery/design/018.jpg'}, 
													   {src: 'img/gallery/design/019.jpg'}, 
													   {src: 'img/gallery/design/020.jpg'}], 
													fx: "slide", speed: 1000, prev: "#prev", next: "#next", pagers: true});
													
	$(".gallery2").reslide({images:[{src: 'img/gallery/photography/001.jpg'},
													   {src: 'img/gallery/photography/002.jpg'}, 
													   {src: 'img/gallery/photography/004.jpg'}, 
													   {src: 'img/gallery/photography/013.jpg'}, 
													   {src: 'img/gallery/photography/019.jpg'}, 
													   {src: 'img/gallery/photography/020.jpg'}, 
													   {src: 'img/gallery/photography/012.jpg'}, 
													   {src: 'img/gallery/photography/011.jpg'}, 
													   {src: 'img/gallery/photography/005.jpg'}, 
													   {src: 'img/gallery/photography/006.jpg'}, 
													   {src: 'img/gallery/photography/007.jpg'}, 
													   {src: 'img/gallery/photography/010.jpg'}, 
													   {src: 'img/gallery/photography/009.jpg'}, 
													   {src: 'img/gallery/photography/014.jpg'}, 
													   {src: 'img/gallery/photography/015.jpg'}, 
													   {src: 'img/gallery/photography/016.jpg'}, 
													   {src: 'img/gallery/photography/017.jpg'}, 
													   {src: 'img/gallery/photography/018.jpg'}, 
													   {src: 'img/gallery/photography/003.jpg'}, 
													   {src: 'img/gallery/photography/008.jpg'}], 
													fx: "slide", speed: 1000, prev: "#prev2", next: "#next2", pagers: true});
													
		$("#scroll1").hover(function(){
			$("#scroll1").stop().transition({scale: 1.8}, 'fast');
		}, function(){
			$("#scroll1").stop().transition({scale: 1.0});
		});
		
	$("#scroll2").hover(function(){
			$("#scroll2").stop().transition({scale: 1.5}, 'fast');
		}, function(){
			$("#scroll2").stop().transition({scale: 1.0});
		});
		
			$("#scroll3").hover(function(){
			$("#scroll3").stop().transition({scale: 1.5}, 'fast');
		}, function(){
			$("#scroll3").stop().transition({scale: 1.0});
		});
		
			$("#scroll4").hover(function(){
			$("#scroll4").stop().transition({scale: 1.5}, 'fast');
		}, function(){
			$("#scroll4").stop().transition({scale: 1.0});
		});
		
			$("#scroll5").hover(function(){
			$("#scroll5").stop().transition({scale: 1.5}, 'fast');
		}, function(){
			$("#scroll5").stop().transition({scale: 1.0});
		});
		
			$("#scroll6").hover(function(){
			$("#scroll6").stop().transition({scale: 1.5}, 'fast');
		}, function(){
			$("#scroll6").stop().transition({scale: 1.0});
		});
		
			$("#scroll7").hover(function(){
			$("#scroll7").stop().transition({scale: 1.5}, 'fast');
		}, function(){
			$("#scroll7").stop().transition({scale: 1.0});
		});
		
			$("#scroll8").hover(function(){
			$("#scroll8").stop().transition({scale: 1.5}, 'fast');
		}, function(){
			$("#scroll8").stop().transition({scale: 1.0});
		});
		
			$("#scroll9").hover(function(){
			$("#scroll9").stop().transition({scale: 1.5}, 'fast');
		}, function(){
			$("#scroll9").stop().transition({scale: 1.0});
		});
		
			$("#scroll10").hover(function(){
			$("#scroll10").stop().transition({scale: 1.5}, 'fast');
		}, function(){
			$("#scroll10").stop().transition({scale: 1.0});
		});

		$("#scroll11").hover(function(){
			$("#scroll11").stop().transition({scale: 1.5}, 'fast');
		}, function(){
			$("#scroll11").stop().transition({scale: 1.0});
		});
							
		$(".content2").waypoint(function(event, direction) {
			var part = this;
			$(".line2").fadeIn(500, function() {
				$(".icon2").show().animate({ marginTop: "20px" }, 400, "easeOutElastic", function () {
					$(".title2").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {
						$(".sub2").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {	
						});
					});
				});
			});
		}, {
			offset: '70%',
			triggerOnce: true
		});
		
		$("#adobe").waypoint(function(event, direction) {
			var part = this;
		$(".photoshop").show().animate({ marginTop: "0px" }, 150, "easeOutElastic", function () {	
			$(".adobe_separator1").show().animate({ marginTop: "0px" }, 150, "easeOutElastic", function () {
				$(".illustrator").show().animate({ marginTop: "0px" }, 150, "easeOutElastic", function () {	
					$(".adobe_separator2").show().animate({ marginTop: "0px" }, 150, "easeOutElastic", function () {
						$(".indesign").show().animate({ marginTop: "0px" }, 150, "easeOutElastic", function () {	
							$(".adobe_separator3").show().animate({ marginTop: "0px" }, 150, "easeOutElastic", function () {
								$(".dreamweaver").show().animate({ marginTop: "0px" }, 150, "easeOutElastic", function () {	
									$(".adobe_separator4").show().animate({ marginTop: "0px" }, 150, "easeOutElastic", function () {
										$(".lightroom").show().animate({ marginTop: "0px" }, 150, "easeOutElastic", function () {	
										});
									});
								});
							});
						});
					});
				});
			});
		});
		}, {
			offset: '50%',
			triggerOnce: true
		});
		
		$("#adobe").waypoint(function(event, direction) {
			var part = this;
		$(".clo2").show().animate({ marginBottom: "25px" }, 300, "easeOutElastic", function () {	
			});
		}, {
			offset: '20%',
			triggerOnce: true
		});
		
		$(".content3").waypoint(function(event, direction) {
			var part = this;
			$(".line3").fadeIn(500, function() {
				$(".icon3").show().animate({ marginTop: "20px" }, 400, "easeOutElastic", function () {
					$(".title3").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {
						$(".sub3").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {	
						});
					});
				});
			});
		}, {
			offset: '70%',
			triggerOnce: true
		});
		
		$(".content3").waypoint(function(event, direction) {
			var part = this;
				$(".text3_riga1").fadeIn(300, function() {
					$(".text3_riga2").fadeIn(300, function() {
						$(".text3_riga3").fadeIn(300, function() {
							$(".text3_riga4").fadeIn(300, function() {
								$(".text3_riga5").fadeIn(300, function() {
								});
							});
						});
					});
				});
		}, {
			offset: '2%',
			triggerOnce: true
		});
		
		$(".content3").waypoint(function(event, direction) {
			var part = this;
		$(".clo3").show().animate({ marginBottom: "25px" }, 300, "easeOutElastic", function () {	
			});
		}, {
			offset: '-20%',
			triggerOnce: true
		});
		
		$(".content4").waypoint(function(event, direction) {
			var part = this;
			$(".line4").fadeIn(500, function() {
				$(".icon4").show().animate({ marginTop: "20px" }, 400, "easeOutElastic", function () {
					$(".title4").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {
						$(".sub4").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {	
						});
					});
				});
			});
		}, {
			offset: '70%',
			triggerOnce: true
		});
		

					
		$(".content4").waypoint(function(event, direction) {
			var part = this;
		$(".clo4").show().animate({ marginBottom: "25px" }, 300, "easeOutElastic", function () {	
			});
		}, {
			offset: '-100%',
			triggerOnce: true
		});	
			
		$(".content5").waypoint(function(event, direction) {
			var part = this;
			$(".line5").fadeIn(500, function() {
				$(".icon5").show().animate({ marginTop: "20px" }, 400, "easeOutElastic", function () {
					$(".title5").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {
						$(".sub5").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {	
						});
					});
				});
			});
		}, {
			offset: '70%',
			triggerOnce: true
		});
		
		$(".content5").waypoint(function(event, direction) {
			var part = this;
		$("#reslide2_cover").fadeOut(800, function() {	
			$("#reslide2 .reslide-pagers").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {	
				$(".portfolio_cover").fadeOut(800, function() {	
				});
			});
		});
		}, {
			offset: '-20%',
			triggerOnce: true
		});	
		
		$(".content5").waypoint(function(event, direction) {
			var part = this;
		$(".clo5").show().animate({ marginBottom: "25px" }, 300, "easeOutElastic", function () {	
			});
		}, {
			offset: '-100%',
			triggerOnce: true
		});
		
		$(".content6").waypoint(function(event, direction) {
			var part = this;
			$(".line6").fadeIn(500, function() {
				$(".icon6").show().animate({ marginTop: "20px" }, 400, "easeOutElastic", function () {
					$(".title6").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {
						$(".sub6").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {	
						});
					});
				});
			});
		}, {
			offset: '70%',
			triggerOnce: true
		});
		
		$(".content6").waypoint(function(event, direction) {
			var part = this;
		$("#iphone_cover").fadeOut(800, function() {	
			$(".portfoliomobile_cover").fadeOut(800, function() {	
			});
		});
		}, {
			offset: '-20%',
			triggerOnce: true
		});
		
		$(".content6").waypoint(function(event, direction) {
			var part = this;
		$(".clo6").show().animate({ marginBottom: "25px" }, 300, "easeOutElastic", function () {	
			});
		}, {
			offset: '-100%',
			triggerOnce: true
		});		
		
		$(".content7").waypoint(function(event, direction) {
			var part = this;
			$(".line7").fadeIn(500, function() {
				$(".icon7").show().animate({ marginTop: "20px" }, 400, "easeOutElastic", function () {
					$(".title7").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {
						$(".sub7").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {	
						});
					});
				});
			});
		}, {
			offset: '70%',
			triggerOnce: true
		});	
		
		$(".content7").waypoint(function(event, direction) {
			var part = this;
				$(".text7_riga1").fadeIn(300, function() {
					$(".text7_riga2").fadeIn(300, function() {
						$(".text7_riga3").fadeIn(300, function() {
							$(".text7_riga4").fadeIn(300, function() {
							});
						});
					});
				});
		}, {
			offset: '2%',
			triggerOnce: true
		});	
				
		$(".content7").waypoint(function(event, direction) {
			var part = this;
		$(".clo7").show().animate({ marginBottom: "25px" }, 300, "easeOutElastic", function () {	
			});
		}, {
			offset: '-20%',
			triggerOnce: true
		});
		
		$(".content8").waypoint(function(event, direction) {
			var part = this;
			$(".line8").fadeIn(500, function() {
				$(".icon8").show().animate({ marginTop: "20px" }, 400, "easeOutElastic", function () {
					$(".title8").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {
						$(".sub8").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {	
						});
					});
				});
			});
		}, {
			offset: '70%',
			triggerOnce: true
		});	
		
		$(".content8").waypoint(function(event, direction) {
			var part = this;
				$(".text8_riga1").fadeIn(300, function() {
					$(".text8_riga2").fadeIn(300, function() {
						$(".text8_riga3").fadeIn(300, function() {
						});
					});
				});
		}, {
			offset: '2%',
			triggerOnce: true
		});	
			
		$(".content8").waypoint(function(event, direction) {
			var part = this;
		$(".clo8").show().animate({ marginBottom: "25px" }, 300, "easeOutElastic", function () {	
			});
		}, {
			offset: '-20%',
			triggerOnce: true
		});
				
		$(".content9").waypoint(function(event, direction) {
			var part = this;
			$(".line9").fadeIn(500, function() {
				$(".icon9").show().animate({ marginTop: "20px" }, 400, "easeOutElastic", function () {
					$(".title9").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {
						$(".sub9").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {	
						});
					});
				});
			});
		}, {
			offset: '70%',
			triggerOnce: true
		});		
		
	$("#tabella").waypoint(function(event, direction) {
		var part = this;
			$("#facebook").fadeIn(350, function() {
				$("#twi").fadeIn(350, function() {
					$("#pinterest").fadeIn(350, function() {
			$("#pics").fadeIn(350, function() {
				$("#linkedin").fadeIn(350, function() {
					$("#behance").fadeIn(350, function() {
			$("#google").fadeIn(350, function() {
				$("#youtube").fadeIn(350, function() {
					$("#myspace").fadeIn(350, function() {
					});
				});
			});
					});
				});
			});
					});
				});
			});
		}, {
			offset: '70%',
			triggerOnce: true
		});

	$(".content9").waypoint(function(event, direction) {
			var part = this;
		$(".clo9").show().animate({ marginBottom: "25px" }, 300, "easeOutElastic", function () {	
			});
		}, {
			offset: '-20%',
			triggerOnce: true
		});
		
	$("#facebook, #twi, #pinterest, #pics, #linkedin, #behance, #google, #youtube, #myspace").hover(function() {
		if(!$(this).hasClass("active")) {
			$(this).stop(true, true).animate({backgroundPositionY: -300}, 250, "easeOutQuad");
		}
	}, function() {
		if(!$(this).hasClass("active")) {
			$(this).stop(true, true).animate({backgroundPositionY: 0}, 250, "easeOutQuad");
		}
	});
	
		$(".content11").waypoint(function(event, direction) {
			var part = this;
			$(".line11").fadeIn(500, function() {
				$(".icon11").show().animate({ marginTop: "20px" }, 400, "easeOutElastic", function () {
					$(".title11").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {
						$(".sub11").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {	
						});
					});
				});
			});
		}, {
			offset: '70%',
			triggerOnce: true
		});			
	
	$(".content11").waypoint(function(event, direction) {
			var part = this;
		$(".clo11").show().animate({ marginBottom: "25px" }, 300, "easeOutElastic", function () {	
			});
		}, {
			offset: '20%',
			triggerOnce: true
		});	
	$(".content10").waypoint(function(event, direction) {
			var part = this;
			$(".line10").fadeIn(500, function() {
				$(".icon10").show().animate({ marginTop: "20px" }, 400, "easeOutElastic", function () {
					$(".title10").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {
						$(".sub10").show().animate({ marginTop: "0px" }, 300, "easeOutElastic", function () {	
						});
					});
				});
			});
		}, {
			offset: '70%',
			triggerOnce: true
		});		
		
		$(".content10").waypoint(function(event, direction) {
			var part = this;
				$(".text10_riga1").fadeIn(300, function() {
					$(".text10_riga2").fadeIn(300, function() {
						$("#doc").fadeIn(300, function() {
						});
					});
				});
		}, {
			offset: '50%',
			triggerOnce: true
		});	
		
	  $("#doc").hover(function() {
		  if(!$(this).hasClass("active")) {
			  $(this).stop().animate({backgroundPositionY: -100}, 250, "easeOutQuad");
		  }
	  }, function() {
		  if(!$(this).hasClass("active")) {
			  $(this).stop().animate({backgroundPositionY: 0}, 250, "easeOutQuad");
		  }
	  });	
	  				
		$(".content10").waypoint(function(event, direction) {
			var part = this;
		$(".clo10").show().animate({ marginBottom: "25px" }, 300, "easeOutElastic", function () {	
			});
		}, {
			offset: '50%',
			triggerOnce: true
		});
		
	$('#voce1').hide();
	$("#scroll1").on({
		mouseover: function() {
			$("#voce1").stop().fadeIn(250);
		},
		mouseout: function() {
			$("#voce1").stop().fadeOut(250);
		}
	});
	
	$('#voce2').hide();
	$("#scroll2").on({
		mouseover: function() {
			$("#voce2").stop().fadeIn(250);
		},
		mouseout: function() {
			$("#voce2").stop().fadeOut(250);
		}
	});
	
	$('#voce3').hide();
	$("#scroll3").on({
		mouseover: function() {
			$("#voce3").stop().fadeIn(250);
		},
		mouseout: function() {
			$("#voce3").stop().fadeOut(250);
		}
	});
	
	$('#voce4').hide();
	$("#scroll4").on({
		mouseover: function() {
			$("#voce4").stop().fadeIn(250);
		},
		mouseout: function() {
			$("#voce4").stop().fadeOut(250);
		}
	});
	
	$('#voce5').hide();
	$("#scroll5").on({
		mouseover: function() {
			$("#voce5").stop().fadeIn(250);
		},
		mouseout: function() {
			$("#voce5").stop().fadeOut(250);
		}
	});
	
	$('#voce6').hide();
	$("#scroll6").on({
		mouseover: function() {
			$("#voce6").stop().fadeIn(250);
		},
		mouseout: function() {
			$("#voce6").stop().fadeOut(250);
		}
	});
	
	$('#voce7').hide();
	$("#scroll7").on({
		mouseover: function() {
			$("#voce7").stop().fadeIn(250);
		},
		mouseout: function() {
			$("#voce7").stop().fadeOut(250);
		}
	});
	
	$('#voce8').hide();
	$("#scroll8").on({
		mouseover: function() {
			$("#voce8").stop().fadeIn(250);
		},
		mouseout: function() {
			$("#voce8").stop().fadeOut(250);
		}
	});
	
	$('#voce9').hide();
	$("#scroll9").on({
		mouseover: function() {
			$("#voce9").stop().fadeIn(250);
		},
		mouseout: function() {
			$("#voce9").stop().fadeOut(250);
		}
	});
	
	$('#voce10').hide();
	$("#scroll10").on({
		mouseover: function() {
			$("#voce10").stop().fadeIn(250);
		},
		mouseout: function() {
			$("#voce10").stop().fadeOut(250);
		}
	});

	$('#voce11').hide();
	$("#scroll11").on({
		mouseover: function() {
			$("#voce11").stop().fadeIn(250);
		},
		mouseout: function() {
			$("#voce11").stop().fadeOut(250);
		}
	});
	
});	