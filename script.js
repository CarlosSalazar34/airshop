console.log("hola muchachos :D");

let favoriteProdcuts = JSON.parse(localStorage.getItem("favorites")) || [];
console.log(localStorage.getItem("favorites"));
console.log("Favoritos actuales:", favoriteProdcuts);

const containerSearch = document.querySelector(".search-box");
const inputSearch = containerSearch.querySelector("input");

inputSearch.addEventListener("focus", () => {
    inputSearch.style.width = "150px";
});

inputSearch.addEventListener("blur", () => {
    inputSearch.style.width = "100px";
});


class Product {
    constructor(image, title, description) {
        this.image = image;
        this.title = title;
        this.description = description;
    }

    update(container) {
        container.innerHTML += `
        <article class="product">
            <img src="${this.image}" alt="image-product">
            <h3>${this.title}</h3>
            <p>${this.description}</p>
        </article>
        `
    }
}

productOne = new Product("product-1.png", "HeadPhones 1", "Incredible sound packed in the smallest case we’ve ever made")
productTwo = new Product("product-2.png", "HeadPhones 2", "Incredible sound packed in the smallest case we’ve ever made")
productTree = new Product("product-3.png", "HeadPhones 3", "Incredible sound packed in the smallest case we’ve ever made")
productFour = new Product("product-4.png", "HeadPhones 4", "Incredible sound packed in the smallest case we’ve ever made")

const containerFavoriteProducts = document.querySelector(".products-favorites");

productOne.update(containerFavoriteProducts);
productTwo.update(containerFavoriteProducts);
productTree.update(containerFavoriteProducts);
productFour.update(containerFavoriteProducts);

const main = document.querySelector("main");

const initialMainContent = main.innerHTML;

const products = document.querySelectorAll(".product");

products.forEach((product) => {
    product.addEventListener("click", () => {
        const imageProduct = product.querySelector("img").src;
        const titleProduct = product.querySelector("h3").textContent;
        const detailsProduct = product.querySelector("p").textContent;

        main.classList.add("no-see");
        setTimeout(() => {
            main.classList.remove("no-see");
            main.innerHTML = `
        <main>
            <section class="view-info">
                <div class="come-back-btn"><button>come back</button></div>
                <article>
                    <img src="${imageProduct}" alt="image">
                    <div>
                        <h2>${titleProduct}</h2>
                        <h3>${detailsProduct}</h3>
                        <p>Color: purple</p>
                        <div>
                            <ul>
                                <li class="red"></li>
                                <li class="purple"></li>
                                <li class="black"></li>
                                <li class="white"></li>
                            </ul>
                        </div>
                        <button class='add-to-favorite-btn'>ADD TO FAVORITE</button>
                    </div>
                </article>
            </section>
        </main>
      `;
        
    document.querySelectorAll("ul li").forEach((item)=>{
        item.addEventListener("click", ()=>{
            item.parentElement.querySelectorAll("li").forEach(li => li.classList.remove("selected"));
            item.classList.toggle("selected");
        })
        
    })

        document.querySelector(".add-to-favorite-btn").addEventListener("click", () => {
            main.classList.add("no-see");
            const originElement = event.currentTarget;
            setTimeout(() => {
                main.classList.remove("no-see");
                main.innerHTML = initialMainContent;

                if (!favoriteProdcuts.includes(titleProduct)){
                    favoriteProdcuts.push(titleProduct);
                    localStorage.setItem("favorites", JSON.stringify(favoriteProdcuts));
                    location.reload();
                };

            }, 1000)
        })


        const comeBackButton = document.querySelector(".come-back-btn button");
        comeBackButton.addEventListener("click", () => {
        main.classList.add("no-see");
        setTimeout(() => {
        main.classList.remove("no-see");
        main.innerHTML = initialMainContent;
        location.reload();

                    // const newProducts = document.querySelectorAll(".product");
                    // newProducts.forEach((p) => {
                    //     p.addEventListener("click", () => {
                    //         location.reload();
                    //     });
                    // });

                }, 1000);
            });
        }, 1000);
    });
});

