let products = {
    data: [
      {
        id: '1',
        productName: "Ґердан з білого бісеру",
        productDetile:"Ґердан сплетений з білого бісеру",
        category: "Ґердан",
        price: "23",
        img: "../src/Ґердан-білий.jpg",
      },
      {
        id: '2',
        productName: "Червона силянка",
        productDetile:"Силянка зплетена з червоного бісеру",
        category: "Силянка",
        price: "33",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '3',
        productName: "Ґердан білий з квітами",
        productDetile:"Ґердан, основне полотно біле з квітами",
        category: "Ґердан",
        price: "23",
        img: "../src/Ґердан-білий-квіти.jpg",
      },
      {
        id: '4',
        productName: "Дукач",
        productDetile:"Дукач на червоній стрічці",
        category: "Дукач",
        price: "14",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '5',
        productName: "Чорна силянка",
        productDetile:"Силянка зплетена з чорного бісеру",
        category: "Силянка",
        price: "33",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '6',
        productName: "Коралі",
        category: "Коралі",
        productDetile:"Червоні коралі",
        price: "24",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '7',
        productName: "Дукач",
        productDetile:"Дукач на синій стрічці",
        category: "Дукач",
        price: "14",
        img: "../src/Пектораль.jpg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.setAttribute('data-id',i.id)
    card.classList.add("card", i.category, "hide");
    //img tag
    let image = document.createElement("img");
    image.classList.add("img")
    image.setAttribute("src", i.img);
    card.appendChild(image);
    //container
    let container = document.createElement("p");
    container.classList.add("container");
    //product name
    let name = document.createElement("h3");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    let detile = document.createElement("span");
    detile.classList.add("product-detile");
    detile.innerText = i.productDetile.toUpperCase();
    container.appendChild(detile);
    //price
    let price = document.createElement("span");
    price.classList.add("price")
    price.innerText = "Price: $" + i.price;
    container.appendChild(price);
    let add_btn = document.createElement("span");
    add_btn.classList.add("button_add");
    add_btn.innerText = "Додати в кошик";
    container.appendChild(add_btn);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };