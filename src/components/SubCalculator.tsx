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
        <div class=" flex flex-col gap-y-3 bg-black p-6 rounded-lg outline outline-white outline-2">
            <input
                type="number"
                value={$userSubValue}
                onInput={handleInputChange}
                placeholder="Enter some text"
            />

            <select name="subTier" id="subTier" value={$userSubTier} onChange={handleSelectChange}>
                <option value="Tier 1 Subs">Tier 1 Subs</option>
                <option value="Tier 2 Subs">Tier 2 Subs</option>
                <option value="Tier 3 Subs">Tier 3 Subs</option>
            </select>

            <p class="text-white">Result : ${userSubValue.get()*tierMultiplicator.get()}/month</p>
        </div>
    )
}

export default SubCalculator;