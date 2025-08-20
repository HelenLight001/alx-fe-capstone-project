export default function HeroSection() {
  return (
    <section
      className="bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white text-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to ProjectMaster
        </h1>
        <p className="text-lg md:text-xl mb-6">Turn Your Ideas Into Reality.</p>
        <a
          href="/ProjectForm"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
        >
          Add a Project
        </a>
      </div>
    </section>
  );
}
