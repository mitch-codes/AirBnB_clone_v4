let my_dict = {};
let my_string = "";

$("input").click(function(){
	my_string = "";
	let myDataName = $(this).attr('data-name');
	let myDataId = $(this).attr('data-id');
	if ($(this).is(':checked')) {
		my_dict[myDataId] = myDataName;
	}
	else {
		delete my_dict[myDataId];
	}
	$.each(my_dict, function(key, value){
		my_string += value + " ";
	});
	$('h4').text(my_string);
});
