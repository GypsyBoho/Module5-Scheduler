// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.

  // This code should use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


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
