<template>
  <el-form :model="form" ref="ruleFormRef" :rules="rules" label-width="120px">
    <div v-for="(element, index) in myArray" :key="index">
      <div class="el" v-if="element.type">
        <el-form-item v-if="element.type !== 'fence'" :label="element.title" :prop="element.dataId">
          <element-comps v-model="form[element.type]" :element="element" :showLabel="false"/>
        </el-form-item>
        <el-row v-if="element.type === 'fence'" :data-id="element.dataId">
          <el-col :span="24/element.fenceCount" v-for="fence in element.fenceCount" :key="fence">
            <div v-for="item in element.tasks[`child${fence}`]" :key="item">
              <el-form-item :label="item.title" :prop="item.dataId">
                <element-comps v-model="form[item.type]" :element="item" :showLabel="false"/>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, reactive, ref, onMounted, watch, defineExpose } from "vue"
import ElementComps from './ElementComps.vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElCol, ElRow, ElForm, ElFormItem } from 'element-plus'

const props = defineProps<{ customConfig: any[] }>();
const myArray: any = reactive(props.customConfig)
const ruleFormRef = ref()
const form: any = reactive({})
const rules: any = reactive<FormRules>({})

onMounted(() => {
  props.customConfig.forEach((item: any) => {
    if (item.tasks) { // 栅栏布局里面的
      Object.keys(item.tasks).forEach((child: any) => {
        item.tasks[child].forEach((childItem: any) => {          
          rules[childItem.dataId] = childItem.rulesConfig.rules
          form[childItem.dataId] = childItem.modelValue
        })
      })
    } else { // 普通单个
      rules[item.dataId] = item.rulesConfig.rules
      form[item.dataId] = item.modelValue
    }
  })
})

watch(myArray, (newVal: any) => {
  newVal.forEach((item: any) => {
    if (item.tasks) { // 栅栏布局里面的
      Object.keys(item.tasks).forEach((child: any) => {
        item.tasks[child].forEach((childItem: any) => {       
          form[childItem.dataId] = childItem.modelValue
        })
      })
    } else { // 普通单个
       form[item.dataId] = item.modelValue
    }
  })
})

// 获取表单数据
const getData = () => {  
  return new Promise((resolve, reject) => {
    ruleFormRef.value.validate((valid: any) => {
      if (valid) {
        resolve(form)
      } else {
        reject('error submit!')
      }
    })
  })
}
defineExpose({getData})

</script>

<style scoped>

</style>