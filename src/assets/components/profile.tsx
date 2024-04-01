interface Props {
  path: string;
  name: string;
}

const Profile: React.FC<Props> = ({ name, path }): JSX.Element => {
  return (
    <div className="flex justify-around items-center gap-4 ">
      <div className="flex gap-5">
        <img className="w-16 rounded-full" src={path} />

        <div className="flex flex-col mt-[8px]">
          <h1 className="font-bold ">{name}</h1>
          <p className="">You owe {name} 20$</p>
        </div>
      </div>

      <div className="flex justify-end mr-6"></div>
      <button className="bg-amber-400 hover:bg-amber-500 px-3 py-1 rounded-lg font-semibold">
        Select
      </button>
    </div>
  );
};

export default Profile;
