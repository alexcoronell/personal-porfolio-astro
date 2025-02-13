<script>
  import ModalLayout from "../../../layouts/ModalLayout.svelte";
  import CloseIcon from "../icons/CloseIcon.svelte";
  import ExperiencesDetails from "../../Home/ExperiencesDetails.svelte";
  import {
    isVisibleModalExperience,
    hideModalExperience,
  } from "../../../stores/store";
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
    @apply relative p-6 max-h-[75vh] overflow-y-auto max-w-[600px];

    &__closeButton {
      @apply w-full flex items-center justify-end pb-3;
    }
  }
</style>
