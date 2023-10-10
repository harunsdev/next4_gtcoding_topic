import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi"

//? Fetching/Getting topics in TopicList component
const getTopics = async () => {

  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics!");
    }
    return res.json();

  } catch(error) {
    console.log("Error loading topics", error);
  }
};
export default async function TopicList() {

  //? Calling getTopics function in TopicList component
  const { topics } = await getTopics();

  return (
    <>

      {/*Mapping Topics */} 

      {topics.map((t) => (
        <div 
          key={t.id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >      
          <div>
            <Link href={`/singleTopic/${t._id}`}>
              <h2 className="text-2xl font-bold" >{t.title}</h2>
            </Link>           
            <div>{t.description}</div>
          </div>
        
          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>

        </div>
      ))}

    </>
  )
}
