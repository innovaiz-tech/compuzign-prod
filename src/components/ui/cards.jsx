export default function Cards({ data }) {
    return (
        <div className="relative flex flex-col items-center px-4 mb-8 group">
            {/* Main Card Container with painting slide-up effect */}
            <div
                className="relative flex flex-col rounded-xl bg-gradient-to-br from-primary-bgGray to-gray-100 w-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-[1.02] hover:-translate-y-1"
                style={{
                    maxWidth: data.width,
                    minHeight: data.height,
                    paddingLeft: data.paddingLeft,
                    paddingRight: data.paddingRight,
                    paddingTop: data.paddingTop,
                    paddingBottom: `calc(${data.paddingBottom} + 3rem)`
                }}
            >
                {/* Simplified Background Lines - Only on hover */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* Reduced to 2 key lines */}
                    <div className="absolute top-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-bgYellow to-transparent opacity-40"></div>
                    <div className="absolute top-0 right-4 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-bgYellow to-transparent opacity-40"></div>
                    
                    {/* Single subtle particle */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-primary-bgYellow rounded-full opacity-60 animate-pulse"></div>
                </div>

                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-5"></div>

                {/* Text Content with simplified animations */}
                <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h2 className="text-center text-xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-500 drop-shadow-sm">
                        {data.header}
                    </h2>
                    {data.content && (
                        <p className="text-center text-primary-textGray group-hover:text-gray-100 transition-colors duration-500 leading-relaxed">
                            {data.content}
                        </p>
                    )}
                </div>

                {/* Painting Slide-Up Hover Image */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                <img
                    src={data.hoverImage}
                        alt={data.header}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-90 brightness-50 group-hover:brightness-70"
                    />
                    
                    {/* Painting effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-bgYellow/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-full group-hover:translate-y-0"></div>
                </div>

                {/* Enhanced glowing border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-bgYellow/30 transition-all duration-500 pointer-events-none"></div>
            </div>

            {/* Enhanced Circular Icon - Always Visible */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                    {/* Icon container with black shade - always visible */}
                    <div className="rounded-full bg-gradient-to-br from-gray-900 to-black p-1 border-8 border-primary-bgLight shadow-2xl transition-all duration-500 group-hover:shadow-yellow-500/20 group-hover:shadow-2xl">
                        <div className="rounded-full bg-gradient-to-br from-gray-800 to-gray-900 p-3 group-hover:from-primary-bgYellow group-hover:to-yellow-300 transition-all duration-500 group-hover:shadow-inner">
                    <img
                        src={data.icon}
                        alt={data.header}
                                className="w-12 h-12 object-contain rounded-full transition-all duration-500 group-hover:scale-110 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                    />
                        </div>
                    </div>
                    
                    {/* Subtle glow ring on hover */}
                    <div className="absolute -inset-1 rounded-full border-2 border-primary-bgYellow/0 group-hover:border-primary-bgYellow/50 transition-all duration-500 animate-pulse opacity-0 group-hover:opacity-100"></div>
                </div>
            </div>
        </div>
    )
}