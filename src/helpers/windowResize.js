import { ref, onMounted, onUnmounted } from "vue";

export const windowResize = (widthValue) => {
  const showDrowerIcon = ref(true);
  let windowWidth = ref("");

  function windowListener() {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= widthValue) {
      showDrowerIcon.value = false;
    } else {
      showDrowerIcon.value = true;
    }
  }

  onMounted(() => {
    window.addEventListener("resize", windowListener);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", windowListener);
  });

  return {
    showDrowerIcon,
  };
};
