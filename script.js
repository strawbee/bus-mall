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
var random1, random2, random3, noDisplay1, noDisplay2, noDisplay3;
var displayCounter = 0;

// Function Called When Image Is Clicked
function displayImages(event) {
  var randomIndex1, randomIndex2, randomIndex3, randomImg, randomImagesPercent;

  var target = event.target;
  if (target === image1El) {
    random1.votes += 1;
    console.log(random1.name + ' has been voted for ' + random1.votes + ' times.');
  }
  else if (target === image2El) {
    random2.votes += 1;
    console.log(random2.name + ' has been voted for ' + random2.votes + ' times.');
  }
  else if (target === image3El) {
    random3.votes += 1;
    console.log(random3.name + ' has been voted for ' + random3.votes + ' times.');
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

  random1 = RandomImages.all[randomIndex1];
  random2 = RandomImages.all[randomIndex2];
  random3 = RandomImages.all[randomIndex3];

  image1El.src = random1.url;
  image2El.src = random2.url;
  image3El.src = random3.url;

  noDisplay1 = randomIndex1;
  noDisplay2 = randomIndex2;
  noDisplay3 = randomIndex3;

  random1.views += 1;
  random2.views += 1;
  random3.views += 1;

  console.log(random1.name + ' has been viewed ' + random1.views + ' times.');
  console.log(random2.name + ' has been viewed ' + random2.views + ' times.');
  console.log(random3.name + ' has been viewed ' + random3.views + ' times.');

  displayCounter++;
  if (displayCounter === 26) {
    var randomImagesContent = document.getElementById('randomImages');
    randomImagesContent.innerHTML = 'You have voted 25 times: <br />';
    for (var i = 0; i < RandomImages.all.length; i++) {
      randomImg = RandomImages.all[i];
      randomImagesContent.innerHTML += randomImg.name + ': ' + randomImg.views + ' views || ' + randomImg.votes + ' votes';

      randomImagesPercent = randomImg.votes / randomImg.views * 100;
      if (!isNaN(randomImagesPercent)) {
        randomImagesContent.innerHTML += ' || ' + randomImagesPercent.toFixed(1) + '% chosen';
      }
      randomImagesContent.innerHTML += '<br />';
    }
  }
}

// Event Listeners
window.addEventListener('load', displayImages);
image1El.addEventListener('click', displayImages);
image2El.addEventListener('click', displayImages);
image3El.addEventListener('click', displayImages);
