<template>
  <div
    :class="[
      'flex flex-col transition-opacity motion-reduce:transition-none duration-500',
      showProject ? 'opacity-1' : 'opacity-0'
    ]"
  >
    <!-- Centered Images -->
    <div class="flex flex-col items-center space-y-4 pb-4">
      <img
        v-if="project.imageLink1"
        @load="showProject = true"
        :src="getImageUrl(project.imageLink1)"
        class="shadow-md max-w-full rounded"
        loading="lazy"
      />
      <img
        v-if="project.imageLink2"
        :src="getImageUrl(project.imageLink2)"
        class="shadow-md max-w-full rounded"
        loading="lazy"
      />
    </div>

    <!-- Project Info (Left Aligned by default) -->
    <div class="space-y-4">
      <p>{{ project.yearCompleted }}</p>
      <h3 class="text-xl font-extrabold pb-2">{{ project.projectName }}</h3>
      <p class="text-slate-500 dark:text-slate-300">{{ project.description }}</p>
      <p class="text-slate-600 dark:text-slate-400">{{ project.techStack }}</p>

      <!-- Links -->
      <div class="flex flex-wrap gap-6 items-center text-slate-400 pt-2">
        <a
          v-for="link in project.links"
          :key="link.label"
          :href="link.url"
          class="flex items-center space-x-2 hover:text-link-color focus:text-link-color active:text-link-color"
          target="_blank"
        >
          <span v-if="link.type === 'git'" class="flex items-center space-x-2">
            <font-awesome-icon icon="fa-brands fa-github" class="h-7 w-7" />
            <span>{{ link.label }}</span>
          </span>
          <span v-else-if="link.type === 'external'" class="flex items-center space-x-2">
            <ArrowTopRightOnSquareIcon class="h-7 w-7" />
            <span>{{ link.label }}</span>
          </span>
          <span v-else class="flex items-center space-x-2">
            <LinkIcon class="h-6 w-6" />
            <span>{{ link.label }}</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref} from 'vue'
import { LinkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    project: Object
})

// Static Images
const showProject = ref(false)

let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

</script>