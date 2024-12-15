import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
  state: () => ({
    isLogging: false,
    user: "",
  }),
  actions: {
    setLogging(value) {
      this.isLogging = value;
    },
    setUser(value) {
      this.user = value;
    },
  },
});