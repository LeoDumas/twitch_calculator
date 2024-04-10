import React from 'react';
import { resolutions } from '../StateManagement';
import { useStore } from '@nanostores/preact';

type Props = {}

const BitrateCalculator = (props: Props) => {
    // const $resolution = useStore(resolutions);

    return (
        <div>
        <h2>Résolutions disponibles :</h2>
        <select>
            {Object.entries(resolutions.get()).map(([resolution, { width, height }]) => (
            <option key={resolution} value={resolution}>
                {resolution}: {width}x{height}
            </option>
            ))}
        </select>
        </div>
    );
};

export default BitrateCalculator;