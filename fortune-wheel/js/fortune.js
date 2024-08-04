let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);
let width = 1600/responses.length;
//let width = 200;
let rotateBy = 360/responses.length;

let first = document.querySelector('.container .one');

const containerStyle = getComputedStyle(container);
let containerWidth = parseInt(containerStyle.getPropertyValue('width'));
/* containerWidth = containerWidth/8*responses.length;
container.style.width = containerWidth + 'px';
container.style.height = containerWidth + 'px'; */
let containerBorderWidth = parseInt(containerStyle.getPropertyValue('border-width'));
/* containerBorderWidth = containerBorderWidth/8*responses.length;
container.style.borderWidth = containerBorderWidth + 'px'; */

const rand = (a,b) => {
	return Math.floor(Math.random()*(b-a+1)) + a;
}

const randomColor = () => {
	
	return `rgb(${rand(0,255)},${rand(0,255)},${rand(0,255)})`;
}

first.style.width = width + 'px';
first.style.backgroundColor = randomColor();
first.innerText = responses[0];

for (let i = 0;+ i < responses.length; i++) {
	const newEl = document.createElement('div');
	container.append(newEl);
	newEl.style.width = width + 'px';
	newEl.style.height = containerWidth/2 + 'px';
	newEl.style.left = (containerWidth/2)-containerBorderWidth-width/2 + 'px';
	newEl.style.transform = `rotate(${rotateBy * i}deg)`;
	newEl.style.backgroundColor = randomColor();
	newEl.innerText = responses[i];
}

btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
}