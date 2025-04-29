import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl hover:border-1  bg-white p-4 transition duration-200 hover:shadow-xl dark:border-orange-400/75 dark:bg-gray-600/15 hover:shadow-xs dark:shadow-orange-300/75",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2 py-3">
        {icon && (
          <div className="w-10 h-9 border bg-gray-100/10 p-2 rounded-xl flex items-center justify-center">
            {icon}
          </div>
        )}
        <div className="mt-3 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
