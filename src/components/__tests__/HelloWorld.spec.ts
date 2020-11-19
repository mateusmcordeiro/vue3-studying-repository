import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('Click event', () => {
  test('Clicks quantity need to be 0 by default', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.count).toBe(0);
  })

  test('Click on "click-me" button increase count', () => {
    const wrapper = shallowMount(HelloWorld);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.count).toBe(1);
  })

  test('Click on "click-me" button twice increase count twice', () => {
    const wrapper = shallowMount(HelloWorld);
    wrapper.find('button').trigger('click');
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.count).toBe(2);
  })
})