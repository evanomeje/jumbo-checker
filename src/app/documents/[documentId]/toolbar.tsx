import { Icon, LucideIcon } from "lucide-react";
import {cn} from "@/lib/utils";

interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon;
};

const ToolbarButton = ( {
    onClick,
    isActive,  
    icon: Icon,
}: ToolbarButtonProps ) => {
    return (
        <button
            onClick= {onClick}
            className={cn(
                "test-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg- bg-neutral-200/80",
                isActive && "bg-neutral-200/80"
            )}>
            <Icon className= "size-4  "/>    
        </button>
    );
}

export const Toolbar = () => {
    const sections: { 
        label: string; 
        icon: LucideIcon;
        onClick: () => void;
        isActive?: boolean;
    }[][] = [
        [
            {
                label: "Undo",
                icon: Undo2Icon,
                onclick: () => console.log("Undo clicked"),
            },
        ],
    ] ;

    return (
        <div className = "bg-[#F1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto" >
            {sections[0].map((item) => (
                <ToolbarButton key={item.label} {...item}/>
            ))}
        </div>
    );
};