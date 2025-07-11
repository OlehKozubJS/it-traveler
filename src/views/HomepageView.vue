<script setup>
import { onMounted, ref } from 'vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from '../map/settings'

import { addFavoritePlace, getFavoritePlaces } from '../api/favourite-places'
import { useModal } from '../composables/useModal'
import { useMutation } from '../composables/useMutation'

import FavouritePlaces from '../components/FavouritePlaces/FavouritePlaces.vue'
import MarkerIcon from '../components/icons/MarkerIcon.vue'
import CreateNewPlaceModal from '../components/CreateNewPlaceModal/CreateNewPlaceModal.vue'

const favouritePlaces = ref([])
const activeId = ref(null)
const map = ref(null)
const mapMarkerLngLat = ref(null)
const { isOpen, openModal, closeModal } = useModal()

const {
  mutate: addPlace,
  isLoading: isAddingPlace,
  error,
} = useMutation({
  mutationFunction: async (newPlaceData) => {
    await addFavoritePlace(newPlaceData)
  },
  onSuccess: () => {
    closeModal()
  },
})

const changeActiveId = (newId) => {
  activeId.value = newId
}

const changePlace = (newId) => {
  const { lngLat } = favouritePlaces.value.find((place) => place.id === newId)

  changeActiveId(newId)

  map.value.flyTo({ center: lngLat })
}

const handleMapClick = ({ lngLat }) => {
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat]
}

const handleAddPlace = (formData) => {
  const body = { ...formData, coordinates: mapMarkerLngLat.value }
  addPlace(body)
  console.log(body)
}

onMounted(async () => {
  const { data } = await getFavoritePlaces()
  favouritePlaces.value = data
})
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavouritePlaces
        :items="favouritePlaces"
        :active-id="activeId"
        @place-clicked="changePlace"
        @create="openModal"
      />
      <CreateNewPlaceModal
        :is-open="isOpen"
        :is-loading="isAddingPlace"
        :has-error="error"
        @close="closeModal"
        @submit="handleAddPlace"
      />
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
          <MarkerIcon class="h-8 w-8" />
        </MapboxMarker>

        <MapboxMarker
          v-for="place in favouritePlaces"
          :key="place.id"
          :lngLat="place.coordinates"
          anchor="bottom"
        >
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="h-8 w-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
