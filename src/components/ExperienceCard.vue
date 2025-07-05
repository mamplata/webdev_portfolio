<template>
  <div
    class="flex flex-col flex-1 rounded-md bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-slate-800 text-left p-4 transition-all duration-300"
  >
    <h3 class="text-xl font-extrabold">
      {{ experience.position }}
      <a :href="experience.company.link" class="hover:text-link-color" target="_blank" rel="noopener noreferrer">
        @{{ experience.company.name }}
      </a>
    </h3>
    <p class="italic">{{ experience.duration }}</p>

    <ul class="list-['\1F449'] pl-6 pt-4 text-slate-500 dark:text-slate-300">
      <li v-for="bullet in experience.bulletPoints" :key="bullet" class="pl-2 pb-2">
        {{ bullet }}
      </li>
    </ul>

    <!-- Optional Links (Google Drive, Portfolio, etc.) -->
    <div v-if="experience.links?.length" class="pt-4 w-full flex justify-center">
      <div class="flex flex-wrap gap-4 justify-center">
        <a
          v-for="link in experience.links"
          :key="link.linkName"
          :href="link.linkSource"
          target="_blank"
          rel="noopener noreferrer"
          class="py-2 px-12 bg-transparent border border-button-color shadow-sm shadow-button-color text-button-color hover:text-white hover:bg-button-color duration-300 focus:bg-button-color focus:text-white active:bg-button-color active:text-white dark:text-white dark:border-white dark:shadow-white"
        >
          {{ link.linkName }}
        </a>
      </div>
    </div>


    <div class="text-slate-600 pt-4 flex flex-wrap mt-auto dark:text-slate-400">
      <p v-for="hashtag in experience.hashtags" :key="hashtag" class="pr-4 last:pr-0">
        #{{ hashtag }}
      </p>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
    experience: Object,
})

</script>