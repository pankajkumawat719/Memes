import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <div className=" w-full h-auto flex flex-col background relative  overflow-hidden items-center ">
      <h1 className="bg-white w-11/12 rounded-lg items-center  text-center font-bold px-10 py-2  text-4xl mt-[40px]  ">
        Random Gifts
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
