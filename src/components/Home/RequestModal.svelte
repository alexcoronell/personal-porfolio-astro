<script lang="ts">
    import ModalLayout from "@components/Shared/ModalLayout.svelte";
    import Spinner from "../UI/icons/Spinner.svelte";
    import CheckIcon from "../UI/icons/CheckIcon.svelte";
    import WarningIcon from "../UI/icons/WaningIcon.svelte";
    import { isVisibleModal, hideModal, requestStatus, currentLanguage } from "@stores/store";
    let successMessage: string;
    let errorMessage: string;
    $: currentLanguage.subscribe((value) => {
        successMessage = $currentLanguage === "es" ? "Tu mensaje fue enviado" : "Your message was sent";
        errorMessage =$currentLanguage === "es" ? "Algo salió mal" : "Something went wrong";
    })
</script>

{#if $isVisibleModal}
    <ModalLayout>
        <div class="RequestModal">
            {#if $requestStatus === "loading"}
                <Spinner classes="w-[100px] h-[100px]" />
            {/if}
            {#if $requestStatus === "success"}
                <CheckIcon classes="w-[100px] h-[100px]" />
                <h4>{successMessage}</h4>
                <button class="btn-primary" on:click={hideModal}>{$currentLanguage === "es" ? "Cerrar" : "Close"}</button>
            {/if}
            {#if $requestStatus === "error"}
                <WarningIcon classes="w-[100px] h-[100px] text-red" />
                <h4 class="text-red">{errorMessage}</h4>
                <button class="btn-error" on:click={hideModal}>{$currentLanguage === "es" ? "Intenta de nuevo" : "Try Again"}</button>
            {/if}
        </div>
    </ModalLayout>
{/if}

<style>
    .RequestModal {
        @apply flex flex-col items-center justify-center gap-y-5 w-[300px] h-[300px];

        h4 {
            @apply text-2xl text-center;
        }
    }
</style>