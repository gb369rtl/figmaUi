import { ArrowRight } from "lucide-react";

const KnowMoreButton = () => {
  return (
    <button className="flex items-center justify-center w-[250px] h-[65px] bg-white text-black font-bold text-[30px] leading-[36px] rounded-[20px] shadow-md hover:shadow-lg transition-shadow">
      Know more <ArrowRight className="ml-2 w-[30px] h-[21px]" />
    </button>
  );
};

export default KnowMoreButton;
