'use client';

import { HiOutlineTrash } from 'react-icons/hi';
//? useRouter hook refreshes page & direct to given route after edit, delete etc.
import { useRouter } from 'next/navigation';

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh();
        router.push("/");       

      }      
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
