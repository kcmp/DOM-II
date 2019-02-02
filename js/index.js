// Your code goes here

//navs mouseover (mouseenter/out)
const link = document.querySelectorAll('a');
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
let images = document.getElementsByTagName('img')
document.addEventListener('keydown', function(event){
    images[0].style.transform = "rotate(180deg)";
})

//when a key is pressed, top image rotates

//wheel

// let hex = 0xF0;
// document.addEventListener('wheel', function (event) {
//   hex += 50;
//   event.target.style = ` background-color: #${hex.toString("16")}`
// })

// let container = document.querySelector(".container-home")
// container.addEventListener('wheel', event);

// container.addEventListener('wheel', (event) =>{
//     container.style.backgroundColor = 'blue';
//     // event.stopPropagation();
// })

const destinations = document.querySelectorAll('.destination p');
destinations.forEach(destination => {
    destination.addEventListener('wheel', function() {
        destination.style.fontSize = '2.2rem';
    });
});

// changes font of destination paragraphs as user uses the wheel

//drag
const headers = document.querySelectorAll('h2');

headers.forEach(headers => {
    headers.addEventListener('drag', function() {
        headers.style.color =  'green';
    });
});
//dragging items changes h2 to green

//load

//click
const contact = link[3];
contact.addEventListener('click', (event) => {
    alert("hello, here's some contact info");
})
//adds alert message when contact link is clicked

// dblclick
const about = link[1];
about.addEventListener('dblclick', (event) => {
	about.style.color = 'green';
})
//double click on about link turn text green

//select
const button = document.querySelector('.btn');
button.addEventListener('select', (event) => {
    button.style.backgroundColor = 'yellow';
    button.style.textColor = 'blue';
})

//turns first button yellow when selected
//need to figure out why it doesn't apply to all buttons

//scroll
document.addEventListener('scroll', function(){
	images[1].style.transform = "rotate(180deg)";
})
//rotates the second image while scrolling