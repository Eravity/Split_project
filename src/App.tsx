import Profile from "../src/assets/components/profile";
import data from "./assets/data";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="flex w-screen h-screen gap-12 justify-center items-center">
      <div className=" flex flex-col gap-8">
        {data.map((profile) => (
          <Profile name={profile.name} path={profile.path} key={profile.name} />
        ))}
      </div>

      <div className="form">Form</div>
    </div>
  );
};

export default App;
