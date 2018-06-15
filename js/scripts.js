// Back End Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  var cost = this.determineCost(toppings, size);
  this.cost = cost;
}

function Customer(first, last, addressLineOne, addressLineTwo, city, state, zip) {
  this.firstName = first;
  this.lastName = last;
  this.addressLineOne = addressLineOne
  this.addressLineTwo = addressLineTwo
  this.addressCity = city;
  this.addressState = state;
  this.addressZip = zip;
}

Pizza.prototype.determineCost = function(toppings) {
  var cost = 10;
  if (this.toppings.length === 1) {
    cost = cost + 2;
  } else if (this.toppings.length === 2) {
    cost = cost + 4;
  } else if (this.toppings.length === 3) {
    cost = cost + 6;
  } else if (this.toppings.length === 4) {
    cost = cost + 8;
  } else if (this.toppings.length === 5) {
    cost = cost + 10;
  } else if (this.toppings.length === 6) {
    cost = cost + 12;
  } else if (this.toppings.length === 7) {
    cost = cost + 14;
  } else if (this.toppings.length === 8) {
    cost = cost + 16;
  } else if (this.toppings.length === 9) {
    cost = cost + 18;
  } else if (this.toppings.length === 10) {
    cost = cost + 20;
  }

  if (this.size === "Medium") {
    cost = cost + 2;
  } else if (this.size === "Large") {
    cost = cost + 3;
  } else if (this.size === "Family") {
    cost = cost + 4;
  }
  return "$" + cost + ".00";
}

Customer.prototype.getCustomerName = function() {
  return this.firstName + " " + this.lastName;
}

Customer.prototype.getCustomerAddress = function() {
  return this.addressLineOne + "\n"
        + this.addressLineTwo + "\n"
        + this.addressCity + ", " + this.addressState + " " + this.addressZip
}

Pizza.prototype.getToppings = function() {
  var toppings = this.toppings.join(', ');
  return toppings;
}

Pizza.prototype.getSize = function() {
  return this.size;
}

// Front End Logic
$(document).ready(function() {
$("#delivery").click(function() {
  $(".delivery-form").show();
});

$("#carryout").click(function(){
  $(".delivery-form").hide();
})

  $("#submit-order-button:first").click(function(event) {
    event.preventDefault();
    $(".order-form-container").fadeOut();
    $(".order-details").fadeIn();
    var customerFirstName = $("#input-first-name").val();
    var customerLastName = $("#input-last-name").val();
    var customerAddressOne = $("#inputAddress").val();
    var customerAddressTwo = $("#inputAddress2").val();
    var customerCity = $("#inputCity").val();
    var customerState = $("#inputState").val();
    var customerZip = $("#inputZip").val();
    var pizzaToppings = $("#select-toppings").val();
    var pizzaSize = $("#select-size :selected").text();
    var newPizza = new Pizza(pizzaToppings, pizzaSize);
    var newCustomer = new Customer(customerFirstName, customerLastName, customerAddressOne, customerAddressTwo, customerCity, customerState, customerZip);
    $("#customer-name").text(newCustomer.getCustomerName());
    $("#customer-address").text(newCustomer.getCustomerAddress());
    $("#chosen-toppings").text(newPizza.getToppings());
    $("#chosen-size").text(newPizza.getSize());
    $("#total-cost").text(newPizza.determineCost());
  });
});
