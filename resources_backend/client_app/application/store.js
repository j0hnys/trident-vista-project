import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Index from '../presentation/stores/pages/Index.js';
import BasicLayout from '../presentation/stores/components/BasicLayout.js';
var stores = require("./store.pages.js");

Vue.use(Vuex);

window.Vuex = require('vuex');

const store = new Vuex.Store({
    plugins: [createPersistedState({
        key: 'vista_new_architecture'
    })],
    state: {
        base_url: process.env.MIX_BASE_URL+'/',
        base_relative_url: process.env.MIX_BASE_RELATIVE_URL+'/',
        storage_url: process.env.MIX_STORAGE_URL+'/',
    },
    modules: {
        components: {
            namespaced: true,
            modules: {
                BasicLayout: BasicLayout,
            }
        },
        pages: {
            namespaced: true,
            modules: {
                Index: stores.index,
            }
        },
    },
});

export default store;
