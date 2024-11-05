import { usePathname, useRouter } from "next/navigation";
import React, {  useState } from "react";
import { FaGlobe } from "react-icons/fa";

const LangChange = ({ln}:{ln:string}) => {
  const [lang, SetLang] = useState<string>(ln);
  const pathname = usePathname().slice(3)
  console.log("path: "+pathname)
  const router = useRouter();
  console.log(lang);
  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetLang(e.target.value);
    router.push("/"+e.target.value+pathname);
  };

  return (
    <div className="flex justify-center  items-center">
      <FaGlobe className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      <select
        onChange={handleLanguage}
        name="lang"
        className="bg-transparent outline-none border-none text-white"
        id="lang"
        value={lang}
      >
        <option value="en" className="text-black">
          en
        </option>
        <option value="ur" className="text-black">
          ur
        </option>
      </select>
    </div>
  );
};

export default LangChange;
