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
      error.value = null
    } catch (newError) {
      error.value = newError
    } finally {
      isLoading.value = false
    }
  }

  return {
    data,
    isLoading,
    error,
    mutation,
  }
}
