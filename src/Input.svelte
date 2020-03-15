<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let value;
  export let label;
</script>

<style>
  .row {
    display: grid;
    grid-template-columns: 10rem 1fr;
    align-items: center;
  }
</style>

<label class="row mb-3">
  <span>{label}</span>
  <input
    class="bg-white border-gray-400 rounded py-2 px-3"
    bind:value
    type="text"
    on:input />
</label>
