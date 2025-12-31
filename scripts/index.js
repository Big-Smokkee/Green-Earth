const loadCategories = () => {
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url).then(res => res.json()).then(data => displayCategories(data.categories));
}
displayCategories = (datas) => {
    const categoriesSection = document.getElementById("category-section");
    console.log(datas);
    categoriesSection.innerHTML = "";

    for (let data of datas) {
        const ul = document.createElement('ul');
        ul.innerHTML = `
                    <li class="h-10 flex items-center pl-[10px] hover:bg-[#15803D] text-black hover:text-white w-[250px] rounded-md">${data.category_name}</li>
        `
        categoriesSection.append(ul);
    }


}
loadCategories();