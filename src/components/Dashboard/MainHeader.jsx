const MainHeader = ({ children }) => {
  return (
    <div className="text-gray-500 bg-gray-100 p-4 sm:ml-64 flex gap-2 flex-col lg:flex-row translate-all duration-300 mt-14 dark:bg-gray-800">
      {children}
    </div>
  );
};

export default MainHeader;
