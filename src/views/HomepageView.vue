<script setup>
import { computed, onMounted, ref } from 'vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from '../map/settings'

import { addFavoritePlace, getFavoritePlaces } from '../api/favourite-places'
import { useModal } from '../composables/useModal'
import { useMutation } from '../composables/useMutation'

import UserInfo from '@/components/UserInfo/UserInfo.vue'
import FavouritePlaces from '../components/FavouritePlaces/FavouritePlaces.vue'
import MarkerIcon from '../components/icons/MarkerIcon.vue'
import CreateNewPlaceModal from '../components/CreateNewPlaceModal/CreateNewPlaceModal.vue'
import LogoutButton from '../components/LogoutButton/LogoutButton.vue'

const activeId = ref('')
const map = ref(null)
const mapMarkerLngLat = ref(null)
const { isOpen, openModal, closeModal } = useModal()

const {
  data,
  mutation: getPlaces,
  isLoading: isPlacesLoading,
} = useMutation({
  mutationFunction: () => {
    return getFavoritePlaces()
  },
})

const favouritePlaces = computed(() => {
  return data.value ?? []
})

const {
  mutation: addPlace,
  isLoading: isAddingPlace,
  error,
} = useMutation({
  mutationFunction: async (newPlaceData) => {
    await addFavoritePlace(newPlaceData)
  },
  onSuccess: () => {
    closeModal()
    mapMarkerLngLat.value = null
    getPlaces()
  },
})

const changeActiveId = (newId) => {
  activeId.value = newId
}

const changePlace = (newId) => {
  const newPlace = favouritePlaces.value.find((place) => place.id === newId)
  const { coordinates } = newPlace
  changeActiveId(newId)
  map.value.flyTo({ center: coordinates })
}

const handleMapClick = ({ lngLat }) => {
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat]
}

const handleAddPlace = async (formData, resetForm) => {
  const body = { ...formData, coordinates: mapMarkerLngLat.value }
  await addPlace(body)
  resetForm()
}

onMounted(() => {
  getPlaces()
})
</script>

<template>
  <main class="flex h-screen">
    <div class="relative bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <div v-if="isPlacesLoading" class="text-black px-6">Loading...</div>
      <UserInfo />
      <FavouritePlaces
        :items="favouritePlaces"
        :active-id="activeId"
        :is-places-loading="isPlacesLoading"
        @place-clicked="changePlace"
        @create="openModal"
        @updated="getPlaces"
      />
      <CreateNewPlaceModal
        :is-open="isOpen"
        :is-loading="isAddingPlace"
        :has-error="Boolean(error)"
        @close="closeModal"
        @submit="handleAddPlace"
      />
      <LogoutButton class="mt-10" />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        @mb-click="handleMapClick"
        @mb-created="
          (mapInstance) => {
            map = mapInstance
          }
        "
      >
        <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
          <MarkerIcon class="h-8 w-8" is-active />
        </MapboxMarker>

        <MapboxMarker
          v-for="place in favouritePlaces"
          :key="place.id"
          :lngLat="place.coordinates"
          anchor="bottom"
        >
          <button @click.stop="changeActiveId(place.id)">
            <MarkerIcon :class="place.id === activeId ? 'h-10 w-10' : 'h-8 w-8'" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
