<template>
  <div id="footer" class="pt-12 ">
    <div class="   px-8 text-center flex flex-col justify-around w-full h-[414px] bg-gradient-to-b from-[#8137FF] to-[#5925B0]">
      <!-- logo and links  -->
      <div class="flex flex-col justify-center items-center space-x-2">
        <NuxtImg src="footer/logoScholar.svg" class="w-[334px] h-[119px]" />
        <div class=" flex justify-between flex-wrap space-x-5 lg:space-x-10">  
          <div v-for="(link, index) in LinksFooter" :key="index">
             <NuxtLink  :href="link.href" class=" cursor-pointer mx-1 text-lg font-thin text-white hover:text-[#FFC486] transition-all">  {{ link.title }}  </NuxtLink>
           </div>
        </div>
      </div>
      <!-- //// logo and links ////  -->

      <div>
        <hr class="mx-auto opacity-30" />
      </div>

      <div class="flex justify-between">
        <!-- social media -->
        <div>
          <ul class="flex gap-5">
            <li>
              <Icon name="ant-design:twitter-outlined" class="text-white text-3xl" />
            </li>
            <li>
              <Icon name="ant-design:instagram-filled" class="text-white text-3xl" />
            </li>
            <li>
              <Icon name="ant-design:facebook-filled" class="text-white text-3xl" />
            </li>
          </ul>
        </div>

        <div>
          <p dir="ltr" class="text-white UrbanistRegula font-thin">© 2025 Scholar Academy. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const LinksFooter = [
  { title: "الرئيسية", href: "#main" },
  { title: "الخطط", href:"#plans" },
  { title: "المميزات", href:"#features" },
  { title: "فريقنا", href:"#our-team" },
  { title: "Privacy Police", href:"" },
  { title: "Term & Condition", href:"" },
];
</script>
