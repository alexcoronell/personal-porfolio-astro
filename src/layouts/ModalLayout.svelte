<script>
  import { fade } from "svelte/transition";
</script>

<div
  class="ModalLayout"
  in:fade={{ duration: 300 }}
  out:fade={{ duration: 300, delay: 300 }}
>
  <div
    class="ModalLayout__box"
    in:fade={{ duration: 300, delay: 300 }}
    out:fade={{ duration: 300 }}
  >
    <slot />
  </div>
</div>

<style lang="scss">
  .ModalLayout {
    @apply fixed top-0 left-0 bottom-0 right-0 w-full h-screen bg-black/70 z-50 flex items-center justify-center px-3;

    &__box {
      @apply bg-primary-dark border border-primary p-3;
    }
  }
</style>
