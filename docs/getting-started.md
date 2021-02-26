# Getting started
Install via node package manager:
```bash
npm install @therunninghub/vue-select-menu
```
Integrate into your application via standard Vue api for registering and using components.

Vue Select Menu is designed for usage with v-model directive.
```vue
<template>
    <vue-select-menu v-model="date" :data="listData" />
</template>

<script>
import VueSelectMenu from '@therunninghub/vue-select-menu'
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
    components: { VueSelectMenu },
    data: () => ({
      value: '',
      listData: [
        { id: 1, name: 'Vietnam' },
        { id: 2, name: 'English' },
        { id: 3, name: 'United States'},
      ],
    })
};
</script>
```
