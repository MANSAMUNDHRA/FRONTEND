// const baseurl="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
// ;
// let dropdowns=document.querySelectorAll("select");

// const fromcurr=document.querySelector(".from select");
// const tocurr=document.querySelector(".to select");
// for( let select of dropdowns){
//   for(m in countryList){
//     let newoption=document.createElement("option");
//     newoption.innerText=m;
//     newoption.value=m;
//     if (select === tocurr && m === "USD") {
//       newoption.selected = true;
//     }
//     if (select === fromcurr && m === "INR") {
//       newoption.selected = true;
//     }
    
//     select.append(newoption);
//     select.addEventListener("change",(evt)=>
//     {updateFlag(evt.target)})
//   }
// }

// updateFlag=(element)=>{
//   let j=element.value;
//   // console.log(j);
//   let countrycode=countryList[j];
//   let scrimg= `https://flagsapi.com/${countrycode}/flat/64.png`;
//   let im=element.parentElement.querySelector("img");
//   im.src=scrimg;
// }

// const btn=document.querySelector("form button");
// btn.addEventListener("click", async (evt)=>{
//   evt.preventDefault();
//   let amount=document.querySelector(".amount input");
//   let amtval=amount.value;
//   console.log(fromcurr.value,tocurr.value);
//   const URL=`${baseurl}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json` 
//   let response= await fetch(URL);
//   console.log(response);
  
// })
const baseurl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let dropdowns = document.querySelectorAll("select");

const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");

for( let select of dropdowns){
  for(m in countryList){
    let newoption=document.createElement("option");
    newoption.innerText=m;
    newoption.value=m;
    if (select === tocurr && m === "USD") {
             newoption.selected = true;
           }
          if (select === fromcurr && m === "INR") {
            newoption.selected = true;
          }
    select.append(newoption);
    select.addEventListener("change",(evt)=>
    {updateFlag(evt.target)})
  }
}

const updateFlag = (element) => {
  let j = element.value;
  let countrycode = countryList[j];
  let scrimg = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let im = element.parentElement.querySelector("img");
  im.src = scrimg;
};

const btn = document.querySelector("form button");
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtval = amount.value;

  const from = fromcurr.value.toLowerCase();
  const to = tocurr.value.toLowerCase();
  const URL = `${baseurl}/${from}.json`;

  try {
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data[from][to];
    let converted = (amtval * rate).toFixed(2);

    alert(`${amtval} ${fromcurr.value} = ${converted} ${tocurr.value}`);
    console.log(`${amtval} ${fromcurr.value} = ${converted} ${tocurr.value}`);
  } catch (err) {
    console.log("Fetch error:", err);
  }
});
