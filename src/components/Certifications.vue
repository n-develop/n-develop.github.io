<template>
  <!-- Certification  -->
  <div class="box topic">
    <h2 class="title is-3"><i class="fa fa-certificate highlight-color"></i> Certification</h2>
    <div v-for="cert in certifications" :key="cert.id">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ cert.title }}</p>
            <p class="subtitle is-6">{{ cert.month }}</p>
          </div>
          <div class="media-right">
            <figure class="image is-128x128">
              <img class="is-rounded"
                   :src="require('../assets/images/' + cert.image)"
                   :alt="cert.imageAlt">
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!-- / Certification  -->
</template>

<script>
export default {
  name: 'Certifications',
  data() {
    return {
      certifications: [
        {
          id: 1,
          title: 'Microsoft Certified Professional - Programming in C#',
          month: 'October 2018',
          image: 'mcp-csharp.png',
          imageAlt: 'Microsoft Certified Professional Badge',
        },
        {
          id: 2,
          title: 'Sitecore Experience Commerce 9.0: Essentials',
          month: 'August 2018',
          image: 'sitecore.jpg',
          imageAlt: 'Sitecore Logo',
        },
        {
          id: 3,
          title: 'Certified Sitecore Developer',
          month: 'March 2018',
          image: 'sitecore.jpg',
          imageAlt: 'Sitecore Logo',
        },
        {
          id: 4,
          title: 'uCommerce Certified Developer for Sitecore',
          month: 'August 2016',
          image: 'ucommerce.png',
          imageAlt: 'Ucommerce Logo',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
