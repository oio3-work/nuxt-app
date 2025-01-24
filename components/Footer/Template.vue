<template>
  <div id="footer" class="pt-12 ">
    <div
      class="   px-8 text-center flex flex-col justify-around w-full space-y-9 md:space-y-11 lg:space-y-13      bg-gradient-to-b from-[#8137FF] to-[#5925B0]">
      <!-- logo and links  -->
      <div class="flex flex-col justify-center items-center space-x-2">
        <LogoScholarFooter class="w-[334px] h-[119px]" />
        <div class=" flex justify-between flex-wrap space-x-5 lg:space-x-10">
          <div v-for="(link, index) in LinksFooter" :key="index">
            <NuxtLink :href="link.href"
              class=" cursor-pointer mx-1 text-lg font-thin text-white hover:text-[#FFC486] transition-all"> {{
                link.title }} </NuxtLink>
          </div>
        </div>
      </div>
      <!-- //// logo and links ////  -->

      <div>
        <hr class="mx-auto opacity-30" />
      </div>

      <div class="flex justify-between pb-2">
        <!-- social media -->
        <div>
          <ul class="flex  gap-5">
            <li v-for="(social, index) in socialMedia" :key="index">
              <a :href="social.link">
                <Icon :name="social.icon"
                  class="text-white  text-2xl  md:text-3xl hover:text-[#FFC486] hover:-translate-y-1 transition-all" />
              </a>

            </li>

          </ul>
        </div>

        <div>
          <p dir="ltr" class=" text-xs  md:text-sm  text-white UrbanistRegula font-thin">© 2025 Scholar Academy. All
            rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const LinksFooter = [
  { title: "الرئيسية", href: "#main" },
  { title: "الخطط", href: "#plans" },
  { title: "المميزات", href: "#features" },
  { title: "فريقنا", href: "#our-team" },
  { title: "Privacy Police", href: "" },
  { title: "Term & Condition", href: "" },
];
const socialMedia = [{
  name: "twitter",
  icon: "ant-design:twitter-outlined",
  link: "https://twitter.com/",
}, {
  name: "instagram",
  icon: "ant-design:instagram-filled",
  link: "https://www.instagram.com/",
}, {
  name: "facebook",
  icon: "ant-design:facebook-filled",
  link: "https://www.facebook.com/",
}];
</script>