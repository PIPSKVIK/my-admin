<template>
  <router-link
    :to="to"
    :class="['base-link', { 'drower-menu-link': drowerMenu }]"
  >
    <slot name="icon" />
    <slot />
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    default: "#"
  },
  drowerMenu: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
$b: ".base-link";

#{$b} {
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: var(--color-text-soft);
  display: flex;
  align-items: center;
  @include anim-default;

  &:hover {
    background-color: var(--base-link-color-hover);
  }

  &.drower-menu-link {
    color: #e7e3fc;
    margin-right: 2rem;
    border-radius: 0 2rem 2rem 0px;

    &.router-link-active {
      background-color: var(--btn-color);
      padding-left: 1.3rem;
    }
  }
}
</style>
