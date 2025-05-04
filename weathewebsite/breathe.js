
let btn=document.querySelector(".searchbar button");
let city=document.querySelector(".searchbar input");
let deg=document.querySelector(".temp");
let cityselect=document.querySelector(".city");
let hum=document.querySelector(".humadity");
let windchange=document.querySelector(".wind");
let i=document.querySelector(".icon")

document.querySelector(".weather").style.display="none";

let er=document.querySelector(".error");
er.style.display="none";

let s=document.querySelector(".searchbar input");
s.addEventListener("keydown",(event)=>{
  if(event.key==="Enter"){
    btn.click();
  }
})

btn.addEventListener( "click" , async ()=>{

  let cityname=city.value;
  console.log(cityname.toLowerCase());
    URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityname.toLowerCase()}&appid=02f96e3831caa462e25cc9af977cfc82`
    // URL="https://api.openweathermap.org/data/2.5/weather?q=germany&appid=02f96e3831caa462e25cc9af977cfc82";

  let response=await fetch(URL);
  let real=await response.json();
  console.log(real);
  if(real.cod=="404"){
    er.style.display="block";
    document.querySelector(".weather").style.display="none";
  }
  if(real.cod!="404"){
    er.style.display="none";
  }
  let p=real.weather[0].main;
   console.log(p);
   let temp=real.main.temp;
   celcius=temp-273.15;
    let t=Math.round(celcius);
   console.log(Math.round(celcius));
   let windspeed=real.wind.speed;
   let realspeed=windspeed*3.6;
   let c=Math.round(realspeed);
   console.log(Math.round(realspeed));
   let h=real.main.humidity;
   console.log(h);

  deg.innerText= `${t}°c`;
  cityselect.innerText=cityname;
  hum.innerText=`${h}%`
  windchange.innerText=`${c} km/h`

  if(p=="Clouds"){
    i.src="clouds.png";
  }
  else if(p=="Rain"){
    i.src="rain.png";
  }
  else if(p=="Drizzle"){
    i.src="drizzle.png";
  }
  else if(p=="Mist"){
    i.src="mist.png";
  }
  else if(p=="Clear"){
    i.src="clear.png";
  }
  else if(p=="Snow"){
    i.src="snow.png";
  }
 
document.querySelector(".weather").style.display="block";
})