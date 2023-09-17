function whatToDoOnClick(){
  alert("I was clicked!");
}
let btn__click_me = document.getElementById("btn__click-me")
btn__click_me.addEventListener('click',whatToDoOnClick)