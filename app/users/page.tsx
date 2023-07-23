import UserCard from "@/components/userCard";
import { prisma } from "@/lib/prisma";

export default async function Users() {
  const users = await prisma.user.findMany();
  return (
    <div className="bg-yellow-200 w-[180px] p-4 m-24 flex">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
