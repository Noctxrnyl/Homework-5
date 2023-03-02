window.onload = function(){
    $('.saveBtn').on('click' , recordlog);
    function recordlog(){
        console.log('Clicked');
        var textArea = $(this).siblings('.description').val()
        console.log(textArea)
        var key = $(this).parent().attr('id')
        console.log(key)
        localStorage.setItem(key, textArea)
    }


var hour = dayjs().hour()
console.log(hour)

$('.time-block').each(function(){
    var divHour = $(this).attr('id').split('-')[1]
    console.log(divHour)
    if (hour > divHour){
        $(this).addClass('past')
    } else if(hour == divHour){
        $(this).removeClass('past')
        $(this).addClass('present')
    } else {
        $(this).removeClass('present')
        $(this).removeClass('past')
        $(this).addClass('future')
    }
});

const dayJsObject = dayjs();

document.getElementById('currentDay').innerHTML = dayJsObject.format('dddd, MMMM D, YYYY');
}