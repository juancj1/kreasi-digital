const burgerMobile = document.querySelector('.burger');
const navigation = document.querySelector('.navi');
burgerMobile.addEventListener("click", function (event) {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
})