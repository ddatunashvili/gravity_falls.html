
$(function(){
    $('.choice').change(function() {
        if ($(this).val() == "easy") {

      }
        else if ($(this).val() == "medium") {


      }
      else {

      }
    });
});

// ცხრილები
var app = angular.module('prongbang',[]);
app.controller('calcPriceController',function($scope){

  $scope.products = [];
  $scope.total = 0;

  $scope.sumPrice = function(products) {
    var total = 0;
    angular.forEach(products,function(value,index){
      total += parseFloat(value.price);
    });
    return total.toFixed(2);
  };

  $scope.removeItem = function(index){
    /*$scope.products.slice(index,1);*/
    $scope.products[index] = undefined;
    $scope.products = $scope.select2product($scope.products);
    $scope.total = $scope.sumPrice($scope.products);
  };

  $scope.select2product = function(products){
    var product = [];
    $scope.products = []; // clear data
    angular.forEach(products,function(value,index){
      if(value != undefined) product.push(value);
    });
    return product;
  };

  $scope.add = function(product){
    $scope.products.push(product);
    $scope.total = $scope.sumPrice($scope.products);
    $scope.clearInput();
  };

  $scope.clearInput = function(){
    $scope.product = null;
  };

});

function calc(){
  var sum =0
  var count = 0
  var alsum = document.getElementsByClassName("calculat")

  for (i in alsum){
  if (sum < alsum.length - 3)
      count = count + alsum[i]
      console.log(alsum[i], " wqw")
      sum++

  }
  document.querySelector(".calcu").innerHTML = " სულ არის "+sum.toString()+ " ლარი "
}
