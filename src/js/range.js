const range = document.getElementById('range')

range.addEventListener('input', function () {
	const count = range.value
	let color = 'linear-gradient(90deg, rgb(53, 99, 233)' + count + '%, rgb(195, 212, 233)' + count + '%)'

	range.style.background = color
})