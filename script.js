'use strict';

RandomImages.all = [];
RandomImages.displayCounter = 0;

function RandomImages(name, url) {
  this.name = name;
  this.url = url;
  this.views = 0;
  this.votes = 0;
  RandomImages.all.push(this);
}

var box1El = document.getElementById('box1');
var box2El = document.getElementById('box2');
var box3El = document.getElementById('box3');
var random1, random2, random3, noDisplay1, noDisplay2, noDisplay3;
var names = [];
var percents = [];

if (localStorage.saveCount > 0) {
  RandomImages.all = JSON.parse(localStorage['randomImagesAll']);
} else {
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
}


// Chart displaying percentage of votes over views
function displayChartPercentages() {
  var ctx = document.getElementById('percentageResults').getContext('2d');
  new Chart(ctx,{
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '% voted',
        backgroundColor: 'pink',
        borderColor: 'white',
        data: percents,
      }]
    },
    options: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Percentage Of Votes (Votes / Views)',
        fontColor: 'white',
      },
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce',
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'white',
            autoSkip: false,
          },
          gridLines: {
            color: '#f76795',
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: 'white',
            min: 0,
          },
          gridLines: {
            color: '#f76795',
          }
        }]
      }
    },
  });
}

function updateChartArrays() {
  for (var i = 0; i < RandomImages.all.length; i++) {
    var randomImg = RandomImages.all[i];

    names[i] = randomImg.name + ' ' + randomImg.votes + '/' + randomImg.views;
    var imagesPercents = randomImg.votes / randomImg.views * 100;
    percents[i] = imagesPercents.toFixed(1);
  }
  localStorage['randomImagesAll'] = JSON.stringify(RandomImages.all);
}

// Function called when image is clicked
function displayImages(event) {
  var randomIndex1, randomIndex2, randomIndex3;
  var image1El = box1El.firstChild;
  var image2El = box2El.firstChild;
  var image3El = box3El.firstChild;

  // Adds vote for item clicked
  var target = event.target;
  if (target === image1El) {
    random1.votes += 1;
    console.log('* ' + random1.name + '| Total Votes: ' + random1.votes);
  }
  else if (target === image2El) {
    random2.votes += 1;
    console.log('* ' + random2.name + '| Total Votes: ' + random2.votes);
  }
  else if (target === image3El) {
    random3.votes += 1;
    console.log('* ' + random3.name + '| Total Votes: ' + random3.votes);
  }

  // Generates new images, checks they do not repeat current or previous iteration, & adds views
  do {
    randomIndex3 = Math.floor(Math.random() * RandomImages.all.length);
  } while(randomIndex3 === noDisplay1 || randomIndex3 === noDisplay2 || randomIndex3 === noDisplay3);

  do {
    randomIndex2 = Math.floor(Math.random() * RandomImages.all.length);
  } while (randomIndex2 === randomIndex3 || randomIndex2 === noDisplay1 || randomIndex2 === noDisplay2 || randomIndex2 === noDisplay3);

  do {
    randomIndex1 = Math.floor(Math.random() * RandomImages.all.length);
  }
  while (randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3 || randomIndex1 === noDisplay1 || randomIndex1 === noDisplay2 || randomIndex1 === noDisplay3);

  noDisplay1 = randomIndex1;
  noDisplay2 = randomIndex2;
  noDisplay3 = randomIndex3;

  random1 = RandomImages.all[randomIndex1];
  random2 = RandomImages.all[randomIndex2];
  random3 = RandomImages.all[randomIndex3];

  image1El.src = random1.url;
  image2El.src = random2.url;
  image3El.src = random3.url;

  random1.views += 1;
  random2.views += 1;
  random3.views += 1;

  console.log(random1.name + ' | Total Views: ' + random1.views);
  console.log(random2.name + ' | Total Views: ' + random2.views);
  console.log(random3.name + ' | Total Views: ' + random3.views);

  // Checks if user has voted 25 times
  RandomImages.displayCounter++;
  if (RandomImages.displayCounter === 26) {
    document.getElementById('allImages').style.display = 'none';
    document.getElementById('showResults').style.display = 'block';

    updateChartArrays();
    displayChartPercentages();

    // Allows user to continue voting or to reset saved data
    localStorage.saveCount = parseInt(localStorage.saveCount) + 1;
    document.getElementById('saveCount').innerHTML = parseInt(localStorage.saveCount) * 25;
  }
}

// Local storage save count
if (!localStorage.saveCount) {
  localStorage.saveCount = 0;
}

// Event Listeners
window.addEventListener('load', displayImages);
box1El.addEventListener('click', displayImages);
box2El.addEventListener('click', displayImages);
box3El.addEventListener('click', displayImages);
skipButton.addEventListener('click', displayImages);
