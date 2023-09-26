import DATA from "./data";
import $ from 'jquery';

const { img } = DATA;

$(() => {
	$.each(img, function (index, img) {
		let clone = $('#card').clone();
		clone.find('img:eq(0)').attr('src', img.imageSrc1);
		clone.find('img:eq(1)').attr('src', img.imageSrc2);
		clone.find('.cards__face-title').text(img.text1);
		clone.find('.cards__face-text').text(img.text2);
		clone.appendTo('.cards__content');
		clone.removeAttr('id');
	});

	$(document).ready(function () {
		$('.cards__card').click(function () {
		  $(this).toggleClass('flipped');
		});
	});
});
