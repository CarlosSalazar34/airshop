function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (cookiePair[0].trim() === name) {
            return cookiePair[1];
        }
    }
    return "";
}

document.addEventListener("DOMContentLoaded", () => {
    const username = getCookie("username");
    if (username) {
        const profileUser = document.querySelector(".profile-user h2");
        profileUser.textContent = username;
    }
});


document.addEventListener("DOMContentLoaded", () => {
    if (!document.cookie.split(";").some(cookie => cookie.trim().startsWith("email="))) {
        window.location.href = "login.html";
    }
});




// document.addEventListener("DOMContentLoaded", ()=>{
//     const queryStrings = window.location.search;
//     const params = new URLSearchParams(queryStrings);
//     const userNameData = params.get("email");    
//     const containerUserInformation = document.querySelector(".profile-user");
//     containerUserInformation.querySelector("h2").textContent = userNameData.replace("@gmail.com", "");
// })



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

document.querySelector("dialog").querySelector(".close-button").addEventListener("click", () => {
    toggleUser();
})

document.querySelector(".profile-btn").addEventListener("click", () => {
    toggleUser("dialog-messages");
})

// let favoriteProdcuts = JSON.parse(localStorage.getItem("favorites")) || [];
// console.log(localStorage.getItem("favorites"));
// console.log("Favoritos actuales:", favoriteProdcuts);

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

// const containerFavoriteProducts = document.querySelector(".products-favorites");

// productOne.update(containerFavoriteProducts);
// productTwo.update(containerFavoriteProducts);
// productTree.update(containerFavoriteProducts);
// productFour.update(containerFavoriteProducts);

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
const header = document.querySelector("header");

const initialMainContent = main.innerHTML;

const products = document.querySelectorAll(".product");

products.forEach((product) => {
    product.addEventListener("click", () => {
        const imageProduct = product.querySelector("img").src;
        const titleProduct = product.querySelector("h3").textContent;
        const detailsProduct = product.querySelector("p").textContent;

        const viewProduct = document.querySelector(".view-info");

        const sections = main.querySelectorAll("section");

        main.classList.add("no-see");
        fotter.classList.add("no-see");
        header.classList.add("no-see");



        // fotter.classList.add("removed-footer");
        setTimeout(() => {
            header.classList.remove("no-see");
            main.classList.remove("no-see");
            fotter.style.display = "none";
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
            sections.forEach((section) => {
                section.style.display = "none";
            }, 1000)

            viewProduct.querySelector("img").src = imageProduct;
            viewProduct.querySelector("h2").textContent = titleProduct;
            viewProduct.querySelector("h3").textContent = detailsProduct;
            viewProduct.style.display = "flex";
            const newButton = document.querySelector(".scroll-shop-button");
            // console.log(newButton);

            newButton.classList.add("come-back-btn");
            newButton.textContent = "come back";
            // fotter.classList.add("removed-footer");
            // fotter.classList.add("no-see");
            // fotter.innerHTML = "";

            ;



            //   main.setAttribute("style", "overflow-y: auto;")

            document.querySelectorAll("ul li").forEach((item) => {
                item.addEventListener("click", () => {
                    item.parentElement.querySelectorAll("li").forEach(li => li.classList.remove("selected"));
                    item.classList.toggle("selected");
                })

            })

            document.querySelector(".add-to-favorite-btn").addEventListener("click", () => {
                main.classList.add("no-see");
                // document.querySelector("header").classList.add("no-see");
                // const originElement = event.currentTarget;
                newButton.classList.add("no-see");
                // user.favorites.push({
                //     image: imageProduct,
                //     title: titleProduct,
                //     description: detailsProduct
                // });
                user.addFavorite(imageProduct, titleProduct, detailsProduct);
                user.updateFavorite();

                console.log("Favoritos del usuario:", user.favorites);



                setTimeout(() => {
                    sections.forEach(section => {
                        section.style.display = "flex";
                    })
                    main.classList.remove("no-see");
                    newButton.classList.remove("no-see");
                    newButton.textContent = "SHOP";
                    // document.querySelector("header").classList.remove("no-see");
                    viewProduct.style.display = "none";
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
                    // if (!favoriteProdcuts.includes(titleProduct)) {
                    //     favoriteProdcuts.push(titleProduct);
                    //     localStorage.setItem("favorites", JSON.stringify(favoriteProdcuts));
                    // };
                    // location.reload();

                }, 1000)
            })


            const comeBackButton = document.querySelector(".come-back-btn");
            comeBackButton.addEventListener("click", () => {
                main.classList.add("no-see");
                header.classList.add("no-see");
                const sections = document.querySelectorAll("section");
                setTimeout(() => {
                    sections.forEach(section => {
                        section.style.display = "flex";
                    })
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
                    fotter.style.display = "flex";
                    viewProduct.style.display = "none";
                    comeBackButton.textContent = "SHOP";
                    fotter.classList.remove("no-see");
                    main.classList.remove("no-see");
                    header.classList.remove("no-see");
                    // main.innerHTML = initialMainContent;
                    // location.reload();

                    // const newProducts = document.querySelectorAll(".product");
                    // newProducts.forEach((p) => {
                    //     p.addEventListener("click", () => {
                    //         location.reload();
                    //     });
                    // });

                }, 1000);
                comeBackButton.classList.remove("come-back-btn");
            });
        }, 1000);
    });
});


//USER
const favorites = document.querySelector(".products-favorites");

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.favorites = [];
    }

    addFavorite(image, title, description) {
        const exists = this.favorites.some(p => p.title === title);
        if (!exists) {
            this.favorites.push({ image, title, description });
        }
    }

    updateFavorite() {
        favorites.innerHTML = "";
        this.favorites.forEach(product => {
            favorites.innerHTML += `
            <article class="product">
                <img src="${product.image}" alt="image-product">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
            </article>
        `;
        });

        // if (favorites.length > 1) {
        //     favorites.style.justifyContent = "flex-start";
        //     favorites.style.alignItems = "flex-start";
        // };

    }

};


user = new User(getCookie("username"), getCookie("email"));
