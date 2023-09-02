const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const heroContainer = document.getElementById('hero-container');
    data.data.forEach((data) => {
        const heroDiv = document.createElement('div');
        heroDiv.innerHTML = ` <a onclick =  handleLoadData(${data.category_id}) class="tab">${data.category}</a> `;
        heroContainer.appendChild(heroDiv);
    });

}

// show all data picture 
const handleLoadData = async (categoryId) => {
    console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const card = data.data;
    console.log(card);

    const cardContainer  = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    // error massage  
    const noImage = document.getElementById('error-massage');
   
    if(card.length == 0){
      noImage.classList.remove('hidden')
    }
    else{
      noImage.classList.add('hidden')
    }

    data.data.forEach((hero)=>{
        // console.log(hero);  
        const div = document.createElement('div');
        div.innerHTML = `<div class="card h-90 w-90 space-y-4 bg-gray-200 shadow-xl">
        <figure>
        <img class="w-full h-[250px]"  src="${hero?.thumbnail}" alt="Shoes" />
        <span onclick="handleTimeSet()" class="absolute right-10 bg-black text-white bottom-40 px-2">${hero.others.posted_date}</span>
        </figure>
        <div class="flex items-center gap-4 ">
         <img class="h-12 w-12 rounded-full" src="${hero?.authors[0].profile_picture}" alt="">
          <p class="font-bold">${hero?.title}</p>
        </div>
          <div class="flex gap-2">
          <h3 class="font-bold">${hero.authors[0].profile_name}</h3>
          <img src="${hero?.authors[0]?.verified ? hero.authors[0].verified: '/image/right.png' }" alt="">
        </div>
        <p class="font-bold">${hero.others.views}</P>
      </div>`;
      cardContainer.appendChild(div);
         
    });
        

};


function handleTimeSet(){
  console.log(second);

  const days = Math.floor(second / (3600 * 24));
  second -= days * (3600 * 24);

  const hours = Math.floor(second / 3600);
  second -= hours * 3600;

  const minutes =  Math.floor(second / 60);
  second -= minutes * 60;

  let handleTimeSet = "";

  if(days > 0){
    handleTimeSet += `${days} day`;
    if(days >1){
      handleTimeSet += "s";
    }
  }
}



handleCategory();
handleLoadData();