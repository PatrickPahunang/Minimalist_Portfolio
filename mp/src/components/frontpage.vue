<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {  faLaptopCode } from "@fortawesome/free-solid-svg-icons";

library.add(faLaptopCode)


</script>
<style>


/* .try1 {

    animation: try1 2s linear infinite;
}
.try2 {

animation: try2 2s linear infinite;
} */





.click{
    cursor: pointer;
}

.transition2 {
  transition: all 1s ;
}




</style>
<template>

<div class="h-max flex justify-center items-center w-screen" data-aos="fade-down" data-aos-duration="1000">
    <img src="../assets/header.png" class="xl:h-8 h-8 mt-2">
</div>






<div class="bg h-screen w-screen flex justify-center items-center " id="text1">
    <h1 class="text-center w-screen xl:top-20 top-32 absolute xl:text-4xl text-3xl text-white-50 font-thin mb-20" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">Entry Level <span class="font-medium">Web</span><br> <span class="font-extrabold">Developer</span></h1>

<img src="../assets/bg.jpg" alt="" class="scale-110 right-20 opacity-20 fixed h-max">



<div class=" h-max w-max flex justify-center items-center ">
    
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" class="try1 hide " ><img src="../assets/2.jpg" alt="" id="img2" class="xl:block hidden transition duration-500 border-2 rounded-sm border-white-100 xl:h-max h-32 w-60 opacity-25 transform   " ></div>
    <div class="absolute text-center click z-10" @click="test()" id="img1"><img src="../assets/1.jpg" alt="" class="xl:h-110 h-96 w-max border-4 rounded-md border-white-100" data-aos="zoom-out" data-aos-duration="1000"> <button class="mt-8 h-10 px-4 bg-white-50 text-l rounded-sm font-bold" data-aos="zoom-out" data-aos-delay="700" data-aos-duration="1000">Hire Me <font-awesome-icon icon="fa-solid fa-laptop-code" class="h-5 ml-2" /></button></div>
    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700" class="try2 hide " ><img src="../assets/3.jpg" alt="" id="img3" class="xl:block hidden transition duration-500 border-2 rounded-sm border-white-100 xl:h-max h-32 w-60 opacity-25 transform     " ></div>

</div>

</div>




</template>

<script>


export default {

data(){
    return{


    }

},

methods:{

    test(){
        var hoverElement2 = document.getElementById("img2");
        hoverElement2.classList.add("transition2");
        hoverElement2.style.scale = "2";
        hoverElement2.style.transform = "rotate(-10deg)";
        hoverElement2.style.marginRight = "350px";
        hoverElement2.style.opacity = "1";
    
        setTimeout(function() {
          var hoverElement3 = document.getElementById("img3");
              hoverElement3.classList.add("transition2");
              hoverElement3.style.scale = "2";
              hoverElement3.style.transform = "rotate(10deg)";
              hoverElement3.style.marginLeft = "350px";
              hoverElement3.style.opacity = "1";
        }, 300);
       

    }

    

    }

}

</script>