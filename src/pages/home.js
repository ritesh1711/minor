import React from 'react'

export default function home() {
  const backgroundImageStyle1 = {
    backgroundImage: 'url("https://i.pinimg.com/originals/62/21/c4/6221c42299de6b0b835e8d7c00d56a00.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height:'400px',
    width:'100%',
    
}
const backgroundImageStyle2 = {
  };
  return (
      <div>
        <div className='flex flex-row place-content-between bg-black h-12'>
            <div className='text-black pl-20 bg-yellow-500 px-24 py-2 rounded  font-bold'>Mobile Phones</div>
            <div className='text-black bg-yellow-500 px-24 py-2 rounded font-bold'>Televisions</div>
            <div className='text-black bg-yellow-500 px-24 py-2 rounded font-bold'>AirConditioners</div>
            <div className='text-black bg-yellow-500 px-24 py-2 rounded font-bold'>Washing machine  </div>
            <div className='text-black pr-20 bg-yellow-500 px-24 py-2 rounded font-bold'>Refregirators</div>
        </div>

        <div>
          <div className="bg-cover bg-no-repeat bg-center h-screen" style={backgroundImageStyle1}></div>
        </div>


      </div>
    
    
  )
}
