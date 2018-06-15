// Back End Logic
function Pizza(first, last, toppings, size) {
  this.firstName = first;
  this.lastName = last;
  this.toppings = toppings;
  this.size = size;
  // var cost = this.determineCost(toppings, size);
  // this.cost = cost;
}
//
// Pizza.prototype.determineCost() {
//   var cost = 10;
// }

Pizza.prototype.getCustomerName = function() {
  return this.firstName + " " + this.lastName;
}

Pizza.prototype.getToppings = function() {
  return this.toppings + " ";
}

// Front End Logic
$(document).ready(function() {
  $("#submit-order-button").click(function(event) {
    event.preventDefault();
    var customerFirstName = $("#input-first-name").val();
    var customerLastName = $("#input-last-name").val();
    var pizzaToppings = $("#select-toppings").val();
    var pizzaSize = $("#select-size :selected").text();
    var newPizza = new Pizza(customerFirstName, customerLastName, pizzaToppings, pizzaSize);
    $("#customer-name").text(newPizza.getCustomerName());
    $("#chosen-toppings").text(newPizza.getToppings());
    $("#chosen-size").text(newPizza.pizzaSize);
    $("#total-cost").text(newPizza.cost);
  });
});
