var tabHeader = document.querySelectorAll('.tabs-head li');
var tabContent = document.querySelectorAll('.tab-content > div');
var filterBtn = document.querySelectorAll('.filter');
var galleryImg = document.querySelectorAll('.gallery li');

filterBtn.forEach(function(btn,index){
    btn.addEventListener('click',function(){
        var data = btn.getAttribute('data-type');

        galleryImg.forEach(function(image){
            var galleryImgData = image.getAttribute('data-type');

            if(data == "all") {
                // image.style.display = "";
                image.classList.remove("hide");
            } else if(data == galleryImgData) {
                // image.style.display = "";
                image.classList.remove("hide");
            } else {
                // image.style.display = "none";
                image.classList.add("hide");
            }
        })
    })

})



tabHeader[0].classList.add('active');
tabContent[0].classList.add('show');


tabHeader.forEach(function(list,index){
    list.addEventListener('click',function(){
        for(var i=0; i<tabHeader.length; i++){
            tabHeader[i].classList.remove('active');
            tabContent[i].classList.remove('show');
        }
        list.classList.add('active');
        tabContent[index].classList.add('show');
        // console.log(tabContent[index]);
    })
})
























// var tabHeader = document.querySelectorAll('.tabs-head li');
// var tabContent = document.querySelectorAll('.tab-content > div');
// var filterBtn = document.querySelectorAll('.filter');
// var galleryImg = document.querySelectorAll('.gallery li');
// // console.log(flower);

// filterBtn.forEach(function(btn,index){
//     btn.addEventListener('click',function(){
//         var data = btn.getAttribute('data-type');
//         // console.log(data);

//         galleryImg.forEach(function(image){
//             var galleryImgData = image.getAttribute('data-type');
//             // console.log(galleryImgData);
//             if(galleryImgData == "flower"){
//                 var flower = document.querySelectorAll('[data-type=flower]');
//                 // console.log(flower);
//             } else if(galleryImgData == "cat"){
//                 var cat = document.querySelectorAll('[data-type=cat]');
//                 // console.log(cat);
//             } else if(galleryImgData == "bird"){
//                 var bird = document.querySelectorAll('[data-type=bird]');
//                 // console.log(bird);
//             }
//             if(data == galleryImgData){
//                     console.log(galleryImgData);
//                 }
//             })
//             select(data,galleryImgData);
            
//         })
//     })
//     function select(btn1,list1){
//         // console.log(btn1);
//         // console.log(list1);
//                 if(btn1 == list1){
//                     list1.classList.add('show');
//                 } else {
//                     list1.classList.remove('show');
//                 }
//             }


// // console.log(tabContent);
// // console.log(tabContent);
// tabHeader[0].classList.add('active');
// tabContent[0].classList.add('show');
// // console.log(tabContent[0]);

// // console.log(tabHeader);
// // console.log(tabContent);

// tabHeader.forEach(function(list,index){
//     list.addEventListener('click',function(){
//         for(var i=0; i<tabHeader.length; i++){
//             tabHeader[i].classList.remove('active');
//             tabContent[i].classList.remove('show');
//         }
//         list.classList.add('active');
//         tabContent[index].classList.add('show');
//         // console.log(tabContent[index]);
//     })
// })