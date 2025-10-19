import CardSwap, { Card } from './CardSwap'

const Banner = () => {
    return (
        <div className="hero min-h-[90vh] bg-base-100">
            <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center justify-between w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 gap-10">

                {/* Left Image Section */}
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
                        <CardSwap
                            cardDistance={60}
                            verticalDistance={70}
                            delay={5000}
                            pauseOnHover={false}
                        >
                            <Card>
                                <img
                                    src="https://media.istockphoto.com/id/1643578236/photo/human-hand-putting-coin-in-the-jar-with-plant.jpg?s=612x612&w=0&k=20&c=9m9Xza3mhoAUR9Jr_ZKvgCaFnyp2rWvF1XCQT12OfZc="
                                    className="w-full rounded-lg shadow-2xl object-cover"
                                    alt="Investment Growth"
                                />
                            </Card>
                            <Card>
                                <img
                                    src="https://media.istockphoto.com/id/1167994560/photo/people-together-collecting-money-in-box-for-funding-them.jpg?s=612x612&w=0&k=20&c=GDZgecKcL9cUEIB-wZN8fmXPEdV-iB4TR0r7QSkbSMQ="
                                    className="w-full rounded-lg shadow-2xl object-cover"
                                    alt="Teamwork Funding"
                                />
                            </Card>
                            <Card>
                                <img
                                    src="https://media.istockphoto.com/id/921356990/photo/piggybank-surrounded-by-paper-people-holding-hands-on-wood.jpg?s=612x612&w=0&k=20&c=u_N3nyxDmhfzD7Rd-O2DVbB6vYSFkz8xf-rOtKnLtL4="
                                    className="w-full rounded-lg shadow-2xl object-cover"
                                    alt="Savings Collaboration"
                                />
                            </Card>
                        </CardSwap>
                    </div>
                </div>

                {/* Right Text Section */}
                <div className="hero-info text-center lg:text-left w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Leading Crowd Funding Platform
                    </h1>
                    <p className="py-4 text-gray-500 text-sm sm:text-base md:text-lg">
                        Invest and earn passive income starting today!
                    </p>
                    <button className="btn btn-warning btn-wide mt-2">Invest Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;