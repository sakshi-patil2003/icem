function ApplyNowButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Apply Now Button */}
      <div className="fixed right-[-48px] top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-b from-[#018699] to-[#003c84] text-white py-1 px-6 shadow-lg transition duration-300 flex items-center justify-center transform -rotate-90 hover:bg-blue-700 hover:underline hover:scale-105 cursor-pointer"
        >
          Apply Now
        </button>
      </div>
    </>
  );
}

export default ApplyNowButton;
