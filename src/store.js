// src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user')) || null,
    authStatus: '',
  },
  mutations: {
    auth_request(state) {
      state.authStatus = 'loading';
    },
    auth_success(state, { token, user }) {
      state.authStatus = 'success';
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.authStatus = 'error';
    },
    logout(state) {
      state.authStatus = '';
      state.token = '';
      state.user = null;
    },
  },
  actions: {
    async signup({ commit }, user) {
      try {
        commit('auth_request');
        const response = await axios.post('http://localhost:3000/api/v1/auth/signup', user);
        const token = response.data.token;
        const userData = response.data.user;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        commit('auth_success', { token, user: userData });
      } catch (error) {
        commit('auth_error');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        throw error;
      }
    },
    async login({ commit }, user) {
      try {
        commit('auth_request');
        const response = await axios.post('http://localhost:3000/api/v1/auth/login', user);
        const token = response.data.token;
        const userData = response.data.user;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        commit('auth_success', { token, user: userData });
      } catch (error) {
        commit('auth_error');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        throw error;
      }
    },
    logout({ commit }) {
      commit('logout');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      delete axios.defaults.headers.common['Authorization'];
    },
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.authStatus,
    user: state => state.user,
  },
});

export default store;
