import { v4 as uuidv4 } from 'uuid'

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
