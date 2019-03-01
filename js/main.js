$(function(){
	const urlTmp = 'https://www.youtube.com/embed/';

	$('#changeUrl').click(function() {
		const target = $('[name=target]:checked').val();
		const url = $('#url').val();
		const arrUrl = url.split('/');
		const arrLength = arrUrl.length;
		const connectUrl = urlTmp + arrUrl[arrLength-1]

		console.log(arrUrl);
		console.log(connectUrl);

		$("*[name="+ target +"]").attr("src",connectUrl);

		return false;
	})
});