import ProductSidebar from "../components/Home/productSidebar"

function Home() {
  return (
    <>
      <div className="flex gap-5">
        <div className="w-3/12 shadow-md p-5 hidden lg:block">
          <ProductSidebar />
        </div>
        <p className="w-full  lg:w-3/4 bg-red-400">dsadasda</p>
      </div>
    </>
  );
}

export default Home;
