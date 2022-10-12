<template>
    <div>
        <el-dialog v-model="props.modelValue" :show-close="showClose" :width="width" destroy-on-close
            @close="closeDialog">
            <slot></slot>
        </el-dialog>
    </div>
</template>
<script setup lang="ts">

const props = withDefaults(defineProps<{
    modelValue?: boolean,
    showClose?: boolean,
    width?: number
}>(),
    {
        width: 580
    })

const emit = defineEmits(['update:modelValue']);

const closeDialog = () => {
    emit('update:modelValue', false);
}

</script>
<style scoped lang="scss">
:deep(.el-dialog__header) {
    display: none !important;
}

:deep(.el-dialog__body) {
    padding: 0;
}
</style>