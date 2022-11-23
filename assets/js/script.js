var tabHeader = document.querySelectorAll('.tabs-head li');
var tabContent = document.querySelectorAll('.tab-content > div');
var filterBtn = document.querySelectorAll('.filter');
var galleryImg = document.querySelectorAll('.gallery li');
// console.log(flower);

filterBtn.forEach(function(btn,index){
    // btn.addEventListener('click',function(){
        var data = btn.getAttribute('data-type');
        console.log(data);
    // })
})

galleryImg.forEach(function(image){
    var galleryImgData = image.getAttribute('data-type');
    console.log(galleryImgData);
})

// console.log(tabContent);
// console.log(tabContent);
tabHeader[0].classList.add('active');
tabContent[0].classList.add('show');
console.log(tabContent[0]);

// console.log(tabHeader);
// console.log(tabContent);

tabHeader.forEach(function(list,index){
    list.addEventListener('click',function(){
        for(var i=0; i<tabHeader.length; i++){
            tabHeader[i].classList.remove('active');
            tabContent[i].classList.remove('show');
        }
        list.classList.add('active');
        tabContent[index].classList.add('show');
        console.log(tabContent[index]);
    })
})