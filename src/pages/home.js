import React from 'react';

const Home = () => {
  const bannerImageStyle = {
    backgroundImage: 'url("https://i.pinimg.com/originals/62/21/c4/6221c42299de6b0b835e8d7c00d56a00.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '400px',
    width: '100%',
  };

  return (
    <div>
      {/* <div className='flex flex-row place-content-between bg-black h-12'>
        <div className='text-white hover:text-black hover:bg-yellow-500 px-24 py-2 rounded font-bold pl-20'>Mobile Phones</div>
        <div className='text-white hover:text-black hover:bg-yellow-500 px-24 py-2 rounded font-bold'>Televisions</div>
        <div className='text-white hover:text-black hover:bg-yellow-500 px-24 py-2 rounded font-bold'>Air Conditioners</div>
        <div className='text-white hover:text-black hover:bg-yellow-500 px-24 py-2 rounded font-bold'>Washing Machines</div>
        <div className='text-white hover:text-black hover:bg-yellow-500 px-24 py-2 rounded font-bold pr-20'>Refrigerators</div>
      </div> */}

      <div>
        <div className="bg-cover bg-no-repeat bg-center h-screen" style={bannerImageStyle}></div>
      </div>
    </div>
  );
};

export default Home;
