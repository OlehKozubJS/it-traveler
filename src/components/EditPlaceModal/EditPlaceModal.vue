<script setup>
import { ref, watch } from 'vue'

import { ItTravelerButton } from '../ItTravelerButton'
import { ItTravelerInput } from '../ItTravelerInput'
import { ItTravelerModal } from '../ItTravelerModal'
import InputImage from '../InputImage/InputImage.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import fallbackImage from '../../assets/img/map-svgrepo-com.svg'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
  isLoading: {
    default: false,
    type: Boolean,
  },
  place: Object,
})

const emit = defineEmits(['close', 'submit'])

const formData = ref({
  id: '',
  title: '',
  description: '',
  img: '',
  coordinates: null,
})

watch(
  () => props.place,
  () => {
    formData.value = { ...props.place }
  },
)

const handleChangeImg = (url) => {
  formData.value.img = url
}
</script>

<template>
  <ItTravelerModal v-if="props.isOpen" @close="emit('close')">
    <div class="w-[750px]">
      <div class="flex gap-2 items-center mb-10">
        <MarkerIcon height="18" width="18" />
        <span class="font-bold text-base">Редагувати маркер</span>
      </div>
      <form @submit.prevent="emit('submit', formData)">
        <div class="flex gap-5">
          <div class="w-5/12">
            <img
              class="w-full h-[276px] object-cover rounded-md"
              :src="formData.img || fallbackImage"
              alt="place img"
            />
          </div>

          <div class="w-7/12">
            <ItTravelerInput label="Локація" v-model="formData.title" />
            <div class="mt-4">
              <ItTravelerInput label="Опис" type="textarea" v-model="formData.description" />
            </div>
            <ItTravelerButton class="mt-10 w-full" variant="gradient" :is-loading="isLoading">
              Зберегти
            </ItTravelerButton>
          </div>
        </div>

        <InputImage class="mt-3" @uploaded="handleChangeImg">
          <span span="text-xs">Натисність тут, щоб додати інше фото</span>
        </InputImage>
      </form>
    </div>
  </ItTravelerModal>
</template>
