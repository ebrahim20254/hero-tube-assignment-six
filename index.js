const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const heroContainer = document.getElementById('hero-container');
    data.data.forEach((data) => {
        const heroDiv = document.createElement('div');
        heroDiv.innerHTML = ` <a onclick =  handleLoadData(${data.category_id}) class="tab">${data.category}</a> `;
        heroContainer.appendChild(heroDiv);
    });

    // console.log(data.data);
}

// show data picture 
const handleLoadData = async (categoryId) => {
    console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    console.log(data.data);

    const cardContainer  = document.getElementById('card-container');
    // error massage do data 
        const noImage = document.getElementById('error-massage');
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML=`  <div class="flex justify-center">
          <img src="./image/Icon.png" alt="">
         </div>
         <p class="font-bold text-4xl text-center mt-4">Oops!! Sorry, There is no <br> content here</p>`;
        if(data.length > 0){
          errorDiv.classList.remove('hidden')
        }else{
          errorDiv.classList.add('hidden')
        }
        noImage.appendChild(errorDiv);
    cardContainer.innerHTML = "";
    data.data.forEach((hero)=>{
        // console.log(hero);  
        const div = document.createElement('div');
        div.innerHTML = `<div class="card h-full space-y-4 bg-gray-200 shadow-xl">
        <figure class = "w-full"><img  src="${hero?.thumbnail}" alt="Shoes" /></figure>
        <div class="flex items-center gap-4 ">
         <img class="h-12 w-12 rounded-full" src="${hero?.authors[0].profile_picture}" alt="">
          <p class="font-bold">${hero?.title}</p>
        </div>
          <div class="flex gap-2">
          <h3>${hero.authors[0].profile_name}</h3>
          <img src="${hero?.authors[0]?.verified ? hero.authors[0].verified: '/image/right.png' }" alt="">
        </div>
        <p>${hero.others.views}</P>
      </div>`;
      cardContainer.appendChild(div);
         
    });
        

};
// const handleShortBtn = () => {
//   // console.log('button clicked');
//   const shortData = cardContainer.sort((a,b)=>{
//     a = a?.others.views;
//     a = parseFloat(a.replace("k", ""));

//     b = b?.others.views;
//     b = parseFloat(b.replace("k",""));
//     return b-a;
//   });
//   cardContainer(sh)
// }

// function handleTimeSet(){
//   console.log(second);

//   const days = Math.floor(second / (3600 * 24));
//   second -= days * (3600 * 24);

//   const hours = Math.floor(second / 3600);
//   second -= hours * 3600;

//   const minutes =  Math.floor(second / 60);
//   second -= minutes * 60;

//   let handleTimeSet = "";

//   if(days > 0){
//     handleTimeSet += `${days} day`;
//     if(days >1){
//       handleTimeSet += "s";
//     }
//   }
// }

{/* <p onclick="handleTimeSet()" class="text-end">${hero.others.posted_date}</p> */}





handleCategory();
handleLoadData();