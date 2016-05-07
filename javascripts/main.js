$(function($) {
var callback = function(jokes) {
	var list = '<table id="chuck-norris-jokes-table" class="jokes-table">';
	for(i in jokes) {
		list += '<tr><td>' + jokes[i].joke + "</td></tr>\n";
	}
	list += '</table>';
	$('#fact').html(list);
	$('#chuck-norris-jokes-table tr:nth-child(odd)').addClass('jokes-odd');

}
$.icndb.getRandomJokes(callback);

$("#new-fact-button").on('click',function() {
    $.icndb.getRandomJokes(callback);
  });
})(jQuery);

function tweet () {
	var text = document.getElementById("fact").innerText;
  console.log(text);
  window.open("http://twitter.com/intent/tweet?text=" + text);
}
