<template>
  <div>
    <h1 class="title">Glide.js Test - Cat Carousel</h1>
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="">
          </li>
        </ul>
      </div>

      <!-- Navigation -->
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glidearrow glidearrow--left" data-glide-dir="<">
          &larr;
        </button>
        <button class="glidearrow glidearrow--right" data-glide-dir=">">
          &rarr;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Glide from '@glidejs/glide';

 
       const images = [
        'https://placekitten.com/800/400',
        'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg',
        'https://cdn2.thecatapi.com/images/MTk5NDk2NA.jpg',
        'https://cdn2.thecatapi.com/images/c2j.jpg',
        'https://cdn2.thecatapi.com/images/a1p.jpg',
        'https://cdn2.thecatapi.com/images/b9e.jpg',
        'https://cdn2.thecatapi.com/images/b2r.jpg',
        'https://cdn2.thecatapi.com/images/d6d.jpg',
        'https://cdn2.thecatapi.com/images/d91.jpg',
        'https://cdn2.thecatapi.com/images/ahj.jpg',
      ]
 
  onMounted( () => {
    new Glide('.glide', {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      autoplay: 3000, // Automatically transition every 3 seconds
       // Automatically transition every 3 seconds
    }).mount();
  });
 
</script>

<style scoped>
 
.glide {
  max-width: 800px;
  margin: 0 auto;
  
}

 

 
.slide-image {
  max-width: 100%;
  border-radius: 8px;
}

 

 

 
</style>