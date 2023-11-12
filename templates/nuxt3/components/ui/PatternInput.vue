<template>
  <PatternFormat
    mask="_"
    :className="props.class"
    :format="props.format"
    :valueIsNumericString="!isNumberValue"
    :value="props.modelValue"
    :onValueChange="onChange"
    :allowEmptyFormatting="isFocused"
    @focus="isFocused = true"
    @blur="isFocused = false"
  />
</template>

<script setup lang="ts">
import {PatternFormat as ReactPatternFormat} from 'react-number-format'
import {applyReactInVue} from 'veaury'
import {computed, ref} from 'vue'

const PatternFormat = applyReactInVue(ReactPatternFormat)

const props = defineProps<{
  class?: string,
  format: string,
  modelValue?: string | number,
  modelModifiers?: { number: true },
}>()

const emit = defineEmits<{
  (event: `update:modelValue`, value?: string | number): void,
}>()

const isFocused = ref(false)
const isNumberValue = computed(() => props.modelModifiers?.number)

const onChange = (values: { formattedValue: string, value: string, floatValue?: number }) => {
  const value = isNumberValue.value ? values.floatValue : values.value
  emit(`update:modelValue`, value)
}
</script>
