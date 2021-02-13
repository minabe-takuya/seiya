export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    baseURL:
    'https://identitytoolkit.googleapis.com/v1',
  })

  // Set baseURL to something different
  // api.setBaseURL('https://identitytoolkit.googleapis.com/v1')

  // Inject to context as $api
  inject('api', api)
}
