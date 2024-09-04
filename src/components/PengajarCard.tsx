interface PengajarCardProps {
  name: string;
  role: string;
  description: string;
  imgSrc: string;
  socialLinks: { platform: string; url: string; icon: JSX.Element }[];
}

const PengajarCard = ({ name, role, description, imgSrc, socialLinks }: PengajarCardProps) => {
  return (
    <div className="flex flex-col items-center p-3 max-w-[250px] md:max-w-[500px] bg-orange-50 rounded-lg shadow sm:flex-row dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="w-full max-w-[120px] sm:max-w-[150px]">
        <img className="w-full rounded-t-lg sm:rounded-none sm:rounded-l-lg" src={imgSrc} alt={`${name} Avatar`} />
      </a>
      <div className="p-5 flex-1 text-center sm:text-left">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">{name}</a>
        </h3>
        <span className="text-gray-500 dark:text-gray-400">{role}</span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{description}</p>
        <ul className="flex justify-center sm:justify-start space-x-4 sm:mt-0">
          {socialLinks.map(({ platform, url, icon }) => (
            <li key={platform}>
              <a href={url} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PengajarCard;
