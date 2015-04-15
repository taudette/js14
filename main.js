$(document).on('ready', function() {


	var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);

	var outerShell = $('<div class="outer-shell"><table></table></div>');
	var innerShell = $('<div class="inner-shell"><tr><p>12:17</p></tr></div>');
	var AM =$('<div class="AM"><tr>AM <br> PM</tr></div>');
	var amLabels =$('<div class="am-labels">AM: ## ## ## ## ## ##</div>');
	var fmLabels =$('<div class="fm-labels">FM: ## ## ## ## ## ##</div>');

	outerShell.append(innerShell);
	$('body').append(outerShell);
	outerShell.prepend(AM);
	outerShell.append(amLabels,fmLabels);
  

});