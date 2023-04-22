<script setup>



</script>
<style>


.transition2 {
  transition: all 1s ;
}



.click{

    cursor: pointer;
}


</style>
<template>
<h1 class="text-center text-4xl text-white-50" data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000">Projects</h1>

<div class="w-screen h-max bg-white-950 flex justify-center items-center flex-col z-50">
    
    <div class="h-screen z-50 flex flex-col justify-center items-center">
        
        
        <div class="z-40 absolute scale-50 opacity-0 rounded-md border-2 border-white-50" id="two"><img src="../assets/capstone/projimg2.png" class="h-52 w-80"></div>
        <div class="z-40 absolute scale-50 opacity-0 rounded-md border-2 border-white-50" id="three"><img src="../assets/capstone/projimg3.png" class="h-52 w-80"></div>
        <div class="z-50  click  flex justify-center items-center flex-col " @click="test()"><h1 class=" text-center mb-20 text-5xl text-white-50" data-aos="fade" data-aos-duration="1000"> Capstone Project <p class="text-sm">(Click Image)</p></h1><img src="../assets/capstone/projimg1.png" class="rounded-md border-2 border-white-50 xl:h-60 h-40 xl:w-96"></div>
        <div class="z-40 absolute scale-50 opacity-0 rounded-md border-2 border-white-50" id="four"><img src="../assets/capstone/projimg4.png" class="h-52 w-80"></div>
        <div class="z-40 absolute scale-75 opacity-0 rounded-md border-2 border-white-50" id="five"><img src="../assets/capstone/face_recog.png" class="h-72 w-110"></div>


    </div>

    <div class="h-screen z-50 flex flex-col  items-center">
        
        
        <div class="z-40 absolute scale-50 opacity-0 rounded-md border-2 border-white-50" id="2"><img src="../assets/internship/2.png" class="h-52 w-80"></div>
        <div class="z-40 absolute scale-50 opacity-0 rounded-md border-2 border-white-50" id="3"><img src="../assets/internship/3.png" class="h-52 w-80"></div>
        <div class="z-40 absolute scale-50 opacity-0 rounded-md border-2 border-white-50" id="4"><img src="../assets/internship/4.png" class="h-52 w-80"></div>
        <div class="z-50  click " @click="test2()"><h1 class=" text-center mb-20 text-5xl text-white-50" data-aos="fade" data-aos-duration="1000"> Internship<p class="text-sm">(Click Image)</p></h1><img src="../assets/internship/1.png" class="rounded-md border-2 border-white-50 h-60 w-96"></div>
        <div class="z-40 absolute scale-50 opacity-0 rounded-md border-2 border-white-50" id="5"><img src="../assets/internship/5.png" class="h-52 w-80"></div>
        <div class="z-40 absolute scale-50 opacity-0 rounded-md border-2 border-white-50" id="6"><img src="../assets/internship/6.png" class="h-52 w-80"></div>
        <div class="z-40 absolute scale-50 opacity-0 rounded-md border-2 border-white-50" id="7"><img src="../assets/internship/7.png" class="h-52 w-80"></div>
        <div class="z-40 absolute scale-50 opacity-0 rounded-md border-2 border-white-50" id="8"><img src="../assets/internship/8.png" class="h-52 w-80"></div>


    </div>










    <p class="text-sm py-4 text-white-50 z-50 ">Designed and Developed by John Patrick Pahunang</p>

</div>



</template>

<script>

export default {

data(){
    return{


    }

},

methods:{

    test2(){



        setTimeout(function() { 
            var hover2 = document.getElementById("2");
                hover2.classList.add("transition2");
                hover2.style.scale = 2 ;
                hover2.style.opacity = 1 ;
                hover2.style.marginRight = "1000px" ;
          
          
        }, 100);


        setTimeout(function() { 
          var hover3 = document.getElementById("3");
              hover3.classList.add("transition2");
              hover3.style.scale = 2 ;
              hover3.style.opacity = 1 ;
              hover3.style.marginRight = "1300px" ;
              hover3.style.marginTop = "250px" ;
          
        }, 200);

        setTimeout(function() { 
          var hover4 = document.getElementById("4");
              hover4.classList.add("transition2");
              hover4.style.scale = 2 ;
              hover4.style.opacity = 1 ;
              hover4.style.marginLeft = "1100px" ;
              hover4.style.marginTop = "550px" ;
            
          
        }, 500);

        setTimeout(function() { 
          var hover5 = document.getElementById("5");
              hover5.classList.add("transition2");
              hover5.style.scale = 2 ;
              hover5.style.opacity = 1 ;
              hover5.style.marginLeft = "1000px" ;

            
          
        }, 700); 


        setTimeout(function() { 
          var hover6 = document.getElementById("6");
              hover6.classList.add("transition2");
              hover6.style.scale = 2 ;
              hover6.style.opacity = 1 ;
              hover6.style.marginTop = "500px" ;
            
          
        }, 400); 

        setTimeout(function() { 
          var hover7 = document.getElementById("7");
              hover7.classList.add("transition2");
              hover7.style.scale = 2 ;
              hover7.style.opacity = 1 ;
              hover7.style.marginLeft = "1300px" ;
              hover7.style.marginTop = "250px" ;
            
          
        }, 600); 

        setTimeout(function() { 
          var hover8 = document.getElementById("8");
              hover8.classList.add("transition2");
              hover8.style.scale = 2 ;
              hover8.style.opacity = 1 ;
              hover8.style.marginRight = "1100px" ;
              hover8.style.marginTop = "550px" ;
            
          
        }, 300); 
       

    },















    test(){

        setTimeout(function() { 
            var hoverimg2 = document.getElementById("two");
              hoverimg2.classList.add("transition2");
              hoverimg2.style.scale = 2 ;
              hoverimg2.style.opacity = 1 ;
              hoverimg2.style.marginRight = "900px" ;
              hoverimg2.style.marginTop = "-450px" ;
        
        }, 100);


        setTimeout(function() { 
            var hoverimg3 = document.getElementById("three");
              hoverimg3.classList.add("transition2");
              hoverimg3.style.scale = 2 ;
              hoverimg3.style.opacity = 1 ;
              hoverimg3.style.marginRight = "900px" ;
              hoverimg3.style.marginTop = "450px" ;
        
        }, 200);

        setTimeout(function() { 
            var hoverimg4 = document.getElementById("four");
              hoverimg4.classList.add("transition2");
              hoverimg4.style.scale = 2 ;
              hoverimg4.style.opacity = 1 ;
              hoverimg4.style.marginLeft = "900px" ;
              hoverimg4.style.marginTop = "450px" ;

        
        }, 300);

        setTimeout(function() { 
            var hoverimg5 = document.getElementById("five");
              hoverimg5.classList.add("transition2");
              hoverimg5.style.opacity = 1 ;
              hoverimg5.style.marginLeft = "900px" ;
              hoverimg5.style.marginTop = "-450px" ;

        
        }, 400); 


        },

    

    

    }

}



</script>