
const navbar = document.querySelector(".navbar");

const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click",function(e){
    navbar.classList.toggle("active");//! menu butonuna basınca bir kere basınca navbar a active clasını ekleyecek tekrar basınca active clasını kaldıracak 
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(menuBtn)
        ){
            navbar.classList.remove("active");//! navbar da active clası açıkken  biryere basınca active clasını kaldıracak
        }
    });
});

const parkurContainer = document.querySelector('.header .parkur-container');
const parkurBtn = document.getElementById('parkur-btn');

parkurBtn.addEventListener('mouseenter', function () {
    parkurContainer.classList.add('active');
});

parkurContainer.addEventListener('mouseleave', function () {
    parkurContainer.classList.remove('active');
});


document.getElementById('hemen-arayin').addEventListener('click', function() {
    // Belirli bir telefon numarasını arama işlemini gerçekleştir
    aramaYap('+905327409652'); // Telefon numaranızı buraya ekleyin
});

function aramaYap(telefonNumarasi) {
    // Telefon numarasını arama protokolü ile birleştir
    var telefonURL = 'tel:' + telefonNumarasi;

    // Telefon numarasını arama işlemini gerçekleştir
    window.location.href = telefonURL;
}
