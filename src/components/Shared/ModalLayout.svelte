<div class="ModalLayout">
    <div class="ModalLayout__box">
        <slot />
    </div>
</div>

<style lang="scss">
    .ModalLayout {
        @apply fixed top-0 left-0 bottom-0 right-0 w-full h-screen bg-black/70 z-50 flex items-center justify-center;

        &__box {
            @apply bg-primary-dark border border-primary p-3;
        }
    }
</style>