// ProfileHeader.js
const ProfileHeader = () => {
    return (
      <div className="flex flex-col items-center py-8">
        <img
          className="w-32 h-32 rounded-full object-cover"
          src="https://via.placeholder.com/500"
          alt="Profile"
        />
        <h1 className="text-2xl font-bold mt-4">Full Name</h1>
      </div>
    );
  };
  
  export default ProfileHeader;