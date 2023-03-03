'use strict'
//let hana_hair = ["hana_hair",38,48,100,100,100,"3980 Shelbourne Street, #305","(250) 590-7855"]

let hana_hair = {
    
    "name":"hana_hair",
    "mcut":38 ,
    "fcut":48  , 
    "perming":100,
    "color":100,
    "HL":100
    ,
    "address":"3980 Shelbourne Street, #305",
    "telno":"(250) 590-7855"
};
//let copa_hair = ["copa_hair",35,45,157,95,95,"4071 Shelbourne St","(250) 590-2672"]
let copa_hair = {
    
    "name":"copa_hair",
    "mcut":35 ,
    "fcut":45  ,
    "perming":157,
    "color":95,
    "HL":95
    ,
    "address":"4071 Shelbourne St",
    "telno":"(250) 590-2672"
};
//let studio1313= ["studio1313",35,55,80,80,110,"1313 Gladstone Ave","(250) 382-2022"]
let studio1313 = {
    
    "name":"studio1313",
    "mcut":35 ,
    "fcut":55  , 
    "perming":80,
    "color":80,
    "HL":110
    ,
    "address":"1313 Gladstone Ave",
    "telno":"(250) 382-2022"
};
//let bella_moda= ["bella_moda",35,50,99,74,98,"1644 Hillside Ave","(250) 595-0633"]
let bella_moda = {
    
    "name":"bella_moda",
    "mcut":35 ,
    "fcut":50  , 
    "perming":99,
    "color":74,
    "HL":98
    ,
    "address":"1644 Hillside Ave",
    "telno":"(250) 595-0633"
};
// let akai_hair = ["akai_hair",45,65,100,115,90,"2559 Quadra St Suite 101","(250) 383-3227"]
let akai_hair = {
    
    "name":"akai_hair",
    "mcut":45 ,
    "fcut":65  , 
    "perming":100,
    "color":115,
    "HL":90
    ,
    "address":"2559 Quadra St Suite 101",
    "telno":"(250) 383-3227"
};



function calculate_best_price(){
 
    var mcut = document.getElementById("c1");  
    var fcut = document.getElementById("c2");  
    var perming = document.getElementById("c3");  
    var color = document.getElementById("c4");  
    var HL = document.getElementById("c5");  

 
    
    let values = []
    let valid = false
    if(mcut.checked){
        values.push("Mans Cut")
        valid = true
    }
    if(fcut.checked){
        values.push("Female's Cut")
        valid = true
    }
    if(perming.checked){
        values.push("Perm")
        valid = true
    }
    if(color.checked){
        values.push("Dyeing")
        valid = true
    }
    if(HL.checked){
       values.push("Highlight!!!!")
       valid = true
    }
    if(valid ==false){
        alert("you haven't choose anything")
        return;
    }
    if((color.checked && perming.checked) ||(HL.checked && perming.checked) ){
        alert("You should wait until after your perm has settle - usually 48 hours- before highlighting or coloring your hair. Talk to your designer ")
    }
    if(mcut.checked && fcut.checked){
        alert("you picked men's cut and female's cut at the same time!")
        return;
    }



    let name = 0;
    let MCut = 1;
    let FCut = 2;
    let perm = 3;
    let Dye = 4;
    let highlight =5;
    
    let hana_hair1 = [hana_hair.name,hana_hair.mcut,hana_hair.fcut,hana_hair.perming,hana_hair.color,hana_hair.HL,hana_hair.address,hana_hair.telno]
    let copa_hair2 = [copa_hair.name,copa_hair.mcut,copa_hair.fcut,copa_hair.perming,copa_hair.color,copa_hair.HL,copa_hair.address,copa_hair.telno]
    let studio13133= [studio1313.name,studio1313.mcut,studio1313.fcut,studio1313.perming,studio1313.color,studio1313.HL,studio1313.address,studio1313.telno]
    let bella_moda4= [bella_moda.name,bella_moda.mcut,bella_moda.fcut,bella_moda.perming,bella_moda.color,bella_moda.HL,bella_moda.address,bella_moda.telno]
    let akai_hair5 = [akai_hair.name,akai_hair.mcut,akai_hair.fcut,akai_hair.perming,akai_hair.color,akai_hair.HL,akai_hair.address,akai_hair.telno]
    let salon = [hana_hair1,copa_hair2,studio13133,bella_moda4,akai_hair5]
    
    
    let value_to_num = []
  

    for(let i=0;i<values.length;i++){
        if(values[i]=="Mans Cut"){
            value_to_num.push(MCut);
        }
        if(values[i]=="Female's Cut"){
            value_to_num.push(FCut);
        }
        if(values[i]=="Perm"){
            value_to_num.push(perm);
        }
        if(values[i]=="Dyeing"){
            value_to_num.push(Dye);
        }
        if(values[i]=="Highlight"){
            value_to_num.push(highlight);
        }
    }
    let now = 0
    let bst_price = 0
    let bst_salon = ""
    let now_salon = null
    let bst_salon_arr = []
    
    for (let r=0;r<salon.length;r++){
        
        for (let inner=0;inner<value_to_num.length;inner++){
          
            now_salon = salon[r] 
            now += now_salon[value_to_num[inner]]
            //console.log(now)
            
           
        
        }
        if (r==0){
            bst_price=now
            bst_salon_arr = salon[r]
            bst_salon = bst_salon_arr[name]
        }
        else if(bst_price>now){
            bst_price = now
            bst_salon_arr = salon[r]
            bst_salon = bst_salon_arr[name]
            bst_salon = now_salon[name]
        }
        now = 0
    }

    

    console.log(bst_salon)
    document.getElementById("output").textContent = bst_salon
    document.getElementById("address").textContent = bst_salon_arr[6]
    document.getElementById("telno").textContent = bst_salon_arr[7]

    if(bst_salon=="hana_hair"){
        $("#map1").css("display","block");
        //document.getElementById('map1').style.display = "block";
    }

    if(bst_salon=="copa_hair"){
        $("#map2").css("display","block");
        //document.getElementById('map2').style.display = "block";
    }

    if(bst_salon=="studio1313"){
        $("#map3").css("display","block");
        //document.getElementById('map3').style.display = "block";
    }

    if(bst_salon=="bella_moda"){
        $("#map4").css("display","block");
       // document.getElementById('map4').style.display = "block";
    }

    if(bst_salon=="akai_hair"){
        $("#map5").css("display","block");
        //document.getElementById('map5').style.display = "block";
    }
   
}


function refresh(){
    window.location.reload();
}

