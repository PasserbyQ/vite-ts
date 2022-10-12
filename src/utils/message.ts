import { ElMessage } from "element-plus";

export class STMessage {
    static grouping(message?: string) {
        ElMessage({
            message: message || '操作失败',
            grouping: true,
            type: 'error',
        })
    }

    static success(message?: string) {
        ElMessage.success(message || '操作成功')
    }

    static error(message?: string) {
        ElMessage.error(message || '操作成功')
    }
}