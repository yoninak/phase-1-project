const feedDiv = document.getElementById("feeding")

document.addEventListener('DOMContentLoaded', () => {
  getInfo() 
})

function getInfo(){
  fetch("http://localhost:3000/babyFeedByMonth")
  .then(res => res.json())
  .then(data => {
    handleData(data) 
  })
}

function handleData(data){
  const selection = document.getElementById("months")
  selection.addEventListener("change", (event) => {
    iteration(selection.value, data)    
  })
}

function iteration(value, data){
  data.forEach(month => {
    if (value == month.id){
      display(month)
    }
  });

}

function display(month){
  feedDiv.removeChild(feedDiv.lastChild)
  feedDiv.removeChild(feedDiv.lastChild)
  const feedingInfo = document.createElement("p")
  feedingInfo.textContent= "ounces per feed:" + month.ouncesPerFeed 
  feedDiv.appendChild(feedingInfo)
  const moreInfo = document.createElement("p") 
  moreInfo.textContent = "feeds per day:" + month.feedsPerDay
  feedDiv.appendChild(moreInfo)
}
 
document.getElementById("header").addEventListener("click", (event) =>{
  if (event.target.style.color  === "rgb(242, 48, 197)"){
    return event.target.style.color  = 'blue'
  }
  else{
    return event.target.style.color = "rgb(242, 48, 197)"
  }
 })

