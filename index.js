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
    // console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    console.log(data.data);

    const cardContainer  = document.getElementById('card-container');
    data.data.forEach((hero)=>{
        // console.log(hero);
        const div = document.createElement('div');
        div.innerHTML = `<div class="card space-y-8 bg-base-100 shadow-xl">
        <figure><img  src="${hero?.thumbnail}" alt="Shoes" /></figure>
        <div class="flex gap-4 ">
         <img class="w-12" src="${hero?.authors[0].profile_picture}" alt="">
          <p>${hero?.title}</p>
        </div>
          <div class="flex gap-4">
          <h3>${hero.authors[0].profile_name}</h3>
          <img src="./image/right.png" alt="">
        </div>
        <p>${hero.others.views}</P>
      </div>`;
      cardContainer.appendChild(div);
    });

}
handleCategory();