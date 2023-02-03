import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FcBiohazard } from "react-icons/fc";
import { FcDribbble } from "react-icons/fc";
import { FcImageFile } from "react-icons/fc";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import girl2 from "../Image/girl2.jpeg"
import girl1 from "../Image/girl1.jpeg";
import girl3 from "../Image/girl3.jpeg";
import back from "../Image/1 (3).png";
import qa from "../Image/1 (2).png";
import app from "../Image/1 (1).png";
import a from "../Image/1.png";
import b from "../Image/2.png";
import c from "../Image/3.png";
import d from "../Image/4.png";
import e from "../Image/5.png";



const Home = () => {
  return (
    <>
      <div className="flex mt-[20px]  justify-around items-center w-[100%] m-auto mb-[40px] ">
        <div className=" w-[30%] pb-[20px] animate__animated animate__backInLeft">
          <div className="flex justify-around w-[75%] ml-[1%] mt-[20px] items-center ">
            <div>
              <BsCheckCircle className="text-[#f24822]"/>
            </div>

            <div>
              <h1 className="text-1xl font-bold text-[#f24822]">
                Best Business Platform-World Record 2021
              </h1>
            </div>
          </div>

          <div className=" w-[120%] text-6xl text-bold">
            <h1 className=" w-[120%] mt-[20px] m-auto text-[#282c4b] font-bold">
              Reach Your Business Goals in Record Time
            </h1>
          </div>
          <div className="text-1xl mt-5  w-[110%]  text-left ...">
            <p>
              Support small business and join the nationwide movement to
              encourage commercial support for the millions of minority owned
              businesses helping world economy.{" "}
            </p>
          </div>

          <div className="flex justify-around mr-10 w-[100%] mt-10">
            <div className=" rounded-full ... bg-[#fc4a74] h-[50px] w-[40%]">
              <button className="text-2xl font-bold pt-[8px] pl-[25px] text-[#ffffff]">Get Started</button>
            </div>

            <div className="flex justify-around mt-4 ml-5 w-300">
              <div className="mt-[2%] ">
                <BsFillCaretRightSquareFill  className="rounded-full"/>
              </div>
              <div className="text-1xl font-bold ml-1  text-[#282c4b]">
                Book a 30 min Quick meeting
              </div>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__backInUp">
          <img className="w-[100%]  h-[450px] mt-[40px] " src={girl1} alt="/"/>
        </div>
      </div>

      <div className="mt-[50px] animate__animated animate__backInLeft">
        <div className="flex justify-between  m-auto  w-[70%]">
          <div className=" h-[5%]">
            <img
              className="h-[40px] w-[200%]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" alt="/"
            />
          </div>
          <div className="h-[5%]">
            <img
              className="h-[40px] w-[200%]"
              src="https://cdn.cookielaw.org/logos/700c3fd0-3045-4864-8f19-92d2b64a3625/9b130af0-71e9-472a-bdc7-fba71dd37fb8/d4963280-c113-4e2f-868f-73aa4f8f71b5/Prudential.png" alt="/"
            />
          </div>
          <div className="  h-[10%]">
            <img
              className="h-[40px] w-[200%]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" alt="/"
            />
          </div>
          <div className=" h-[10%]">
            <img
              className="h-[40px] w-[200%]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfnB4_LVe4OMLHu-GN3dqsY9pf-RHM4EGACX5xx9plwey5H-yrp12xbMUZubF9ekJpwQ&usqp=CAU" alt="/"
            />
          </div>
        </div>
      </div>

      <div className="mt-[60px]">
        <div className="text-left ... ml-[12%]  w-[10%]">
          <div className="text-2xl">
            <p className=" text-[#f24822]">SERVICES</p>
          </div>
        </div>

        <div className="flex justify-around  gap-2  w-[80%] m-auto">
          <div className="text-left ...  w-[20%]">
            <div>
              <h1 className="text-3xl mt-3 font-bold">Our Capabilities</h1>
            </div>
            <div>
              <p className="text-1xl mt-5">
                We will bring the breathe of our experience and industry
                knowledge to help you secceed
              </p>
            </div>
          </div>
          <div className="text-left ...  w-[20%]">
            <div>
              <FcImageFile className="text-4xl" />
            </div>
            <h1 className="text-2xl mt-3">Consult</h1>
            <div>
              <p className="text-1xl mt-3 ">
                Leverage agile framework to provide a robust high level synopsys
                overviews
              </p>
            </div>
          </div>

          <div className="text-left ...  w-[20%]">
            <div>
              <FcBiohazard className="text-4xl" />
            </div>
            <h1 className="text-2xl mt-3">Create</h1>
            <div>
              <p className="text-1xl mt-3">
                Bring to the table survival strategies to ensure proactive
                domination
              </p>
            </div>
          </div>
          <div className="...  w-[20%]">
            <div className="pl-4 rounded-lg bg-[#ffffff] shadow-xl">
              <div>
                <FcDribbble className="text-4xl ml-16" />
              </div>
              <h1 className="text-2xl mt-3">Collaborate</h1>
              <div>
                <p className="text-1xl mt-3">
                  Grow the holistic world view of disruptive view of disruptive
                  innovation workspace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    {/* section 2 */}


    <div className=" mt-11 h-[480px]">
      <div className="flex   mt-6 w-[80%] m-auto h-[450px] text-white bg-[#2b304e]">
        <div>
          <img className="h-[450px]" src={girl2} alt="/"/>
        </div>
        <div className="mt-5 ml-20">
          <h1 className="text-[orange]">WHY CHOOSE US</h1>

          <div className="mt-5 text-4xl font-bold leading-normal text-left ... ">
            <p>
              Take on any Challenge of <br /> the Digital World
            </p>
          </div>
            
            <div className="  ">
          <div className="flex mt-5 ">
            <div className="bg-[#ffffff] text-[black] rounded-full ... mt-3 mr-[40%]">
              <BsCheckCircle />
            </div>
            <div>Corporate Financial Advisory</div>
          </div>

          <div className="flex  mt-5">
            <div className="bg-[#ffffff] text-[black] rounded-full ... mt-3 mr-[30%]">
             
              <BsCheckCircle />
            </div>
            <div>Development of Financial Models</div>
          </div>

          <div className="flex   mt-5">
            <div className="bg-[#ffffff] text-[black] rounded-full ... mt-3 mr-[55%]">
             
              <BsCheckCircle />
            </div>
            <div>Deal Structuring</div>
          </div>
          </div>
          <div className="mt-10">
            <input className="rounded-full ... p-3 " placeholder="Enter your email ID" />
            <button className="ml-[10%] rounded-full ... bg-[#fc4a74] h-[50px] w-[40%] text-2xl font-bold  text-[#ffffff]">
              Get Started
            </button>
          </div>
        </div>
        
      </div>
    </div>

    {/* section3 */}

    <div className=" mt-11 h-[480px]">
        <div className="flex justify-around rounded-full ... mt-6 w-[80%] m-auto h-[380px]  ">
          <div className="mt-5  text-left ...">
            <h1 className="font-bold text-2xl text-blue-600">OUR SOLUTIONS</h1>

            <div className="mt-5 text-3xl w-[50%] text-bold  text-left ... ">
              <p className="font-bold text-4xl text-[#282c4b]">
                Launch and scale your
                <br /> marketing campaigns
              </p>
            </div>

            <div className=" mt-10 w-[50%] text-left ... ">
              <p className="font-bold text-1xl">
                We start with a a kick-off call with the respective project
                owners, onboard the teams on the project management platforms
                and, take off!
              </p>
            </div>
            <div className=" mt-10 w-[40%]">
              <button className=" text-2xl text-white rounded-full ... bg-[#3532d6] h-[50px] w-[50%]">
                Get Started
              </button>
            </div>
          </div>
          <div className="ml-[-100px]">
            <img className="ml-[-100px] w-[800px] h-[450px]" src={girl3} alt="/" />
          </div>
        </div>
      </div>

      <div className=" h-[280px]">
        <div className="flex justify-around text-center  mt-4 gap-20  w-[70%] m-auto h-[170px]">
          <div className="border rounded-lg ... bg-blue-700 text-white font-bold ">
            <h1 className="mt-7 text-4xl">96%</h1>

            <div>
              <p>Client retetion </p>
              <p> By Dailbor and Marino in Hong Kong</p>
            </div>
          </div>
          <div className=" bg-[#FB3F6C] rounded-lg ... text-white font-bold ">
            <h1 className="mt-7 text-4xl">10+</h1>
            <div>
              <p>Year of Sevices</p>
              <p> By Dailbor and Marino in Hong Kong</p>
            </div>
          </div>
          <div className=" border rounded-lg ... bg-[#FFC300] text-white font-bold ">
            <h1 className="mt-7 text-4xl">70+</h1>
            <p>Professionals</p>
            <p> By Dailbor and Marino in Hong Kong</p>
          </div>
          <div className="bg-[#417FB3] border rounded-lg ...  text-white font-bold ">
            <h1 className="mt-7 text-2xl">$40M</h1>
            <p>In funding</p>
            <p> By Dailbor and Marino in Hong Kong</p>
          </div>
        </div>
      </div>


    {/* section last */}


    <div >
      <div>
      
        <h1 className='text-6xl text-center'>
            What We Do 
        </h1>

        <div className='flex w-[70%] justify-around m-auto' >
            <div className='mt-10 font-bold text-4xl '>Our Services</div>
            <div className=' w-[700px] text-left ... '>
                <p className='text-2xl  mt-10 leading-relaxed ... text-[gray]'>It has roots in a piece of classical latin literature from 45 BC, making it over 2000 years old,
                  Richard McClintock, o Latin professor at Homepden-Sydney College in Virginia, looked up one of 
                  the more obscure laatin words, consectetur, from a lorem ipsum passage, adn going through
                   the cites of the word in classsical literature
                </p>
            </div>
        </div>


        <div>
            <div className='grid grid-cols-4 gap-8 m-auto w-[70%] mt-10 '>

                <div className='p-3 w-[190px] rounded-lg ...   h-[230px] bg-[purple] shadow-md ...'>

                    <img className='h-[100px]  rounded-full ... m-auto' src="https://image.pngaaa.com/130/5119130-middle.png" alt="/"/>
                    
                    <div>
                    <p className='font-bold text-2xl'>Design</p>

                    </div>
                    <div className='text-left ...'>
                        <p>Contrary to popular belief, 
                        Lorem ipsum dolor text
                       </p>
                    </div>
                    
                </div>
                <div className='w-[190px] rounded-lg ...   h-[230px]  shadow-md ...'>

                    <img className='h-[100px] m-auto' src="https://cdn.iconscout.com/icon/free/png-256/web-development-1876514-1588443.png" alt="/"/>

                    <div><p className='font-bold text-2xl'>
                        Front End Development
                    </p></div>
                </div>
                <div className=' w-[190px] rounded-lg ...   h-[230px]  shadow-md ...'>

                    <img className='h-[100px] m-auto' src={back} alt="/"/>
                     
                     <div>
                        <p className='font-bold text-2xl'>Back End Development</p>
                     </div>
                </div>
                <div className=' w-[190px] rounded-lg ...   h-[230px]  shadow-md ...'>

                    <img className='h-[100px] m-auto' src={app} alt="/"/>
                      
                      <div>
                        <p className='font-bold text-2xl'>Application Development</p>
                      </div>
                </div>
                <div className=' w-[190px] rounded-lg ...   h-[230px]  shadow-md ...'>
                <img className='h-[100px] m-auto' src="https://static.vecteezy.com/system/resources/previews/002/206/166/non_2x/cloud-computing-icon-free-vector.jpg" alt="/"/>
                 
                 <div>
                    <p className='font-bold text-2xl'>Cloud Services</p>
                 </div>
                </div>
                <div className=' w-[190px] rounded-lg ...   h-[230px]  shadow-md ...'>
                <img className='h-[100px] m-auto' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/analytics-980-621232.png" alt="/"/>
                
                <div>
                    <p className='font-bold text-2xl'>Analitics</p>
                </div>

                </div>
                <div className=' w-[190px] rounded-lg ...   h-[230px]  shadow-md ...'>
                <img className='h-[100px] m-auto' src={qa} alt="/"/>
                     
                     <div>
                        <p className='font-bold text-2xl'>Q-A and Testing</p>
                     </div>
                </div>
                <div className=' w-[190px] rounded-lg ...   h-[230px]  shadow-md ...'>
                <img className='h-[100px] m-auto' src="https://cdn4.iconfinder.com/data/icons/engineering-56/64/10_Engineering_Service_handle_help_settings_support_fix_hand_repair_information_tech-512.png" alt="/"/>
                
                <div><p className='font-bold text-2xl'>Back Office Support</p></div>
                </div>
            </div>

            <div className=' grid grid-cols-3 gap-8 m-auto w-[70%]  mt-10'>
                <div className='  h-[180px] shadow-md ...'>
                    <img className='h-[150px] m-auto' src={a} alt ="/"/>
                     
                     <p className='font-bold text-1xl'>Cosmetic Forcest Marketing</p>
                </div>
                <div className=' h-[180px] shadow-md ...'>

                <img className='h-[150px] m-auto' src={b} alt="/"/>
                  <p className='font-bold text-1xl'>Sales Analytic</p>
                </div>
                <div className=' h-[180px] shadow-md ...'>

                <img className='h-[150px] m-auto' src={c} alt="/"/>
                   <p className='font-bold text-1xl'>Fashion Store Mobile Apps</p>
                </div>
                <div className=' h-[180px] shadow-md ...'>
                <img className='h-[150px] m-auto' src={d} alt="/"/>
                       <p className='font-bold text-1xl'>Laura's Clore Branding Identity</p>
                </div>
                <div className=' h-[180px] shadow-md ...'>
                <img className='h-[150px] m-auto' src={e} alt="/"/>
                         
                         <p className='font-bold text-1xl'>SEO Marketing 4.0</p>
                </div>
                <div className=' h-[180px] shadow-md ...'>
                       <h1 className='mt-5 text-2xl'>PROJECTS</h1>

                       <div  className="mt-5 ">
                        <p className='font-bold text-2xl'>Selected Works From Us</p>
                       </div>
                       <div>
                        <button className=' mt-7 shadow-lg ... border rounded-full ... bg-[#ffffff] h-[50px] w-[40%] text-2xl font-bold  text-[#000000]'>See More</button>
                       </div>
            
                </div>
            </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Home;
