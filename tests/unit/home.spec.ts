import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

const wrapper = shallowMount(Home)

describe('Home', () => {
  it('Is Vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
