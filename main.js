const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector(".nav-link");
const links = document.querySelectorAll(".nav-link li");

hamburger.addEventListener('click',() =>{
    navlink.classList.toggle("open");
})


var input = document.querySelector('#file-input');
input.addEventListener('change',preview);
function preview(){
    var fileObject = this.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(fileObject);
    fileReader.onload = function(){
        var result = fileReader.result;
        var img = document.querySelector('#preview');
        img.setAttribute('src',result);
    }
}