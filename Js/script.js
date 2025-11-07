//make the letter uppercase after leaeve the boxes
function upperCase() {
    const x = document.getElementById("f");
    x.value = x.value.toUpperCase();
  }


//validation on form
function validateForm() {
  let x = document.forms["myForm"]["username"].value;
  let y = document.forms["myForm"]["name"].value;
  let z = document.forms["myForm"]["phone"].value;
  let a = document.forms["myForm"]["email"].value;
  let b = document.forms["myForm"]["address"].value;

  if (x == "") {
    alert(" Username must be filled out");
    return false;
  }

  if (y == "") {
    alert(" Name must be filled out");
    return false;
  }

  if (z == "") {
    alert(" Phone Number must be filled out");
    return false;
  }

  if (a == "") {
    alert(" Email must be filled out");
    return false;
  }

  if (b == "") {
    alert(" Address must be filled out");
    return false;
  }
}

// css animation on js
//Border radius for all card class items
var cards = document.getElementsByClassName('card');

for (var i = 0; i < cards.length; i++) {
  cards[i].style.borderRadius = '10%';
}


//MOuse over effects
function mOver(obj) {
    obj.style.transform = 'scale(0.9)';
}
function mOut(obj) {
    obj.style.transform = 'scale(1)';
}

//mouse click handler
function mDown(obj) {
    obj.style.transform = 'scale(0.9)';
} 
function mUp(obj) {
    obj.style.transform = 'scale(1)';
}

// Expand on click events
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

function addToCart(productName, imageURL) {
    // Get the cart table in cart.html
    var cartTable = window.opener.document.querySelector("#cart-table tbody");
  
    // Create a new row for the product
    var newRow = document.createElement("tr");
  
    // Create cells for the row
    var imageCell = document.createElement("td");
    var productCell = document.createElement("td");
    var quantityCell = document.createElement("td");
  
    // Create image element
    var imageElement = document.createElement("img");
    imageElement.src = imageURL;
    imageElement.width = 150;
    imageCell.appendChild(imageElement);
  
    // Create product name element
    var productNameElement = document.createElement("a");
    productNameElement.href = "";
    productNameElement.textContent = productName;
    var removeLink = document.createElement("a");
    removeLink.href = "";
    removeLink.className = "remove";
    removeLink.textContent = "Remove";
    productCell.appendChild(productNameElement);
    productCell.appendChild(document.createElement("br"));
    productCell.appendChild(removeLink);
  
    // Create quantity input element
    var quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = "1";
    quantityInput.min = "1";
    quantityInput.max = "100";
    quantityInput.placeholder = "Quantity";
    quantityCell.appendChild(quantityInput);
  
    // Append cells to the row
    newRow.appendChild(imageCell);
    newRow.appendChild(productCell);
    newRow.appendChild(quantityCell);
  
    // Append the row to the cart table
    cartTable.appendChild(newRow);
  
    // Close the current window
    window.close();
  }
  




  