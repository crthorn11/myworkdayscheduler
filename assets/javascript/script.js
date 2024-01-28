// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $('.saveBtn').on('click', function(){
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('textarea').val() );
    })
      $("#hour-9 textarea").val(localStorage.getItem('hour-9'))
      $("#hour-10 textarea").val(localStorage.getItem('hour-10'))
      $("#hour-11 textarea").val(localStorage.getItem('hour-11'))
      $("#hour-12 textarea").val(localStorage.getItem('hour-12'))
      $("#hour-1 textarea").val(localStorage.getItem('hour-1'))
      $("#hour-2 textarea").val(localStorage.getItem('hour-2'))
      $("#hour-3 textarea").val(localStorage.getItem('hour-3'))
      $("#hour-4 textarea").val(localStorage.getItem('hour-4'))
      $("#hour-5 textarea").val(localStorage.getItem('hour-5'))
      $("#hour-6 textarea").val(localStorage.getItem('hour-6'))
    $("#currentDay").text(dayjs().format('MM/DD/YYYY'));
    $("#currentHour").text(dayjs().format('HH'));
  });
  // TODO: Add code to display the current date in the header of the page
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  const currentHour = document.querySelectorAll('#currentHour');
  
  const timeBlocks = document.querySelectorAll('.time-block');

  timeBlocks.forEach((timeBlock) => {

    const calendarHour = parseInt(timeBlock.getAttribute('data-hour'));
    
 if (calendarHour < currentHour) {
   timeBlock.classList.add('past');
 } else if (calendarHour === currentHour) {
   timeBlock.classList.add('present');
 } else {
   timeBlock.classList.add('future');
 }
 });

    //HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the 
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
//dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'




 // TODO: Add a listener for click events on the save button. This code should
      // use the id in the containing time-block as a key to save the user input in
      // local storage. HINT: What does `this` reference in the click listener
      // function? How can DOM traversal be used to get the "hour-x" id of the
      // time-block containing the button that was clicked? How might the id be
      // useful when saving the description in local storage?