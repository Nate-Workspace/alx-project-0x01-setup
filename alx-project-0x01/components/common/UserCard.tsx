import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-sm text-gray-500 mb-1">@{username}</p>
      <p className="text-gray-600 mb-2">{email}</p>
      <div className="text-gray-600 text-sm mb-2">
        <strong>Address:</strong> {address.street}, {address.city}
      </div>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Website:</strong> {website}
      </p>
      <div className="text-sm text-gray-600">
        <strong>Company:</strong> {company.name} - {company.catchPhrase}
      </div>
    </div>
  );
};

export default UserCard;
