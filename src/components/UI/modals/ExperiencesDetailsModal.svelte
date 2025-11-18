<script>
  import ModalLayout from '../../../layouts/ModalLayout.svelte';
  import CloseIcon from '../icons/CloseIcon.svelte';
  import ExperiencesDetails from '../../Home/ExperiencesDetails.svelte';
  import {
    isVisibleModalExperience,
    hideModalExperience,
  } from '../../../stores/store';
</script>

{#if $isVisibleModalExperience}
  <ModalLayout>
    <div class="ExperienceDetailsModal">
      <div class="ExperienceDetailsModal__closeButton">
        <button on:click={hideModalExperience}>
          <CloseIcon classes="w-8 h-8" />
        </button>
      </div>
      <ExperiencesDetails />
    </div>
  </ModalLayout>
{/if}

<style lang="scss">
  .ExperienceDetailsModal {
    @apply relative max-h-[75vh] max-w-[600px] overflow-y-auto p-6;

    &__closeButton {
      @apply flex w-full items-center justify-end pb-3;
    }
  }
</style>
