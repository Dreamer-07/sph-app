import {v4 as uuidv4} from 'uuid'

export function getUUID() {
    // 从本地存储中获取
    let uuid = localStorage.getItem("UUID");
    // 如果不存在就创建
    if (!uuid) {
        uuid = uuidv4()
        localStorage.setItem("UUID", uuid)
    }
    return uuid;
}

// 获取 token
export const getToken = () => localStorage.getItem('TOKEN');

// 保存 token
export const saveToken = (token) => token && localStorage.setItem('TOKEN', token);

// 清除 token
export const clearToken = () => localStorage.removeItem('TOKEN');
