import { ref } from 'vue'

export const useMutation = (mutationFunction) => {
  const data = ref()
  const isLoading = ref(false)
  //const router = useRouter()
  const error = ref(null)

  const mutation = async (...args) => {
    isLoading.value = true

    try {
      await mutationFunction(...args)
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }
}
