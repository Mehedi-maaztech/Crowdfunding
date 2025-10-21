import React from 'react';
import { Link } from 'react-router-dom';

const Campaign = ({ campaign }) => {
    const { _id ,title, image, description, goal, raised, deadline } = campaign;

    const remainingDays = Math.ceil(
        (new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24)
    );
    const percentRaised = Math.min(100, (raised / goal) * 100);
    const isEnded = remainingDays <= 0;

    return (
        // Added 'group' for image hover effect, refined shadow and scale.
        <div className="card bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.03] rounded-2xl overflow-hidden m-2 w-full max-w-sm mx-auto cursor-pointer">

            {/* Image (Figure) */}
            <figure className="relative h-52 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    // Image zoom on hover for a dynamic, premium feel
                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Image Overlay: Soft gradient for better contrast with floating tags */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 transition-opacity duration-500"></div>

                {/* Floating Tag: Status based on deadline */}
                <div
                    className={`absolute top-4 left-4 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg transition-colors ${isEnded ? 'bg-error/90' : 'bg-success/90'
                        }`}
                >
                    {isEnded ? 'ENDED' : 'ACTIVE'}
                </div>
            </figure>

            {/* Card Content (Body) */}
            <div className="card-body p-6 flex flex-col justify-between">

                {/* Title */}
                {/* Using font-roboto (if configured) or a prominent sans-serif style */}
                <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3 line-clamp-2 transition-colors group-hover:text-primary">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 line-clamp-3 mb-4">{description}</p>

                {/* Progress Info */}
                <div className="mb-4">
                    {/* Progress Bar */}
                    <progress
                        className={`progress w-full h-2 rounded-full ${isEnded ? 'progress-error' : 'progress-success'}`}
                        value={percentRaised}
                        max="100"
                    ></progress>

                    {/* Funding Details */}
                    <div className="flex justify-between text-xs sm:text-sm font-medium mt-2">
                        <span className="text-primary font-bold">
                            {Math.round(percentRaised)}% FUNDED
                        </span>
                        <span className="text-gray-500">
                            Goal: <strong>${goal?.toLocaleString() ?? 0}</strong>
                        </span>
                    </div>
                </div>

                {/* Footer and Action */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">

                    {/* Days Left */}
                    <span
                        className={`text-sm font-semibold flex items-center gap-1 ${isEnded ? "text-error" : "text-secondary/80"}`}
                    >
                        {isEnded ? "❌" : "⏳"}
                        {isEnded
                            ? "Completed"
                            : `${remainingDays} days left`}
                    </span>

                    {/* Button: Subtle 'ghost' style on card-hover, strong primary action off-hover */}
                    <Link to={`/campaigns/${_id}`}>
                        <button className="btn btn-sm rounded-lg font-bold shadow-lg transition-all transform group-hover:scale-105">
                            VIEW DETAILS
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Campaign;