<script lang="ts">
  import ExperiencesDetails from './ExperiencesDetails.svelte';
  import {
    setExperiencesData,
    experiencesDataStore,
    setCurrentExperience,
    currentExperienceStoreIndex,
    showModalExperience,
    isVisibleModalExperience,
  } from '../../stores/store';
  import { onMount } from 'svelte';

  export let lang: string = '';

  onMount(() => {
    setTimeout(() => {
      setExperiencesData(lang);
      setCurrentExperience(0);
    }, 300);
  });

  const updateCurrentExperience = (index: number) => {
    const width = window.innerWidth;
    setCurrentExperience(index);
    if (width < 768) {
      showModalExperience();
    }
  };
</script>

<section class="Experiences">
  <div class="Experiences__business">
    {#each $experiencesDataStore as experience, index}
      <button
        class="Experiences__button btn-primary {index ===
        $currentExperienceStoreIndex
          ? 'businessActive'
          : ''}"
        on:click={() => updateCurrentExperience(index)}>
        {experience.business}
      </button>
    {/each}
  </div>
  <div class="Experiences__details">
    <ExperiencesDetails />
  </div>
</section>

<style lang="scss">
  .Experiences {
    @apply translate-y-[25%] opacity-0 md:flex md:gap-x-8;
    animation: animationFadeInTranslate linear forwards;
    animation-timeline: view();
    animation-range-start: 10%;
    animation-range-end: 30%;
    &__business {
      @apply mb-5 grid grow-0 grid-cols-2 py-2 max-md:gap-3 md:flex md:flex-col md:items-start;
    }
    &__button {
      @apply md:w-full md:min-w-[300px] md:whitespace-nowrap md:border md:border-l md:border-primary/30 md:px-2 md:py-3 md:pl-[1.5rem] md:text-left md:text-white;
    }

    &__details {
      @apply grow py-2 max-md:hidden;
    }

    .businessActive {
      @apply hover:text-primary-dark max-md:shadow-sm md:border md:border-l-2 md:border-primary md:pl-[2.5rem] md:text-primary;
    }
  }
</style>
