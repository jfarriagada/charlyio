import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const BASE_URL = 'http://localhost:8080'

export default new Vuex.Store({

  state: {
    data:[],
    companies:[],
    arrStatus: ["accepted","declined","pending","all"]
  },

  mutations: {
    setCompanies: (state, companies) => state.companies = companies,
    setData: (state, data) => state.data = data,
  },

  actions: {
    fetchCompanies({commit}){
			axios.get(`${BASE_URL}/data.json`).then(resp => {
        commit('setCompanies', resp.data)
        commit('setData', resp.data)
      })
      .catch(err => {
        console.log("error : ", err)
      })
		},

    onFilterStatus({state, commit }, status){
      const data = state.data

      if(status == "all"){
        commit('setCompanies', data)
      } else {
        commit('setCompanies', data.filter(item => item.status == status))
      }
		},

    orderById({state, commit }){
			const items = state.companies.sort((a, b) => a.id - b.id);
      commit('setCompanies', items)
		},

    orderByName({state, commit }){
			const items = state.companies.sort((a, b) => a.name - b.name);
      commit('setCompanies', items)
		},

    orderByDate({state, commit }){
			const items = state.companies.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });
      commit('setCompanies', items)
		},
  },

  modules: {
  }
})
