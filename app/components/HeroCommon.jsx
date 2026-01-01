import Image from "next/image";
import Link from "next/link";

export default function HeroCommon({ title }) {
  return (
    <div className="common_hero_section">
      <h2 className="common_hero_heading">
        {title}
      </h2>
    </div>
  );
}
