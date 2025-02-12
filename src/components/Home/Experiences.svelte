<script lang="ts">
  import ExperiencesDetails from "./ExperiencesDetails.svelte";
  import {
    setExperiencesData,
    experiencesDataStore,
    setCurrentExperience,
    currentExperienceStoreIndex,
  } from "../../stores/store";
  import { onMount } from "svelte";

  export let lang: string = "";
  onMount(() => {
    setTimeout(() => {
      setExperiencesData(lang);
      setCurrentExperience(0);
    }, 300);
  });
</script>

<section class="Experiences">
  <div class="Experiences__business">
    {#each $experiencesDataStore as experience, index}
      <button
        class="Experiences__button {index === $currentExperienceStoreIndex ? 'businessActive' : ''}"
        on:click={() => setCurrentExperience(index)}
      >
        {experience.business}
      </button>
    {/each}
  </div>
  <ExperiencesDetails />
</section>

<style lang="scss">
  .Experiences {
    @apply md:flex md:gap-x-8 opacity-0 translate-y-[25%];
    animation: animationFadeInTranslate linear forwards;
    animation-timeline: view();
    animation-range-start: 10%;
    animation-range-end: 30%;
    &__business {
      @apply grid grid-cols-2 max-md:gap-3 py-2 mb-5 md:flex md:flex-col md:items-start grow-0;
    }
    &__button {
      @apply md:py-3 md:px-2 md:text-white md:border md:border-primary/30 
    md:border-l md:pl-[1.5rem] md:whitespace-nowrap md:text-left md:w-full md:min-w-[300px];
    }

    &__details {
      @apply py-2 grow max-lg:hidden;
    }

    .businessActive {
  @apply md:border md:border-primary max-md:shadow-sm 
  md:text-primary md:border-l-2 md:pl-[2.5rem];
}
  }
</style>
