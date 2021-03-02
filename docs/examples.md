# Examples

## Regular menu

<div class="my-3">
  <ClientOnly>
    <vue-select-menu :data="menu" type="regular" @show="showLog" @hide="hideLog">
      <template #row="{ row }">
        <span>
          <fa-icon class="fa-lg mr-2" :icon="row.icon.split(',')" v-if="row.icon" />
          &nbsp;
          <span v-html="row.content"></span>
        </span>
      </template>
    </vue-select-menu>
  </ClientOnly>
</div>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu :data="menu" type="regular" @show="showLog" @hide="hideLog">
    <template #row="{ row }">
      <span>
        <fa-icon class="fa-lg mr-2" :icon="row.icon.split(',')" v-if="row.icon" />
        &nbsp;
        <span v-html="row.content"></span>
      </span>
    </template>
  </vue-select-menu>
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    menu: [
      { content: '163 NetEase', url: 'http://www.163.com' },
      { content: 'Sina', url: 'http://www.sina.com' },
      { content: 'sm-divider' },
      { content: 'GitHub', icon: 'fab,github', url: 'https://github.com' },
      { content: 'Reddit', icon: 'fab,reddit', url: 'https://www.reddit.com' },
      { content: 'Facebook', icon: 'fab,facebook', url: 'https://www.facebook.com', disabled: true },
      { content: 'Twitter', icon: 'fab,twitter', url: 'https://twitter.com', disabled: true },
      { content: 'sm-divider' },
      { content: 'Click this menu item to trigger your callback', callback: this.doSome }
    ]
  }),
  methods: {
    showLog() {
      console.log('show')
    },
    hideLog() {
      console.log('hide')
    }
  }
};
</script>
```

</details>

### Regular menu with header bar

<div class="my-3">
  <ClientOnly>
    <vue-select-menu :data="menu" type="regular" title="Menu with header" />
  </ClientOnly>
</div>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu :data="menu" type="regular" title="Menu with header" />
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    menu: [
      { content: '163 NetEase', url: 'http://www.163.com' },
      { content: 'Sina', url: 'http://www.sina.com' },
      { content: 'sm-divider' },
      { content: 'GitHub', icon: 'fab,github', url: 'https://github.com' },
      { content: 'Reddit', icon: 'fab,reddit', url: 'https://www.reddit.com' },
      { content: 'Facebook', icon: 'fab,facebook', url: 'https://www.facebook.com', disabled: true },
      { content: 'Twitter', icon: 'fab,twitter', url: 'https://twitter.com', disabled: true },
      { content: 'sm-divider' },
      { content: 'Click this menu item to trigger your callback', callback: this.doSome }
    ]
  })
};
</script>
```

</details>

### Regular menu with group

<div class="my-3">
  <ClientOnly>
    <vue-select-menu :data="groupMenu" type="regular"/>
  </ClientOnly>
</div>
<div class="my-3">
  <ClientOnly>
    <vue-select-menu :data="groupMenu2" type="regular" :activeGroup="activeGroup" :embed="true" />
  </ClientOnly>
</div>
<div class="my-3">
  <button type="button" class="btn btn-danger" @click="changeGroupData">Change menu data and active the second group</button>
</div>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu :data="groupMenu" type="regular" />
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    groupMenu: [
      {
        title: 'Sports',
        list: [
          { content: 'Fivb', url: 'http://www.fivb.com/' },
          { content: 'Fifa', url: 'http://www.fifa.com/' },
          { content: 'sm-divider' },
          { content: 'NBA official site', url: 'http://www.nba.com' },
          { content: 'Chicago Bulls', url: 'http://www.nba.com/bulls/' },
          { content: 'Los Angeles Lakers', url: 'www.nba.com/lakers/' }
        ]
      }, {
        title: 'News',
        list: [
          { content: 'BBC', url: 'http://www.bbc.com/news' },
          { content: 'CNN', url: 'http://www.cnn.com' },
          { content: 'sm-divider' },
          { content: 'Xinhua', url: 'http://www.xinhuanet.com' }
        ]
      }, {
        title: 'Technology',
        list: [
          { content: 'Github', url: 'https://github.com' },
          { content: 'StackOverflow', url: 'https://stackoverflow.com/' },
          { content: 'sm-divider' },
          { content: 'Reddit', url: 'https://www.reddit.com' }
        ]
      }, {
        title: 'Social',
        list: [
          { content: 'Facebook', url: 'https://www.facebook.com' },
          { content: 'Twitter', url: 'https://twitter.com' }
        ]
      }
    ]
  })
};
</script>
```

</details>

### Regular menu with multiple level

<div class="my-3">
  <ClientOnly>
    <vue-select-menu :data="multiLevel" type="regular" >
      <template v-slot="{ show, disabled }">
        <button type="button" class="btn btn-primary">
          SelectMenu (show: <b v-text="show"></b>, disabled: <b v-text="disabled"></b>)
        </button>
      </template>
    </vue-select-menu>
  </ClientOnly>
</div>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu :data="multiLevel" type="regular" >
    <template v-slot="{ show, disabled }">
      <button type="button" class="btn btn-primary">
        SelectMenu (show: <b v-text="show"></b>, disabled: <b v-text="disabled"></b>)
      </button>
    </template>
  </vue-select-menu>
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    multiLevel: [
      { content: 'Sports news website',
        icon: 'fab,github',
        children: [
          { content: 'Fivb', url: 'http://www.fivb.com/' },
          { content: 'Fifa', url: 'http://www.fifa.com/' },
          { content: 'NBA',
            children: [
              { content: 'NBA official site', url: 'http://www.nba.com' },
              { content: 'Chicago Bulls', icon: 'fab,github', url: 'http://www.nba.com/bulls/' },
              { content: 'Los Angeles Lakers',
                children: [
                  { content: 'NBA official site', url: 'http://www.nba.com' },
                  { content: 'Chicago Bulls', url: 'http://www.nba.com/bulls/' },
                  { content: 'Los Angeles Lakers111', url: 'www.nba.com/lakers/' }
                ] }
            ] }
        ] },
      { content: 'sm-divider' },
      { content: 'News',
        children: [
          { content: 'BBC', url: 'http://www.bbc.com/news' },
          { content: 'CNN', url: 'http://www.cnn.com' },
          { content: 'Xinhua', url: 'http://www.xinhuanet.com' }
        ] },
      { content: 'Technology',
        children: [
          { content: 'Github', url: 'https://github.com' },
          { content: 'StackOverflow', url: 'https://stackoverflow.com/' },
          { content: 'Reddit', url: 'https://www.reddit.com' }
        ] },
      { content: 'Social',
        children: [
          { content: 'Facebook', url: 'https://www.facebook.com' },
          { content: 'Twitter', url: 'https://twitter.com' }
        ] }
    ]
  })
};
</script>
```

</details>

## Advanced menu

<div class="my-3">
  <ClientOnly>
    <vue-select-menu :data="listData" v-model="value1" />
  </ClientOnly>
</div>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu :data="listData" v-model="value1" />
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    value1: '7',
    listData: [
      { id: 1, name: 'Chinese' },
      { id: 2, name: 'English' },
      { id: 3, name: 'Spanish (Español)'},
      { id: 4, name: 'French (Français)'},
      { id: 5, name: 'Persian'},
      { id: 6, name: 'Japanese'},
      { id: 7, name: 'Vietnamese'},
    ],
  })
};
</script>
```
</details>

### Advanced menu with slot

<div class="my-3">
  <ClientOnly>
    <vue-select-menu :data="listData" :max-selected="3" :multiple="true" :width="200">
      <template #row="{ row }">
        <div v-html="`${row.name} (${row.countryCode})`"></div>
      </template>
    </vue-select-menu>
  </ClientOnly>
</div>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu :data="listData" :max-selected="3" :multiple="true">
    <template #row="{ row }">
      <div v-html="`${row.name} (${row.desc})`"></div>
    </template>
  </vue-select-menu>
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    value1: '7',
    listData: [
      { id: 1, name: 'Chinese' },
      { id: 2, name: 'English' },
      { id: 3, name: 'Spanish (Español)'},
      { id: 4, name: 'French (Français)'},
      { id: 5, name: 'Persian'},
      { id: 6, name: 'Japanese'},
      { id: 7, name: 'Vietnamese'},
    ],
  })
};
</script>
```
</details>

### Advanced menu with group type

<pre style="background-color: #fff; border: 1px solid #eee">{{JSON.stringify(value2, null, 4)}}</pre>

<div class="my-3">
  <ClientOnly>
    <vue-select-menu :data="groupData" :max-selected="3" :multiple="true" key-field="id" v-model="value2" />
  </ClientOnly>
</div>
<div class="my-3">
  <ClientOnly>
    <vue-select-menu
      :data="groupMenu3"
      :multiple="true"
      :group="true"
      :embed="true"
      :query="false"
    />
  </ClientOnly>
</div>
<div class="my-3">
  <button type="button" class="btn btn-danger" @click="changeAdvancedGroupData">Change menu data</button>
</div>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu :data="groupData" :max-selected="3" :multiple="true" key-field="id" v-model="value2" />
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    value2: '3,5,17',
    groupData: [{
      title: 'East',
      list: [
        { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛', abbr: 'CHI' },
        { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士', abbr: 'CLE' },
        { id: 3, name: 'Detroit Pistons', desc: '底特律活塞', abbr: 'DET' },
        { id: 4, name: 'Indiana Pacers', desc: '印第安纳步行者', abbr: 'IND' },
        { id: 5, name: 'Milwaukee Bucks', desc: '密尔沃基雄鹿', abbr: 'MIL' },
        { id: 6, name: 'Brooklyn Nets', desc: '布鲁克林篮网', abbr: 'BKN' },
        { id: 7, name: 'Boston Celtics', desc: '波士顿凯尔特人', abbr: 'BOS' },
        { id: 8, name: 'New York Knicks', desc: '纽约尼克斯', abbr: 'NYK' },
        { id: 9, name: 'Philadelphia 76ers', desc: '费城76人', abbr: 'PHI' },
        { id: 10, name: 'Toronto Raptors', desc: '多伦多猛龙', abbr: 'TOR' },
        { id: 11, name: 'Atlanta Hawks', desc: '亚特兰大老鹰', abbr: 'ATL' },
        { id: 12, name: 'Charlotte Hornets', desc: '夏洛特黄蜂', abbr: 'CHA' },
        { id: 13, name: 'Miami Heat', desc: '迈阿密热火', abbr: 'MIA' },
        { id: 14, name: 'Orlando Magic', desc: '奥兰多魔术', abbr: 'ORL' },
        { id: 15, name: 'Washington Wizards', desc: '华盛顿奇才', abbr: 'WAS' }
      ]
    }, {
      title: 'West',
      list: [
        { id: 16, name: 'Denver Nuggets', desc: '丹佛掘金', abbr: 'DEN' },
        { id: 17, name: 'Minnesota Timberwolves', desc: '明尼苏达森林狼', abbr: 'MIN' },
        { id: 18, name: 'Oklahoma City Thunder', desc: '俄克拉荷马雷霆', abbr: 'OKC' },
        { id: 19, name: 'Portland Trail Blazers', desc: '波特兰开拓者', abbr: 'POR' },
        { id: 20, name: 'Utah Jazz', desc: '犹他爵士', abbr: 'UTA' },
        { id: 21, name: 'Golden State Warriors', desc: '金州勇士', abbr: 'GSW' },
        { id: 22, name: 'Los Angeles Clippers', desc: '洛杉矶快船', abbr: 'LAC' },
        { id: 23, name: 'Los Angeles Lakers', desc: '洛杉矶湖人', abbr: 'LAL' },
        { id: 24, name: 'Phoenix Suns', desc: '菲尼克斯太阳', abbr: 'PHX' },
        { id: 25, name: 'Sacramento Kings', desc: '萨克拉门托国王', abbr: 'SAC' },
        { id: 26, name: 'Dallas Mavericks', desc: '达拉斯小牛', abbr: 'DAL' },
        { id: 27, name: 'Houston Rockets', desc: '休斯顿火箭', abbr: 'HOU' },
        { id: 28, name: 'Memphis Grizzlies', desc: '孟菲斯灰熊', abbr: 'MEM' },
        { id: 29, name: 'New Orleans Pelicans', desc: '新奥尔良鹈鹕', abbr: 'NOP' },
        { id: 30, name: 'San Antonio Spurs', desc: '圣安东尼奥马刺', abbr: 'SAS' }
      ] }
    ],
  })
};
</script>
```
</details>

## Disabled
<div class="my-3">
  <button type="button" class="btn btn-danger mr-3" @click="available = !available">Toggle available(v-if)</button>
  <button type="button" class="btn btn-outline-secondary" @click="disabled = !disabled">Toggle disabled</button>
</div>

<ClientOnly>
  <vue-select-menu class="my-3" :data="listData" :disabled="disabled" @values="values" v-if="available" />
</ClientOnly>

<div class="mb-3">
  <div v-for="log in logs" :key="log.id">
    <div v-text="JSON.stringify(log)"></div>
  </div>
</div>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu :data="listData" :disabled="disabled" @values="values" v-if="available" />
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    disabled: false,
    available: true,
    listData: [
      { id: 1, name: 'Chinese' },
      { id: 2, name: 'English' },
      { id: 3, name: 'Spanish (Español)'},
      { id: 4, name: 'French (Français)'},
      { id: 5, name: 'Persian'},
      { id: 6, name: 'Japanese'},
      { id: 7, name: 'Vietnamese'},
    ],
  }),
  methods: {
    values (data) {
      if (data && data.length) {
        console.log(data)
      }
    }
  }
};
</script>
```
</details>

## Menu display direction

<div>
  <ClientOnly>
    <vue-select-menu class="my-3" :data="menu" type="regular" align="left">
      <button class="btn btn-primary mr-3" type="button">Align left</button>
    </vue-select-menu>
    <vue-select-menu class="my-3" :data="menu" type="regular" align="center">
      <button class="btn btn-secondary mr-3" type="button">Align center</button>
    </vue-select-menu>
    <vue-select-menu class="my-3" :data="menu" type="regular" align="right">
      <button class="btn btn-danger" type="button">Align right</button>
    </vue-select-menu>
  </ClientOnly>
</div>

<details>
  <summary>Show code</summary>

```vue
<template>
  <div>
    <vue-select-menu class="my-3" :data="menu" type="regular" align="left">
      <button type="button">Align left</button>
    </vue-select-menu>
    <vue-select-menu class="my-3" :data="menu" type="regular" align="center">
      <button type="button">Align center</button>
    </vue-select-menu>
    <vue-select-menu class="my-3" :data="menu" type="regular" align="right">
      <button type="button">Align right</button>
    </vue-select-menu>
  </div>
</template>

<script>
import VueSelectMenu from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    menu: [
      { content: '163 NetEase', url: 'http://www.163.com' },
      { content: 'Sina', url: 'http://www.sina.com' },
      { content: 'sm-divider' },
      { content: 'GitHub', icon: 'fab,github', url: 'https://github.com' },
      { content: 'Reddit', icon: 'fab,reddit', url: 'https://www.reddit.com' },
      { content: 'Facebook', icon: 'fab,facebook', url: 'https://www.facebook.com', disabled: true },
      { content: 'Twitter', icon: 'fab,twitter', url: 'https://twitter.com', disabled: true },
      { content: 'sm-divider' },
      { content: 'Click this menu item to trigger your callback', callback: this.doSome }
    ],
  })
};
</script>
```

</details>

## Embedded menu

<div class="my-3 row">
  <div class="col-md-6">
    <p>Regular menu with slot</p>
    <p>
      <button type="button" class="btn btn-secondary mr-3" @click="changeData">Menu with header</button>
      <button type="button" class="btn btn-secondary" @click="toMultipleLevel">Multiple level</button>
    </p>
    <ClientOnly>
      <vue-select-menu :data="dynamic" type="regular" :embed="true" >
        <!-- use slot to custom rendering menu row -->
        <template #row="{ row }">
          <span>
            <span v-if="row.icon">(icon: {{row.icon}})</span>
            <span v-html="row.content"></span>
          </span>
        </template>
      </vue-select-menu>
    </ClientOnly>
  </div>
  <div class="col-md-6">
    <p>Advanced menu with slot and custom width</p>
    <ClientOnly>
      <vue-select-menu :data="groupData"
                    :embed="true"
                    :multiple="true"
                    :width="250"
                    key-field="id"
                    v-model="value2" >
        <template #row="{ row }">
          {{row.name}} {{row.desc}}
        </template>
      </vue-select-menu>
    </ClientOnly>
  </div>
</div>

<details>
  <summary>Show code</summary>

```vue
<template>
  <div class="row">
    <div class="col-md-6">
      <p>Regular menu with slot</p>
      <p>
        <button type="button" class="btn btn-secondary mr-3" @click="changeData">Menu with header</button>
        <button type="button" class="btn btn-secondary" @click="toMultipleLevel">Multiple level</button>
      </p>
      <vue-select-menu :data="dynamic" type="regular" :embed="true" >
        <!-- use slot to custom rendering menu row -->
        <template #row="{ row }">
          <span>
            <span v-if="row.icon">(icon: {{row.icon}})</span>
            <span v-html="row.content"></span>
          </span>
        </template>
      </vue-select-menu>
    </div>
    <div class="col-md-6">
      <p>Advanced menu with slot and custom width</p>
      <vue-select-menu :data="groupData"
                    :embed="true"
                    :multiple="true"
                    :width="250"
                    key-field="id"
                    v-model="value2" >
        <template #row="{ row }">
          {{row.name}} {{row.desc}}
        </template>
      </vue-select-menu>
    </div>
  </div>
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    value2: '3,5,17',
    dynamic: [],
    groupData: [{
      title: 'East',
      list: [
        { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛', abbr: 'CHI' },
        { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士', abbr: 'CLE' },
        { id: 3, name: 'Detroit Pistons', desc: '底特律活塞', abbr: 'DET' },
        { id: 4, name: 'Indiana Pacers', desc: '印第安纳步行者', abbr: 'IND' },
        { id: 5, name: 'Milwaukee Bucks', desc: '密尔沃基雄鹿', abbr: 'MIL' },
        { id: 6, name: 'Brooklyn Nets', desc: '布鲁克林篮网', abbr: 'BKN' },
        { id: 7, name: 'Boston Celtics', desc: '波士顿凯尔特人', abbr: 'BOS' },
        { id: 8, name: 'New York Knicks', desc: '纽约尼克斯', abbr: 'NYK' },
        { id: 9, name: 'Philadelphia 76ers', desc: '费城76人', abbr: 'PHI' },
        { id: 10, name: 'Toronto Raptors', desc: '多伦多猛龙', abbr: 'TOR' },
        { id: 11, name: 'Atlanta Hawks', desc: '亚特兰大老鹰', abbr: 'ATL' },
        { id: 12, name: 'Charlotte Hornets', desc: '夏洛特黄蜂', abbr: 'CHA' },
        { id: 13, name: 'Miami Heat', desc: '迈阿密热火', abbr: 'MIA' },
        { id: 14, name: 'Orlando Magic', desc: '奥兰多魔术', abbr: 'ORL' },
        { id: 15, name: 'Washington Wizards', desc: '华盛顿奇才', abbr: 'WAS' }
      ]
    }, {
      title: 'West',
      list: [
        { id: 16, name: 'Denver Nuggets', desc: '丹佛掘金', abbr: 'DEN' },
        { id: 17, name: 'Minnesota Timberwolves', desc: '明尼苏达森林狼', abbr: 'MIN' },
        { id: 18, name: 'Oklahoma City Thunder', desc: '俄克拉荷马雷霆', abbr: 'OKC' },
        { id: 19, name: 'Portland Trail Blazers', desc: '波特兰开拓者', abbr: 'POR' },
        { id: 20, name: 'Utah Jazz', desc: '犹他爵士', abbr: 'UTA' },
        { id: 21, name: 'Golden State Warriors', desc: '金州勇士', abbr: 'GSW' },
        { id: 22, name: 'Los Angeles Clippers', desc: '洛杉矶快船', abbr: 'LAC' },
        { id: 23, name: 'Los Angeles Lakers', desc: '洛杉矶湖人', abbr: 'LAL' },
        { id: 24, name: 'Phoenix Suns', desc: '菲尼克斯太阳', abbr: 'PHX' },
        { id: 25, name: 'Sacramento Kings', desc: '萨克拉门托国王', abbr: 'SAC' },
        { id: 26, name: 'Dallas Mavericks', desc: '达拉斯小牛', abbr: 'DAL' },
        { id: 27, name: 'Houston Rockets', desc: '休斯顿火箭', abbr: 'HOU' },
        { id: 28, name: 'Memphis Grizzlies', desc: '孟菲斯灰熊', abbr: 'MEM' },
        { id: 29, name: 'New Orleans Pelicans', desc: '新奥尔良鹈鹕', abbr: 'NOP' },
        { id: 30, name: 'San Antonio Spurs', desc: '圣安东尼奥马刺', abbr: 'SAS' }
      ] }
    ],
  }),
  methods: {
    changeData() {
      this.dynamic = this.headerMenu
    },
    toMultipleLevel() {
      this.dynamic = this.multiLevel
    }
  }
};
</script>
```

</details>

## Custom dropdown container width

<ClientOnly>
  <vue-select-menu class="my-3" :data="listData" :width="300" />
</ClientOnly>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu :data="groupData" :width="300" />
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    groupData: [{
      title: 'East',
      list: [
        { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛', abbr: 'CHI' },
        { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士', abbr: 'CLE' },
        { id: 3, name: 'Detroit Pistons', desc: '底特律活塞', abbr: 'DET' },
        { id: 4, name: 'Indiana Pacers', desc: '印第安纳步行者', abbr: 'IND' },
        { id: 5, name: 'Milwaukee Bucks', desc: '密尔沃基雄鹿', abbr: 'MIL' },
        { id: 6, name: 'Brooklyn Nets', desc: '布鲁克林篮网', abbr: 'BKN' },
        { id: 7, name: 'Boston Celtics', desc: '波士顿凯尔特人', abbr: 'BOS' },
        { id: 8, name: 'New York Knicks', desc: '纽约尼克斯', abbr: 'NYK' },
        { id: 9, name: 'Philadelphia 76ers', desc: '费城76人', abbr: 'PHI' },
        { id: 10, name: 'Toronto Raptors', desc: '多伦多猛龙', abbr: 'TOR' },
        { id: 11, name: 'Atlanta Hawks', desc: '亚特兰大老鹰', abbr: 'ATL' },
        { id: 12, name: 'Charlotte Hornets', desc: '夏洛特黄蜂', abbr: 'CHA' },
        { id: 13, name: 'Miami Heat', desc: '迈阿密热火', abbr: 'MIA' },
        { id: 14, name: 'Orlando Magic', desc: '奥兰多魔术', abbr: 'ORL' },
        { id: 15, name: 'Washington Wizards', desc: '华盛顿奇才', abbr: 'WAS' }
      ]
    }, {
      title: 'West',
      list: [
        { id: 16, name: 'Denver Nuggets', desc: '丹佛掘金', abbr: 'DEN' },
        { id: 17, name: 'Minnesota Timberwolves', desc: '明尼苏达森林狼', abbr: 'MIN' },
        { id: 18, name: 'Oklahoma City Thunder', desc: '俄克拉荷马雷霆', abbr: 'OKC' },
        { id: 19, name: 'Portland Trail Blazers', desc: '波特兰开拓者', abbr: 'POR' },
        { id: 20, name: 'Utah Jazz', desc: '犹他爵士', abbr: 'UTA' },
        { id: 21, name: 'Golden State Warriors', desc: '金州勇士', abbr: 'GSW' },
        { id: 22, name: 'Los Angeles Clippers', desc: '洛杉矶快船', abbr: 'LAC' },
        { id: 23, name: 'Los Angeles Lakers', desc: '洛杉矶湖人', abbr: 'LAL' },
        { id: 24, name: 'Phoenix Suns', desc: '菲尼克斯太阳', abbr: 'PHX' },
        { id: 25, name: 'Sacramento Kings', desc: '萨克拉门托国王', abbr: 'SAC' },
        { id: 26, name: 'Dallas Mavericks', desc: '达拉斯小牛', abbr: 'DAL' },
        { id: 27, name: 'Houston Rockets', desc: '休斯顿火箭', abbr: 'HOU' },
        { id: 28, name: 'Memphis Grizzlies', desc: '孟菲斯灰熊', abbr: 'MEM' },
        { id: 29, name: 'New Orleans Pelicans', desc: '新奥尔良鹈鹕', abbr: 'NOP' },
        { id: 30, name: 'San Antonio Spurs', desc: '圣安东尼奥马刺', abbr: 'SAS' }
      ] }
    ],
  })
};
</script>
```

</details>

## Mouse right click to call the menu
<ClientOnly>
  <div class="my-3">
    <vue-select-menu :data="menu" type="regular" :full-width="true" :right-click="true" >
      <div class="jumbotron text-center" style="margin: 0;">
        <h1><i class="fa fa-fw fa-mouse-pointer"></i> mouse right click to call</h1>
      </div>
    </vue-select-menu>
  </div>
</ClientOnly>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu class="my-3" :data="menu" type="regular" :full-width="true" :right-click="true" >
    <div class="jumbotron text-center" style="margin: 0;">
      <h1><i class="fa fa-fw fa-mouse-pointer"></i> mouse right click to call</h1>
    </div>
  </vue-select-menu>
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    menu: [
      { content: '163 NetEase', url: 'http://www.163.com' },
      { content: 'Sina', url: 'http://www.sina.com' },
      { content: 'sm-divider' },
      { content: 'GitHub', icon: 'fab,github', url: 'https://github.com' },
      { content: 'Reddit', icon: 'fab,reddit', url: 'https://www.reddit.com' },
      { content: 'Facebook', icon: 'fab,facebook', url: 'https://www.facebook.com', disabled: true },
      { content: 'Twitter', icon: 'fab,twitter', url: 'https://twitter.com', disabled: true },
      { content: 'sm-divider' },
      { content: 'Click this menu item to trigger your callback', callback: this.doSome }
    ],
  })
};
</script>
```

</details>

## Custom select all tab items event
<div class="my-3">
  <ClientOnly>
    <vue-select-menu
      :data="groupMenu3"
      :multiple="true"
      :group="true"
      :select-all-tab-items-events="['select']"
      @select="showSelectLogs"
    />
  </ClientOnly>
</div>

<div class="mb-3">
  <div v-for="log in selectLogs" :key="log.id">
    <div v-text="log"></div>
  </div>
</div>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu :data="groupMenu3" :multiple="true" :group="true" :select-all-tab-items-events="['select']" @select="showSelectLogs" />
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    groupMenu3: [{
      title: 'Sports',
      list: [
        { id: 1, name: 'Fivb' },
        { id: 2, name: 'Fifa' },
        { id: 3, name: 'NBA official site' },
        { id: 4, name: 'Chicago Bulls' },
        { id: 5, name: 'Los Angeles Lakers' }
      ]
    }, {
      title: 'News',
      list: [
        { id: 6, name: 'BBC' },
        { id: 7, name: 'CNN' },
        { id: 8, name: 'Xinhua' }
      ] }
    ],
  }),
  methods: {
    showSelectLogs (data) {
      this.selectLogs.push(`Event: 'select' | Data: ${JSON.stringify(data)}`)
    },
  }
};
</script>
```
</details>

## Custom clear all items event
<div class="my-3">
  <ClientOnly>
    <vue-select-menu
      :data="groupMenu3"
      :multiple="true"
      :group="true"
      :clear-all-events="['unselect']"
      @unselect="showUnselectLogs"
    />
  </ClientOnly>
</div>

<div class="mb-3">
  <div v-for="log in unselectLogs" :key="log.id">
    <div v-text="log"></div>
  </div>
</div>

<details>
  <summary>Show code</summary>

```vue
<template>
  <vue-select-menu :data="groupMenu3" :multiple="true" :group="true" :clear-all-events="['unselect']" @unselect="showUnselectLogs" />
</template>

<script>
import { VueSelectMenu } from "@therunninghub/vue-select-menu"
import '@therunninghub/vue-select-menu/dist/VueSelectMenu.css'

export default {
  components: { VueSelectMenu },
  data: () => ({
    groupMenu3: [{
      title: 'Sports',
      list: [
        { id: 1, name: 'Fivb' },
        { id: 2, name: 'Fifa' },
        { id: 3, name: 'NBA official site' },
        { id: 4, name: 'Chicago Bulls' },
        { id: 5, name: 'Los Angeles Lakers' }
      ]
    }, {
      title: 'News',
      list: [
        { id: 6, name: 'BBC' },
        { id: 7, name: 'CNN' },
        { id: 8, name: 'Xinhua' }
      ] }
    ],
  }),
  methods: {
    showSelectLogs (data) {
      this.selectLogs.push(`Event: 'unselect' | Data: ${JSON.stringify(data)}`)
    },
  }
};
</script>
```
</details>

<!-- Script section -->
<script>
export default {
  name: 'examples',
  data() {
    return {
      value1: '7',
      value2: '3,5,17',
      dynamic: [],
      activeGroup: 3,
      logs: [],
      selectLogs: [],
      unselectLogs: [],
      disabled: false,
      available: true,
      groupData: [{
        title: 'East',
        list: [
          { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛', abbr: 'CHI' },
          { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士', abbr: 'CLE' },
          { id: 3, name: 'Detroit Pistons', desc: '底特律活塞', abbr: 'DET' },
          { id: 4, name: 'Indiana Pacers', desc: '印第安纳步行者', abbr: 'IND' },
          { id: 5, name: 'Milwaukee Bucks', desc: '密尔沃基雄鹿', abbr: 'MIL' },
          { id: 6, name: 'Brooklyn Nets', desc: '布鲁克林篮网', abbr: 'BKN' },
          { id: 7, name: 'Boston Celtics', desc: '波士顿凯尔特人', abbr: 'BOS' },
          { id: 8, name: 'New York Knicks', desc: '纽约尼克斯', abbr: 'NYK' },
          { id: 9, name: 'Philadelphia 76ers', desc: '费城76人', abbr: 'PHI' },
          { id: 10, name: 'Toronto Raptors', desc: '多伦多猛龙', abbr: 'TOR' },
          { id: 11, name: 'Atlanta Hawks', desc: '亚特兰大老鹰', abbr: 'ATL' },
          { id: 12, name: 'Charlotte Hornets', desc: '夏洛特黄蜂', abbr: 'CHA' },
          { id: 13, name: 'Miami Heat', desc: '迈阿密热火', abbr: 'MIA' },
          { id: 14, name: 'Orlando Magic', desc: '奥兰多魔术', abbr: 'ORL' },
          { id: 15, name: 'Washington Wizards', desc: '华盛顿奇才', abbr: 'WAS' }
        ]
      }, {
        title: 'West',
        list: [
          { id: 16, name: 'Denver Nuggets', desc: '丹佛掘金', abbr: 'DEN' },
          { id: 17, name: 'Minnesota Timberwolves', desc: '明尼苏达森林狼', abbr: 'MIN' },
          { id: 18, name: 'Oklahoma City Thunder', desc: '俄克拉荷马雷霆', abbr: 'OKC' },
          { id: 19, name: 'Portland Trail Blazers', desc: '波特兰开拓者', abbr: 'POR' },
          { id: 20, name: 'Utah Jazz', desc: '犹他爵士', abbr: 'UTA' },
          { id: 21, name: 'Golden State Warriors', desc: '金州勇士', abbr: 'GSW' },
          { id: 22, name: 'Los Angeles Clippers', desc: '洛杉矶快船', abbr: 'LAC' },
          { id: 23, name: 'Los Angeles Lakers', desc: '洛杉矶湖人', abbr: 'LAL' },
          { id: 24, name: 'Phoenix Suns', desc: '菲尼克斯太阳', abbr: 'PHX' },
          { id: 25, name: 'Sacramento Kings', desc: '萨克拉门托国王', abbr: 'SAC' },
          { id: 26, name: 'Dallas Mavericks', desc: '达拉斯小牛', abbr: 'DAL' },
          { id: 27, name: 'Houston Rockets', desc: '休斯顿火箭', abbr: 'HOU' },
          { id: 28, name: 'Memphis Grizzlies', desc: '孟菲斯灰熊', abbr: 'MEM' },
          { id: 29, name: 'New Orleans Pelicans', desc: '新奥尔良鹈鹕', abbr: 'NOP' },
          { id: 30, name: 'San Antonio Spurs', desc: '圣安东尼奥马刺', abbr: 'SAS' }
        ] }
      ],
      listData: [
        { id: 1, name: 'Chinese', countryCode: 'CHN'  },
        { id: 2, name: 'English', countryCode: 'GBR'  },
        { id: 3, name: 'Spanish (Español)', countryCode: 'ESP' },
        { id: 4, name: 'French (Français)', countryCode: 'FRA' },
        { id: 5, name: 'Persian', countryCode: 'IRN' },
        { id: 6, name: 'Japanese', countryCode: 'JPN' },
        { id: 7, name: 'Vietnamese', countryCode: 'VIE' },
      ],
      menu: [
        { content: '163 NetEase', url: 'http://www.163.com' },
        { content: 'Sina', url: 'http://www.sina.com' },
        { content: 'sm-divider' },
        { content: 'GitHub', icon: 'fab,github', url: 'https://github.com' },
        { content: 'Reddit', icon: 'fab,reddit', url: 'https://www.reddit.com' },
        { content: 'Facebook', icon: 'fab,facebook', url: 'https://www.facebook.com', disabled: true },
        { content: 'Twitter', icon: 'fab,twitter', url: 'https://twitter.com', disabled: true },
        { content: 'sm-divider' },
        { content: 'Click this menu item to trigger your callback', callback: this.doSome }
      ],
      headerMenu: [
        { content: 'News Site', header: true },
        { content: '163 NetEase', url: 'http://www.163.com' },
        { content: 'Sina', url: 'http://www.sina.com' },
        { content: 'sm-divider' },
        { content: 'Technology Site', header: true },
        { content: 'GitHub', icon: 'fab,github', url: 'https://github.com' },
        { content: 'Reddit', icon: 'fab,reddit', url: 'https://www.reddit.com' },
        { content: 'Facebook', icon: 'fab,facebook', url: 'https://www.facebook.com', disabled: true },
        { content: 'Twitter', icon: 'fab,twitter', url: 'https://twitter.com', disabled: true },
        { content: 'sm-divider' },
        { content: 'Actions', header: true },
        { content: 'Click this menu item to trigger your callback', callback: this.doSome }
      ],
      multiLevel: [
        { content: 'Sports news website',
          icon: 'fab,github',
          children: [
            { content: 'Fivb', url: 'http://www.fivb.com/' },
            { content: 'Fifa', url: 'http://www.fifa.com/' },
            { content: 'NBA',
              children: [
                { content: 'NBA official site', url: 'http://www.nba.com' },
                { content: 'Chicago Bulls', icon: 'fab,github', url: 'http://www.nba.com/bulls/' },
                { content: 'Los Angeles Lakers',
                  children: [
                    { content: 'NBA official site', url: 'http://www.nba.com' },
                    { content: 'Chicago Bulls', url: 'http://www.nba.com/bulls/' },
                    { content: 'Los Angeles Lakers111', url: 'www.nba.com/lakers/' }
                  ] }
              ] }
          ] },
        { content: 'sm-divider' },
        { content: 'News',
          children: [
            { content: 'BBC', url: 'http://www.bbc.com/news' },
            { content: 'CNN', url: 'http://www.cnn.com' },
            { content: 'Xinhua', url: 'http://www.xinhuanet.com' }
          ] },
        { content: 'Technology',
          children: [
            { content: 'Github', url: 'https://github.com' },
            { content: 'StackOverflow', url: 'https://stackoverflow.com/' },
            { content: 'Reddit', url: 'https://www.reddit.com' }
          ] },
        { content: 'Social',
          children: [
            { content: 'Facebook', url: 'https://www.facebook.com' },
            { content: 'Twitter', url: 'https://twitter.com' }
          ] }
      ],
      groupMenu: [
        {
          title: 'Sports',
          list: [
            { content: 'Fivb', url: 'http://www.fivb.com/' },
            { content: 'Fifa', url: 'http://www.fifa.com/' },
            { content: 'sm-divider' },
            { content: 'NBA official site', url: 'http://www.nba.com' },
            { content: 'Chicago Bulls', url: 'http://www.nba.com/bulls/' },
            { content: 'Los Angeles Lakers', url: 'www.nba.com/lakers/' }
          ]
        }, {
          title: 'News',
          list: [
            { content: 'BBC', url: 'http://www.bbc.com/news' },
            { content: 'CNN', url: 'http://www.cnn.com' },
            { content: 'sm-divider' },
            { content: 'Xinhua', url: 'http://www.xinhuanet.com' }
          ]
        }, {
          title: 'Technology',
          list: [
            { content: 'Github', url: 'https://github.com' },
            { content: 'StackOverflow', url: 'https://stackoverflow.com/' },
            { content: 'sm-divider' },
            { content: 'Reddit', url: 'https://www.reddit.com' }
          ]
        }, {
          title: 'Social',
          list: [
            { content: 'Facebook', url: 'https://www.facebook.com' },
            { content: 'Twitter', url: 'https://twitter.com' }
          ]
        }
      ],
      groupMenu2: [
        {
          title: 'Sports',
          list: [
            { content: 'Fivb', url: 'http://www.fivb.com/' },
            { content: 'Fifa', url: 'http://www.fifa.com/' },
            { content: 'sm-divider' },
            { content: 'NBA official site', url: 'http://www.nba.com' },
            { content: 'Chicago Bulls', url: 'http://www.nba.com/bulls/' },
            { content: 'Los Angeles Lakers', url: 'www.nba.com/lakers/' }
          ]
        }, {
          title: 'News',
          list: [
            { content: 'BBC', url: 'http://www.bbc.com/news' },
            { content: 'CNN', url: 'http://www.cnn.com' },
            { content: 'sm-divider' },
            { content: 'Xinhua', url: 'http://www.xinhuanet.com' }
          ]
        }, {
          title: 'Technology',
          list: [
            { content: 'Github', url: 'https://github.com' },
            { content: 'StackOverflow', url: 'https://stackoverflow.com/' },
            { content: 'sm-divider' },
            { content: 'Reddit', url: 'https://www.reddit.com' }
          ]
        }, {
          title: 'Social',
          list: [
            { content: 'Facebook', url: 'https://www.facebook.com' },
            { content: 'Twitter', url: 'https://twitter.com' }
          ]
        }
      ],
      groupMenu3: [{
        title: 'Sports',
        list: [
          { id: 1, name: 'Fivb' },
          { id: 2, name: 'Fifa' },
          { id: 3, name: 'NBA official site' },
          { id: 4, name: 'Chicago Bulls' },
          { id: 5, name: 'Los Angeles Lakers' }
        ]
      }, {
        title: 'News',
        list: [
          { id: 6, name: 'BBC' },
          { id: 7, name: 'CNN' },
          { id: 8, name: 'Xinhua' }
        ] }
      ],
    }
  },
  methods: {
    doSome() {
      // console.log(this.value1);
      window.alert('you can do anything in callback!')
    },
    showLog() {
      console.log('show')
    },
    hideLog() {
      console.log('hide')
    },
    values (data) {
      if (data && data.length) {
        this.logs.push(data)
      }
    },
    showSelectLogs (data) {
      this.selectLogs.push(`Event: 'select' | Data: ${JSON.stringify(data)}`)
    },
    showUnselectLogs (data) {
      this.selectLogs.push(`Event: 'unselect' | Data: ${JSON.stringify(data)}`)
    },
    changeData() {
      this.dynamic = this.headerMenu
    },
    toMultipleLevel() {
      this.dynamic = this.multiLevel
    },
    changeGroupData() {
      this.groupMenu2 = [
        {
          title: 'Design',
          list: [
            { id: 1, content: 'Adobe' },
            { id: 2, content: 'Corel' }
          ]
        },
        {
          title: 'Game',
          list: [
            { id: 3, content: 'Riot Games' },
            { id: 4, content: 'Blizzard' }
          ]
        }
      ]
      this.activeGroup = 1
    },
    changeAdvancedGroupData() {
      this.groupMenu3 = [{
        title: 'Design',
        list: [
          { id: 1, name: 'Adobe' },
          { id: 2, name: 'Corel', disabled: true }
        ]
      }, {
        title: 'Game',
        list: [
          { id: 3, name: 'Riot Games' },
          { id: 4, name: 'Blizzard' }
        ] }
      ]
    }
  },
  mounted() {
    this.dynamic = this.menu
  }
}
</script>

<style>
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}

@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}
</style>
