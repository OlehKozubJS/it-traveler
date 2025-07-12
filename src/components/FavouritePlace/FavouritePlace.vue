<script setup>
import FavouritePlaceIconButton from './FavouritePlaceIconButton.vue'
import EditIcon from './EditIcon.vue'
import DeleteIcon from './DeleteIcon.vue'
import { defineEmits } from 'vue'

const props = defineProps({
  title: { required: true, type: String },
  description: { required: true, type: String },
  img: String,
  isActive: { required: true, type: Boolean },
})

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <section section class="text-grey mb-6 last:mb-0">
    <div class="flex gap-4">
      <img class="w-[76px] h-[76px] shrink-0 rounded-md" :src="props.img" alt="" />
      <div class="w-full">
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-bold text-sm text-[#2C2C2C]">{{ props.title }}</h2>
          <div class="flex gap-2">
            <FavouritePlaceIconButton @click="emit('edit')">
              <EditIcon />
            </FavouritePlaceIconButton>
            <FavouritePlaceIconButton @click="emit('delete')">
              <DeleteIcon />
            </FavouritePlaceIconButton>
          </div>
        </div>
        <p class="text-xs line-clamp-3">
          {{ props.description }}
        </p>
      </div>
    </div>
    <div
      class="h-[1px] w-full bg-[#ececec] mt-4"
      :class="{ 'bg-primary': props.isActive, 'bg-[#ececec]': !props.isActive }"
    ></div>
  </section>
</template>
