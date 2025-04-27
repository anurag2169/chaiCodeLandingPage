import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

export function FeatureGrid({ items }) {
  return (
    <BentoGrid className="max-w-7xl mx-5 sm:mx-10 lg:mx-auto lg:px-5 md:auto-rows-auto">
      {items.map((item, i) => {
        const isCenterCard = i === 1;
        return (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={cn(
              `${isCenterCard ? "col-span-1 row-span-3" : ""}`,
              item.className
            )}
          />
        );
      })}
    </BentoGrid>
  );
}
