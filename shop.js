var count = 0
var total = 0
function increase0() {
	count++;
	total = total + 70
	alert("Item added: " + count + " ," + "Total is  Rs." + total)
}
function increase1() {
	count++;
	total = total + 210
	alert("Item added: " + count + " ," + "Total is  Rs." + total)
}function increase2() {
	count++;
	total = total + 540
	alert("Item added: " + count + " ," + "Total is  Rs." + total)
}function increase3() {
	count++;
	total = total + 765
	alert("Item added: " + count + " ," + "Total is  Rs." + total)
}function increase4() {
	count++;
	total = total + 300
	alert("Item added: " + count + " ," + "Total is  Rs." + total)
}function increase5() {
	count++;
	total = total + 199
	alert("Item added: " + count + " ," + "Total is  Rs." + total)
}function increase6() {
	count++;
	total = total + 250
	alert("Item added: " + count + " ," + "Total is  Rs." + total)
}function increase7() {
	count++;
	total = total + 99
	alert("Item added: " + count + " ," + "Total is  Rs." + total)
}function increase8() {
	count++;
	total = total + 150
	alert("Item added: " + count + " ," + "Total is  Rs." + total)
}




var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
	output.innerHTML = this.value;
}
