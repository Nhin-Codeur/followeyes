

let elem = document.getElementById('rick');
let rect = elem.getBoundingClientRect();
const x_milieu = (rect.left) + (rect.width / 2);
const y_milieu = (rect.top) + (rect.height / 2 );



addEventListener("mousemove", (event) => {

	

	const result = angle(event.clientX, event.clientY, x_milieu, y_milieu)
	document.getElementsByClassName("eyes")[0].style.transform =  `rotate(${90+result}deg)`;
	document.getElementsByClassName("eyes")[1].style.transform =  `rotate(${90+result}deg)`;
	elem.style.filter=`hue-rotate(${result}deg)`
	
});	

function distance (p1x, p1y, p2x, p2y) {

	return Math.sqrt(((p2y-p1y)**2)+((p2x-p1x)**2))

}

function angle (p1x, p1y, p2x, p2y) {

	const distances_y = p2y-p1y
	const distances_x = p2x-p1x
	const rad = Math.atan2(distances_y, distances_x)
	const deg = rad*180/Math.PI
	return deg
}
