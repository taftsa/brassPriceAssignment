function numGen(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

$(document).ready(function() {
	var brass = {};

	//Money
	brass.c = numGen(6000,9000);
	
	//Players
	brass.tp = numGen(3,9);
	brass.hp = numGen(1,4);
	brass.rp = numGen(1,4);
	brass.bp = numGen(1,3);
	brass.up = numGen(0,3);

	//Instruments
	brass.t = numGen(0,6);
	brass.h = numGen(1,4);
	brass.r = numGen(1,2);
	brass.b = numGen(1,3);
	brass.u = numGen(1,3);
	
	//Broken Instruments
	brass.bt = brass.t - numGen(0,brass.t);
	brass.bh = brass.h - numGen(0,brass.h);
	brass.br = brass.r - numGen(0,brass.r);
	brass.bb = brass.b - numGen(0,brass.b);
	brass.bu = brass.u - numGen(0,brass.u);
	
	//No Accessories
	brass.p = brass.hp + brass.rp + brass.tp + brass.bp + brass.up;
	brass.na = brass.p - numGen(0,brass.p - 1);
	
	//No Straight Mute
	brass.nm = brass.tp - numGen(0,brass.tp - 1);
	
	//Brass Quintet
	brass.bq = numGen(0,1);
	brass.qm = numGen(1,3);
	
	
	$('body').append('<p>You have $' + brass.c + '.00 to solve the following problems:</p><br />');
	
	$('body').append('<p>Your band has ' + brass.tp + ' trumpet players and ' + brass.t + ' available trumpets. <i>' + brass.bt + ' of the school trumpets are broken!</i></p>');
	if ((brass.tp - (brass.t - brass.bt)) > 0){
		$('body').append('<p><span>You need to acquire or repair ' + (brass.tp - (brass.t - brass.bt)) + ' trumpets.</span></p>');
	};
	
	$('body').append('<p>Your band has ' + brass.hp + ' horn players and ' + brass.h + ' available horns. <i>' + brass.bh + ' of the school horns are broken!</i></p>');
	if ((brass.hp - (brass.h - brass.bh)) > 0){
		$('body').append('<p><span>You need to acquire or repair ' + (brass.hp - (brass.h - brass.bh)) + ' horns.</span></p>');
	};
	
	$('body').append('<p>Your band has ' + brass.rp + ' trombone players and ' + brass.r + ' available trombones. <i>' + brass.br + ' of the school trombones are broken!</i></p>');
	if ((brass.rp - (brass.r - brass.br)) > 0){
		$('body').append('<p><span>You need to acquire or repair ' + (brass.rp - (brass.r - brass.br)) + ' trombones.</span></p>');
	};
	
	$('body').append('<p>Your band has ' + brass.bp + ' euphonium players and ' + brass.b + ' available euphoniums. <i>' + brass.bb + ' of the school euphoniums are broken!</i></p>');
	if ((brass.bp - (brass.b - brass.bb)) > 0){
		$('body').append('<p><span>You need to acquire or repair ' + (brass.bp - (brass.b - brass.bb)) + ' euphoniums.</span></p>');
	};
	
	$('body').append('<p>Your band has ' + brass.up + ' tuba players and ' + brass.u + ' available tubas. <i>' + brass.bu + ' of the school tubas are broken!</i></p>');
	if ((brass.up - (brass.u - brass.bu)) > 0){
		$('body').append('<p><span>You need to acquire or repair ' + (brass.up - (brass.u - brass.bu)) + ' tubas.</span></p>');
	};
	
	$('body').append('<br /><p>Also, <span>' + brass.na + ' of your students do not have valve oil.</span></p>');
	$('body').append('<p>Also, <span>' + brass.nm + ' of your trumpet players do not have straight mutes, for which your literature calls.</span></p>');
	
	if (brass.bq) {
		$('body').append('<br /><p>Good news! You have an exceptional group of 5 students who can form a brass quintet. <span>They will need ' + brass.qm + ' pieces of brass quintet music.</span></p>');
	};
});