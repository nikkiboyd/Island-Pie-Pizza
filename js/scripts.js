// Back End Logic
function Pizza(first, last, toppings, size) {
  this.firstName = first;
  this.lastName = last;
  this.toppings = toppings;
  this.size = size;
  var cost = this.determineCost(toppings, size);
  this.cost = cost;
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

Pizza.prototype.getCustomerName = function() {
  return this.firstName + " " + this.lastName;
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
    $(".order-details").fadeIn();
    var customerFirstName = $("#input-first-name").val();
    var customerLastName = $("#input-last-name").val();
    var pizzaToppings = $("#select-toppings").val();
    var pizzaSize = $("#select-size :selected").text();
    var newPizza = new Pizza(customerFirstName, customerLastName, pizzaToppings, pizzaSize);
    $("#customer-name").text(newPizza.getCustomerName());
    $("#chosen-toppings").text(newPizza.getToppings());
    $("#chosen-size").text(newPizza.getSize());
    $("#total-cost").text(newPizza.determineCost());
  });
});
