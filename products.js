let products = [
    {
        id: 1,
        name: "Британець",
        category: "Cat",
        sex: "Жіноча",
        image: "image.webp"
    },
    {
        id: 2,
        name: "Лабрадор",
        category: "Dog",
        sex: "Чоловіча",
        image: "_98776281_gettyimages-521697453.jpg"
    },
    {
        id: 3,
        name: "Рамблер",
        category: "Dog",
        sex: "Жіноча",
        image: "445f2fdc49900b4dbfca906b650a0038.webp"
    },
    {
        id: 4,
        name: "Абіссінець",
        category: "Cat",
        sex: "Чоловіча",
        image: "sitesdefaultfilesstylessquare_medium_440x440public2022-06Abyssinian-Cat-Breed_0-compressed-0.jpg"
    },
    {
        id: 5,
        name: "Бірманець",
        category: "Cat",
        sex: "Жіноча",
        image: "9fb74808df8b01d06df1df2f49239b7b-min.jpg"
    },
    {
        id: 6,
        name: "Шпіц",
        category: "Dog",
        sex: "Чоловіча",
        image: "pomeranian.jpg"
    }
];

let displayWindows = true;

function loadProducts(category){
    let container = document.getElementById("container-id");
    let productsHtml = '';
    let filterFunction;
    if(category){
        filterFunction = (elem) => { return elem.category === category; };
    } else {
        filterFunction = (eleme) => { return true; };
    }
    products.filter(filterFunction).forEach(elem => {
        let elemHtml = `<div class='card__elem' id='${elem.id}'><h2>${elem.name}</h2> <image src='${elem.image}'/> <p>Стать: ${elem.sex}</p></div>`;
        productsHtml += elemHtml;
    });

    for(let i = 1; i <= products.length; i++){
        if(i % 3 === 0){}
        else{}
    }

    container.innerHTML = productsHtml;
}

loadProducts();

setTimeout( () => {}, 5000);

function clickedAccept(){
    displayWindows = false;
}
