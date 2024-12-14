import { LucideIcon } from "lucide-react";

interface ToolbarButtonProps {
  icon: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
}

const Toolbar = (props: ToolbarButtonProps) => {
  const { icon:Icon, isActive = false, onClick } = props;
  return (
    <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center"></div>
  );
};

export default Toolbar;
