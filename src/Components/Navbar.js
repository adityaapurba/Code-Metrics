import "remixicon/fonts/remixicon.css";
const Navbar = () => {
  return (
    <div className="w-full md:w-4/5 flex item-center justify-between my-2 rounded-full py-4 box-border bg-white">
      <button className="bg-themeBlue-400 px-2 py-2 ml-4 rounded-full text-lg">
        <a
          href="https://adityaapurba.vercel.app/"
          className="mx-2 flex items-center"
        >
          <i class="ri-code-s-slash-fill text-xl mr-1"></i>Portfolio
        </a>
      </button>
      {/* ⚔️ */}
      <h1 className="text-2xl mt-2 font-semibold">Code Metrics</h1>
      <button className="bg-themeYellow-400 px-2 py-2 mr-4 rounded-full text-lg">
        <a
          href="https://github.com/adityaapurba"
          className="mx-2 flex items-center"
        >
          <i className="ri-github-fill text-xl mr-1"></i>Github
        </a>
      </button>
    </div>
  );
};

export default Navbar;
