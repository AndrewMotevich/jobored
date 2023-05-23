import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const Vacancy = ({ params }: Props) => {
  return <div>Vacancy {params.id}</div>;
};

export default Vacancy;
