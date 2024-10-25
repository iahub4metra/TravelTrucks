import { IoWaterOutline } from "react-icons/io5";
import { PiShowerLight, PiRadioLight } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { HiOutlineTv } from "react-icons/hi2";
import { MdOutlineAir } from "react-icons/md";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";

export const chooseIcon = (filter: string, className: string) => {
    switch (filter) {
        case "water":
            return <IoWaterOutline className={className} />
            break;
        case "AC":
            return <MdOutlineAir className={className} />
            break;
        case "kitchen":
            return <BsCupHot  className={className}/>
            break;
        case "TV":
            return <HiOutlineTv  className={className}/>
            break;
        case 'radio':
            return <PiRadioLight  className={className}/>
            break;
        case 'bathroom':
            return <PiShowerLight  className={className}/>
            break;
        case "gas":
            return (
                <svg className={className} fill="none" stroke="black">
                    <use xlinkHref="../../public/filters.svg#gas">
                    </use>
                </svg>
            )
            break;
        case "microwave":
            return (
                <svg className={className} fill="none" stroke="black">
                    <use xlinkHref="../../public/filters.svg#microwave">
                    </use>
                </svg>
            )
            break;
        case "refrigerator":
            return (
                <svg className={className} fill="none" stroke="black">
                    <use xlinkHref="../../public/filters.svg#fridge">
                    </use>
                </svg>
            )
            break;
        case "hybrid":
            return (
                <svg className={className} fill="none" stroke="black">
                    <use xlinkHref="../../public/filters.svg#hybrid">
                    </use>
                </svg>
            )
            break;
        case "diesel":
            return <BsFillFuelPumpDieselFill  className={className}/>
            break;
        case "petrol":
            return <FaGasPump  className={className}/>
            break;
        case "manual":
            return <TbManualGearbox  className={className}/>
            break;
        case "automatic":
            return <TbAutomaticGearbox  className={className}/>
            break;
        case "alcove":
            return (
                <svg  className={className} width="32px" height="32px" fill="none" stroke="black">
                    <use xlinkHref="../../public/filters.svg#alcove">
                    </use>
                </svg>
            )
            break;
        case "panelTruck":
            return (
                <svg  className={className} width="32px" height="32px"  fill="none" stroke="black">
                    <use xlinkHref="../../public/filters.svg#van">
                    </use>
                </svg>
            )
            break;
        case 'fullyIntegrated':
            return (
                <svg  className={className} width="32px" height="32px"  fill="none" stroke="black">
                    <use xlinkHref="../../public/filters.svg#full">
                    </use>
                </svg>
            )
            break;
        default:
            break;
    }
}