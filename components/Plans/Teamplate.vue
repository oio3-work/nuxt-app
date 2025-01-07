<template>
  <!-- Plans -->
  <div id="plans" class=" pt-12 mt-5 flex justify-center items-center ">
    <div class="   plans z-10 py-10 relative overflow-hidden flex flex-col gap-10   lg:justify-evenly lg:items-center bg-[#7738E3] w-fit mx-2 px-4 lg:px-6 rounded-2xl">
      <!-- header  -->
      <div class="z-10 text-center">
        <h3 class="text-lg md:text-xl text-nowrap text-white">اختر خطتك الآن</h3>
        <h6 class="text-sm md:text-lg font-light mt-1 mx-2 text-center text-white">اشترك في إحدى باقاتنا واستمتع بمزايا حصرية تناسب احتياجاتك.</h6>
      </div>
      <!-- //// header /// -->

      <!-- planes cards -->
      <div class="z-10 flex flex-col lg:flex-row justify-around items-center gap-8  ">
        <!-- gard betwen -->
        <div v-for="(plan, index) in PlansCard" :class="plan.recommendIt ? 'upsale-button' : ''" class="group rounded-3xl p-[2px] mx-3 md:mx-0 ">
          <div   class="group-hover:scale-105 transition-all duration-300 rounded-3xl flex flex-col justify-evenly   z-10 bg-gradient-to-r from-[#FFC486] to-[#FBB974] group-hover:from-[#5925B0] group-hover:to-[#8137FF] w-[306px] md:w-[340px]  px-4 py-4 md:py-6 md:px-8 ">
            <!-- header -->
            <div class="flex flex-col items-center space-y-3">
              <!-- if recommendIt  -->
              <div v-if="plan.recommendIt" class="w-fit px-6 pt-1 py-1.5 rounded-3xl bg-[#1F2937] group-hover:bg-gradient-to-b group-hover:from-[#FFC486] group-hover:to-[#FBB974]">
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





.plans {
 
  background-color: #7738E3;
 background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23FFC486' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E");
}
 

</style>