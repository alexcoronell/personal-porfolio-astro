<script lang="ts">
  import { currentExperienceStore } from '../../stores/store';
</script>

<article class="ExperiencesDetails">
  <div class="ExperiencesDetails__header">
    <h4>{$currentExperienceStore?.title}</h4>
    <span class="icon-[material-symbols--next-week-outline]"></span>
    <h5>{$currentExperienceStore?.business}</h5>
    <div class="ExperiencesDetails__date">
      <p>
        {$currentExperienceStore?.dateBegin} - {$currentExperienceStore?.dateEnd}
      </p>
    </div>
  </div>
  <div class="ExperiencesDetails__functions">
    <ul>
      {#each $currentExperienceStore?.functions ?? [] as functionExperience}
        <li>
          <span class="icon-[material-symbols--double-arrow]"></span>
          <p>{functionExperience}</p>
        </li>
      {/each}
    </ul>
  </div>
</article>

<style lang="scss">
  .ExperiencesDetails {
    @apply overflow-y-hidden;
    &__header {
      @apply flex flex-wrap gap-x-2;
      h4,
      h5 {
        @apply mb-0 text-base;
      }
      h4 {
        @apply text-white;
      }
      span {
        @apply text-xl;
      }
    }
    &__date {
      p {
        @apply mt-0 text-sm text-white/50;
      }
    }
    &__functions {
      ul {
        li {
          @apply mb-0 grid gap-x-3;
          grid-template-columns: 25px auto;
          span {
            @apply translate-y-1 text-xl;
          }
          p {
            @apply mb-0 text-sm;
          }
        }
      }
    }
  }
</style>
