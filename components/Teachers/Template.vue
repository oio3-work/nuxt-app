<template>
  <div class="pt-12 z-10 text-center flex flex-col items-center space-y-2 md:space-y-4">
    <div class="z-10 max-w-[80%] text-center">
      <h3 class="text-sm md:text-lg lg:text-xl text-nowrap">
        أفضل الخبرات التعليمية بين
        <span class="text-[#7738E3]"> يديك </span>
      </h3>
      <h6 class="text-xs md:text-sm lg:text-lg font-light mt-1.5 lg:mt-2 text-center">مدرسونا هم <span class="font-semibold"> قادة التعليم. </span> بفضل سنوات من الخبرة والتفاني، ستتلقى تعليمًا يلهمك للنجاح والتفوق</h6>
    </div>

    <!-- list for Teachers -->
    <div  class=" p-4 relative z-10">
      <ul class=" list-teachers  flex gap-4 overflow-x-auto w-full">
        <li class="list-teachers_items" v-for="teacher in teachers">
          <div class="flex flex-col items-center space-y-1.5 lg:space-y-3 p-2 lg:p-3 bg-white rounded-2xl lg:rounded-3xl">
            <div class="overflow-hidden rounded-xl rounded-es-[60px] md:rounded-2xl md:rounded-es-[80px] lg:rounded-3xl lg:rounded-es-[120px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[220px] lg:h-[220px] bg-gradient-to-r from-[#5925B0] to-[#8137FF]">
              <NuxtImg src="teachers/rami.svg" width="300" height="200" />
            </div>
            <div>
              <h3 class="translate-y-1 text-xs md:text-sm lg:text-lg">{{ teacher.name }}</h3>
              <span class="text-[8px] md:text-[10px] lg:text-sm text-[#8137FF] font-light">{{ teacher.degree }}</span>
            </div>
          </div>
        </li>
        <li class="list-teachers_items" v-for="teacher in teachers">
          <div class="flex flex-col items-center space-y-1.5 lg:space-y-3 p-2 lg:p-3 bg-white rounded-2xl lg:rounded-3xl">
            <div class="overflow-hidden rounded-xl rounded-es-[60px] md:rounded-2xl md:rounded-es-[80px] lg:rounded-3xl lg:rounded-es-[120px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[220px] lg:h-[220px] bg-gradient-to-r from-[#5925B0] to-[#8137FF]">
              <NuxtImg src="teachers/rami.svg" width="300" height="200" />
            </div>
            <div>
              <h3 class="translate-y-1 text-xs md:text-sm lg:text-lg">{{ teacher.name }}</h3>
              <span class="text-[8px] md:text-[10px] lg:text-sm text-[#8137FF] font-light">{{ teacher.degree }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- list for Teachers -->
 
 


  </div>
</template>

<script setup>
import { ref } from "vue";
 
const teachers = [
  { name: "محمد الأحمد", degree: "ماجستير" },
  { name: "نور الخالد", degree: "دكتوراه" },
  { name: "حسن المحمود", degree: "ماجستير" },
  { name: "فاطمة السالم", degree: "دكتوراه" },
  { name: "محمد الأحمد", degree: "ماجستير" },
  { name: "نور الخالد", degree: "دكتوراه" },
  { name: "حسن المحمود", degree: "ماجستير" },
  { name: "فاطمة السالم", degree: "دكتوراه" },
  { name: "محمد الأحمد", degree: "ماجستير" },
  { name: "نور الخالد", degree: "دكتوراه" },
  { name: "حسن المحمود", degree: "ماجستير" },
  { name: "فاطمة السالم", degree: "دكتوراه" },
  { name: "محمد الأحمد", degree: "ماجستير" },
  { name: "نور الخالد", degree: "دكتوراه" },
  { name: "حسن المحمود", degree: "ماجستير" },
  { name: "فاطمة السالم", degree: "دكتوراه" },
  { name: "محمد الأحمد", degree: "ماجستير" },
  { name: "نور الخالد", degree: "دكتوراه" },
  { name: "حسن المحمود", degree: "ماجستير" },
  { name: "فاطمة السالم", degree: "دكتوراه" },
  { name: "محمد الأحمد", degree: "ماجستير" },
  { name: "نور الخالد", degree: "دكتوراه" },
  { name: "حسن المحمود", degree: "ماجستير" },
  { name: "فاطمة السالم", degree: "دكتوراه" },
  { name: "محمد الأحمد", degree: "ماجستير" },
  { name: "نور الخالد", degree: "دكتوراه" },
  { name: "حسن المحمود", degree: "ماجستير" },
  { name: "فاطمة السالم", degree: "دكتوراه" },
  { name: "محمد الأحمد", degree: "ماجستير" },
  { name: "نور الخالد", degree: "دكتوراه" },
  { name: "حسن المحمود", degree: "ماجستير" },
  { name: "فاطمة السالم", degree: "دكتوراه" },
  // Add more teachers as needed
];

 
</script>


<style>
.list-teachers{
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}



@keyframes slides {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

 
 
 

 
.list-teachers_items {
  display: inline-block;
  animation: 10s slides infinite  linear;
}

 
 
</style>