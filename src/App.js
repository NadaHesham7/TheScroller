import React from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function App() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div style={{ height: "50px", backgroundColor: "#f5f5f5" }}> </div>
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#f5f5f5" }}>
        <div className='relative flex items-center' style={{ width: "77%", backgroundColor: "white" }}>
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
          <div
            id='slider'
            className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
          >
            {data.map((item) => (
              <img
                className='w-[140px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                src={item.img}
                alt='/'
              />
            ))}
          </div>
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>

      </div>


    </>
  );
}

export default App;
