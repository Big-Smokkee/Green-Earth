const loadCategories = () => {
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url).then(res => res.json()).then(data => displayCategories(data.categories));
}
displayCategories = (datas) => {
    const categoriesSection = document.getElementById("category-section");
    // console.log(datas);
    categoriesSection.innerHTML = "";

    for (let data of datas) {
        const ul = document.createElement('ul');
        ul.innerHTML = `
                    <li class="h-10 flex items-center pl-[10px] hover:bg-[#15803D] text-black hover:text-white w-[180px] rounded-md">${data.category_name}</li>
        `
        categoriesSection.append(ul);
    }
}
loadCategories();
const allTreeLi = document.getElementById("all-tree-li");
const loadAllPlants = () => {
    const url = "https://openapi.programming-hero.com/api/plants";
    fetch(url).then(res => res.json()).then(data => displayAllPlants(data.plants));
}
// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//     "name": "Mango Tree",
//     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//     "category": "Fruit Tree",
//     "price": 500
// }


/*

<div class="card w-[250px] bg-white p-4 space-y-[12px]">
                    <img src="" alt="">
                    <h4 class="text-sm font-semibold inter">Mango Tree</h4>
                    <p class="inter text-xs">A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green</p>
                    <div class="flex justify-between items-center">
                        <p class="btn rounded-full text-[#15803D] bg-[#DCFCE7] text-sm">fruit tree</p>
                        <p class="text-sm"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>500</span></p>
                    </div>
                    <button class="btn btn-success bg-[#15803D] text-white rounded-full">Add to Cart</button>
                </div>


                */
const displayAllPlants = (datas) => {
    const plantCardContainer = document.getElementById("plant-card-container");
    console.log(datas);
    plantCardContainer.innerHTML = "";

    for (let data of datas) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-[250px] bg-white p-4 space-y-[12px]">
                    <img src="${data.image}" alt="" class="h-[350px]">
                    <h4 class="text-sm font-semibold inter">${data.name}</h4>
                    <p class="inter text-xs">A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green</p>
                    <div class="flex justify-between items-center">
                        <p class="btn rounded-full text-[#15803D] bg-[#DCFCE7] text-sm">${data.category}</p>
                        <p class="text-sm"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${data.price}</span></p>
                    </div>
                    <button class="btn btn-success bg-[#15803D] text-white rounded-full">Add to Cart</button>
                </div>
        `
        plantCardContainer.append(div);
    }
}
// allTreeLi.addEventListener("onclick",()=>{
//     fe
// })
loadAllPlants();