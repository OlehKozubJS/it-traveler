<script setup>
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
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <div class="w-[750x]">
      <div class="flex gap-2 items-center mb-10">
        <MarkerIcon height="18" width="18" />
        <span class="font-bold text-base">Редагувати маркер</span>
      </div>
      <form>
        <div class="flex-gap-5">
          <div class="w-5/12">
            <img
              class="w-full h-[276px] object-cover rounded-md"
              :src="fallbackImage"
              alt="place img"
            />
          </div>

          <div class="w-7/12"></div>
        </div>
      </form>
    </div>
  </IModal>
</template>
