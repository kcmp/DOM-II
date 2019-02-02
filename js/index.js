// Your code goes here

//navs mouseover (mouseenter/out)
const link = document.querySelectorAll('a');
console.log(link)
for(i=0;i<link.length;i++){
	link[i].addEventListener('mouseenter',function(event){
		event.target.style.color = "blue";
	})
	link[i].addEventListener('mouseout', function(event){
		event.target.style.color = "black";
	})
}
// changes navbar to blue from black when mouse hovers over link


//keydown
const images = document.getElementsByTagName('img')
console.log(images) 

document.addEventListener('keydown', function(){
    images[0].style.transform = "rotate(5deg)";
})

//when a key is pressed, top image rotates

