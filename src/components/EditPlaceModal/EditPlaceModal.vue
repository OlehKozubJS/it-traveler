<script setup>
import { ref } from 'vue'

import IButton from '../IButton/IButton.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import fallbackImage from '../../assets/img/map-svgrepo-com.svg'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['close'])

const formData = ref({
  id: '',
  title: '',
  description: '',
  img: '',
  coordinates: null,
})

const handleChangeImg = (url) => {
  formData.value.img = url
}
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <div class="w-[750px]">
      <div class="flex gap-2 items-center mb-10">
        <MarkerIcon height="18" width="18" />
        <span class="font-bold text-base">Редагувати маркер</span>
      </div>
      <form>
        <div class="flex gap-5">
          <div class="w-5/12">
            <img
              class="w-full h-[276px] object-cover rounded-md"
              :src="formData.img || fallbackImage"
              alt="place img"
            />
          </div>

          <div class="w-7/12">
            <IInput label="Локація" v-model="formData.title" />
            <div class="mt-4">
              <IInput label="Опис" type="textarea" v-model="formData.description" />
            </div>
            <IButton class="mt-10 w-full" variant="gradient">Зберегти</IButton>
          </div>
        </div>

        <InputImage class="mt-3" @uploded="handleChangeImg">
          <span span="text-xs">Натисність тут, щоб додати інше фото</span>
        </InputImage>
      </form>
    </div>
  </IModal>
</template>
