<script lang="ts">
  import tailwindcss from "@tailwindcss/vite";
  import { reference } from "astro:content";
  import type { FullAutoFill } from "svelte/elements";
  export let name: string;
  export let type: string = "text";
  export let placeholder: string;
  export let classes: string = "";
  export let error: string = "";
  export let value: string = "";
  export let autocomplete: FullAutoFill | null = null;
  export let validator: (() => any) | undefined = undefined;
  export let required: boolean = false;
</script>

<div class="form-group">
  <input
    class={classes}
    {type}
    {name}
    {placeholder}
    bind:value
    onchange={validator}
    oninput={validator}
    onkeyup={validator}
    aria-label={placeholder}
    aria-invalid={error !== ""}
    aria-describedby={`${name}-error`}
    aria-required={required}
    {autocomplete}
  />
  <p
    aria-live="polite"
    id={`${name}-error`}
    role="alert"
    aria-hidden={error === "" ? "false" : "true"}
    class="form-group__error">{error}</p
  >
</div>

<style>
  @reference "tailwindcss";
  .form-group {
    @apply mb-6 relative;
  }
  .form-group input {
    @apply block border mb-0 py-2 px-3 rounded-lg;
  }
    .form-group p {
        @apply text-[var(--red)] text-xs pl-1 font-bold absolute;
    }
</style>
