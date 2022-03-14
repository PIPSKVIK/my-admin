import { onMounted, onUnmounted, ref } from 'vue';

export const close = (className) => {
  const isVisible = ref(false);

  function handelMouse(e) {
    if (!e.target.closest(className)) {
      isVisible.value = false;
    }
  }

  function heandleKeyDown(e) {
    if (isVisible.value && e.key === 'Escape') {
      isVisible.value = false;
    }
  }

  onMounted(() => {
    document.addEventListener('click', handelMouse);
    document.addEventListener('keydown', heandleKeyDown);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handelMouse);
    document.removeEventListener('keydown', heandleKeyDown);
  });

  const trigger = () => {
    isVisible.value = !isVisible.value;
  };

  return {
    isVisible,
    trigger,
  };
}
