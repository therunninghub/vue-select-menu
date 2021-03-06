/**
 * the root menu code for multiple level menu of regular menu
 */
export const MENU_ROOT = 'root'

export const DIVIDER = 'sm-divider'

/**
 * event type
 */
export const EVENT_SELECT = 'select'
export const EVENT_UNSELECT = 'unselect'
export const EVENT_SELECT_ALL_TAB_ITEMS = 'selectAllTabItems'
export const EVENT_CLEAR_ALL = 'clearAll'

/**
 * menu type
 */
export const REGULAR = 'regular'
export const ADVANCED = 'advanced'

export const languages = {
  // Chinese
  cn: {
    menu_title: '选择菜单',
    select_all_btn: '选择所有 (或当前页签) 项目',
    remove_all_btn: '清除所有选中的项目',
    close_btn: '关闭菜单 (Esc键)',
    not_found: '无查询结果',
    max_selected: '最多只能选择 max_selected_limit 个项目',
    advanced_default: '请选择',
    regular_group: '多组菜单',
    items_selected: '已选择 selected_count 个项目'
  },
  // English
  en: {
    menu_title: 'Select Menu',
    select_all_btn: 'Select All (Tabs) items',
    remove_all_btn: 'Clear all selected items',
    close_btn: 'Close Menu (Esc key)',
    not_found: 'Not found',
    max_selected: 'You can only select up to max_selected_limit items',
    advanced_default: 'Select an option',
    regular_group: 'Menus',
    items_selected: 'selected_count items selected'
  },
  // Spanish (Español)
  es: {
    menu_title: 'Seleccione el menú',
    select_all_btn: 'Selecciona todos los elementos (Esta pestaña)',
    remove_all_btn: 'Limpiar todos los elementos seleccionados',
    close_btn: 'Cerrar menú (Tecla Esc)',
    not_found: 'No encontrado',
    max_selected: 'Solo puedes seleccionar un máximo de hasta max_selected_limit elementos',
    advanced_default: 'Seleccione una opción',
    regular_group: 'Menús',
    items_selected: 'selected_count items Seleccionado'
  },
  // French (Français)
  fr: {
    menu_title: 'Sélectionnez le menu',
    select_all_btn: 'Sélectionner tous les éléments',
    remove_all_btn: 'Désélectionner tous les éléments',
    close_btn: 'Ferme le menu (touche Esc)',
    not_found: 'Non trouvé',
    max_selected: 'Vous pouvez sélectionner au plus max_selected_limit éléments',
    advanced_default: 'Sélectionner un élément',
    regular_group: 'Menus',
    items_selected: 'selected_count éléments sélectionnés'
  },
  // Persian
  fa: {
    menu_title: 'منو را انتخاب کنید',
    select_all_btn: 'انتخاب تمام موارد',
    remove_all_btn: 'حذف تمام موارد',
    close_btn: 'بستن (دمنه Esc(',
    not_found: 'موردی یافت نشد',
    max_selected: 'شما تنها مجاز به انتخاب max_selected_limit items آیتم هستید',
    advanced_default: 'یک مورد را انتخاب کنید',
    regular_group: 'منو ها',
    items_selected: 'selected_count مورد انتخاب شد'
  },
  // Japanese
  ja: {
    menu_title: 'メニューを選択',
    select_all_btn: 'すべての （または現在のタブ） 項目を選択',
    remove_all_btn: '選択したすべての項目をクリアする',
    close_btn: '閉じる (Tabキー)',
    not_found: '(0 件)',
    max_selected: '最多で max_selected_limit のプロジェクトを選ぶことしかできません',
    advanced_default: '選択してください',
    regular_group: '複数のグループメニュー',
    items_selected: 'selected_count アイテムが選択されました'
  },
  // Vietnamese
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
}
