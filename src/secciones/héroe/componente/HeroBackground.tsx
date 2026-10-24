export type HeroBackgroundProps = {
  variantClass: string;
};

export const HeroBackground = (props: HeroBackgroundProps) => {
  return (
    <div
      className={`box-border caret-transparent outline-[3px] absolute text-center no-underline md:text-start ${props.variantClass}`}
    ></div>
  );
};