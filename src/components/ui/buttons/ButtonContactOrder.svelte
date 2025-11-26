<script lang="ts">
  import LogosWhatsappIcon from '@components/ui/icons/LogosWhatsappIcon.svelte';

  export let lang: 'es' | 'en' = 'es';
  export let action: (() => any) | ((e: Event) => any) | undefined = undefined;
  export let isOpenOrderModal: boolean = false;
  export let titleAccessibility: string | undefined = undefined;
  const title =
    lang === 'es' ? 'Confirmar Pedido en WhatsApp' : 'Confirm via WhatsApp';
</script>

<button
  class="flex items-center gap-2"
  onclick={action}
  aria-label={titleAccessibility}
  aria-expanded={isOpenOrderModal}
  aria-haspopup="dialog">
  <LogosWhatsappIcon class="h-10 w-10" />
  <span>{title}</span>
</button>

<style>
  @reference "tailwindcss";

  button {
    @apply rounded-lg border-2 border-(--whatsapp-dark-color) bg-(--whatsapp-color) px-4 py-2 font-semibold text-(--whatsapp-dark-color) transition-colors duration-300 hover:bg-(--whatsapp-dark-color) hover:text-(--white);
  }
</style>
