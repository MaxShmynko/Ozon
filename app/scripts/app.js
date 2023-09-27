import DATA from "./data";
import $ from 'jquery';

const { itemData } = DATA;

$(() => {

	function getRandomIndexes(array, count) {
		let indexes = [];
		let currentIndex = array.length;
		let temporaryValue, randomIndex;
	
		let newArray = array.slice();
	
		while (currentIndex > 0 && indexes.length < count) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
	
			temporaryValue = newArray[currentIndex];
			newArray[currentIndex] = newArray[randomIndex];
			newArray[randomIndex] = temporaryValue;
	
			indexes.push(randomIndex);
		}
	
		return indexes;
	}
	
	function updateContent() {
		let randomIndexes;
	
		
		if ($(window).width() <= 800) {
			randomIndexes = getRandomIndexes(itemData, 1);
		} else {
			randomIndexes = getRandomIndexes(itemData, 3);
		}
	
		let desktopRandomElements = randomIndexes.map(function (index) {
			return itemData[index];
		});
	
		let content = $('.cards__content');
	
		content.empty();
	
		$.each(desktopRandomElements, function (index, itemData) {
			let $block = $('<div class="cards__card"></div>');
			let $image1 = $('<div class="cards__face card__face-front"><div class="cards__img"><img src="' + itemData.imageSrc1 + '" alt="Изображение 1"></div></div>');
			let $image2 = $('<div class="cards__face card__face-back"><div class="cards__img back-img"><img src="' + itemData.imageSrc2 + '" alt="Изображение 2"></div><div class="cards__face-title">' + itemData.text1 + '</div><div class="cards__face-text"> <span class="bold-text">' + itemData.boldText + '</span><span class="normal-text1">' + itemData.text2 + '</span><a class="face-link-bank" href="' + itemData.linkURL1 + '">' + itemData.linkText1 + '</a><span class="normal-text3">' + itemData.text3 + '</span><a class="face-link-bank" href="' + itemData.linkURL2 + '">' + itemData.linkText2 + '</a><span class="normal-text4">' + itemData.text4 + '</span></div></div>');
	
			$block.append($image1, $image2);
	
			content.append($block);
		});
	
		assignEventHandlers();
	}
	
	function assignEventHandlers() {
		$('.cards__face-text').click(function (event) {
			event.stopPropagation();
		});
	
		$('.cards__card').click(function () {
			$(this).toggleClass('flipped');
		});
	}
	
	$(document).ready(function () {
		updateContent(itemData);
	
		$('.cards__restart').click(function () {
			updateContent();
		});
	
		$(window).resize(function () {
			updateContent();
		});
	});

});
