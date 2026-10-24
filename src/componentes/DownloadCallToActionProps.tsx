import { DownloadButtons } from "@/components/DownloadButtons";

export type DownloadCallToActionProps = {
  message: string;
  containerVariant: string;
};

export const DownloadCallToAction = (props: DownloadCallToActionProps) => {
  return (
    <div
      className={`items-center border-b-gray-200 border-l-gray-200 border-r-gray-200 box-border caret-transparent gap-x-4 flex flex-col outline-[3px] gap-y-4 text-center no-underline pt-5 border-t-white/10 border-t md:pt-7 ${props.containerVariant}`}
    >
      <p className="box-border caret-transparent text-white/80 text-base leading-6 min-h-[auto] min-w-[auto] outline-[3px] no-underline">
        {props.message}
      </p>
      <DownloadButtons
        containerVariant="gap-x-4 justify-center min-h-[auto] min-w-[auto] gap-y-4"
        buttonVariant="after:text-center"
        contentVariant=""
      />
    </div>
  );
};