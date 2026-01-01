// cart logic 1
    let cart = [];
// shb category load korar code
const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};
displayCategories = (datas) => {
  const categoriesSection = document.getElementById("category-section");
  categoriesSection.innerHTML = "";

  for (let data of datas) {
    const ul = document.createElement("ul");
    ul.innerHTML = `
                    <li id ="list-${data.id}" onClick="loadFeaturedPlant('${data.id}')"class="h-10 flex items-center pl-[10px] hover:bg-[#15803D] text-black hover:text-white w-[180px] rounded-md pointer">${data.category_name}</li>
        `;
    categoriesSection.append(ul);
  }
};
loadCategories();

// shb plant load korar code
const loadAllPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllPlants(data.plants));
};
const displayAllPlants = (datas) => {
  const plantCardContainer = document.getElementById("plant-card-container");
  plantCardContainer.innerHTML = "";
  for (let data of datas) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card w-[240px]  bg-white p-4 space-y-[12px]"> 
        <img src="${data.image}" alt="" class="h-[300px] rounded-lg">
        <h4 class="text-sm font-semibold inter plant-name">${data.name}</h4>
        <p class="inter text-xs">${data.description}</p>
        <div class="flex justify-between items-center">
        <p class="btn rounded-full text-[#15803D] bg-[#DCFCE7] text-sm">${data.category}</p>
        <p class="text-sm"><i class="fa-solid fa-bangladeshi-taka-sign"></i> <span class="plant-price">${data.price}</span></p>
        </div>
        <button class="btn btn-success bg-[#15803D] text-white rounded-full add-to-cart-btn">Add to Cart</button>
        </div> `;
    plantCardContainer.append(div);
    //Attach event listener for this card
    const addToCartBtn = div.querySelector(".add-to-cart-btn");

    

    addToCartBtn.addEventListener("click", () => {
      const plantName = div.querySelector(".plant-name").innerText;
      const plantPrice = div.querySelector(".plant-price").innerText;
      // Checking if plant age theke ache in cart
      let existingItem = cart.find((item) => item.name === plantName);
      if (existingItem) {
        existingItem.count += 1; // increment count
      } else {
        cart.push({ name: plantName, price: plantPrice, count: 1 });
      }

      //   getting the cart card container
      const cartCardContainer = document.getElementById("cart-card-container");
      cartCardContainer.innerHTML = "";
      cart.forEach(item =>{
          const divChild = document.createElement("div");
          divChild.innerHTML = `
            <div class="card flex flex-row justify-between items-center m-3 p-2 bg-[#F0FDF4] mb-2">
                    <div>
                        <h4 class="inter text-sm">${item.name}</h4>
                        <p class="text-[#00000050]"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${item.price}</span> <span><i class="fa-solid fa-x"></i></span> <span>${item.count}</span></p>
                    </div>
                    <span><i class="fa-solid fa-x"></i></span>
                </div>
          `;
          cartCardContainer.append(divChild);

      });
      console.log(plantName, plantPrice);
    });
  }
};
const allPlantsLi = document.getElementById("all-tree-li");
allPlantsLi.addEventListener("click", loadAllPlants);
loadAllPlants();

const loadFeaturedPlant = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFeaturedPlant(data.plants));
};

const displayFeaturedPlant = (datas) => {
  const plantCardContainer = document.getElementById("plant-card-container");
  plantCardContainer.innerHTML = "";

  for (let data of datas) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card w-[240px] bg-white p-4 space-y-[12px]">
                    <img src="${data.image}" alt="" class="h-[300px] rounded-lg">
                    <h4 class="text-sm font-semibold inter plant-name">${data.name}</h4>
                    <p class="inter text-xs">${data.description}</p>
                    <div class="flex justify-between items-center">
                        <p class="btn rounded-full text-[#15803D] bg-[#DCFCE7] text-sm">${data.category}</p>
                        <p class="text-sm"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span class="plant-price">${data.price}</span></p>
                    </div>
                    <button class=" add-to-cart-btn btn btn-success bg-[#15803D] text-white rounded-full">Add to Cart</button>
                </div>
        `;
    plantCardContainer.append(div);
    //Attach event listener for this card
    const addToCartBtn = div.querySelector(".add-to-cart-btn");

    

    addToCartBtn.addEventListener("click", () => {
      const plantName = div.querySelector(".plant-name").innerText;
      const plantPrice = div.querySelector(".plant-price").innerText;
      // Checking if plant age theke ache in cart
      let existingItem = cart.find((item) => item.name === plantName);
      if (existingItem) {
        existingItem.count += 1; // increment count
      } else {
        cart.push({ name: plantName, price: plantPrice, count: 1 });
      }

      //   getting the cart card container
      const cartCardContainer = document.getElementById("cart-card-container");
      cartCardContainer.innerHTML = "";
      cart.forEach(item =>{
          const divChild = document.createElement("div");
          divChild.innerHTML = `
            <div class="card flex flex-row justify-between items-center m-3 p-2 bg-[#F0FDF4] mb-2">
                    <div>
                        <h4 class="inter text-sm">${item.name}</h4>
                        <p class="text-[#00000050]"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${item.price}</span> <span><i class="fa-solid fa-x"></i></span> <span>${item.count}</span></p>
                    </div>
                    <span><i class="fa-solid fa-x"></i></span>
                </div>
          `;
          cartCardContainer.append(divChild);

      });
      console.log(plantName, plantPrice);
    });
  }
};
