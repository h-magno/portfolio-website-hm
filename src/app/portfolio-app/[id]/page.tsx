interface codeDescriptionProps {  params: {
    id: string;
  };
}

const codeDescription = ({ params }: codeDescriptionProps) => {
  return (
    <>
      <h1>Título: {params.id} </h1>
    </>
  );
};

export default codeDescription;
