// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”

$(function () {
  console.log("Let's get ready to party with jQuery!")
});

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
 
$('article img').addClass('image-center');

// Remove the last paragraph in the article.

// $('p').last().remove();
$("article p:last-child").remove();

// Set the font size of the title to be a random pixel size from 0 to 100.

$('#title').css('font-size', Math.random()*100);

// Add an item to the list; it can say whatever you want.
$('ol').append('<li>This list is getting too long...</li>');

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').html('').append('<p>I am so sorry for initially including a list. Paragraphs are much more sophisticated.</p>');

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$('.form-control').on('keyup blur change', function (){
let red = $(".form-control").eq(0).val();
let blue = $(".form-control").eq(1).val();
let green = $(".form-control").eq(2).val();
$("body").css("background-color",
    "rgb(" + red + ", " + green + "," + blue + ")");
});

// Add an event listener so that when you click on the image, it is removed from the DOM.

$('img').on('click', function (evt){
  // let target = evt.target;
  // target.remove();
  $(evt.target).remove();
})

