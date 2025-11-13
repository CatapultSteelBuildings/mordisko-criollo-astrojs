<script lang="ts">
  import type { FullAutoFill } from 'svelte/elements';
  export let name: string;
  export let type: string = 'text';
  export let placeholder: string;
  export let classes: string = '';
  export let error: string = '';
  export let value: string | number = '';
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
    aria-invalid={error !== ''}
    aria-describedby={`${name}-error`}
    aria-required={required}
    {autocomplete} />
  <p
    aria-live="polite"
    id={`${name}-error`}
    role="alert"
    aria-hidden={error === '' ? 'false' : 'true'}
    class="form-group__error">
    {error}
  </p>
</div>
