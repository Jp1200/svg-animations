document.addEventListener("DOMContentLoaded", function(){
    console.log("javascript loaded...")
    const ball1 = document.getElementById("Vector_55");
    const icon = document.getElementById("load_icon");
    const btn = document.getElementById('loadtest');
    const btn2 = document.getElementById('loadtest2');
    btn.addEventListener("click", ()=>{
        icon.id = "load_icon_progress";
        console.log("clicked")
    })
    btn2.addEventListener("click", ()=>{
        icon.id = "load_icon_progress2";
        
    })
});

