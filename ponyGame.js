var poniesposition = [10,80,120,177,226,300];


$(function () {
	$("#right-arrow").on('click', function(){
		$('#crane').animate({left: '-=30px'},'slow');
	});


	$("#left-arrow").on('click', function(){
		$('#crane').animate({left: '+=30px'},'slow');
	});


	$("#lift").on('click', function(){
		$('#crane').animate({top: '+=200px'},'slow', function(){
			let pony = liftAPony(parseInt($('#crane').css('left').replace('px','')));						
			console.log($('#crane').css('left').replace('px',''));
			$('.pony-'+pony).animate({top: '-=200px'},'slow', function() {				
				$(this).animate({left: '50px'},'slow', function(){
					let falling = '300px';
					if(Math.ceil(Math.random()*5) === 5 )
					{
						falling = '500px';
						setTimeout(function(){ $('.kookabarra').fadeIn('slow'); $('#congrats').fadeIn('slow');	}, 500);
					}
					$(this).animate({top: falling},'fast');
				});
			});
			$('#crane').animate({top: '111px'},'slow', function() {				
				$(this).animate({left: '50px'},'slow');
			});
		});
	});

});


function liftAPony(Position){
	let pony = 0;
	for( i = 0; i < 6; i++ ){
		if(Position >= (poniesposition[i] - 20)  && Position <= (poniesposition[i]+20)){
			pony = i;
		}
	}
	
	return pony;
}