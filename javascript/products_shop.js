let products = {
    data: [
      {
        id: '1',
        productName: "Ґердан з білого бісеру",
        category: "Ґердан",
        price: "30",
        img: "../src/Ґердан-білий.jpg",
      },
      {
        id: '2',
        productName: "Червона селянка",
        category: "Селянка",
        price: "49",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '3',
        productName: "Ґердан білий з квітами",
        category: "Ґердан",
        price: "99",
        img: "../src/Ґердан-білий-квіти.jpg",
      },
      {
        id: '4',
        productName: "Дукач",
        category: "Дукач",
        price: "29",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '5',
        productName: "Чорна селянка",
        category: "Селянка",
        price: "129",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '6',
        productName: "Коралі",
        category: "Коралі",
        price: "89",
        img: "../src/Пектораль.jpg",
      },
      {
        id: '7',
        productName: "Дукач",
        category: "Дукач",
        price: "189",
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