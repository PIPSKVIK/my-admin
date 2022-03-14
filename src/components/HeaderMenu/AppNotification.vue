<script setup>
import { AppHeaderDropMenu } from "@/components/HeaderMenu";
import { close } from "@/helpers";

const { isVisible, trigger } = close(".app-notification__drop");

const notListMock = [
  { title: 'New user registered.', subtitle: '5 hours ago', date: 'Yesterday' },
  { title: ' Congratulation John! 🎉', subtitle: 'Won the monthly best seller badge', date: 'Today' },
  { title: 'New message received.', subtitle: 'You have 10 unread messages', date: '19 Mar' }
]
</script>

<template>
  <div class="app-notification">
    <Button
      @click.stop="trigger"
      icon="pi pi-bell"
      class="app-notification__icon p-button-rounded p-button-text"
    />

    <transition name="slide-fade">
      <AppHeaderDropMenu v-if="isVisible" class="app-notification__drop">
        <template #top>
          <div class="app-notification__top">
            <h4>Notifications</h4>
            <Badge value="0" size="large"></Badge>
          </div>
          <hr class="seporator" />
        </template>
        <template #center>
          <div v-for="(item, idx) in notListMock" :key="idx" class="app-notification__center">
            <div class="app-notification__center-left">
              <Avatar
                class="app-notification__center-left-avatar"
                icon="pi pi-user"
                style="background-color: #2196f3; color: #ffffff"
                shape="circle"
              />
              <div class="app-notification__center-left-info">
                <p class="p-2">{{ item.title }}</p>
                <p class="p-3 app-notification__center-left-info-sub">{{ item.subtitle }}</p>
              </div>
            </div>
            <span class="s-2 app-notification__center-right">{{ item.date }}</span>
          </div>
        </template>
        <template #bottom>
          <div class="app-notification__bottom">
            <Button label="Read All Notifications" class="app-notification__bottom-btn p-button-raised" />
          </div>
        </template>
      </AppHeaderDropMenu>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
$b: ".app-notification";

#{$b} {
  position: relative;

  &__icon {
    color: var(--color-text) !important;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
  }

  &__center {
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include anim-default;
    &:hover {
      background-color: var(--color-background-soft-hover);
      cursor: pointer;
    }
  }
  &__center-left {
    display: flex;
    align-items: center;
  }
  &__center-left-avatar {
    margin-right: 1rem;
  }
  &__center-left-info-sub {
    color: var(--color-white-mute);
    opacity: 0.6;
  }

  &__bottom {
    padding: 10px 16px;
  }
  &__bottom-btn {
    width: 100%;
  }
}
</style>
