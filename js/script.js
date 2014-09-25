$(function() {

	$('.itemText').popover();

	$('.fires .fire').hover(
		function(){

			$(this).addClass('filled').prevAll().addClass('filled');

			colorRating($('.fires .filled').length);

			}
		, function(){
			$('.fires .filled').removeAttr("style")
			$('.fires .filled').removeClass('filled');
		});
		

	$('.fires .fire').on('click', function(event) {
		
		event.preventDefault();
		processNewItem();

		//colorRating($(this));
		//$(this).removeAttr('opacity')
	});


	trashItem();


});


function colorRating(obj) {
		console.log(obj)
		// 'obj' goes from 2-6, one for each fire object -- the text "Rate it:" is getting counted as an object.
		if(obj === 2){
				$('.filled').css(
					"color", "#843");
			}
		else if(obj === 3){
				$('.filled').css(
					"color", "#EB0");
			}
		else if(obj === 4){
				$('.filled').css(
					"color", "#FE642E");
			}
		else if(obj === 5){
				$('.filled').css(
					"color", "#F44");
			}
		else if(obj === 6){
				$('.filled').css(
					"color", "#3333FF"
					)
			}

		// $('#items .fire').animate({
		// opacity: .2
		// });
		// obj.removeClass('rated').siblings().removeClass('rated');
		// obj.addClass('rated').prevAll().addClass('rated');
}


function processNewItem() {
	var text = $('#firstItemName').val();
	var rating = $('.fires .filled').length;
	var color = $('.filled').css("color");
	addItem(text,rating,color);
	$('#firstItemName').val("").focus();
}

function addItem(text, rating, color) {
    $('.template tr').clone().hide().appendTo('#items tbody').fadeIn();
    $('#items tbody tr:last-child td.itemText').text(text).css("color", color);
    var newRating = $('#items tbody tr:last-child td.rating .fire');
    //using rating - 2 because the label is included in the .fires .filled class, causing an extra element to be calculated in the length
    for(var i = rating - 2; i >= 0; i--) {
        $(newRating[i]).css("color",color)
    }
    // noItemName(text);
}

//triggers popover if no name is entered for list item
// function noItemName(text) {
// 	if (text.text() == "") {
// 		$('.itemText').popover('show');
// 	}
// }



function trashItem() {
	$('#items').on('click', function(event){
		var t = event.target;
		if($(t).hasClass('deleteRow')){
			$(t).closest('tr').fadeOut(200);
		$('#firstItemName').focus();
		}
	});
}
