var $count = document.getElementById('count'),
	$textarea = document.getElementById('text'),
	$maxlength = $textarea.getAttribute('maxlength');

$textarea.oninput = function () {
	$count.innerHTML = $maxlength - this.value.length;

	if ($count.innerHTML == 0) {
		$count.classList.add('zuzo');
	} else {
		$count.classList.remove('zuzo');
	}
};

