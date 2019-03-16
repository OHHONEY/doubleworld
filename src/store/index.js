import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		products: [{
				name: '鼠标',
				price: 20
			},
			{
				name: '键盘',
				price: 40
			},
			{
				name: '耳机',
				price: 60
			},
			{
				name: '显示屏',
				price: 80
			}
		]
	},
	getters: {
		betterProducts: (state) => {
			return state.products.filter(product =>product.price >= 20)
		}
	},
	mutations: {
		addPrice(state, number) {
			state.products.forEach( product => {
                product.price += number
            })
		}
	}
})

export default store
