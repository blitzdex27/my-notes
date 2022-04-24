## Svelte's reactivity is triggered by assignments

```Svelte
<script>
    let name = 'Dexter' // reactive;
    $: fullName = name + ' ' + 'Ramos'; // reactive


</script>
```

Assignments to properties of arrays and objects — e.g. `obj.foo += 1` or `array[i] = x` — work the same way as assignments to the values themselves.

## Props

### Declaring Props

Passing `answer` variable from `App.svelte` to `Nested.svelte`.

App.svelte
```
<script>
	import Nested from './Nested.svelte';
</script>

<Nested answer={42}/>
```

Nested.svelte
```
<script>
	export let answer;
</script>

<p>The answer is {answer}</p>
```

### Default Values

