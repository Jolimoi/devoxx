import { shallowMount } from "@vue/test-utils"
import Speaker from "@/components/Speaker"

describe("Test Speaker component", () => {
    it("Should render a Speaker component", () => {
        const wrapper = shallowMount(Speaker, {
            propsData: {
                speaker: {
                    firstName: "Loïc",
                    lastName: "Vaillé",
                    avatarURL: "http://www.gravatar.com/avatar/1ab9cca71f0bcf19afb327df0da041b9"
                }
            }
        })
        expect(wrapper.find("img").attributes("src")).toBe("http://www.gravatar.com/avatar/1ab9cca71f0bcf19afb327df0da041b9")
        expect(wrapper.find("p").text()).toBe("Vaillé Loïc")
    })
})