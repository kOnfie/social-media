import { cn } from "@/lib/client/utils";
import { Container } from "./Container";

interface StatisticsProps {
  statistics: any[];

  className?: string;
}

export function Statistics({ statistics, className }: StatisticsProps) {
  return (
    <section className={cn("mt-[22px] mb-[47px]", className)}>
      <Container>
        <div className="grid grid-cols-3 gap-[28px]">
          {statistics.map((statistic) => (
            <div
              className="text-center border border-[var(--color-border-light)] border-solid rounded-[10px] py-[14px]"
              key={statistic.value}
            >
              <p className="text-[25px]">{statistic.value}</p>
              <p className="text-[12px] text-[var(--color-text-secondary)]">{statistic.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
