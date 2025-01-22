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
    <div class="w-[95%] lg:w-[85%] mx-auto relative z-10">
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide v-for="teacher in teachersItems">
          <div class="flex flex-col items-center w-fit space-y-1.5 lg:space-y-3 p-2 lg:p-3 bg-white rounded-2xl lg:rounded-3xl">
            <div class="overflow-hidden rounded-xl rounded-es-[60px] md:rounded-2xl md:rounded-es-[80px] lg:rounded-3xl lg:rounded-es-[120px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[220px] lg:h-[220px] bg-gradient-to-r from-[#5925B0] to-[#8137FF]">
              <NuxtImg  :src="teacher.image.url" class="scale-110 mt-2 object-cover object-center" />
            </div>
            <div>
              <h3 class="translate-y-1 text-xs md:text-sm lg:text-lg">{{ teacher.name }}</h3>
              <span class="text-[8px] md:text-[10px] lg:text-sm text-[#8137FF] font-light">{{ teacher.subject_name }}</span>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
    <!-- list for Teachers -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const config = useRuntimeConfig();
const windowWidth = window.innerWidth;
 

const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));

const swiper = useSwiper(containerRef, {
  loop: true,
  slidesPerView: windowWidth < 300 ? 2 : windowWidth < 768 ? 3 : windowWidth < 1024 ? 4 : 5,
  spaceBetween: 15,
  speed: 1500,
  allowTouchMove: true,
  autoplay: {
    delay: 500,
    reverseDirection: 1,
  },
  slidesPerGroup: 2,
});


const teachersItems = ref([]);


function teachersItemsFilter(value) {
  return value.type == "teacher";

}

onMounted(() => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`${config.public.apiBase}/teachers/special`, requestOptions)
    .then((response) => response.text())
    .then((data) => {    
      teachersItems.value = JSON.parse(data).results.filter(teachersItemsFilter);
      
     } )
    .catch((error) => console.error(error));
});
 
 
</script>
