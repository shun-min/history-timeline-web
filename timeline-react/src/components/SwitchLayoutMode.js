import { Button } from 'bootstrap';
import React, { useState } from 'react';

const SwitchLayoutMode = () => {
    const [isLandscape, setIsLandscape] = useState(true);
    setIsLandscape(!isLandscape);
    console.log(isLandscape);

    return (
        <>
        <div>
            <Button></Button>
            Updated layout { isLandscape }
        </div>
        </>
    )
};

export default SwitchLayoutMode;