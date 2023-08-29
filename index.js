const feedDiv = document.getElementById("feeding")
//grabs div with id feeding 
document.addEventListener('DOMContentLoaded', () => {
  getInfo()
  //so when the page loads the function getinfo will run
})

// 
function getInfo(){
  fetch("http://localhost:3000/babyFeedByMonth")
  .then(res => res.json())
  .then(data => {
    handleData(data) 
    // here i fetch my data from my db.json file which contains my feeding info
    //i succesfully got my data in the console
    // data.forEach(Object => {
      
      // const feedingInfo = document.createElement("p")
      // feedingInfo.textContent= "ounces per feed:" + Object.ouncesPerFeed 
      // feedDiv.appendChild(feedingInfo)
      // console.log(feedingInfo)
      // //console.log(Element)
      // const moreInfo = document.createElement("p") 
      // console.log(moreInfo)
      // moreInfo.textContent = "feeds per day:" + Object.feedsPerDay
      // feedDiv.appendChild(moreInfo)
    // });
    //"babyFeedByMonth" = data
    // "id": 1,
    // "months" : "1",
    // "ouncesPerFeed" : "2-4",
    // "feedsPerDay" : "6-8"},



  })
}

function handleData(data){
  const selection = document.getElementById("months")
  selection.addEventListener("click", () => {
    console.log("event")
  })
}