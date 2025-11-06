<script>
  import { fade } from 'svelte/transition';
</script>

<div
  class="ModalLayout"
  in:fade={{ duration: 300 }}
  out:fade={{ duration: 300, delay: 300 }}>
  <div
    class="ModalLayout__box"
    in:fade={{ duration: 300, delay: 300 }}
    out:fade={{ duration: 300 }}>
    <slot />
  </div>
</div>

<style lang="scss">
  .ModalLayout {
    @apply fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black/70 px-3;

    &__box {
      @apply border border-primary bg-primary-dark p-3;
    }
  }
</style>
