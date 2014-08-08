$(function() {

	$('.fires .fire').hover(
		function(){
			$(this).addClass('filled').prevAll().addClass('filled');}
		, function(){
			$(this).removeClass('filled').prevAll().removeClass('filled');
		});
		

	$('.fires .fire').on('click', function() {
		setRating($(this));
	});

	setupForm();
	setupTable();


})



function setRating(obj){
	if (obj.hasClass('rated') && !obj.next().hasClass('rated')){
		obj.removeClass('rated').siblings().removeClass('rated');
	}
	else {
		obj.removeClass('rated').siblings().removeClass('rated');
		obj.addClass('rated').prevAll().addClass('rated');
	}
};

function setupForm() {
	$('form').on('submit', function(event){
		event.preventDefault();
		processNewItem();
	});
};

function setupTable() {
	$('#items').on('click', function(event){
		var t = event.target;
		if($(t).hasClass('glyphicon-trash')){
			$(t).closest('tr').remove();
		}
	})
}

function processNewItem() {
	var text = $('#firstItemName').val();
	var rating = $('.fires .rated').length;
	addItem(text,rating);
}

function addItem(text,rating) {
    $('.template tr').clone().appendTo('#items tbody');
    $('#items tbody tr:last-child td.itemText').text(text);
    var newRating = $('#items tbody tr:last-child td.rating .fire');
    for(var i = rating - 1; i >= 0; i--) {
        $(newRating[i]).addClass('rated');
    }
}
