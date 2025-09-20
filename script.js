console.log("hola muchachos :D");

document.addEventListener("DOMContentLoaded", () => {
    anime({
        targets: "header",
        opacity: [0, 1],
        translateY: [-50, 0],
        scale: [0.95, 1],
        easing: "easeOutExpo",
        duration: 1500
    });

    anime({
        targets: "header div",
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(150, { start: 500 }), 
        easing: "easeOutBack",
        duration: 1000
    });
});



async function toggleUser(id) {
    const ViewTransitionClass = 'vt-element-animation';
    const ViewTransitionClassClosing = 'vt-element-animation-closing';
    if (!id) {
        const openDialog = document.querySelector('dialog[open]');
        const originElement = document.querySelector("[origin-element]");

        openDialog.style.viewTransitionName = 'vt-shared';
        openDialog.style.viewTransitionClass = ViewTransitionClassClosing;

        const ViewTransition = document.startViewTransition(() => {
            originElement.style.viewTransitionName = 'vt-shared';
            originElement.style.viewTransitionClass = ViewTransitionClassClosing;

            openDialog.style.viewTransitionName = '';
            openDialog.style.viewTransitionClass = '';


            openDialog.close();

        })

        await ViewTransition.finished;

        originElement.style.viewTransitionName = '';
        originElement.style.viewTransitionClass = '';
        // openDialog.close();
        return false;
    }

    const dialog = document.getElementById(id);
    const originElement = event.currentTarget;


    dialog.style.viewTransitionName = 'vt-shared';
    dialog.style.viewTransitionClass = ViewTransitionClass;

    originElement.style.viewTransitionName = 'vt-shared';
    originElement.style.viewTransitionClass = ViewTransitionClass;

    originElement.setAttribute('origin-element', '');

    const ViewTransition = document.startViewTransition(() => {
        originElement.style.viewTransitionName = '';
        originElement.style.viewTransitionClass = '';
        dialog.showModal();
    })

    await ViewTransition.finished

    dialog.style.viewTransitionName = '';
    dialog.style.viewTransitionClass = '';

}

document.querySelector("dialog").querySelector(".close-button").addEventListener("click", ()=>{
    toggleUser();
})

document.querySelector(".profile-btn").addEventListener("click", () => {
    toggleUser("dialog-messages");
})

let favoriteProdcuts = JSON.parse(localStorage.getItem("favorites")) || [];
console.log(localStorage.getItem("favorites"));
console.log("Favoritos actuales:", favoriteProdcuts);

const containerSearch = document.querySelector(".search-box");
const inputSearch = containerSearch.querySelector("input");

document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const titleText = "AirShop";

    for (let i = 0; i < titleText.length; i++) {
        console.log(titleText[i]);
        title.innerHTML += `<span>${titleText[i]}</span>`;
    };
})


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

productOne = new Product("src/audif1.png", "HeadPhones 1", "Incredible sound packed in the smallest case we’ve ever made")
productTwo = new Product("src/audif2.png", "HeadPhones 2", "Incredible sound packed in the smallest case we’ve ever made")
productTree = new Product("src/audif3.png", "HeadPhones 3", "Incredible sound packed in the smallest case we’ve ever made")
productFour = new Product("src/audif4.png", "HeadPhones 4", "Incredible sound packed in the smallest case we’ve ever made")

const containerFavoriteProducts = document.querySelector(".products-favorites");

productOne.update(containerFavoriteProducts);
productTwo.update(containerFavoriteProducts);
productTree.update(containerFavoriteProducts);
productFour.update(containerFavoriteProducts);

const generalProductsContainer = document.querySelector(".general-products-container");

productOne.update(generalProductsContainer);
productTwo.update(generalProductsContainer);
productTree.update(generalProductsContainer);
productFour.update(generalProductsContainer);


document.querySelector(".tabs-container").querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.querySelectorAll("button").forEach((btn) => { btn.classList.remove("category-selected"); })
        button.classList.add("category-selected");
    })
})


const main = document.querySelector("main");
const fotter = document.querySelector("footer");

const initialMainContent = main.innerHTML;

const products = document.querySelectorAll(".product");

products.forEach((product) => {
    product.addEventListener("click", () => {
        const imageProduct = product.querySelector("img").src;
        const titleProduct = product.querySelector("h3").textContent;
        const detailsProduct = product.querySelector("p").textContent;

        main.classList.add("no-see");
        fotter.classList.add("no-see");
        // fotter.classList.add("removed-footer");
        setTimeout(() => {
            main.classList.remove("no-see");
            fotter.classList.add("removed-footer");
            // fotter.classList.add("no-see");
            fotter.innerHTML = "";
            main.innerHTML = `
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
      `;
        


    //   main.setAttribute("style", "overflow-y: auto;")

            document.querySelectorAll("ul li").forEach((item) => {
                item.addEventListener("click", () => {
                    item.parentElement.querySelectorAll("li").forEach(li => li.classList.remove("selected"));
                    item.classList.toggle("selected");
                })

            })

            document.querySelector(".add-to-favorite-btn").addEventListener("click", () => {
                main.classList.add("no-see");
                document.querySelector("header").classList.add("no-see");
                // const originElement = event.currentTarget;
                setTimeout(() => {
                    main.classList.remove("no-see");
                    main.innerHTML = initialMainContent;

                    if (!favoriteProdcuts.includes(titleProduct)) {
                        favoriteProdcuts.push(titleProduct);
                        localStorage.setItem("favorites", JSON.stringify(favoriteProdcuts));
                    };
                    location.reload();

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
