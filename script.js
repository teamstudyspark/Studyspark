// ===============================
// StudySpark v2 - Part 1
// ===============================

window.onload = function(){

    setTimeout(function(){

        alert("🚀 Welcome to StudySpark!\n\nYour AI learning platform is loading.");

    },400);

};

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Login Button

document.querySelector(".login-btn").onclick=function(e){

    e.preventDefault();

    alert("🔐 Login system coming soon!");

};

// Spark Dost Button

document.querySelector(".secondary-btn").onclick=function(e){

    e.preventDefault();

    sparkChat();

};

// AI Button

function sparkChat(){

    const question=prompt("🤖 Spark Dost\n\nAsk me anything about your studies.");

    if(question===null) return;

    let answer="";

    const q=question.toLowerCase();

    if(q.includes("physics")){

        answer="Physics helps us understand motion, energy, force and the universe.";

    }

    else if(q.includes("math")){

        answer="Mathematics becomes easy with daily practice. Let's solve one question at a time.";

    }

    else if(q.includes("chemistry")){

        answer="Chemistry is all about atoms, molecules and reactions.";

    }

    else if(q.includes("biology")){

        answer="Biology is the study of living organisms.";

    }

    else{

        answer="Great question! Soon I'll answer this using real AI.";

    }

    alert("🤖 Spark Dost\n\n"+answer);

}
