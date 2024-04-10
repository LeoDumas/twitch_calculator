import { h } from 'preact';
import { useStore } from '@nanostores/preact';
import { userSubValue, userSubTier, tierMultiplicator } from '../StateManagement';

type Props = {}

const SubCalculator = (props: Props) => {

    const $userSubValue = useStore(userSubValue);
    const $userSubTier = useStore(userSubTier);

    const handleInputChange = (event: h.JSX.TargetedEvent<HTMLInputElement, Event>) => {
        userSubValue.set(parseInt(event.currentTarget.value));
        handleCalc();
    };

    const handleSelectChange = (event : h.JSX.TargetedEvent<HTMLSelectElement, Event>) => {
        userSubTier.set(event.currentTarget.value)
        handleCalc();
    };

    const handleCalc = () => {
        if(userSubTier.get() === "Tier 1 Subs"){
            tierMultiplicator.set(2.5);
        }
        else if(userSubTier.get() === "Tier 2 Subs"){
            tierMultiplicator.set(5);
        }
        else{
            tierMultiplicator.set(12.5);
        }
    }

    return (
        <div class=" flex flex-col">
            <div class="bg-white p-6 rounded-lg shadow-2xl shadow-blue-500/20">
                <input
                    type="number"
                    value={$userSubValue}
                    onInput={handleInputChange}
                    placeholder="Number of subs"
                    class=" border-2 rounded-md pl-3 w-32"
                    min={0}
                />

                <select name="subTier" id="subTier" value={$userSubTier} onChange={handleSelectChange}>
                    <option value="Tier 1 Subs">Tier 1 Subs</option>
                    <option value="Tier 2 Subs">Tier 2 Subs</option>
                    <option value="Tier 3 Subs">Tier 3 Subs</option>
                </select>

                <p class="text-black mt-4">Result : ${userSubValue.get()*tierMultiplicator.get()}/month</p>
            </div>

        </div>
    )
}

export default SubCalculator;