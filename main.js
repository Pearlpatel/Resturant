var items=["Paneer Pizza",
"Veg Pizza",
" Alfredo Pasta",
"Chicken Wings",
"French Fries",
"Tacos"];

console.log(items);
function Show (){
    document.getElementById("foods").innerHTML=items;  
    
    var remove=items.join(" ");
console.log(remove);
document.getElementById("names-without-commas").innerHTML=remove;
}

