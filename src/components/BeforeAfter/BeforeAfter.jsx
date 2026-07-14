import { motion } from "framer-motion";

import CompareCard from "./CompareCard";

import transformationData from "./transformationData";

import { CheckCircle2 } from "lucide-react";

const BeforeAfter=()=>{

return(

<section className="bg-white py-20 sm:py-24 lg:py-28">

<div className="mx-auto max-w-7xl px-5 sm:px-6">

<div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

{/* Left */}

<motion.div

initial={{opacity:0,x:-80}}

whileInView={{opacity:1,x:0}}

viewport={{once:true}}

transition={{duration:.7}}

>

<span className="inline-flex rounded-full border border-[#D4AF37]/25 bg-[#F7FAFC] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0F2D52]">

SMILE TRANSFORMATIONS

</span>

<h2 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-[#0F2D52] sm:text-5xl">

See The Difference

<span className="text-[#C49A2C]">

 One Smile

</span>

At A Time.

</h2>

<p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">

Every smile tells a story.

Our modern treatments help patients achieve healthier,

brighter and more confident smiles.

</p>

<div className="mt-9 grid gap-4 sm:grid-cols-2">

<div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-semibold text-slate-700">

<CheckCircle2 className="text-green-500"/>

Pain Free Treatment

</div>

<div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-semibold text-slate-700">

<CheckCircle2 className="text-green-500"/>

Natural Looking Results

</div>

<div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-semibold text-slate-700">

<CheckCircle2 className="text-green-500"/>

Modern Equipment

</div>

<div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-semibold text-slate-700">

<CheckCircle2 className="text-green-500"/>

Experienced Dentist

</div>

</div>

<button

className="

mt-9

bg-[#0F2D52]

text-white

px-8

py-4

rounded-full
font-bold
shadow-[0_18px_34px_-22px_rgba(15,45,82,0.65)]
hover:-translate-y-0.5

hover:bg-[#163c6b]

duration-300

"

>

View More Cases

</button>

</motion.div>

{/* Right */}

<div className="space-y-6">

{

transformationData.map(item=>(

<CompareCard

key={item.id}

item={item}

/>

))

}

</div>

</div>

</div>

</section>

)

}

export default BeforeAfter;
