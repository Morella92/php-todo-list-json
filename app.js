const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'Todo list',
      list: [],
    }
  },

  methods: {
    fetchList(){
        axios.get('server.php')
    }
  },
  mounted() {
    this.fetchList()
  },
}).mount('#app')