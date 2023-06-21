let products = {
    data: [
      {
        id: '0',
        productName: "Regular White T-Shirt",
        category: "Ґердан",
        price: "30",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '1',
        productName: "Beige Short Skirt",
        category: "Селянка",
        price: "49",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '2',
        productName: "Sporty SmartWatch",
        category: "Коралі",
        price: "99",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '3',
        productName: "Basic Knitted Top",
        category: "Ґердан",
        price: "29",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '4',
        productName: "Black Leather Jacket",
        category: "Дукач",
        price: "129",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '5',
        productName: "Stylish Pink Trousers",
        category: "Селянка",
        price: "89",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '6',
        productName: "Brown Men's Jacket",
        category: "Дукач",
        price: "189",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '',
        productName: "Comfy Gray Pants",
        category: "Ґердан",
        price: "49",
        img: "../src/Пектораль.jpg",
      },
    ],
  };
  
  
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