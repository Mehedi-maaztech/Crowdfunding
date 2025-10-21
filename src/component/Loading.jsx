import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-base-content p-4">
            
            {/* Daisy UI Loading Spinner. 
              - loading-spinner: The specific spinner style.
              - loading-lg: Sets the size to large.
              - text-primary: Uses the primary theme color.
            */}
            <span className="loading loading-spinner loading-lg text-primary mb-4"></span>
            
            {/* Loading Message with a subtle pulse animation */}
            <p className="text-2xl font-semibold animate-pulse tracking-wider">
                Please Wait...
            </p>

            {/* Subtler secondary message */}
            <p className="text-md mt-3 text-base-content/80">
                Your content is loading.
            </p>
        </div>
    );
};

export default Loading;
