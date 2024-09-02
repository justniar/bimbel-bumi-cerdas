import PengajarCard from "./PengajarCard";

const Pengajar = () => {
  return (
    <div className="py-20">
      <div className="md:w-1/3 m-auto text-center space-y-2">
        <h1 className="text-5xl font-semibold">
          Pengajar di BBC
        </h1>
        <p className="text-sm text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero odio
          fuga architecto aliquam hic illum dolor, deleniti veniam.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-32 justify-items-center p-10">
        <PengajarCard
          bergabungSejak="white dark:bg-green-900 "
          nama="Basic"
          spesialisasi="black"
          img="/check_green.svg"
        />
        <PengajarCard
          bergabungSejak="white dark:bg-green-900 "
          nama="Basic"
          spesialisasi="black"
          img="/check_green.svg"
        />
        <PengajarCard
          bergabungSejak="white dark:bg-green-900 "
          nama="Basic"
          spesialisasi="black"
          img="/check_green.svg"
        />
      </div>
    </div>
  );
};

export default Pengajar;
