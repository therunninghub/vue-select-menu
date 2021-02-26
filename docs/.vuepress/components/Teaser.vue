<template>
  <div>
    <div class="teaser">
      <div class="topBlock">
        <div class="textTeaser">
          <h2 class="title">Select menu for Vue.JS, A simple, easier and highly customized menu solution</h2>
          <router-link class="ctaBtn" :to="'/getting-started.html'">
            Get started
          </router-link>
        </div>
        <div class="flex flex-column">
          <ClientOnly>
            <vue-select-menu class="mb-3" language="en" :data="listData" />
            <vue-select-menu class="mb-3" language="fr" :data="listData" />
            <vue-select-menu class="mb-3" language="es" :data="listData" />
            <vue-select-menu class="mb-3" language="fr" :data="listData" />
            <vue-select-menu class="mb-3" language="fa" :data="listData" />
            <vue-select-menu class="mb-3" language="ja" :data="listData" />
            <vue-select-menu class="mb-3" :translations="translations" language="vi" :data="listData" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelectMenu from '../../../src/VueSelectMenu';

export default {
  components: {VueSelectMenu},

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

<style lang="scss" scoped>
.teaser {
  background: #f5f5f5;
  // border-bottom: 1px solid #e8e8e8;

  @media screen and (min-width: 720px) {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee url("/list-white.svg") no-repeat right
      50px;
    background-size: 1050px;
  }
}

.topBlock {
  position: relative;
  padding: 25px;

  @media screen and (min-width: 720px) {
    display: table;
    padding: 170px 40px;
    max-width: 1100px;
    margin: 0 auto;
  }
}

.textTeaser {
  max-width: 600px;
  padding-bottom: 25px;

  > .title {
    font-size: 32px;
    margin: 0;
    position: relative;
    padding: 0 0 20px 0;
    letter-spacing: -0.02em;
    font-weight: bold;
    border: 0;
  }

  > .text {
    color: #585858;
    margin: 0;
  }

  @media screen and (min-width: 720px) {
    display: table-cell;
    padding-right: 35px;
    padding-top: 35px;
    vertical-align: middle;

    > .title {
      font-size: 45px;
    }
  }
}

.ctaBtn {
  display: inline-block;
  padding: 12px 20px;
  margin-top: 23px;
  border-radius: 25px;
  letter-spacing: -0.3px;
  background: #fe5800;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken(#fe5800, 5%);
  }
}
</style>
