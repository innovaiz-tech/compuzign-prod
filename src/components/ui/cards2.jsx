import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cards2({ data }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-full max-w-[370px] bg-primary-bgLight rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container with Circles */}
            <div className="relative overflow-hidden">
                <img
                    src={data.image}
                    className="w-full h-[180px] sm:h-[200px] md:h-[230px] object-cover transition-transform duration-500"
                    style={{
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                    alt={data.title}
                />

                {/* Rotating Circles - Only on image hover */}
                {isHovered && (
                    <div>
  {/* Front circle (smaller) with glass effect */}
  <div className="
    absolute right-[10px] bottom-[-90px] w-44 h-44 rounded-full 
    bg-yellow-500/50  border border-yellow-500/30
    animate-[spinReverse_2s_linear_infinite] opacity-0 animate-fadeIn delay-100
  "></div>
  
  {/* Back circle (larger) with glass effect */}
  <div className="
    absolute right-[-80px] bottom-[-70px] w-48 h-48 rounded-full
    bg-yellow-800/80  border border-yellow-800/25
    animate-[spin_3s_linear_infinite] opacity-0 animate-fadeIn
  "></div>
</div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-4 md:p-6">
                <p className="text-sm md:text-base text-primary-textGray mb-2">
                    {data.date}
                </p>

                <Link
                    to={data.href}
                    target="_blank"
                    className="text-lg md:text-xl hover:underline font-semibold mb-3 line-clamp-2"
                >
                    {data.title}
                </Link>

                <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">
                    {data.description}
                </p>

                <Link
                    to={data.href}
                    target="_blank"
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm md:text-base transition-colors group"
                >
                    Read More
                    <span className="ml-1 w-4 h-4 inline-flex items-center justify-center relative">
                        <span className="transition-all duration-300 transform rotate-0 group-hover:rotate-90 group-hover:opacity-0">
                            +
                        </span>
                        <span className="absolute transition-all duration-300 transform -rotate-90 opacity-0 group-hover:rotate-0 group-hover:opacity-100">
                            &gt;
                        </span>
                    </span>
                </Link>
            </div>

            {/* Square Mountain - On card hover */}
            <div className={`
        absolute right-2 bottom-[-34px]
        h-16 w-16
      `}>
                <div className={`
          absolute w-32 h-32 bg-yellow-800
          transform rotate-45 origin-bottom-right
          transition-all duration-500 ease-out
          left-[-40px] bottom-[-50px]
          ${isHovered ? 'opacity-100 delay-100' : 'opacity-0 delay-0'}
          ${isHovered ? 'translate-y-0' : 'translate-y-4'}
        `}></div>

                <div className={`
          absolute w-16 h-16 bg-yellow-500
          transform rotate-[45deg] origin-bottom-right
          transition-all duration-500 ease-out
          left-[-70px] bottom-[-20px]
          ${isHovered ? 'opacity-100 delay-300' : 'opacity-0 delay-0'}
          ${isHovered ? 'translate-y-0' : 'translate-y-4'}
        `}></div>
            </div>
        </div>
    );
}