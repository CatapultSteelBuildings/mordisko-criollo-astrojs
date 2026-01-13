<script lang="ts">
  import type { FullAutoFill } from 'svelte/elements';
  export let name: string;
  export let label: string;
  export let classes: string = '';
  export let error: string = '';
  export let value: string | number = '';
  export let autocomplete: FullAutoFill | null = null;
  export let increment: (() => any) | undefined = undefined;
  export let decrement: (() => any) | undefined = undefined;
  export let validator: (() => any) | undefined = undefined;
  export let required: boolean = false;
</script>

<div class="form-group">
  <label class="form-group__label" for={name}>{label}</label>
  <div class="form-group__inputBox">
    <button class="cursor-pointer" type="button" onclick={decrement}>-</button>
    <input
      class={classes}
      type="text"
      {name}
      bind:value
      onchange={validator}
      oninput={validator}
      onkeyup={validator}
      aria-label={label}
      aria-invalid={error !== ''}
      aria-describedby={`${name}-error`}
      aria-required={required}
      {autocomplete} />
    <button class="cursor-pointer" type="button" onclick={increment}>+</button>
  </div>
  <p
    aria-live="polite"
    id={`${name}-error`}
    role="alert"
    aria-hidden={error === '' ? 'false' : 'true'}
    class="form-group__error">
    {error}
  </p>
</div>

<style>
  @reference "tailwindcss";
  .form-group__label {
    @apply mb-1 block 2xl:text-center 2xl:text-sm;
  }

  .form-group__inputBox {
    @apply grid overflow-hidden rounded-md border whitespace-nowrap;
    grid-template-columns: 20% 1fr 20%;
  }

  .form-group__inputBox input {
    @apply rounded-none border-y-0 text-center;
  }

  .form-group__inputBox button {
    @apply cursor-pointer bg-(--primary) text-(--secondary) active:translate-y-px;
  }
</style>
