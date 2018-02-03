


$(document).ready(function() { // do this when the document is loaded
	$("#addcontact").show(); // show the element with ID "element"
	$("#dialer").hide(); // hide the element with ID "otherElement"
	$("#contactlist").hide();
	$("#gesturebox").hide();
});

$("#dialerbutton").click(function() { // when "button_id" is clicked
	$("#dialer").show(); // show element
	$("#contactlist").hide();	// hide other element
	$("#addcontact").hide();
	$("#gesturebox").hide();
});

$("#contactlistbutton").click(function() { // when "button_id" is clicked
	$("#contactlist").show(); // show element
	$("#dialer").hide();	// hide other element
	$("#addcontact").hide();
	$("#gesturebox").hide();
});

$("#addcontactbutton").click(function() { // when "button_id" is clicked
	$("#addcontact").show(); // show element
	$("#dialer").hide();	// hide other element
	$("#contactlist").hide();
	$("#gesturebox").hide();
});

$("#gestureareabutton").click(function() { // when "button_id" is clicked
	$("#gesturebox").show(); // show element
	$("#dialer").hide();	// hide other element
	$("#contactlist").hide();
	$("#addcontact").hide();
});



$("#dialberbuttonnumbers1").click(function() { // when "button_id" is clicked
	$("#phonedialer").val($("#phonedialer").val() + "1")
});


