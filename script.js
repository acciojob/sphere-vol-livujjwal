

function volume_sphere() {
 const radiusElement = document.getElementById('radius');
 let volumeElement = document.getElementById('volume');
	let r = radiusElement.value;
	volumeElement.value = (4*r*r*r*Math.PI)/3;

} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
