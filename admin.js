'use strict';

function clearStorage() {
  localStorage.clear();
  localStorage.saveCount = 0;
  document.getElementById('clearedResults').textContent = 'The previous votes have been cleared.';
  document.getElementById('votesTable').style.display = 'none';
}

function printTable() {
  var allImages = JSON.parse(localStorage['randomImagesAll']);
  document.getElementById('votesTable').style.display = 'block';
  var tbody = document.querySelector('tbody');
  var tr, th, td, thTextNode, tdTextNode, percentage, recommended;

  for (var i = 0; i < allImages.length; i++) {
    // Name
    tr = document.createElement('tr');
    th = document.createElement('th');
    thTextNode = document.createTextNode(allImages[i].name);
    th.appendChild(thTextNode);
    tr.appendChild(th);
    tbody.appendChild(tr);

    // Views
    td = document.createElement('td');
    tdTextNode = document.createTextNode(allImages[i].views);
    td.appendChild(tdTextNode);
    tr.appendChild(td);

    // Votes
    td = document.createElement('td');
    tdTextNode = document.createTextNode(allImages[i].votes);
    td.appendChild(tdTextNode);
    tr.appendChild(td);

    // Percentage
    percentage = allImages[i].votes / allImages[i].views * 100;
    if (isNaN(percentage)) {
      percentage = 'N/A';
    }
    td = document.createElement('td');
    tdTextNode = document.createTextNode(percentage.toFixed(1));
    td.appendChild(tdTextNode);
    tr.appendChild(td);

    // Recommended
    td = document.createElement('td');
    if (percentage >= 33.3) {
      recommended = 'YES';
      tr.style.backgroundColor = '#ff1969';
      th.style.border = 'solid 3px';
    } else {
      recommended = 'NO';
    }
    tdTextNode = document.createTextNode(recommended);
    td.appendChild(tdTextNode);
    tr.appendChild(td);
  }
}

if (localStorage.saveCount > 0) {
  printTable();
}

document.getElementById('totalVotes').textContent = parseInt(localStorage.saveCount) * 25;
document.getElementById('clearStorage').addEventListener('click', clearStorage);
