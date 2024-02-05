$(function () {
  $('.saveBtn').on('click', function(){
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('textarea').val() );
    })
      $("#hour-9 textarea").val(localStorage.getItem('hour-9'))
      $("#hour-10 textarea").val(localStorage.getItem('hour-10'))
      $("#hour-11 textarea").val(localStorage.getItem('hour-11'))
      $("#hour-1 textarea").val(localStorage.getItem('hour-12'))
      $("#hour-1 textarea").val(localStorage.getItem('hour-13'))
      $("#hour-2 textarea").val(localStorage.getItem('hour-14'))
      $("#hour-3 textarea").val(localStorage.getItem('hour-15'))
      $("#hour-4 textarea").val(localStorage.getItem('hour-16'))
      $("#hour-5 textarea").val(localStorage.getItem('hour-17'))
      $("#hour-6 textarea").val(localStorage.getItem('hour-18'))
    $("#currentDay").text(dayjs().format('MM/DD/YYYY'));
  });

  //const calendarHour = dayjs().format('MM/DD/YYY');
  const calendarHour = dayjs().format('H');
  const currentHour = parseInt( dayjs().format('H'));
  
  const timeBlocks = document.querySelectorAll('.time-block');

  timeBlocks.forEach((timeBlock) => {

    const calendarHour = parseInt( timeBlock.getAttribute('id').split('-')[1]);
    console.log("currentHour", currentHour);
    console.log("calendarHour", calendarHour);

 if (currentHour > calendarHour) {
   timeBlock.classList.add('past');
   timeBlock.classList.remove('present');
   timeBlock.classList.remove('future');
 } else if (currentHour === calendarHour) {
   timeBlock.classList.remove('past');
   timeBlock.classList.remove('future');
   timeBlock.classList.add('present');
 } else {
   timeBlock.classList.remove('past');
   timeBlock.classList.remove('present');
   timeBlock.classList.add('future');
 }
 });