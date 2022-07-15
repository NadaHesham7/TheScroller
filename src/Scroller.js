import React from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Scroller() {
    const slideLeft2 = () => {
        var slider2 = document.getElementById('slider2');
        slider2.scrollLeft = slider2.scrollLeft - 500;
    };

    const slideRight2 = () => {
        var slider2 = document.getElementById('slider2');
        slider2.scrollLeft = slider2.scrollLeft + 500;
    };

    return (
        <>

            <div style={{ height: "10px", backgroundColor: "#f5f5f5" }}> </div>

            <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#f5f5f5" }}>

                <div className='relative flex items-center' style={{ width: "77%", backgroundColor: "white" }}>

                    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft2} size={40} />
                    <div
                        id='slider2'
                        className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                    >

                        <div className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>  <div class="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class=" rounded-t-lg" src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/741272/1.jpg?7131" alt="product image" />
                            </a>
                            <div class="px-1 pb-1">
                                <a href="#">
                                    <h6 class="text-l dark:text-white" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>Sensodyne Extra Fresh Toothpaste for Sensitive Teeth</h6>
                                </a>

                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-bold text-gray-900 dark:text-white">EGP 90.00</span>

                                </div>
                                <span className="text-1xl text-gray-900 dark:text-white text-decoration-line: line-through" style={{ color: "#8c9391" }}>EGP 150.00</span>
                            </div>
                        </div></div>



                        <div className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>  <div class="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class=" rounded-t-lg" src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/060512/1.jpg?8305" alt="product image" />
                            </a>
                            <div class="px-1 pb-1">
                                <a href="#">
                                    <h6 class="text-l dark:text-white" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>Elmatbakh Egyptian Rice - 1 kg </h6>
                                </a>

                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-bold text-gray-900 dark:text-white">EGP 15.00</span>

                                </div>
                                <span className="text-1xl text-gray-900 dark:text-white text-decoration-line: line-through" style={{ color: "#8c9391" }}>EGP 18.00</span>
                            </div>
                        </div></div>



                        <div className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>  <div class="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class=" rounded-t-lg" src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/948432/1.jpg?7186" alt="product image" />
                            </a>
                            <div class="px-1 pb-1">
                                <a href="#">
                                    <h6 class="text-l dark:text-white" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>El Saa Rice Bag – 1 Kg</h6>
                                </a>

                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-bold text-gray-900 dark:text-white">EGP 16.00</span>

                                </div>
                                <span className="text-1xl text-gray-900 dark:text-white text-decoration-line: line-through" style={{ color: "white" }}>EGP 150.00</span>
                            </div>
                        </div></div>



                        <div className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>  <div class="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class=" rounded-t-lg" src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/778052/1.jpg?3314" alt="product image" />
                            </a>
                            <div class="px-1 pb-1">
                                <a href="#">
                                    <h6 class="text-l dark:text-white" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>Dasani Mineral Water - 600 ML - 20Pcs</h6>
                                </a>

                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-bold text-gray-900 dark:text-white">EGP 37.00</span>

                                </div>
                                <span className="text-1xl text-gray-900 dark:text-white text-decoration-line: line-through" style={{ color: "#8c9391" }}>EGP 47.00</span>
                            </div>
                        </div></div>



                        <div className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>  <div class="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class=" rounded-t-lg" src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/275732/1.jpg?5739" alt="product image" />
                            </a>
                            <div class="px-1 pb-1">
                                <a href="#">
                                    <h6 class="text-l dark:text-white" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>Abu Auf light Turkish Coffee - 100Gm</h6>
                                </a>

                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-bold text-gray-900 dark:text-white">EGP 23.00</span>

                                </div>
                                <span className="text-1xl text-gray-900 dark:text-white text-decoration-line: line-through" style={{ color: "#8c9391" }}>EGP 27.00</span>
                            </div>
                        </div></div>





                        <div className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>  <div class="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class=" rounded-t-lg" src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/778052/1.jpg?3316" alt="product image" />
                            </a>
                            <div class="px-1 pb-1">
                                <a href="#">
                                    <h6 class="text-l dark:text-white" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>Sensodyne Extra Fresh Toothpaste for Sensitive Teeth</h6>
                                </a>

                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-bold text-gray-900 dark:text-white">EGP 90.00</span>

                                </div>
                                <span className="text-1xl text-gray-900 dark:text-white text-decoration-line: line-through" style={{ color: "#8c9391" }}>EGP 150.00</span>
                            </div>
                        </div></div>










                        <div className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>  <div class="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class=" rounded-t-lg" src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/778052/2.jpg?1696" alt="product image" />
                            </a>
                            <div class="px-1 pb-1">
                                <a href="#">
                                    <h6 class="text-l dark:text-white" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>Sensodyne Extra Fresh Toothpaste for Sensitive Teeth</h6>
                                </a>

                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-bold text-gray-900 dark:text-white">EGP 90.00</span>

                                </div>
                                <span className="text-1xl text-gray-900 dark:text-white text-decoration-line: line-through" style={{ color: "#8c9391" }}>EGP 150.00</span>
                            </div>
                        </div></div>

                        <div className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>  <div class="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class=" rounded-t-lg" src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/292962/1.jpg?7254" alt="product image" />
                            </a>
                            <div class="px-1 pb-1">
                                <a href="#">
                                    <h6 class="text-l dark:text-white" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>Sensodyne Extra Fresh Toothpaste for Sensitive Teeth</h6>
                                </a>

                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-bold text-gray-900 dark:text-white">EGP 90.00</span>

                                </div>
                                <span className="text-1xl text-gray-900 dark:text-white text-decoration-line: line-through" style={{ color: "#8c9391" }}>EGP 150.00</span>
                            </div>
                        </div></div>

                        <div className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>  <div class="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class=" rounded-t-lg" src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/175732/1.jpg?5744" alt="product image" />
                            </a>
                            <div class="px-1 pb-1">
                                <a href="#">
                                    <h6 class="text-l dark:text-white" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>Sensodyne Extra Fresh Toothpaste for Sensitive Teeth</h6>
                                </a>

                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-bold text-gray-900 dark:text-white">EGP 90.00</span>

                                </div>
                                <span className="text-1xl text-gray-900 dark:text-white text-decoration-line: line-through" style={{ color: "#8c9391" }}>EGP 150.00</span>
                            </div>
                        </div></div>





                        <div className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>  <div class="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class=" rounded-t-lg" src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/833991/1.jpg?9265" alt="product image" />
                            </a>
                            <div class="px-1 pb-1">
                                <a href="#">
                                    <h6 class="text-l dark:text-white" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>Sensodyne Extra Fresh Toothpaste for Sensitive Teeth</h6>
                                </a>

                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-bold text-gray-900 dark:text-white">EGP 90.00</span>

                                </div>
                                <span className="text-1xl text-gray-900 dark:text-white text-decoration-line: line-through" style={{ color: "#8c9391" }}>EGP 150.00</span>
                            </div>
                        </div></div>

                    </div>
                    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight2} size={40} />
                </div>

            </div>

            <div style={{ height: "50px", backgroundColor: "#f5f5f5" }}> </div>


        </>
    );
}

export default Scroller;