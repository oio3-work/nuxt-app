<script setup>
import { ref, onMounted } from "vue";

const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));

const swiper = useSwiper(containerRef, {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 5,
  speed: 2500,
  allowTouchMove: true,
  autoplay: {
    delay: 1500,
    reverseDirection: 1,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerGroup:3,
});

const OurTeamList = ref([]);


function OurTeamListFilter(value) {
  return value.type == "team";

}

onMounted(() => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://api.scholar-ai.iq/api/dash/teachers/special", requestOptions)
    .then((response) => response.text())
    .then((data) => {    
      OurTeamList.value = JSON.parse(data).results.filter(OurTeamListFilter);
      
     } )
    .catch((error) => console.error(error));
});
 
</script>

<template>
  <div id="our-team" class="relative pt-12 pb-14 flex flex-col items-center text-center">
    <h3 class="z-10 text-lg md:text-xl lg:text-2xl text-nowrap">
      تعرف على
      <span class="text-[#7738E3]"> فريقنا </span>المميز
    </h3>

    <div class="container mx-auto flex items-center justify-around gap-5 w-full mt-7 px-8">
      <!-- arrow in right screen  -->
      <div class="group swiper-button-next cursor-pointer">
        <div class="transition-all flex justify-center items-center h-7 w-7 rounded border md:h-9 md:w-9 md:rounded-lg md:border-2 border-[#1F2937] group-hover:bg-gradient-to-t group-hover:from-[#8137FF] group-hover:to-[#5925B0] group-hover:border-white/70">
          <Icon name="weui:arrow-outlined" class="text-[#1F2937] group-hover:text-white/70 size-6 md:size-7 " />
        </div>
      </div>

      <div class="w-[72%] translate-y-4">
        <swiper-container ref="containerRef" :init="false">
          <swiper-slide v-for="(item, index) in OurTeamList" :key="index"  >
            <div>
              <div class="relative flex flex-col justify-center items-center">
                <div class="size-16 overflow-hidden md:size-24 rounded-full bg-gradient-to-t from-[#8137FF] to-[#5925B0]">
                  <NuxtImg    :src="item.image.url"  class="  object-cover object-center  "  />
   
                </div>
                <div class="flex flex-col items-center">
                  <h2 class="text-nowrap text-xs md:text-lg">{{ item.name }}</h2>
                  <span class="text-xs md:text-sm font-thin text-nowrap">{{ item.subject_name }}</span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>

      <!-- arrow in left screen  -->
      <div class="group swiper-button-prev cursor-pointer">
        <div class="transition-all flex justify-center items-center h-7 w-7 rounded border md:h-9 md:w-9 md:rounded-lg md:border-2 border-[#1F2937] group-hover:bg-gradient-to-t group-hover:from-[#8137FF] group-hover:to-[#5925B0] group-hover:border-white/70">
          <Icon name="weui:arrow-outlined" class="text-[#1F2937] group-hover:text-white/70 size-6 md:size-7 rotate-180" />
        </div>
      </div>
    </div>
    <!-- Vector.svg -->
    <NuxtImg class="absolute right-0 translate-x-36 lg:translate-x-5 -top-44 opacity-50" src="ourTeam/Vector.svg" />
    <NuxtImg class="absolute right-0 translate-x-36 lg:translate-x-0 -top-44 scale-125 opacity-50" src="ourTeam/Vector.svg" />
  </div>
</template>
