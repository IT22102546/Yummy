import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="mt-16 bg-cover bg-center bg-no-repeat brightness-75" style={{ backgroundImage: "url('/img/hero-1.jpg')", padding: '110px 0px'}}>
      {/* Add a semi-transparent overlay */}
     

      {/* Content inside the hero section */}
      <div className="relative z-10">
        <div className="relative z-10">
          <h2 className="text-white text-5xl font-semibold mt-[200px] pl-[150px] tracking-widest text-sp">
            Expereince the Power of Nature
          </h2>
          <p className="text-white text-xl font-semibold mt-8 pl-[150px] tracking-widest text-sp">
             Revitalize your skin with our plant-based skincare products.
          </p>
          <Link to='/shop'>
            <button className="mt-5 font-medium text-base tracking-wide inline-block px-9 py-3 border border-solid rounded-full transition duration-500 ease-in-out bg-transparent hover:bg-white hover:text-black text-white shadow-btn-book-a-table ml-[150px]">
              Shop Now
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
