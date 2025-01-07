<template>
  <div id="our-team" class=" relative pt-12 pb-14 flex flex-col items-center text-center  ">
    <h3 class=" z-10 text-lg md:text-xl lg:text-2xl text-nowrap">
      تعرف على
      <span class="text-[#7738E3]"> فريقنا </span>المميز
    </h3>

    <div class=" container mx-auto  flex items-center justify-around  gap-5  w-full mt-7 px-8  ">
     
      <!-- arrow in right screen  -->
      <div class="group   cursor-pointer" >
        <div class="transition-all flex justify-center items-center h-7 w-7 rounded  border  md:h-9 md:w-9 md:rounded-lg md:border-2 border-[#1F2937] group-hover:bg-gradient-to-t group-hover:from-[#8137FF] group-hover:to-[#5925B0] group-hover:border-white/70">
          <Icon name="weui:arrow-outlined" class="text-[#1F2937] group-hover:text-white/70 size-6 md:size-7" />
        </div>
      </div>

  
        <ul class="flex-1 flex justify-around  translate-y-5 md:translate-y-6 lg:translate-y-7  ">
          <li v-for="(item, index) in OurTeamList">
            <div class="relative flex flex-col justify-center items-center ">
              <div class=" size-16   md:size-24 rounded-full bg-gradient-to-t from-[#8137FF] to-[#5925B0]"></div>
              <div class="-bottom-12 md:-bottom-14 lg:-bottom-20">
                <h2 class="text-nowrap text-xs md:text-lg">{{ item.name }}</h2>
                <span class="text-xs md:text-sm font-thin text-nowrap">{{ item.job }}</span>
              </div>
            </div>
          </li>
        </ul>
     

      <!-- arrow in left screen  -->
      <div class="group cursor-pointer" >
        <div class="transition-all flex justify-center items-center h-7 w-7 rounded  border  md:h-9 md:w-9 md:rounded-lg md:border-2 border-[#1F2937] group-hover:bg-gradient-to-t group-hover:from-[#8137FF] group-hover:to-[#5925B0] group-hover:border-white/70">
          <Icon name="weui:arrow-outlined" class="text-[#1F2937] group-hover:text-white/70 size-6 md:size-7 rotate-180" />
        </div>
      </div>

      

     
   
    </div>
       <!-- Vector.svg -->
    <NuxtImg class=" absolute right-0 translate-x-36 lg:translate-x-5 -top-44   opacity-50 " src="ourTeam/Vector.svg" />
    <NuxtImg class=" absolute right-0 translate-x-36 lg:translate-x-0  -top-44  scale-125 opacity-50  " src="ourTeam/Vector.svg" />
 
 

  </div>
</template>

<script setup>
import { ref } from "vue";
const OurTeamList = [
  { name: "بشير فاهم", job: "المبرمج", profile: "" },
  { name: "علي مهند", job: "المصمم", profile: "" },
  { name: "مصطفى جواد", job: "المصور", profile: "" },
 
];


</script>
