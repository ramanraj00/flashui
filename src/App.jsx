




const flash = () => {


  function turnOn(){

  }


  return (

    <div className="bg-gray-600 min-h-screen flex items-center justify-center ">
      
      <div className="h-80 w-64  bg-black border border-gray-600  rounded-[65px] relative overflow-hidden flex justify-center items-end">  

        
        <button  onClick={turnOn}>
         <div className="">
         <h1 className=" w-[250px] h-[250px]
         bg-[radial-gradient(ellipse_at_bottom_center,rgba(500,390,905,4.5)_29%,rgba(90,90,190,5.25)_15%,rgba(160,90,80,0.12)_55%,transparent_10%)]
         blur-[30px]
         [clip-path:polygon(50%_100%,100%_0%_0%)]">

          <div className="flex justify-center" >
               
  <p className="w-[30px] h-[30px] blur-md  bg-[radial-gradient(circle_at_bottom_center,rgba(400,290,295,2.5)_100%,rgba(100,300,190,2.25)_100%,rgba(180,90,180,1.12)_100%,transparent_10%)]"></p>
              </div>


         </h1>

 

              <div className="flex justify-center ">
            <img  className="h-30 w-25  "
             src="/torch.png"
             alt=""/>
             </div>

         </div>

              
             
        </button>

        <div>

         <div className="absolute top-10 right-6">
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full z-10"></div>
            <span className="absolute inset-0 rounded-full bg-green-500/60 animate-ping"></span>
          </div>
        </div>
          
        </div>
      
      </div>

      </div>


     

  );
};

export default flash;

