const { createApp } = Vue

createApp({
	data() {
		return {
			title: 'Todo list',
			list: [],
			newItem: '',
		}
	},
	methods: {
		saveItem() {

			$data = {
				item: this.newItem,
			}

			axios
				.post('./server.php', $data, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				.then((res) => {
					this.list = res.data
					this.newItem = ''
				})
				.catch((err) => {
					console.log(err)
				})
		},
		fetchList() {
			axios
				.get('./server.php')
				.then((res) => {
					this.list = res.data
				})
		},
	},
	mounted() {
		this.fetchList()
	},
}).mount('#app')