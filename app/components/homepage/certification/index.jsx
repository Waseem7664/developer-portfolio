// @flow strict
import { certifications } from "@/utils/data/certifications";
import Image from "next/image";
import Link from 'next/link';
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/development.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Certification() {
  return (
    <div id="certification" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                certifications.map(certification => {
                  const content = (
                    <div className={`p-3 relative text-white ${certification.url ? 'cursor-pointer' : ''}`}>
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {certification.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {certification.title}
                          </p>
                          <p className="text-sm sm:text-base">{certification.institution}</p>
                        </div>
                      </div>
                    </div>
                  );
                  return (
                    <GlowCard key={certification.id} identifier={`certification-${certification.id}`}>
                      {certification.url ? (
                        <Link href={certification.url} target="_blank" rel="noopener noreferrer">
                          {content}
                        </Link>
                      ) : (
                        content
                      )}
                    </GlowCard>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
