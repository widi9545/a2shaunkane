
var startX = 0
var startY = 0
var downY = 0
var downX = 0

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



$("#dialerbuttonnumbers1").click(function() { // when "button_id" is clicked
	$("#phonedialer").val($("#phonedialer").val() + "1")
});

$("#dialerbuttonnumbers2").click(function() { // when "button_id" is clicked
	$("#phonedialer").val($("#phonedialer").val() + "2")

});

$("#dialerbuttonnumbers3").click(function() { // when "button_id" is clicked
	$("#phonedialer").val($("#phonedialer").val() + "3")
});


$("#dialerbuttonnumbers4").click(function() { // when "button_id" is clicked
	$("#phonedialer").val($("#phonedialer").val() + "4")
});

$("#dialerbuttonnumbers5").click(function() { // when "button_id" is clicked
	$("#phonedialer").val($("#phonedialer").val() + "5")
});

$("#dialerbuttonnumbers6").click(function() { // when "button_id" is clicked
	$("#phonedialer").val($("#phonedialer").val() + "6")
});

$("#dialerbuttonnumbers7").click(function() { // when "button_id" is clicked
	$("#phonedialer").val($("#phonedialer").val() + "7")
});

$("#dialerbuttonnumbers8").click(function() { // when "button_id" is clicked
	$("#phonedialer").val($("#phonedialer").val() + "8")
});

$("#dialerbuttonnumbers9").click(function() { // when "button_id" is clicked
	$("#phonedialer").val($("#phonedialer").val() + "9")
});

$("#dialerbuttonnumbers0").click(function() { // when "button_id" is clicked
	$("#phonedialer").val($("#phonedialer").val() + "0")
});


$("#dialerclear").click(function() { // when "button_id" is clicked
	$("#phonedialer").val("")
});


$("#gesturearea").mousedown(function(event) {
	$("#gesture_output").val("Down")
	startX = event.pageX
	startY = event.pageY

	
	$("#gesturearea").mousemove(function(event) {
		downX = event.pageX
		downY = event.pageY
	});


});

$("#gesturearea").mouseup(function(event) {
	$("#gesture_output").val("Up")

	if(downX < startX){
		alert("Swipe Left");
	}
	if(downX > startX){
		alert("Swipe Right");
	}
	if(downX == startX){
		$("#gesture_output").val("Up")
	}
	
});