
$(document).ready(function () {
    $('#hidethis').hide();

});

function toggle() {
    if (document.getElementById("hidethis").style.display == 'none') {
        document.getElementById("hidethis").style.display = '';
        $("#span").text("Visa mindre");
    } else {
        document.getElementById("hidethis").style.display = 'none';
        $("#span").text("Visa kommande event");
    }
};

var feed = new Instafeed({
		get: 'user',
		userId: 54180760,
		accessToken: '54180760.1677ed0.94c13d331411445190efb4b0956a8163',
		target: 'instagram',
		resolution: 'standard_resolution',
		after: function() {
			var el = document.getElementById('instagram');
			if (el.classList)
				el.classList.add('show');
			else
				el.className += ' ' + 'show';
		}
});

window.onload = function() {
	feed.run();

	
};




