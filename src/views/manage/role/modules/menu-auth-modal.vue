<script setup lang="ts">
import { computed, shallowRef, watch } from 'vue';
import { fetchGetAllPages, fetchGetMenuTree, fetchGetRoleMenuAuth, fetchUpdateRoleMenuAuth } from '@/service/api';
import { $t } from '@/locales';

defineOptions({
  name: 'MenuAuthModal'
});

interface Props {
  /** the roleId */
  roleId: number;
}

const props = defineProps<Props>();

const visible = defineModel<boolean>('visible', {
  default: false
});

function closeModal() {
  visible.value = false;
}

const title = computed(() => $t('common.edit') + $t('page.manage.role.menuAuth'));

const tree = shallowRef<Api.SystemManage.MenuTree[]>([]);

async function getTree() {
  const { error, data } = await fetchGetMenuTree();

  if (!error) {
    tree.value = data;
  }
}

const checks = shallowRef<number[]>([]);
const homeRouteName = shallowRef('');
const pages = shallowRef<string[]>([]);

const pageSelectOptions = computed(() => {
  const allPages = [...pages.value];

  if (homeRouteName.value && !allPages.includes(homeRouteName.value)) {
    allPages.unshift(homeRouteName.value);
  }

  return allPages.map(page => ({
    label: page,
    value: page
  }));
});

async function getPages() {
  const { error, data } = await fetchGetAllPages();

  if (!error) {
    pages.value = data;
  }
}

async function getChecks() {
  const { error, data } = await fetchGetRoleMenuAuth(props.roleId);

  if (!error) {
    checks.value = data.menuIds;
    homeRouteName.value = data.homeRouteName;
  }
}

async function handleSubmit() {
  const { error } = await fetchUpdateRoleMenuAuth(props.roleId, {
    menuIds: checks.value,
    homeRouteName: homeRouteName.value
  });

  if (error) return;

  window.$message?.success?.($t('common.modifySuccess'));

  closeModal();
}

function init() {
  getPages();
  getTree();
  getChecks();
}

watch(visible, val => {
  if (val) {
    init();
  }
});
</script>

<template>
  <NModal v-model:show="visible" :title="title" preset="card" class="w-480px">
    <div class="flex-y-center gap-16px pb-12px">
      <div>{{ $t('page.manage.menu.home') }}</div>
      <NSelect v-model:value="homeRouteName" :options="pageSelectOptions" size="small" class="w-160px" />
    </div>
    <NTree
      v-model:checked-keys="checks"
      :data="tree"
      key-field="id"
      checkable
      expand-on-click
      virtual-scroll
      block-line
      class="h-280px"
    />
    <template #footer>
      <NSpace justify="end">
        <NButton size="small" class="mt-16px" @click="closeModal">
          {{ $t('common.cancel') }}
        </NButton>
        <NButton type="primary" size="small" class="mt-16px" @click="handleSubmit">
          {{ $t('common.confirm') }}
        </NButton>
      </NSpace>
    </template>
  </NModal>
</template>

<style scoped></style>
