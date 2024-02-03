$(function () {
  $('.saveBtn').on('click', function () {
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('textarea').val());
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
});

const currentHour = dayjs().format('H');
console.log("currentHour", currentHour);

const timeBlocks = document.querySelectorAll('.time-block');

timeBlocks.forEach((timeBlock) => {

  const calendarHour = timeBlock.getAttribute('id').split('-')[1];
  console.log("currentHour", currentHour);
  console.log("calendarHour", calendarHour);

  if (currentHour < calendarHour) {
    timeBlock.classList.add('past');
  } else if (calendarHour === currentHour) {
    timeBlock.classList.add('present');
  } else {
    timeBlock.classList.add('future');
  }
});