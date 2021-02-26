# Localization

Following props to are used to localize your date pick instance:

```js
translations: {
  type: Object,
  default: undefined
},
language: {
  type: String,
  default: 'en'
},
```

## Add translation for unsupport language
<ClientOnly>
  <vue-select-menu
    class="my-3"
    :translations="{
      vi: {
        menu_title: 'Thực đơn chọn',
        select_all_btn: 'Chọn tất cả',
        remove_all_btn: 'Xóa tất cả lựa chọn',
        close_btn: 'Đóng',
        not_found: 'Không tìm thấy',
        max_selected: 'Bạn chỉ có thể chọn tối đa max_selected_limit mục',
        advanced_default: 'Chọn một mục',
        regular_group: 'Menus',
        items_selected: 'Đã chọn selected_count mục'
      }
    }"
    language="en"
    :data="[
      { id: 1, name: 'Chinese' },
      { id: 2, name: 'English' },
      { id: 3, name: 'Spanish (Español)'},
      { id: 4, name: 'French (Français)'},
      { id: 5, name: 'Persian'},
      { id: 6, name: 'Japanese'},
      { id: 7, name: 'Vietnamese'},
    ]"></vue-select-menu>
</ClientOnly>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu :translations="translations" language="vi" :data="listData" />
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"

export default {
  components: { VueSelectMenu },
  data: () => ({
    translations: {
      vi: {
        menu_title: 'Thực đơn chọn',
        select_all_btn: 'Chọn tất cả',
        remove_all_btn: 'Xóa tất cả lựa chọn',
        close_btn: 'Đóng',
        not_found: 'Không tìm thấy',
        max_selected: 'Bạn chỉ có thể chọn tối đa max_selected_limit mục',
        advanced_default: 'Chọn một mục',
        regular_group: 'Menus',
        items_selected: 'Đã chọn selected_count mục'
      }
    },
    listData: [
      { id: 1, name: 'Chinese' },
      { id: 2, name: 'English' },
      { id: 3, name: 'Spanish (Español)'},
      { id: 4, name: 'French (Français)'},
      { id: 5, name: 'Persian'},
      { id: 6, name: 'Japanese'},
      { id: 7, name: 'Vietnamese'},
    ]
  })
};
</script>
```

</details>

## Only override some translation keys
<ClientOnly>
  <vue-select-menu
    class="my-3"
    :translations="{
      en: {
        menu_title: 'Language menu',
        advanced_default: 'Choose language',
      }
    }"
    language="en"
    :data="[
      { id: 1, name: 'Chinese' },
      { id: 2, name: 'English' },
      { id: 3, name: 'Spanish (Español)'},
      { id: 4, name: 'French (Français)'},
      { id: 5, name: 'Persian'},
      { id: 6, name: 'Japanese'},
      { id: 7, name: 'Vietnamese'},
    ]"></vue-select-menu>
</ClientOnly>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu class="my-3" :translations="translations" language="en" :data="listData" />
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"

export default {
  name: 'localization',
  components: { VueSelectMenu },
  data: () => ({
    translations: {
      en: {
        menu_title: 'Language menu',
        advanced_default: 'Choose language',
      }
    },
    listData: [
      { id: 1, name: 'Chinese' },
      { id: 2, name: 'English' },
      { id: 3, name: 'Spanish (Español)'},
      { id: 4, name: 'French (Français)'},
      { id: 5, name: 'Persian'},
      { id: 6, name: 'Japanese'},
      { id: 7, name: 'Vietnamese'},
    ]
  })
};
</script>
```

</details>
