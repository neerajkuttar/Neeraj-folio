import { GoDeviceMobile } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

const App = () => (
  <div className="bg-gray-500 space-y-4 ">
    <h1 className="p-4 border-4 border-yellow-500 text-red-600 font-bold   text-4xl ">
      PORTFOLIO
    </h1>
    <div className="text-center space-y-10 border-4 mx-12 p-8 border-yellow-500">
      <img
        className="w-48 rounded-full mx-auto  "
        src="https://lh3.googleusercontent.com/a-/AFdZucoQZAIgOasINC_kheldV_WynigGkI_TSkCzFyJ1Pw=s260-p-rw-no"
        alt=""
      />

      <h1 className=" text-4xl text-white mx-20">
        Hi, I am <span className="text-red-500 "> Neeraj lal</span>, Web
        developer
      </h1>
      <p className="text-xl font-bold text-white px-20 ">
        Hi, My name is Neeraj lal, I have read HTML, Tailwind Css, JavaScript,
        ReactJs (Redux, Redux saga). And on the basis of all these I have also
        made some assignments which I have mentioned below in this page which
        you can check. And if you like my projects then you can contact me.
        Thank you
      </p>
      <button className="cursor-pointer text-white hover:bg-red-400 bg-red-700 px-4 py-3 rounded-full">
        DOWNLOAD RESUME
      </button>
    </div>
    <div className="border-4 border-yellow-500 mx-12 p-8">
      <h2 className="text-center text-4xl underline font-bold text-white">
        SKILLS
      </h2>
      <div className="">
        <div className="flex justify-center ">
          <div className="text-center text-xl font-bold text-white underline">
            <img
              src="html.png"
              alt=""
              className="w-40 h-44 mt-5  rounded-full "
            />
            <h2> HTML</h2>
          </div>
          <div className="text-center text-xl font-bold text-white underline">
            <img
              src="css.png"
              alt=""
              className="w-40 h-44 mt-5   rounded-full"
            />
            <h2> CSS</h2>
          </div>
          <div className="text-center text-xl font-bold text-white underline">
            <img
              src="tailwind.png"
              alt=""
              className="w-40 h-44 mt-5  rounded-full "
            />
            <h2> TAILWIND</h2>
          </div>
          <div className="text-center text-xl font-bold text-white underline">
            <img src="js.png" alt="" className="w-44 mt-3 h-44  rounded-full" />
            <h2> JAVASCRIPT</h2>
          </div>
          <div className=" w-40 my-auto text-center text-xl font-bold text-white underline">
            <img src="react.png" alt="" className="w-44  h-44  rounded-full " />
            <h2> REACT</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="border-4 border-yellow-500 mx-12 p-8">
      <h2 className="text-center text-4xl underline font-bold text-white">
        PROJECTS
      </h2>
      <div className=" space-x-8 p-4 m-12 flex justify-center ">
        <span className="bg-yellow-500 py-5 px-8 rounded-md text-xl font-bold">
          <a href="https://wordsentesecounter.netlify.app/"> WORD-COUNTER</a>
        </span>
        <span className="bg-yellow-500 py-5 px-8 rounded-md text-xl font-bold">
          <a href="https://nk-kart.netlify.app/">E-COMMERCE SITE </a>
        </span>
        <span className="cursor-pointer  bg-yellow-500 py-5 px-8 rounded-md text-xl font-bold">
          <a href="https://backgroundchangerpage.netlify.app/">
            BACKGROUND-CHANGER
          </a>
        </span>
        <span className="bg-yellow-500 cursor-pointer  py-5 px-8 rounded-md text-xl font-bold">
          <a href="https://app-todo-ts.netlify.app/"> TODO APP</a>
        </span>
      </div>
    </div>
    <div className=" mx-12 p-8 border-4 border-yellow-500 cursor-pointer ">
      <h2 className="text-center text-4xl underline font-bold text-white">
        CONTACT
      </h2>
      <div className=" text-white text-xl font-bold px-24">
        <h2> Name: Neeraj lal</h2>
        <h2 className=" flex items-center">
          <span>
            <GoDeviceMobile />
          </span>
          Phone: +919639685637
        </h2>

        <h2 className="flex items-center">
          {" "}
          <span>
            <AiOutlineMail />
          </span>
          E-Mail: neerajjay61@gmail.com{" "}
        </h2>
        <h2 className="flex items-center">
          <span>
            <ImLocation2 />
          </span>{" "}
          Address: Prem Nagar (dehradun) Uttrakhand{" "}
        </h2>
      </div>
    </div>
    <div className="flex justify-center space-x-4 ">
      <img
        src="https://www.kindpng.com/picc/m/32-326124_white-circle-linkedin-icon-white-linkedin-icon-png.png"
        alt=""
        className=" rounded-md w-16 h-16 "
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLm2ed35PJqWYK9i2Bch_yq8ZlBJlPkTPbg&usqp=CAU"
        alt=""
        className=" rounded-md w-16 h-16"
      />
      <img
        src="https://png.pngitem.com/pimgs/s/82-827280_clip-art-little-botz-academy-outlet-logo-whatsapp.png"
        alt=""
        className=" rounded-md w-16 h-16"
      />
    </div>
  </div>
);

export default App;
