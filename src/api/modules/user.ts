import { ResPage, User } from "@/api/interface/index";
import { ContentTypeEnum } from "@/enums/httpEnum";

import http from "@/api";

/**
 * @name 用户管理模块
 */
// * 获取用户列表
export const getUserList = (params: User.ReqGetUserParams) => {
	return http.post<ResPage<User.ResUserList>>('/user/list', params);
};

// * 新增用户
export const addUser = (params: { id: string }) => {
	return http.post('/user/add', params);
};

// * 批量添加用户
export const BatchAddUser = (params: any) => {
	// 其实 headers 中的 Content-Type 可以不写，请求可以自动判断，这里为了演示，写了一下
	return http.post('/user/import', params, { headers: { "Content-Type": ContentTypeEnum.FORM_DATA } });
};