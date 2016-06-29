var template = function(text) { //puts 'text' into HTML template
      return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
      };

var main = function() {
  $('form').submit(function() {
    var text = $('#todo').val(); // pulls out to-do item
		var html = template(text);
    $(html).appendTo('.list');//add html code to list
    $('#todo').val("");//clear out input field
   	return false; // ends the function
    });
  //make sure to close the '.submit' event
  $(document).on("click",'.glyphicon-star', function(){//use .on as .click does not work for dynamically added functions
    $(this).toggleClass('active');//when clicked, toggle active class
});
  
  $(document).on("click",'.glyphicon-remove', function(){
    $(this).parent().remove();// remove the parent element (i.e. one level up on DOM tree) 
  });
  
var add = function(item){
  var html = template(item);
  $(html).appendTo('.list');//add html code to list
    $('#todo').val("");//clear out input field
   	return false; // ends the function
};

//Define possible commands  
if(annyang) {
  var commands = {
  'add *item': add,
	};
};
  
//Add defined commands to Annyang
  annyang.addCommands(commands);
//Start listening
  annyang.start();
};

$(document).ready(main);