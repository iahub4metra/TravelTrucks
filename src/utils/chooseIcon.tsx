import { IoWaterOutline } from "react-icons/io5";
import { PiShowerLight, PiRadioLight } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { HiOutlineTv } from "react-icons/hi2";
import { MdOutlineAir } from "react-icons/md";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";

export const chooseIcon = (filter: string) => {
    switch (filter) {
        case "water":
            return <IoWaterOutline/>
            break;
        case "AC":
            return <MdOutlineAir />
            break;
        case "kitchen":
            return <BsCupHot />
            break;
        case "TV":
            return <HiOutlineTv />
            break;
        case 'radio':
            return <PiRadioLight />
            break;
        case 'bathroom':
            return <PiShowerLight />
            break;
        case "gas":
            return (
                <svg width="32px" height="32px" fill="none" stroke="black">
                    <use xlinkHref="../../public/filters.svg#gas">
                    </use>
                </svg>
            )
            break;
        case "microwave":
            return (
                <svg width="32px" height="32px" fill="none" stroke="black">
                    <use xlinkHref="../../public/filters.svg#microwave">
                    </use>
                </svg>
            )
            break;
        case "refrigerator":
            return (
                <svg width="32px" height="32px" fill="none" stroke="black">
                    <use xlinkHref="../../public/filters.svg#fridge">
                    </use>
                </svg>
            )
            break;
        case "hybrid":
            return (
                <svg width="32px" height="32px" fill="none" stroke="black">
                    <use xlinkHref="../../public/filters.svg#hybrid">
                    </use>
                </svg>
            )
            break;
        case "diesel":
            return <BsFillFuelPumpDieselFill />
            break;
        case "petrol":
            return <FaGasPump />
            break;
        case "manual":
            return <TbManualGearbox />
            break;
        case "automatic":
            return <TbAutomaticGearbox />
            break;
        default:
            break;
    }
}