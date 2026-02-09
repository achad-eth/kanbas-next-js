import TailwindSpacing from "./TailwindSpacing";
import TailwindTypography from "./TailwindTypography";
import TailwindBackgroundColors from "./TailwindBackgroundColors";
import TailwindResponsiveDesign from "./TailwindResponsiveDesign";
import TailwindFilters from "./TailwindFilters";
import TailwindGrids from "./TailwindGrids";

export default function Page() {
  return (
    <div className="p-8 space-y-10">
      <h1 className="text-4xl font-bold">Tailwind CSS</h1>

      <TailwindSpacing />
      <TailwindTypography />
      <TailwindBackgroundColors />
      <TailwindResponsiveDesign />
      <TailwindFilters />
      <TailwindGrids />
    </div>
  );
}

