<template>
  <!-- Hero section -->
  <div class="relative mt-12  flex flex-col space-y-9 items-center">
    <div class=" ">
      <!-- 1 cricle top right small -->
      <div class="absolute -top-4 right-[15%] opacity-70 h-3 w-3 bg-[#7534E3] rounded-full md:right-1/4 md:top-4"></div>

      <h1 lang="ar" class="hero-big-text mt-5 opacity-0 transition-all text-2xl md:text-3xl lg:text-5xl text-center font-bold">
        تعلم كما تريد ، وقتما تريد <br />
        وأينما تريد مع <span class="text-[#7534E3]">سكولار </span>
      </h1>
    </div>
    <div class="w-2/3 text-center">
      <span class="ml3 text-[11px] md:text-[14px] lg:text-[18px] font-medium">تقدم منصة <span class="font-semibold"> سكولار </span> تجربة تعليمية متكاملة مصممة لتلبية احتياجات الطلاب في العصر الرقمي. باستخدام تقنية الذكاء الاصطناعي، نوفر محتوى مخصصًا يتناسب مع مستوى كل طالب، مما يجعل التعلم أكثر فعالية وسهولة. تضمن المنصة تجربة تفاعلية شاملة تجمع بين التعليم المبسط والتواصل الفعّال، لتمكين الطلاب من تحقيق أهدافهم الأكاديمية والمهنية </span>

      <!-- 2 cricle top right big -->
      <div class="absolute flex justify-center items-center top-[40%] -right-[10%] md:-right-[12%] lg:-right-7 h-24 w-24 opacity-80 bg-[#7534E3] rounded-full">
        <Icon name="hugeicons:ai-book" class="opacity-35 text-white size-16" />
      </div>
    </div>

    <!-- visist on Google Play & Apple Store -->
    <div class="flex gap-3 md:gap-8 lg:gap-10">
     
     
      <!-- Apple Store -->
       <a href="">
        <div class="flex gap-[0.7rem] items-center justify-center px-2 py-1 lg:py-1 lg:px-4 text-white bg-[#1D1E25] rounded border border-[#808D9E]">
        <div class="flex flex-col justify-center items-end text-left">
          <span class="capitalize font-light text-[8px] md:text-[10px] lg:text-[12px]">dwonload on the</span>
          <h3 class="leading-none font-medium text-sm md:text-lg lg:text-xl md:-translate-y-0.5">App Store</h3>
        </div>
        <div class="flex justify-center items-center">
          <Icon name="teenyicons:apple-solid" class="size-6 md:size-7 lg:size-8"></Icon>
        </div>
      </div>
       </a>
     

      <!--Google Play -->
      <a href="">
        <div class="cursor-pointer flex gap-2 items-center justify-center px-2 py-1 md:px-3 md:py-1.5 lg:py-1 lg:px-4 text-white bg-[#1D1E25] rounded border border-[#808D9E]">
        <div class="flex flex-col justify-center items-end text-left">
          <span class="uppercase font-light text-[8px] md:text-[10px] lg:text-[12px]">get it on</span>
          <h3 class="leading-none font-medium text-sm md:text-lg lg:text-xl md:-translate-y-0.5">Google Play</h3>
        </div>
        <div class="flex justify-center items-center">
          <Icon name="logos:google-play-icon" class="size-6 md:size-7 lg:size-8"></Icon>
        </div>
      </div>
      </a>
     
    </div>
  </div>
  <!-- //// Hero section //// -->
</template>

<script setup>
const { $anime } = useNuxtApp();

onMounted(() => {
  var textWrapper = document.querySelector(".ml3");
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  $anime
    .timeline({ loop: false })
    .add({
      targets: ".ml3 .letter",
      opacity: [0.35, 1], // Opacity goes from 0.5 to 1
      easing: "easeInOutQuad", // Smooth easing for transition
      duration: 80, // Shorter duration for quicker transition
      delay: (el, i) => 50 * (i + 1), // Reduced delay to make it faster
    })
    .add({
      targets: ".ml3",
      opacity: 1, // Set the opacity of the entire element to 1
      duration: 200, // Faster duration
      easing: "easeOutExpo", // Easing to slow down at the end
      delay: 300, // Delay to wait before starting the second part of the animation
    });

  $anime({
    targets: ".hero-big-text",

    opacity: 1,

    duration: 4000,
  });
});
</script>
