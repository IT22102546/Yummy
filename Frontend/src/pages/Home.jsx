import {Link} from 'react-router-dom'
import {Card} from 'flowbite-react'
export default function Home() {
  return (
    <>
    <div className="mt-16 bg-cover bg-center bg-no-repeat brightness-75" style={{ backgroundImage: "url('/img/hero-1.jpg')", padding: '110px 0px'}}>
      {/* Add a semi-transparent overlay */}
     

      {/* Content inside the hero section */}
      <div className="relative z-10">
        <div className="relative z-10">
          <h2 className="text-white text-5xl font-semibold mt-[200px] pl-[150px] tracking-widest text-sp brightness-100">
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

    {/* Abut section */}

    <div className='mt-24'>
      <h1 className='text-center text-3xl font-semibold'>About</h1>
      <div className='flex flex-wrap justify-center gap-14 mt-24'>
        <Card
          className="max-w-sm text-center"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/img/about1.jpg"
        >
          <h5 className="text-2xl tracking text-gray-900 dark:text-white mt-5 ">
            Our Story
          </h5>
          <p className=" text-gray-700 dark:text-gray-400">
          At test1, we are passionate about helping people achieve healthy, glowing skin. Our journey began when our founder struggled with skin issues and couldn't find a natural solution that worked. That's when she decided to create her own line of skin care products using only natural ingredients. Today, we're proud to offer these products to our customers and help them achieve beautiful skin.
          </p>
        </Card>

        <Card
          className="max-w-sm text-center"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/img/about2.jpg"
        >
          <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
            Our Products
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          All of our products are made with natural, organic ingredients that are gentle on your skin and free from harmful chemicals. We offer a wide range of products, including cleansers, toners, moisturizers, and more. Our goal is to help you find the perfect products for your skin type and needs.
          </p>
        </Card>

        <Card
          className="max-w-sm text-center shadow-none"
          imgAlt=""
          imgSrc="/img/about3.jpg"
        >
          <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
           Our Mission
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Our mission at test1 is to empower people to feel confident and beautiful in their own skin. We believe that everyone deserves to have healthy, glowing skin, and we're committed to helping you achieve that. We're also committed to using sustainable and eco-friendly practises in all aspects of our business.
          </p>
        </Card>
      </div>

    </div>
    </>
  );
}
