import { ref } from "vue";

export default {
  setup(){
    const isDark = ref(false);
    return {
      isDark
    }
  }
}