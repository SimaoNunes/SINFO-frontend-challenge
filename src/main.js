var page = 0;
var products = ["Product 1 title","Product 2 title","Product 3 title","Product 4 title","Product 5 title","Product 6 title","Product 7 title","Product 8 title"];
var imgs = ["img1.png","img2.png","img3.png","img4.png","img5.png","img6.png","img7.png","img8.png"];
var productsDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
var pricesArr = ["33,00€","62,00€","12,00€","47,00€","129,00€","64,00€","7,00€","18,00€"];
var p = [33,62,12,47,129,64,7,18];
var units = [0,0,0,0,0,0,0,0];
var total = 0;

var pics = document.getElementsByClassName("product-image");
var titles = document.getElementsByClassName("title");
var quantities = document.getElementsByClassName("quantity");
var prices = document.getElementsByClassName("price");
var totalPrice = document.getElementById("total")

document.getElementById("plus1").addEventListener("click",function(){
  var newValue=units[page*3+0]+1;
  var newPrice=p[page*3];
  units[page*3+0]=newValue;
  quantities[0].textContent=units[page*3+0];
  totalPrice.textContent=Number(totalPrice.textContent)+p[page*3+0];
});
document.getElementById("plus2").addEventListener("click",function(){
  var newValue=units[page*3+1]+1;
  units[page*3+1]=newValue;
  quantities[1].textContent=units[page*3+1];
  totalPrice.textContent=Number(totalPrice.textContent)+p[page*3+1];
});
document.getElementById("plus3").addEventListener("click",function(){
  var newValue=units[page*3+2]+1;
  units[page*3+2]=newValue;
  quantities[2].textContent=units[page*3+2];
  totalPrice.textContent=Number(totalPrice.textContent)+p[page*3+2];
});
document.getElementById("minus1").addEventListener("click",function(){
  var newValue=units[page*3+0]-1;
  if (newValue>=0) {
    units[page*3+0]=newValue;
    quantities[0].textContent=units[page*3+0];
    totalPrice.textContent=Number(totalPrice.textContent)-p[page*3+0];
  }
});
document.getElementById("minus2").addEventListener("click",function(){
  var newValue=units[page*3+1]-1;
  if (newValue>=0) {
    units[page*3+1]=newValue;
    quantities[1].textContent=units[page*3+1];
    totalPrice.textContent=Number(totalPrice.textContent)-p[page*3+1];
  }
});
document.getElementById("minus3").addEventListener("click",function(){
  var newValue=units[page*3+2]-1;
  if (newValue>=0) {
    units[page*3+2]=newValue;
    quantities[2].textContent=units[page*3+2];
    totalPrice.textContent=Number(totalPrice.textContent)-p[page*3+2];
  }
});
document.getElementById("next").addEventListener("click",function(){
  page++;
  prev.style.display="block";
  if(page===2){
    next.style.display="none";
  }
  changeProducts();
});
document.getElementById("prev").addEventListener("click",function(){
  page--;
  next.style.display="block";
  if (page===0) {
    prev.style.display="none";
  }
  changeProducts();
});
function changeProducts(){
  var index=0;
  if (page!==2) {
    for (var i = page*3; i < page*3+3 ; i++) {
      pics[index].src="images/"+imgs[i];
      titles[index].textContent=products[i];
      prices[index].textContent=pricesArr[i];
      quantities[index].textContent=units[i];
      index++;
    }
  }
  else {
    for (var i = page*3-1; i < page*3+2 ; i++) {
      pics[index].src="images/"+imgs[i];
      titles[index].textContent=products[i];
      prices[index].textContent=pricesArr[i];
      quantities[index].textContent=units[i];
      index++;
    }
  }
}
