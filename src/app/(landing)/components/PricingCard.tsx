import { LuDot } from "react-icons/lu";
import type { PricingType } from "../types";
import Link from "next/link";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { waLink } from "../data";

const PricingCard = ({ pricingPlan }: { pricingPlan: PricingType }) => {
  const { day, features, name, price } = pricingPlan;
  return (
    <div className="z-2 group relative rounded-md bg-default-100 shadow dark:bg-default-50">
      <div className="p-6 py-8">
        <h6 className="mb-5 font-bold uppercase text-primary">{name}</h6>
        <div className="mb-2 flex text-default-950">
          <span className="text-xl font-semibold">IDR</span>
          <span className="price mb-0 text-4xl font-semibold">
            {price.toLocaleString()}
          </span>
          <span className="mb-1 self-end text-xl font-semibold">k/mo</span>
        </div>
        <p>± {day} hari pengerjaan</p>
        <ul role="list" className="text-default-white -ms-3 mb-5 mt-4 text-sm">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 py-1">
              <LuDot className="inline-block h-8 w-8 stroke-primary" />
              <span className="text-base text-default-950">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href={waLink}
          className="inline-flex gap-2 rounded-md  border border-primary/50 bg-primary/10 px-6 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
        >
          Konsultasi Gratis
          <PiPhoneCallDuotone className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
