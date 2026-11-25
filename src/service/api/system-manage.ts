import { request } from '../request';

/** get role list */
export function fetchGetRoleList(params?: Api.SystemManage.RoleSearchParams) {
  return request<Api.SystemManage.RoleList>({
    url: '/systemManage/getRoleList',
    method: 'get',
    params
  });
}

/**
 * get all roles
 *
 * these roles are all enabled
 */
export function fetchGetAllRoles() {
  return request<Api.SystemManage.AllRole[]>({
    url: '/systemManage/getAllRoles',
    method: 'get'
  });
}

export function fetchAddRole(data: Api.SystemManage.RoleModel) {
  return request<null>({
    url: '/systemManage/addRole',
    method: 'post',
    data
  });
}

export function fetchUpdateRole(id: number, data: Api.SystemManage.RoleModel) {
  return request<null>({
    url: '/systemManage/updateRole',
    method: 'put',
    data: { id, ...data }
  });
}

export function fetchDeleteRole(id: number) {
  return request<null>({
    url: '/systemManage/deleteRole',
    method: 'delete',
    params: { roleId: id }
  });
}

export function fetchBatchDeleteRole(ids: number[]) {
  return request<null>({
    url: '/systemManage/deleteRoles',
    method: 'delete',
    params: { roleIds: ids }
  });
}

export function fetchGetRoleMenuAuth(roleId: number) {
  return request<Api.SystemManage.RoleMenuAuth>({
    url: `/systemManage/role/${roleId}/menus`,
    method: 'get'
  });
}

export function fetchUpdateRoleMenuAuth(roleId: number, data: Api.SystemManage.RoleMenuAuth) {
  return request<null>({
    url: `/systemManage/role/${roleId}/menus`,
    method: 'put',
    data
  });
}

export function fetchGetRoleButtonAuth(roleId: number) {
  return request<number[]>({
    url: `/systemManage/role/${roleId}/buttons`,
    method: 'get'
  });
}

export function fetchUpdateRoleButtonAuth(roleId: number, buttonIds: number[]) {
  return request<null>({
    url: `/systemManage/role/${roleId}/buttons`,
    method: 'put',
    data: buttonIds
  });
}

export function fetchGetAllButtons() {
  return request<Api.SystemManage.MenuButtonConfig[]>({
    url: '/systemManage/getAllButton',
    method: 'get'
  });
}

/** get user list */
export function fetchGetUserList(params?: Api.SystemManage.UserSearchParams) {
  return request<Api.SystemManage.UserList>({
    url: '/systemManage/getUserList',
    method: 'get',
    params
  });
}

export function fetchAddUser(data: Api.SystemManage.UserModel) {
  return request<null>({
    url: '/systemManage/addUser',
    method: 'post',
    data
  });
}

export function fetchUpdateUser(id: number, data: Api.SystemManage.UserModel) {
  return request<null>({
    url: '/systemManage/updateUser',
    method: 'put',
    data: { id, ...data }
  });
}

export function fetchDeleteUser(id: number) {
  return request<null>({
    url: '/systemManage/deleteUser',
    method: 'delete',
    params: { userId: id }
  });
}

export function fetchBatchDeleteUser(ids: number[]) {
  return request<null>({
    url: '/systemManage/deleteUsers',
    method: 'delete',
    params: { userIds: ids }
  });
}

/** get menu list */
export function fetchGetMenuList(params?: Api.SystemManage.CommonSearchParams) {
  return request<Api.SystemManage.MenuList>({
    url: '/systemManage/getMenuList/v2',
    method: 'get',
    params
  });
}

export function fetchAddMenu(data: Api.SystemManage.MenuModel) {
  return request<null>({
    url: '/systemManage/addMenu',
    method: 'post',
    data
  });
}

export function fetchUpdateMenu(id: number, data: Api.SystemManage.MenuModel) {
  return request<null>({
    url: '/systemManage/updateMenu',
    method: 'put',
    data: { id, ...data }
  });
}

export function fetchDeleteMenu(id: number) {
  return request<null>({
    url: '/systemManage/deleteMenu',
    method: 'delete',
    params: { menuId: id }
  });
}

export function fetchBatchDeleteMenu(ids: number[]) {
  return request<null>({
    url: '/systemManage/deleteMenus',
    method: 'delete',
    params: { menuIds: ids }
  });
}

/** get all pages */
export function fetchGetAllPages() {
  return request<string[]>({
    url: '/systemManage/getAllPages',
    method: 'get'
  });
}

/** get menu tree */
export function fetchGetMenuTree() {
  return request<Api.SystemManage.MenuTree[]>({
    url: '/systemManage/getMenuTree',
    method: 'get'
  });
}
