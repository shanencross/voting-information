$("document").ready(function() {
	const userAge = prompt("How old are you?");

	if (userAge > 18) {
		$("#of-voting-age").show();
	} else {
		$("#under-voting-age").show();12
	}
})