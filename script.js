//current day
let todayDate = moment().format("[Today is] Do MMMM YYYY");
let currentTime = moment().format("HH");
let eachRow = $("textarea");


$("#currentDay").text(todayDate);

// $(`textarea[data-time~=${test}]`).css("background-color", "green") // Working

savedTask();

setInterval(function(){
    for (let i = 0; i < eachRow.length; i++) {
        let thisRow = eachRow[i]
        let thisHour = thisRow.dataset.time;
                 
          if (~~currentTime > ~~thisHour) {
            console.log(thisHour);
            console.log(currentTime);
            $(`textarea[data-time~=${~~thisHour}]`).css("background-color", "lightpink")
            console.log("is bigger");
            
          } else if (~~currentTime < ~~thisHour) {
            console.log(thisHour);
            console.log(currentTime);
            $(`textarea[data-time~=${~~thisHour}]`).css("background-color", "lightgreen")
            console.log("is less");
          } else {
            $(`textarea[data-time~=${~~thisHour}]`).css("background-color", "lightyellow")
            console.log("is bang");
          }
       
        
    }      
        
    
},1000)

function savedTask() {
    for (let index = 0; index < eachRow.length; index++) {
        let thisRow = eachRow[index];
        let thisHour = thisRow.dataset.time;
        thisRow.textContent = localStorage.getItem(thisHour) 
        
    }
}


// if currentTime is != ( forward) then paint background grey other green
//.split 
// add set interval to check real life time



$(".btn").on("click", function (event) {

    // saving value from pressed button under certain dataset-time
    let inputValue = $('textarea[data-time~="' + event.target.parentElement.dataset.time + '"]').val();

    console.log(event.target.dataset.time);

    console.log($('textarea[data-time~="' + event.target.parentElement.dataset.time + '"]'))
    console.log(inputValue)
    localStorage.setItem(event.target.parentElement.dataset.time, inputValue);


   
});


