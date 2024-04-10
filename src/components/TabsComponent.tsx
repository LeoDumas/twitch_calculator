import SubCalculator from './SubCalculator'
import BitrateCalculator from './BitrateCalculator'
import { useStore } from '@nanostores/preact'
import { currentTab } from '../StateManagement'

type Props = {}

const TabsComponent = (props: Props) => {

    const $currentTab = useStore(currentTab)

    return (
        <div>
            <ul class=" flex justify-center gap-x-6 mb-6">
                <li class={currentTab.get() === "Bitrate" ? "bg-blue-100 w-40 py-1 rounded-lg" : "bg-blue-300 w-40 py-1 rounded-lg"}>
                    <button
                    onClick={(e) => currentTab.set("Sub")}>
                        Subs calculator
                    </button>
                </li>

                <li class={currentTab.get() === "Sub" ? "bg-blue-100 w-40 py-1 rounded-lg" : "bg-blue-300 w-40 py-1 rounded-lg"}>
                    <button
                    onClick={(e) => currentTab.set("Bitrate")}>
                        Bitrate calculator
                    </button>
                </li>

            </ul>

            <div class=" w-full h-32">
                {currentTab.get() === "Sub" ? <SubCalculator/> : ""}
                {currentTab.get() === "Bitrate" ? <BitrateCalculator/> : ""}
            </div>
        </div>
    )
}

export default TabsComponent