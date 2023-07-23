import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  name: string | null;
  image: string | null;
  age: number | null;
  id: string;
}

const UserCard = ({ name, image, age, id }: Props) => {
  return (
    <div>
      <Image
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
        width={120}
        height={60}
      />
      <div>
        <Link href={`/users/${id}`}>
          <h3 className="font-semibold text-[24px] text-slate-700">{name}</h3>
        </Link>
        <p>Age: {age}</p>
      </div>
    </div>
  );
};

export default UserCard;
