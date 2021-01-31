<template>
    <div class="column is-9-tablet is-full-mobile">
      <WorkExperience/>
      <SideProjects/>
    </div>
</template>

<script>

import WorkExperience from '@/components/WorkExperience.vue';
import SideProjects from '@/components/SideProjects.vue';

export default {
  name: 'HomePage',
  components: {
    SideProjects,
    WorkExperience,
  },
};
</script>

<style scoped>

</style>
