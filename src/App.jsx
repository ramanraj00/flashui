import { useRef, useState } from "react";

const flash = () => {


  const [intensity , setIntensity] = useState(0);
  const startYref = useRef(0);
  const startIntnesityref = useRef(0);
  const isDraggingRef = useRef(false)
  const power = intensity / 100;        // 0 → 1
const glowOpacity = power;            // 0 → 1
const glowScale = 0.6 + power * 0.6;   // 0.6 → 1.2



  function mouseDown(event){

   startYref.current = event.clientY
   startIntnesityref.current =  intensity
   isDraggingRef.current = true 

  }


  function mouseMove(event){

     if (!isDraggingRef.current)return;
      const currentY = event.clientY
    const diff = startYref.current-currentY

  const sensitivity = 0.3; 
  let newIntensity = startIntnesityref.current + diff * sensitivity;

  if (newIntensity < 0) newIntensity = 0;
  if (newIntensity > 100) newIntensity = 100;

  setIntensity(newIntensity);


  }

    function mouseUp(){
    isDraggingRef.current = false;
  }



  return (

    <div className="min-h-screen w-full relative">

   <div
   className="absolute inset-0 z-0"
   style={{
     backgroundColor: '#0a0a0a',
     backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
     backgroundSize: '10px 10px',
     imageRendering: 'pixelated',
     }}
    />

    <div className="bg-gray-600 min-h-screen flex items-center justify-center ">
      
      <div onMouseDown={mouseDown}
       onMouseUp={mouseUp} 
       onMouseMove={mouseMove} 
       className="h-80 w-64  bg-black border border-gray-600  rounded-[65px] relative overflow-hidden flex justify-center items-end">  


  
        <button >
    
          
         <h1 className=" w-[250px] h-[250px] overflow-hidden
         bg-[radial-gradient(ellipse_at_bottom_center,rgba(250,300,305,1.5)_22%,rgba(90,90,190,1.25)_25%,rgba(160,90,80,0.12)_55%,transparent_10%)]
         blur-[30px]
         [clip-path:polygon(50%_100%,100%_0%_0%)]"
         
       
         >
         </h1>

              <div className="flex justify-center ">
            <img  className="h-30 w-25  "
             src="/torch.png"
             alt=""/>
             </div>
      
        </button>

        <div>

         <div className="absolute top-10 right-6">
          <div className="relative">
            <div className="w-3 h-3 bg-green-300 rounded-full z-10"></div>
            <span className="absolute inset-0 rounded-full bg-green-300/60 animate-ping"></span>
          </div>
        </div>
          
        </div>
      
      </div>

      </div>
</div>



     

  );
};

export default flash;


