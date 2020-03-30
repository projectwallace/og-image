<script>
  const options = [
    "none",
    "constyble",
    "wallace-cli",
    "color-sorter",
    "analyzer",
    "extract-css",
    "diff"
  ];

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

<label class="row mt-3">
  <span>{label}</span>
  <select on:change class="bg-white border-gray-400 rounded py-2 px-3">
    {#each options as option}
      <option value={option} selected={option === value}>{option}</option>
    {/each}
  </select>
</label>
