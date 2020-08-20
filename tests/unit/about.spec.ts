import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'



describe('About', () => {
    const wrapper = shallowMount(About, {
        stubs: {
            vCard: true,
            vListItem: true,
            vListItemAvatar: true,
            vImg: true,
            vListItemContent: true,
            vListItemTitle: true,
            vListItemSubtitle: true,
            vCardText: true,
            vCardActions: true,
            vBtn: true,
            vIcon: true,
        },
        mocks: {
            $t: () => { }
        }
    })

    it('is vue and contains Finplan word', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.html()).toContain('Finplan')
    })
})
