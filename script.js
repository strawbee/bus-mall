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

image1El.addEventListener('click', displayImages);
image2El.addEventListener('click', displayImages);
image3El.addEventListener('click', displayImages);

var noDisplay1, noDisplay2, noDisplay3;
var displayCounter = 0;

function displayImages() {
  var randomIndex1 = Math.floor(Math.random() * RandomImages.all.length);
  var randomIndex2 = Math.floor(Math.random() * RandomImages.all.length);
  var randomIndex3 = Math.floor(Math.random() * RandomImages.all.length);

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
  }

/*
  if (num === 1) {
    RandomImages.all[randomIndex1].votes += 1;
  }
  else if (num === 2) {
    RandomImages.all[randomIndex2].votes += 1;
  }
  else if (num === 3) {
    RandomImages.all[randomIndex3].votes += 1;
  }
  */
}
displayImages();
