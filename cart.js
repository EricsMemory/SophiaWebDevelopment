var cartItems = JSON.parse(sessionStorage.getItem('cartItems') || "[]");
console.log("Script load success");

//Cart Buttons
var clearItems = document.getElementById("clear-button");
var addToCartButtons = document.querySelectorAll(".add-to-cart-button");
var viewCartButton = document.getElementById("view-cart-button");
var closeCartButton = document.getElementById("close-cart-modal");


//View Cart Modal 
var cartModal = document.getElementById("cart-modal");

viewCartButton.addEventListener("click", function(){
    openCartModal();
    displayCartItems();
})

addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function(){
        var itemName = this.getAttribute("data-item");
        addToCart(itemName);
    });
});

function addToCart(itemName){
    cartItems.push(itemName);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert(`Successfully added ${itemName} to the cart.`);
}

function openCartModal() {
    cartModal.style.display = "block";
  }
  

function displayCartItems() {
    var cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
  
    if (cartItems && cartItems.length > 0) {
      for (var i = 0; i < cartItems.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = cartItems[i];
        cartList.appendChild(listItem);
      }
    }
  }

  //Get the handle.

//Function to close the modal by changing CSS property.
function closeCartModal() {
    cartModal.style.display = "none";
}

//Show Message
function showMessage(message){
    alert(message);
}

//Clear function
var clearCartButton = document.getElementById("clear-cart-button");
clearCartButton.addEventListener("click", function (){
    if (cartItems.length != 0){
        cartItems = [];
        sessionStorage.removeItem("cartItems");
        displayCartItems();
        alert("Cart has been cleared.");
        closeCartModal();
    } else {
        alert("There are no items to clear.");
        closeCartModal();
    }
});

var processOrder = document.getElementById("process-order-button");
processOrder.addEventListener("click", function(){
    if (cartItems != 0){
        showMessage("Order has been processed. Thank you!");
        cartItems = [];
        sessionStorage.removeItem("cartItems");
        displayCartItems();
        closeCartModal();
    } else {
        showMessage("Cannot process empty cart.");
        closeCartModal();
    }
})

//Save to local storage

function saveToLocalStorage(){

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name){
        alert("Please enter a name.");
      } else if (!email) {
        alert ("Please enter an email.");
      } else if (!message) {
        alert ("Message box is empty.");
      } else {
        const customerInfo = {name, email, message};
        const keyValue = name;

        localStorage.setItem(keyValue, JSON.stringify(customerInfo));
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        alert(`Thank you for your message ${name}!`);
      } 

  }


