import DATA from "./data";
import $ from 'jquery';

const { img } = DATA;

$(() => {
	$.each(img, function (index, img) {
		let clone = $('#card').clone();
		clone.find('img').attr('src', img.imageSrc);
		clone.appendTo('.cards__content');
		clone.removeAttr('id');
	});

	$(document).ready(function () {
		$('.cards__card').click(function () {
		  $(this).toggleClass('flipped');
		});
	});
});
