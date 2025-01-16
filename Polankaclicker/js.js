let button = document.querySelector("#button");
let score = document.querySelector("#score");
let shop = document.querySelector("#shop");
let upgrades = document.querySelector("#upgrades");
let buy1 = document.querySelector("#buy1");
let buy2 = document.querySelector("#buy2");
let rozwis = document.querySelector("#rozwis")
let rozwiu = document.querySelector("#rozwiu")
let sklepmenu = false;
let upgrmenu = false;


let wynik = 0;
let mnoznik = 1;
let xsec = 0;

    button.addEventListener("click", function(){
    wynik = wynik + mnoznik;
    console.log(wynik);
    
});

rozwis.addEventListener("click", function(){
if(sklepmenu == true){
        buy1.style.setProperty("display", "none");
        buy2.style.setProperty("display", "none");
        buy3.style.setProperty("display", "none");
        buy4.style.setProperty("display", "none");
        console.log("Zamykam");
        sklepmenu = false;
        
    
    } else{
        
            buy1.style.setProperty("display", "block");
            buy2.style.setProperty("display", "block");
            buy3.style.setProperty("display", "block");
            buy4.style.setProperty("display", "block");
            
            console.log("Otwieram");
            sklepmenu = true;
            
        
    };
});

rozwiu.addEventListener("click", function(){
    if(upgrmenu == true){
            upgr1.style.setProperty("display", "none");
            upgr2.style.setProperty("display", "none");
            upgr3.style.setProperty("display", "none");
            upgr4.style.setProperty("display", "none");
            console.log("Zamykam");
            upgrmenu = false;
            
        
        } else{
            
                upgr1.style.setProperty("display", "block");
                upgr2.style.setProperty("display", "block");
                upgr3.style.setProperty("display", "block");
                upgr4.style.setProperty("display", "block");
                
                console.log("Otwieram");
                upgrmenu = true;
                
            
        };
    });

    let mnozrzecz1 = 1;
    let ilorzecz1 = 0
    let kosztrzecz1 = 25
    
    buy1.addEventListener("click", function(){
        if(wynik > kosztrzecz1){
            wynik = wynik - kosztrzecz1;
       ilorzecz1 = ilorzecz1 + 1;
       kosztrzecz1 = kosztrzecz1 + kosztrzecz1 * 0.20;
       Math.floor(kosztrzecz1);
       buy1.innerHTML = "<img src=./Zdjecia/kacperus1shop.png> Koszt = " + kosztrzecz1 + " <br><p id=pbuy1>---Król jumbosów---</p>";
        } 
    });


    setInterval(function(){
        score.innerHTML = "Ilość pou-ów: " + wynik;
       
    }, 1)

    setInterval(function(){
        wynik = wynik + 1;

    }, 1000)


