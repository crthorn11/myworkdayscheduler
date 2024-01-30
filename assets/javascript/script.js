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
    //$("#currentHour").text('10');
    //$("#currentHour").text(dayjs().format('hh'));
  });
  // TODO: Add code to display the current date in the header of the page
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  const currentHour = dayjs().format('h');
  console.log("currentHour", currentHour);
  
  const timeBlocks = document.querySelectorAll('.time-block');

  timeBlocks.forEach((timeBlock) => {

    const calendarHour = timeBlock.getAttribute('id').split('-')[1];
    console.log("currentHour", currentHour);
    console.log("calendarHour", calendarHour);

 if (calendarHour < currentHour) {
   timeBlock.classList.add('past');
 } else if (calendarHour === currentHour) {
   timeBlock.classList.add('present');
 } else {
   timeBlock.classList.add('future');
 }
 });