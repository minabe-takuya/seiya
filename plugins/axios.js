// $axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/seiya-project/databases/(default)/documents"
// $axios.interceptors.request.use(
//   config => {
//     return config;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// );
// $axios.interceptors.response.use(
//   response =>{
//     location.reload();
//     return response
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
    // location.reload();
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
    location.reload();
  })
}
