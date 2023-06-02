
let button = document.querySelector("#btn");
let result = document.querySelector("#result");

button.addEventListener("click", async ()=>{
  try{
    let data = await fetch(`https://bible-api.com/john%203:16`)
    let data1 = await data.json();
    console.log(data1)
    result.innerHTML = 
     
    `
    REFERANCE : ${data1.reference}<br>
    TEXT : ${data1.text}<br>
    TRANSLATION_ID : ${data1.translation_id}<br>
    TRANSLATION_NAME : ${data1.translation_name}<br>
    TRANSLATION_NOTE : ${data1.translation_note}<br>
    
    
    `
  }
  catch{
    console.log(console.error())
  }
    
})