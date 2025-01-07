<template>
  <div id="main" class="container mx-auto">
    <!-- menu -->
    <div class=" header flex justify-between md:justify-around px-6 lg:px-12 text-[13px] md:text-[16px] text-[#1F2937] translate-y-[17px] md:translate-y-[14px]">
      <div class=" right flex  gap-4 md:gap-12">
        <a class=" -translate-y-8 opacity-0 transition-all duration-300 hover:text-[#7738E3] " href="">الرئيسية</a>
        <a class=" -translate-y-8 opacity-0 transition-all duration-300 hover:text-[#7738E3]" href="#plans">الخطط</a>
      </div>

      <div class=" left flex gap-4 md:gap-12">
        <a class=" -translate-y-8 opacity-0 transition-all duration-300 hover:text-[#7738E3]" href="#features">المميزات</a>
        <a class=" -translate-y-8 opacity-0 transition-all duration-300 hover:text-[#7738E3]" href="#our-team">فريقنا </a>
      </div>
    </div>
    <!-- //// menu //// -->
    <!-- line & logo -->
    <div class="flex justify-center items-center">
      <!-- line 1 -->
      <div class=" line   flex-1 bg-[#1F2937] h-0.5"></div>
      <!-- logo -->
      <div class="relative flex justify-center items-center h-[54px] w-[54px] md:h-[60px] md:w-[60px] rounded-full border-2 border-[#1F2937]">
        <LogoScholar class="scale-100 md:scale-105" />
        <span class="absolute -bottom-8 text-lg UrbanistRegular hidden lg:block">Scholer</span>
      </div>
      <!-- line 2 -->
      <div class=" line   flex-1 bg-[#1F2937] h-0.5"></div>
    </div>
    <!-- //// line & logo ///// -->
  </div>
</template>

<script setup>
const { $anime } = useNuxtApp();

onMounted(() => {
 

$anime({
  targets: '.header div a',
   translateY: 0,    
   opacity: 1,  
   delay: function(el, i, l) {
    return i * 100;
  },
  duration: 400, 
  
});

 
 
});
</script>
