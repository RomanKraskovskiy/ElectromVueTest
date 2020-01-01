import Vue from 'vue'
import Vuex from 'vuex'
import VuexTrainModule from './modules/vuextrainmodule.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    VuexTrainModule
  }
})
