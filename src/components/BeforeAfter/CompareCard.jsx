import ReactCompareImage from "react-compare-image";
import { motion } from "framer-motion";

const CompareCard = ({ item }) => {

return(

<motion.div

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.7}}

className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_18px_45px_-34px_rgba(15,45,82,0.55)]"

>

<div className="border-b border-slate-100 p-5">

<h3 className="text-xl font-black tracking-tight text-[#0F2D52]">

{item.title}

</h3>

</div>

<ReactCompareImage

leftImage={item.before}

rightImage={item.after}

/>

</motion.div>

)

}

export default CompareCard;
