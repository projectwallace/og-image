<script>
  import Input from "./Input.svelte";
  import Select from "./Select.svelte";
  import RequestUrl from "./RequestUrl.svelte";

  const card = {
    text: "Beautiful **CSS Analytics** in your Terminal.",
    icon: "wallace-cli",
    cli: "npx wallace-cli css-analytics.com"
  };
</script>

<div class="bg-gray-200 py-8 xl:flex antialiased h-full">
  <div class="px-8 max-w-2xl">
    <div class="mb-8">
      <Input
        label="Title"
        value={card.text}
        on:input={event => (card.text = event.target.value)} />
      <Input
        label="CLI Input"
        value={card.cli}
        on:input={event => (card.cli = event.target.value)} />
      <Select
        label="Icon"
        value={card.icon}
        on:change={event => (card.icon = event.target.value)} />
    </div>
  </div>

  <div class="overflow-auto mt-16 px-8 xl:mt-0">
    <RequestUrl {...card} />
  </div>
</div>
