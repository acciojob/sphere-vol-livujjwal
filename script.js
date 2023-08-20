function volume_sphere() {
 const radiusElement = document.getElementById('radius');
 let volumeElement = document.getElementById('volume');
	let r = radiusElement.value;
	console.log(r);
	volumeElement.value = 4*r*r*r*(Math.PI)/3;
	console.log(volumeElement.value);

} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
