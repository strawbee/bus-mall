'use strict';

RandomImages.all = [];

function RandomImages(name, url) {
  this.name = name;
  this.url = url;
  this.views = 0;
  this.votes = 0;
  RandomImages.all.push(this);
}

new RandomImages('Travel Bag', 'images/bag.jpg');
new RandomImages('Banana Cutter', 'images/banana.jpg');
new RandomImages('Bathroom Ipad Holder', 'images/bathroom.jpg');
new RandomImages('Boots', 'images/boots.jpg');
new RandomImages('Breakfast Maker', 'images/breakfast.jpg');
new RandomImages('Meatball Bubble Gum', 'images/bubblegum.jpg');
new RandomImages('Chair', 'images/chair.jpg');
new RandomImages('Cthulhu', 'images/cthulhu.jpg');
new RandomImages('Duck-Beaked Dog', 'images/dog-duck.jpg');
new RandomImages('Dragon Meat', 'images/dragon.jpg');
new RandomImages('Pen Cutlery', 'images/pen.jpg');
new RandomImages('Pet Sweep Shoes', 'images/pet-sweep.jpg');
new RandomImages('Scissors', 'images/scissors.jpg');
new RandomImages('Shark Sleeping Bag', 'images/shark.jpg');
new RandomImages('Baby Sweep Onesie', 'images/sweep.png');
new RandomImages('Tauntaun Sleeping Bag', 'images/tauntaun.jpg');
new RandomImages('Unicorn Meat', 'images/unicorn.jpg');
new RandomImages('Tentacle USB', 'images/usb.gif');
new RandomImages('Self Watering Can', 'images/water-can.jpg');
new RandomImages('Wine Glass', 'images/wine-glass.jpg');

var image1El = document.getElementById('image1');
var image2El = document.getElementById('image2');
var image3El = document.getElementById('image3');

var noDisplay1, noDisplay2, noDisplay3;
var displayCounter = 0;

// Function Called When Image Is Clicked
function displayImages(e) {
  var target = e.target;
  if (target == image1El) {
    RandomImages.all[randomIndex1].votes += 1;
  }
  else if (target == image2El) {
    RandomImages.all[randomIndex2].votes += 1;
  }
  else if (target == image3El) {
    RandomImages.all[randomIndex3].votes += 1;
  }

  randomIndex1 = Math.floor(Math.random() * RandomImages.all.length);
  randomIndex2 = Math.floor(Math.random() * RandomImages.all.length);
  randomIndex3 = Math.floor(Math.random() * RandomImages.all.length);

  while(randomIndex3 === noDisplay1 || randomIndex3 === noDisplay2 || randomIndex3 === noDisplay3) {
    randomIndex3 = Math.floor(Math.random() * RandomImages.all.length);
  }

  while (randomIndex2 === randomIndex3 || randomIndex2 === noDisplay1 || randomIndex2 === noDisplay2 || randomIndex2 === noDisplay3) {
    randomIndex2 = Math.floor(Math.random() * RandomImages.all.length);
  }

  while (randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3 || randomIndex1 === noDisplay1 || randomIndex1 === noDisplay2 || randomIndex1 === noDisplay3) {
    randomIndex1 = Math.floor(Math.random() * RandomImages.all.length);
  }

  image1El.src = RandomImages.all[randomIndex1].url;
  image2El.src = RandomImages.all[randomIndex2].url;
  image3El.src = RandomImages.all[randomIndex3].url;

  noDisplay1 = randomIndex1;
  noDisplay2 = randomIndex2;
  noDisplay3 = randomIndex3;

  RandomImages.all[randomIndex1].views += 1;
  RandomImages.all[randomIndex2].views += 1;
  RandomImages.all[randomIndex3].views += 1;

  displayCounter++;
  if (displayCounter === 25) {
    var randomImagesContent = document.getElementById('randomImages');
    randomImagesContent.innerHTML = 'You have voted 25 times: <br />';
    console.log('VIEWS AND VOTES:');
    for (var i = 0; i < RandomImages.all.length; i++) {
      randomImagesContent.innerHTML += RandomImages.all[i].name + ': ' + RandomImages.all[i].views + ' views || ' + RandomImages.all[i].votes + ' votes<br />';
      console.log(RandomImages.all[i].name + ': ' + RandomImages.all[i].views + ' views || ' + RandomImages.all[i].votes + ' votes');
    }
  }
}

// Display Initial Random Images

var randomIndex1 = Math.floor(Math.random() * RandomImages.all.length);
var randomIndex2 = Math.floor(Math.random() * RandomImages.all.length);
var randomIndex3 = Math.floor(Math.random() * RandomImages.all.length);

while (randomIndex2 === randomIndex3) {
  randomIndex2 = Math.floor(Math.random() * RandomImages.all.length);
}

while (randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3) {
  randomIndex1 = Math.floor(Math.random() * RandomImages.all.length);
}

image1El.src = RandomImages.all[randomIndex1].url;
image2El.src = RandomImages.all[randomIndex2].url;
image3El.src = RandomImages.all[randomIndex3].url;

noDisplay1 = randomIndex1;
noDisplay2 = randomIndex2;
noDisplay3 = randomIndex3;

RandomImages.all[randomIndex1].views += 1;
RandomImages.all[randomIndex2].views += 1;
RandomImages.all[randomIndex3].views += 1;

// Event Listeners

image1El.addEventListener('click', displayImages);
image2El.addEventListener('click', displayImages);
image3El.addEventListener('click', displayImages);
