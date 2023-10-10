"use client"

import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi"
import { useRouter } from "next/navigation";

export default function TopicSingle({id, title, description}) {

  const router = useRouter();

  const getSingleTopic= async e => {
    e.preventDefault();

    try {

      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application.json"
        },
       
      });

      if (!res.ok) {
        throw new Error("Failed to update topic!")
      }

      router.refresh();
      router.push("/");

      } catch(error) { 
        console.log(error);
      }
  }
  return (    
  
    <>
      <div     
        className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
      >      
        <div>
          <h2 className="text-2xl font-bold" >{title}</h2>
          <div>{description}</div>
        </div>
      
        <div className="flex gap-2">
          <RemoveBtn id={id} />
          <Link href={`/editTopic/${id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div> 
    </>
  )
}
