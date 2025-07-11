import { ref } from 'vue'

export const useMutation = ({ mutationFunction, onSuccess, onError }) => {
  const data = ref()
  const isLoading = ref(false)
  const error = ref(null)

  const mutate = async (...args) => {
    isLoading.value = true

    try {
      data.value = await mutationFunction(...args)
      error.value = null
      onSuccess?.(data)
    } catch (newError) {
      error.value = newError
      onError?.(error)
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
