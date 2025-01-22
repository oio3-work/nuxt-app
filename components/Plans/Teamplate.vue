<template>
  <!-- Plans -->
  <div id="plans" class=" pt-12 mt-5 flex justify-center items-center ">
    <div class="    z-10 py-10 relative overflow-hidden flex flex-col gap-10   lg:justify-evenly lg:items-center bg-[#7738E3] w-fit mx-2 px-4 lg:px-6 rounded-2xl">
    
       <!--   cricle bacgkround  -->
          <div class=" plans-cricle absolute top-0 left-0 w-full h-full  blur-lg md:blur-0"></div>
          <!-- //// cricle bacgkround/// -->
      <!-- header  -->
      <div class="z-10 text-center">
        <h3 class="text-lg md:text-xl text-nowrap text-white">اختر خطتك الآن</h3>
        <h6 class="text-sm md:text-lg font-light mt-1 mx-2 text-center text-white">اشترك في إحدى باقاتنا واستمتع بمزايا حصرية تناسب احتياجاتك.</h6>
      </div>
      <!-- //// header /// -->

      <!-- planes cards -->
      <div class="z-10 flex flex-col lg:flex-row justify-around items-center gap-8  ">
        <!-- gard betwen -->
        <div   @mouseover="selectedPlan = index" @mouseleave="selectedPlan = 1" v-for="(plan, index) in PlansCard" :class="plan.recommendIt ? 'upsale-button' : ''" class="group rounded-3xl p-[2px] mx-3 md:mx-0 " >
          <div      class="group-hover:scale-105 transition-all duration-300 rounded-3xl flex flex-col justify-evenly   z-10 bg-gradient-to-r from-[#FFC486] to-[#FBB974] group-hover:from-[#5925B0] group-hover:to-[#8137FF] w-[306px] md:w-[340px]  px-4 py-4 md:py-6 md:px-8 ">
            <!-- header -->
            <div  class="flex flex-col items-center space-y-3">
              <!-- if recommendIt  -->
              <div v-if="plan.recommendIt" class="w-fit px-6 pt-1 py-1.5 rounded-3xl bg-[#1F2937] group-hover:bg-gradient-to-b group-hover:from-[#FFC486] group-hover:to-[#FBB974]" >
                <span class="text-sm leading-loose text-white group-hover:text-[#1F2937]"> ننصــــح بهـــا</span>
              </div>

              <h3 class="text-2xl transition-all text-[#1F2937] group-hover:text-white">{{ plan.title }}</h3>
              <span class="text-xl transition-all text-[#1F2937] group-hover:text-white">
                <span class="font-light text-sm text-[#1F2937]/50 group-hover:text-white/50"> {{ plan.forPirson }}/</span> {{ plan.price }}
              </span>
            </div>
            <!-- //// header //// -->


            <div><hr class="max-w-[80%] group-hover:border-[#D4D4D4] mx-auto my-8" /></div>

            <!-- list -->
            <div class="min-w-[90%] mx-auto">
              <ul class=" space-y-2 md:space-y-5">
                <li v-for="(featureItem, index) in plan.features" class="flex items-center gap-2">
                  <Icon name="material-symbols-light:check-circle-rounded" class=" size-4 md:size-5 transition-all text-[#1F2937] group-hover:text-white mt-0.5" />
                  <span class=" text-sm font-thin transition-all text-[#1F2937] group-hover:text-white">{{ featureItem }}</span>
                </li>
              </ul>
            </div>
            <!-- list -->

             <!-- Diamond -->
             
              


          </div>
        </div>
        <!-- gard betwen -->
      </div>
      <!-- //// planes cards //// -->

      <!-- cricle -->
      <!-- <div class="absolute flex justify-center items-center bg-white/10 blur-[2px] rounded-full w-[80%] h-[70vw]">
        <div class="bg-white/30 rounded-full opacity-20 w-[50%] h-[30vw]"></div>
      </div> -->
      <!-- cricle -->
    </div>
  </div>
  <!--  /// Plans  /// -->
</template>

<script setup>
import { ref } from 'vue';
const selectedPlan = ref(1);



const PlansCard = [
{
    title: "الالماسية",
    price: "250,000IQD",
    forPirson: "شخص واحد",
    features: [" كل مميزات الباقة الذهبية" , "تقارير شهرية تفصيلية عن الأداء والتقدم الدراسي" , "أدوات تفاعلية متقدمة مثل محاكاة الاختبارات النهائية"],
    recommendIt: false,
    ifDiamond: true,
  },
  
  {
    title: "الذهبية",
    price: "150,000IQD",
    forPirson: "شخص واحد",
    features: ["كل مميزات الباقة الفضية", "الوصول إلى محتوى تعليمي موسع وشامل", "اختبارات دورية لتقييم شامل لكل مادة", "دعم فني فوري عبر الدردشة"],
    recommendIt: true,
    ifDiamond: false,
  },
  {
    title: "الفضية",
    price: "50,000IQD",
    forPirson: "شخص واحد",
    features: ["الوصول إلى المحتوى الأساسي" ," واجبات يومية ومراجعات مبسطة","اختبار أسبوعي لتقييم التقدم", ],
    recommendIt: false,
    ifDiamond: false,
  },

];
</script>


<style scoped>

.upsale-button {
    position: relative;
    z-index: 0;   
    overflow: hidden;
    border: none !important;
    transition: 2s all linear;
     
}

.upsale-button:after{
   content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(90deg, rgba(255,255,255,0)    0%, #ffffff 80%, rgba(255,255,255,0) 100%);
    -webkit-animation: rotate .2s linear infinite;
    animation: rotate 3.5s linear infinite;
}


@-webkit-keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}





 
.plans-cricle {background-color: #7738E3;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg fill-opacity='0.12'%3E%3Ccircle fill='%237738E3' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%239962ea' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23b689f0' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23d0b0f6' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23e8d7fb' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23FFFFFF' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
 background-position: 50%;
background-size: cover;}

</style>