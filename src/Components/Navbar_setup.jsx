  import React from 'react'

  function Navbar_setup() {
    return (
    <>
  {/* It is the tailwind+vite (react) code  */}
  {/* kindly add the link to your html file for the icons "<script src="https://kit.fontawesome.com/4ab8d9fcd9.js" crossorigin="anonymous"></script>" */}

    {/* left side part */}
    <div className="flex flex-col md:flex-row h-screen">
    <div className="h-full bg-cyan-700 md:w-1/4 lg:w-1/5 rounded-3xl font-bold text-xl">
      <div className="p-5">
          <div className="flex flex-col p-2 gap-3">
              <div>
                  <i className="fa-solid fa-angles-left float-right"></i>
              </div>
              <div className="text-xl font-mono">
                  <i className="fa-solid fa-cube p-2"></i>Catalix
              </div>
              <div>
                  <ul className="flex flex-col gap-4">
                      <li className="bg-sky-600 rounded-md p-1">
                          <i className="fa-solid fa-house p-1"></i>Home
                      </li>
                      <li>
                          <i className="fa-solid fa-stopwatch p-1"></i>Activities
                      </li>
                      <li>
                          <i className="fa-solid fa-square-poll-vertical p-1"></i>Analytics
                      </li>
                      <li>
                          <i className="fa-solid fa-rocket p-1"></i>Transformation
                      </li>
                      <li>
                          <i className="fa-solid fa-bars p-1"></i>Library
                      </li>
                  </ul>
              </div>
              <div className="w-40 h-1 bg-slate-50 m-2"></div>
              <div className="flex flex-col gap-4">
                  <div>
                      <i className="fa-solid fa-gear p-1"></i>Settings
                  </div>
                  <div>
                      <i className="fa-solid fa-right-from-bracket p-1"></i>Logout
                  </div>
              </div>
          </div>
      </div>
    </div>
  {/* middle part */}
  <div className="h-full w-full md:w-1/2 bg-gray-100 text-xl">
      <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 mx-0 md:mx-20 my-3 p-2">
          <div className="p-2 border-2 border-solid border-black w-full md:w-[700px] rounded-2xl">
              <button className='text-slate-600'>Search here</button>
          </div>
          <div className="flex flex-col gap-3 p-3 justify-center">
              <div>Set-up Catalix for Success</div>
              <div>Get Catalix up to date or start your transformation by following the guide below.</div>
          </div>
          <div className="w-full md:w-[700px] bg-slate-200 h-[300px] rounded-2xl my-6 p-4">
              <button className="w-20 bg-cyan-600 text-gray-100 rounded-xl mx-auto md:mx-72 my-2 p-2">2/6</button>
              <div className="w-full md:w-96 my-2 mx-auto md:mx-36 p-1">Build your development value stream map</div>
              <button className="w-44 bg-cyan-700 rounded-2xl p-1 text-slate-100 mx-auto md:mx-64 my-2">Start Building</button>
              <div className="mx-auto md:mx-72 p-2">
                  <i className="fa-solid fa-ellipsis"></i>
                  <i className="fa-solid fa-ellipsis"></i>
              </div>
          </div>
      </div>
  </div>
  {/* right side part */}
  <div className="h-full w-full md:w-1/4 lg:w-1/5 p-4 border-l-2 border-solid text-xl">
      <div className="float-right my-2">
          <i className="fa-solid fa-bell p-2"></i>
          <i className="fa-regular fa-comment p-2"></i>
      </div>
      <div className="my-6">
          <div className="w-full md:w-80 p-2">Get ready to transform</div>
          <div className="w-full md:w-80 p-2">Here’s a video to get started. As your transformation progresses, you’ll get fresh tips and insights here.</div>
      </div>
      <div className="relative">
          <img src="https://s3-alpha-sig.figma.com/img/9824/f33c/76647abb61891fe13da188ea01dbbb9d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pUCE7D3z~AF3iEBDnEjJJ1GTeiUefPTZFAdVPKbETkgSYW1PwjqfxuXP9EZhw33qua8hGoCeyMue85g5HU1l8HaV1iI6aqotNbbn3Q6mZcpQUFqr00NMudctBJkqmLFaGHWTdp808eOtsyPEEeFZKtk2IZFj2juDpcZN9RrD-mdDMrATwkKFU-y4XI3BqNwdDK6Ep1UWSmP3pRj-TcR2rKT9DnPWiL9pEaRDU66iKTyGrIsrQJb9bnh23YxDDSoQEkzS5EOWkWfKD61J5es-UKrAcCs5mEBssBzzkK55ITeNrP~V--ayfEYM8ifMU25eIR6Ka-5rwZdcWCEuLrM0iw__" className="rounded-2xl" alt="image"></img>
          <div className='w-52 h-1 bg-black rounded-2xl'></div>
          <div className="absolute bottom-0 left-0 m-4">
              <button className="border-2 border-solid border-slate-950 p-1 rounded-xl"><i className="fa-solid fa-play p-1"></i>2:36</button>
          </div>
      </div>
  </div>

  </div>

    </>
    )
  }

  export default Navbar_setup
