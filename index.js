// Color Square and Speech Bubble elements
const colorSquare = document.getElementById('colorSquare');
const speechBubble = document.getElementById('speech-bubble');
const speechText = document.getElementById('speech-text');
const photoDesc = document.getElementById('photoDesc');

let colors = [
  { class: 'changeColor1', name: 'Red', description: 'Red is a color often associated with passion and energy.' },
  { class: 'changeColor2', name: 'Pink', description: 'Pink is often seen as a color of love and calmness.' },
  { class: 'changeColor3', name: 'Violet', description: 'Violet represents creativity and imagination.' },
  { class: 'changeColor4', name: 'Orange', description: 'Orange is known for its warmth and enthusiasm.' },
  { class: 'changeColor5', name: 'Green', description: 'Green symbolizes nature, growth, and harmony.' },
  { class: 'changeColor6', name: 'Yellow', description: 'Yellow is a color of happiness and positivity.' },
  { class: 'changeColor7', name: 'Purple', description: 'Purple is associated with royalty and luxury.' }
];

let currentColorIndex = 0;
let index = 0;  // For text typing effect
let message = '';  // The message to display in the speech bubble

// Function to toggle the color and display avatar speech
colorSquare.addEventListener('click', function() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  
  // Remove any existing color class
  colors.forEach(color => colorSquare.classList.remove(color.class));
  
  // Add the next color class
  colorSquare.classList.add(colors[currentColorIndex].class);
  
  // Prepare the message for the speech bubble
  let chosenColor = colors[currentColorIndex].name;
  let description = colors[currentColorIndex].description;
  message = `You have chosen ${chosenColor}. This color is commonly associated with ${description}`;
    document.querySelector('.photoDesc').textContent = `${chosenColor}`



  // Reset the speech bubble and start the animation
  resetSpeechBubble();
  showSpeechBubble();
});

// Reset speech bubble
function resetSpeechBubble() {
  index = 0;
  speechText.textContent = '';  // Clear any previous text
  speechBubble.style.display = 'none';  // Initially hide the bubble
  speechBubble.style.opacity = 0;  // Set opacity to 0
}

// Function to show the speech bubble with the typing effect
function showSpeechBubble() {
  speechBubble.style.display = 'block';  // Show the bubble
  speechBubble.style.opacity = 1;  // Make it visible
  typeText();  // Start typing the message
}

// Type text animation
function typeText() {
  if (index < message.length) {
    speechText.textContent += message.charAt(index);  // Add one character at a time
    index++;
    setTimeout(typeText, 100);  // Adjust typing speed here
  } else {
    setTimeout(() => {
      speechBubble.style.opacity = 0;  // Fade out after finishing
      setTimeout(() => {
        speechBubble.style.display = 'none';  // Hide the bubble after fading out
      }, 1000);  // Delay before hiding
    }, 2000);  // Delay before fading out
  }
}

// Initially hide the speech bubble on page load
window.onload = resetSpeechBubble;

const avatarFoto = document.getElementById('avatarFoto')

avatarFoto.addEventListener('click', function(){
    message = "😀Hello! You clicked me.. Go ahead and Click on the Box"
    typeText()
    resetSpeechBubble()
    showSpeechBubble()

})