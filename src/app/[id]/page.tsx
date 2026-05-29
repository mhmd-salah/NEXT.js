interface IProps {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: PageProps<"/[id]">) => {
  const { id } = await params;
  return <div>page {id}</div>;
};

export default page;
