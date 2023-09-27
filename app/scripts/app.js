import DATA from "./data";
import $ from 'jquery';

const { itemData } = DATA;

$(() => {
	$.each(itemData, function (index, itemData) {
		let clone = $('#card').clone();
		clone.find('img:eq(0)').attr('src', itemData.imageSrc1);
		clone.find('img:eq(1)').attr('src', itemData.imageSrc2);
		clone.find('.cards__face-title').text(itemData.text1);
		clone.find('.bold-text').text(itemData.boldText);
		clone.find('.normal-text1').text(itemData.text2);
		clone.find('.face-link-bank').text(itemData.linkText1).attr('href', itemData.linkURL1);
		clone.find('.normal-text2').text(itemData.text3);
		clone.find('.face-link-stocks').text(itemData.linkText2).attr('href', itemData.linkURL2);
		clone.find('.normal-text3').text(itemData.text4);
		clone.appendTo('.cards__content');
		clone.removeAttr('id');
	  });

	$(document).ready(function () {
		$('.cards__face-text').click(function (event) {
			event.stopPropagation();
		});
		$('.cards__card').click(function () {
		  $(this).toggleClass('flipped');
		});
	});
});
