<script>
  import ModalLayout from "../Shared/ModalLayout.svelte";
  import CloseIcon from "../UI/icons/CloseIcon.svelte";
  import ExperiencesDetails from "./ExperiencesDetails.svelte";
  import { isVisibleModalExperience, hideModalExperience } from "../../stores/store";
</script>

{#if $isVisibleModalExperience}
  <ModalLayout>
    <div class="ExperienceDetailsModal pointer-events-none">
        <div class="ExperienceDetailsModal__closeButton">
            <button on:click={hideModalExperience}>
                <CloseIcon classes="w-12 h-12" />
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