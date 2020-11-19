document.addEventListener("DOMContentLoaded", function(){
    function whichTransitionEvent(){
        var t,
            el = document.createElement("fakeelement");
      
        var transitions = {
          "transition"      : "transitionend",
          "OTransition"     : "oTransitionEnd",
          "MozTransition"   : "transitionend",
          "WebkitTransition": "webkitTransitionEnd"
        }
      
        for (t in transitions){
          if (el.style[t] !== undefined){
            return transitions[t];
          }
        }
      }
    var transitionEvent = whichTransitionEvent();
    console.log("javascript loaded...")
    const ball1 = document.getElementById("Vector_55");
    const icon = document.getElementById("load_icon");
    const balls = icon.children;
    
    const btn = document.getElementById('loadtest');
    const btn2 = document.getElementById('loadtest2');
    btn.addEventListener("click", ()=>{
        icon.id = "load_icon_progress";
        console.log("clicked")
    })
    btn2.addEventListener("click", ()=>{
        const vectors = Array.prototype.slice.call(balls)
        function after(elem){
            
                
                elem.className = "";
                elem.removeEventListener(transitionEvent, start);
                
            
        }
        function start(event){
            vectors.forEach(i => {
                console.log(i)
                i.className = "scale_icon_progress";
                i.addEventListener(transitionEvent, after(i) )
                
            });
        }
       start();
        
    });
   
});

