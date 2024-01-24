
let mil = document.getElementById("milliseconds").innerHTML;
let sec = document.getElementById("seconds").innerHTML;
let min = document.getElementById("minutes").innerHTML;

let mil0;
let sec0;
let min0;


var cronos;

function Play(){   
        mil++;
        mil0 = mil.toString();
        mil0 = mil0.padStart(2, '0');
        
       
        document.getElementById("milliseconds").innerHTML = mil0;
       
        if(mil == 99){
            mil = 0;
            sec++;
            sec0 = sec.toString();
            sec0 = sec0.padStart(2, '0');
            
            document.getElementById("seconds").innerHTML = sec0;
        }
        if(sec == 59){
            sec = 0;
            min++;
            min0 = min.toString();
            min0 = min0.padStart(2, '0');

            document.getElementById("minutes").innerHTML = min0;
        }
        
}

document.getElementById("start").addEventListener("click", function(){
    cronos = setInterval(Play, 10);;
    console.log("YYY");
    cronos
}); 

document.getElementById("pause").addEventListener("click", function(){
    console.log("NNN");
    clearInterval(cronos);
}); 

document.getElementById("reset").addEventListener("click", function(){

    clearInterval(cronos);
    console.log("GGG");
    mil = 0;
    sec = 0;
    min = 0;

    document.getElementById("milliseconds").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
});

