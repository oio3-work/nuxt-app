<template>
  <div id="features" class="relative pt-10">
  

    <div class="  flex flex-col items-center text-center">
      <h3 class=" z-10 text-lg md:text-xl lg:text-2xl text-nowrap">
        لماذا تختار منصة
        <span class="text-[#7738E3]"> سكولار </span>؟
      </h3>

      <div class=" z-10 mt-7 rounded-3xl w-fit mx-5 lg:mx-10 bg-gradient-to-b from-[#8137FF] to-[#5925B0]">
        <ul class="grid grid-cols-2 lg:grid-cols-4 gap-2 p-2 lg:p-4 h-full items-center justify-between lg:gap-10">
          <!-- cards features  -->
          <li v-for="(feature, index) in features"   class="group h-full">
            <div class="p-4 lg:p-6 transition-all group-hover:scale-110 lg:group-hover:scale-125 w-fit h-full flex flex-col gap-3 justify-around items-center group-hover:bg-gradient-to-b group-hover:from-[#FFCD4A] group-hover:to-[#F6A72A]"     >
              <!-- icon -->
              <div style="box-shadow: rgba(255, 196, 133, 0.8) 0px 0px 10px 0px" class="w-fit p-4 rounded-full bg-gradient-to-b from-[#FFC486] to-[#FBB974] group-hover:from-[#8137FF] group-hover:to-[#5925B0]">
                <component :is="getIconComponent(feature.icon)" class="text-white group-hover:text-[#FCC140]" />
              </div>

              <h3 class="transition-all text-white text-lg group-hover:text-[#1F2937]">{{ feature.title }}</h3>
              <span class="transition-all text-white font-thin text-sm group-hover:text-[#1F2937]">{{ feature.description }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
     
  <NuxtImg class="absolute  left-1/6     -top-[14rem]  lg:left-1/4   lg:-top-[25rem]  " src="features/Vector.svg" />

  

  </div>
</template>

<script setup>
 
import FeaturesIconsHotspot from "~/components/Features/Icons/Hotspot.vue";
import FeaturesIconsIDcard from "~/components/Features/Icons/IDcard.vue";
import FeaturesIconsUser from "~/components/Features/Icons/user.vue";
import FeaturesIconsJetPlane from "~/components/Features/Icons/jetPlane.vue";
const features = [
  {
    icon: "FeaturesIconsHotspot",
    title: "أداء مميز حتى مع الإنترنت الضعيف",
    description: "تم تصميم المنصة بحيث تعمل بكفاءة عالية حتى مع اتصال إنترنت ضعيف، مما يضمن للطلاب تجربة تعليمية سلسة دون أي انقطاع أو تأخير",
  },
  {
    icon: "FeaturesIconsIDcard",
    title: "اختبارات وتقييم مستمر",
    description: "تقدم المنصة واجبات يومية واختبارات قصيرة بعد كل محاضرة، مما يساعد الطلاب على تطبيق ما تعلموه مباشرة، إضافة إلى اختبارات فصلية وسنوية لتقييم تقدمهم بشكل شامل",
  },
  {
    icon: "FeaturesIconsUser",
    title: "مدعومة بالذكاء الاصطناعي",
    description: "تعتمد المنصة على تقنيات الذكاء الاصطناعي لتقديم تجربة تعليمية مبتكرة ومخصصة لكل طالب، حيث يتم تحليل احتياجاته ومستواه الدراسي لتوفير المحتوى المناسب بشكل دقيق وفعال",
  },
  {
    icon: "FeaturesIconsJetPlane",
    title: "تواصل فعال مع الأساتذة",
    description: "تتيح المنصة إمكانية التواصل المباشر مع الأساتذة، مما يسهل على الطلاب طرح استفساراتهم ومشاركة أفكارهم وتعزيز التفاعل، وهو ما يضمن تجربة تعليمية غنية وشاملة",
  },
];

const getIconComponent = (icon) => {
  switch (icon) {
    case "FeaturesIconsHotspot":
      return FeaturesIconsHotspot;
    case "FeaturesIconsIDcard":
      return FeaturesIconsIDcard;
    case "FeaturesIconsUser":
      return FeaturesIconsUser;
    case "FeaturesIconsJetPlane":
      return FeaturesIconsJetPlane;
    default:
      return null;
  }
};

 
 
</script>
