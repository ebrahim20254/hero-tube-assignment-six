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
    cardContainer.innerHTML = "";
    data.data.forEach((hero)=>{
        // console.log(hero);
        const div = document.createElement('div');
        div.innerHTML = `<div class="card h-full space-y-4 bg-gray-200 shadow-xl">
        <figure class = "w-full"><img  src="${hero?.thumbnail}" alt="Shoes" /></figure>
          
        <div class="flex items-center gap-4 ">
         <img class="w-12 rounded-full" src="${hero?.authors[0].profile_picture}" alt="">
          <p class="font-bold">${hero?.title}</p>
        </div>
          <div class="flex gap-2 justify-center">
          <h3>${hero.authors[0].profile_name}</h3>
          <img src="./image/right.png" alt="">
        </div>
        <p class="text-center">${hero.others.views}</P>
      </div>`;
      cardContainer.appendChild(div);
    });

}
handleCategory();
handleLoadData();