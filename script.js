// This function will run as soon as the page loads
$(function () {
  // formatted the current hour into 24 hours
  var currentHour = parseInt(dayjs().format('H'));

  // Displays the current date in the header element already created for us in the HTML //

  var currentDate = dayjs().format('ddd, MMMM, D, YYYY');
  $('#currentDay').text(currentDate);

  // Applying past, present, future class to each time block

  $('.time-block').each(function () {
    var timeBlockId = $(this).attr('id');
    var hourId = parseInt(timeBlockId.split('-')[1]);

    // applying different classes depending on relation to current time //
    if (hourId < currentHour) {
      $(this).addClass('past');
    } else if (hourId === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })
});

$('.time-block').each(function () {
  var timeBlockId = $(this).attr('id');
  var hourId = timeBlockId.split('-')[1];
  var descriptionTextArea = $(this).find('.description');
  var savedDescription = localStorage.getItem(hourId);

  if (savedDescription) {
    descriptionTextArea.val(savedDescription);
  }
});

// Add a listener for click events on the save button.
var saveButtons = $('.saveBtn');

// Add jquery event listener
saveButtons.on('click', function () {
  var timeBlock = $(this).closest('.time-block');
  var timeBlockId = timeBlock.attr('id');
  var hourId = parseInt(timeBlockId.split('-')[1]);
  var descriptionTextArea = timeBlock.find('.description');
  var descriptionValue = descriptionTextArea.val();

  // create event listner that will save the text - localStorage
  localStorage.setItem(hourId, descriptionValue);
});

// Pseudo Code
// Step 1
// Create all your Global variables
// var 1 - query selector for time at the top

// Step 2 - Create a section for your functions
//  create function to handle the save button
//  create function populates the content and color of the different elements on the page
//  create function that consistantly updates the page - method - setInterval

// Step 3 - creat event listners
// on.click, handle save function
// no need to call the start function because it already populates on the page

// Add event listeners and a function to start the program/load the information on the calendar
