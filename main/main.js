const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector(".nav-link");
const links = document.querySelectorAll(".nav-link li");

hamburger.addEventListener('click',() =>{
    navlink.classList.toggle("open");
})


var input = document.querySelector('#fileToUpload');
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
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
const url = 'http://127.0.0.1:5000/api/image_pridiction';
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const files = document.querySelector('[type=file]').files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        let file = files[i];

        formData.append('imagefile', file);
    }

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(response => {
        return response.text();
    }).then(data => {
        document.getElementById("result").innerHTML = data; 
        console.log(data);
    
    var text;
    var text1;
    var text2;
    var color = data;
    if (color == "memory-chip")
    {
        text = "Name :Memory-chip";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "potentiometer")
    {
        text = "Name :Potentiometer";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "multipexer")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "buzzer")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "camera")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "cartidge-fuse")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "clip-lead")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }if (color == "DHT-22")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "filament")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "flame sensor")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "induction coil")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "ir sensor")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "led")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "LPG")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "moisture")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "MPU")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "raspberry pi")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "pulse generator")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "relay")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "stabilizer")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "transistor")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    if (color == "ultrasonic")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }

    if (color == "shunt")
    {
        text = "Name :";
        document.getElementById("result1").innerHTML = text;
        text1 = "Physical theory";
        document.getElementById("result2").innerHTML = text1;
        text2 = "What are uses";
        document.getElementById("result3").innerHTML = text2;
    }
    });


});

    