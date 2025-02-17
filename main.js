
let fetchdata=( async()=>{
    let loader=document.querySelector('.newtons-cradle')
    loader.style.display="flex"
    let data= await fetch("https://randomuser.me//api")
    let response= await data.json()
    loader.style.display="none"
    let img=document.querySelector('img').src=response.results[0].picture.large
    let h1=document.querySelector('h1').innerText=`${response.results[0].name.title} ${response.results[0].name.first} ${response.results[0].name.last}`
    let gender=document.querySelector('.gender').innerText=`${response.results[0].gender}`
    let email=document.querySelector('.email').innerText=response.results[0].email
    let location= document.querySelector('h2').innerText=` ${response.results[0].location.city} ${response.results[0].location.state} ${response.results[0].location.country}`
})
// fetchdata()