function highlight() {
    //Write your code here
	bold.style.color = green;
}

let bold = document.getElementsByTagName("strong");
bold.addEventListener("mouseover" , highlight);
bold.addEventListener("mouseout" ,return_normal);
function return_normal() {
    //Write your code here

    bold.style.color = black;
}
