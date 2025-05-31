import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  users: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userList, setUserList] = useState(users);

  const handleAddUser = (user: UserData) => {
    const newUser = { ...user, id: userList.length + 1 };
    setUserList([...userList, newUser]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {userList.map((user) => (
            <li key={user.id} className="border p-4 rounded shadow">
              <p><strong>{user.name}</strong> ({user.username})</p>
              <p>Email: {user.email}</p>
              <p>Company: {user.company.name}</p>
              <p>City: {user.address.city}</p>
            </li>
          ))}
        </ul>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users
    }
  };
}

export default Users;
