import TopicSingle from '@/components/TopicSingle';

const getTopicById = async (id) => {

  const apiUrl = process.env.API_URL;


  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch topic!');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function SingleTopic({ params }) {

  const { id } = params;
  const {topic} = await getTopicById(id);
  const { title, description } = topic;

  return (
    <div>
      <TopicSingle id={id} title={title} description={description} />
    </div>
  );
}
