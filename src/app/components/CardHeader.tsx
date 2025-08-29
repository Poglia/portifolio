import StarIcon from "@/assets/svg/Star";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({title, description, className}: {title: string; description: string; className?: string}) => {
    return <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
              <div className="inline-flex items-center">
                <StarIcon styles="size-9 text-emerald-300 " />
                <h3 className="font-serif text-3xl">{title}</h3>
              </div>
              <p className="text-sm lg:text-base lg:max-w-xs text-white/60 mt-2">
                {description}
              </p>
            </div>
    
    ;
}