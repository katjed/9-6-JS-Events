var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {

	var element = document.createElement('li');
	var elementCount = document.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + elementCount;
	list.appendChild(element);
});






