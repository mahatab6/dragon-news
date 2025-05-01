import React, { Suspense } from 'react';
import AllCaterogy from './AllCaterogy';

const Leftaside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                 <AllCaterogy></AllCaterogy>
            </Suspense>
        </div>
    );
};

export default Leftaside;