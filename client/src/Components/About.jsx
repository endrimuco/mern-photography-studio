import React from 'react';
// Imported images for about section
import CameraImg from '../images/oldcamera.jpg';
import StudioEquipmentImg1 from '../images/equipments.jpg';
import Camera2 from '../images/camera2.jpg';
import ProfotoEquipment from '../images/profotoequipment.jpg';
import BackdropStudio from '../images/backdropsstudio.jpg';
import Manfratto from '../images/Manfrotto.jpeg';
import Adobe from '../images/adobe.jpeg';
import Accessories from '../images/accessories.jpg';

const About = () => {
  return (
      <>
    <div className='aboutContainer'>

      <div className='aboutTitle'>

        <div className='aboutLine'> 
        </div>

        <div className='aboutNameTitle'>
          <p>About</p>
        </div>
        
      </div>

      <div className='aboutDescription'>

        <img src={CameraImg} className='aboutImageOne' />

        <div className='aboutDescriptionInfo'>
        <p>
        Welcome to our photography studio! 
        We are a team of passionate photographers who are dedicated to capturing life's most precious moments.
        Our studio specializes in a wide range of photography services, including family portraits, weddings, newborns, 
        and commercial photography.
        </p>

        <p>
        At our studio, we believe that every photo has a story to tell. 
        That's why we take the time to get to know our clients and understand 
        their unique needs and preferences. We work closely with each client 
        to ensure that we capture the essence of their personality and create 
        stunning images that they will cherish for years to come.
        </p>
        </div>
        
      </div>
      
    </div>

    <div className='statsContainer'>

      <div className='aboutTitle'>

       <div className='aboutLine'> 
        </div>

       <div className='aboutNameTitle'>
         <p>Statistics</p>
       </div>

       </div>

        <div className='statsList'>

          <div className='statsCard'>

            <i className="ri-building-line statsIcons"></i>

            <div className='statsCardTitle'>
              +8 Years
            </div>
            
          </div>

          <div className='statsCard'>

            <i className="ri-user-line statsIcons"></i>

            <div className='statsCardTitle'>
              +5600 Happy clients
            </div>
            
          </div>

          <div className='statsCard'>

            <i className="ri-medal-line statsIcons"></i>

            <div className='statsCardTitle'>
              +35 Awards
            </div>
            
          </div>

          <div className='statsCard'>

            <i className="ri-gallery-line statsIcons"></i>

            <div className='statsCardTitle'>
              +39000 Pictures taken
            </div>
            
          </div>
          
        </div>
    </div>

    <div className='equipmentsContainer'>
       
       <div className='aboutTitle'>

         <div className='aboutLine'> 
          </div>

          <div className='aboutNameTitle'>
            <p>Studio Equipments</p>
          </div>

      </div>

      <div className='equipmentsImageDiv'>
        <img src={StudioEquipmentImg1} className='equipmentsImageOne' alt="studio equipment image"/> 
      </div>


      <div className='equipmentsDescription'>
       
       <p className='equipmentsDescriptionInfo'>

        <li><span>Cameras:</span> High-end DSLR or mirrorless cameras with various lenses, including wide-angle, portrait, and telephoto lenses.</li>
        
        <li><span>Lighting:</span> Studio lighting equipment such as strobe lights, softboxes, umbrellas, reflectors, and light stands. These are used to control the intensity, direction, and quality of light in the studio.</li>
        
        <li><span>Backdrops:</span> Different colored backdrops, including paper rolls, muslin, and vinyl, to create a variety of backgrounds for portrait and product photography.</li>

        <li><span>Tripods and other supports:</span> Sturdy tripods, monopods, and other supports to keep the camera stable during long exposures and to allow for precise framing.</li>

        <li><span>Editing software and hardware:</span> High-end computers with powerful graphics cards and editing software such as Adobe Photoshop and Lightroom, for post-processing and retouching of images.</li>

        <li><span>Accessories:</span> Additional accessories such as remote triggers, battery grips, memory cards, and card readers to enhance the efficiency and effectiveness of the photo studio.</li>
       </p>
        
      </div> 

  
   <div className='equipmentsToolsContainerOne'>
  
   <div className='equipmentsTools'>

   <div className='equipmentsTool'>

    <div className='equipmentsNameTool'>
      <p className='equipmentsNameToolInfo'><span>Camera: </span> Nikon D850</p>
    </div>

    <div className='equipmentsImageTool'>
      <img src={Camera2} className='equipmentsToolImages' alt="image tool"/>
    </div>

    <div className='equipmentsToolDescription'>
      <p className='equipmentsToolDescriptionInfo'>
        <li><span>Sensor: </span> 
        Full-frame 35.9 x 23.9mm CMOS sensor,
        45.7-megapixel resolution "effective",
        No optical low-pass filter,
        35.9 million total pixels.
        </li>

        <li><span>Image processor: </span>
        EXPEED 5
        </li>

        <li><span>Autofocus: </span>
        153-point autofocus system with 99 cross-type sensors,
        Autofocus sensitivity down to -4 EV "ISO 100, 20°C/68°F",
        AF detection range down to -5 EV "with low-light AF".
        </li>

        <li><span>Video: </span>
        4K UHD "3840 - 2160" at 30p/25p/24p,
        Full HD "1920 - 1080" at up to 120p for slow-motion footage,
        Electronic vibration reduction,
        4K and Full HD time-lapse modes,
        External microphone and headphone jacks.
        </li>

      </p>
    </div>

</div>

  <div className='equipmentsTool'>

    <div className='equipmentsNameTool'>
      <p className='equipmentsNameToolInfo'><span>Lighting: </span> Profoto D2</p>
    </div>

    <div className='equipmentsImageTool'>
      <img src={ProfotoEquipment} className='equipmentsToolImages' alt="image tool"/>
    </div>

    <div className='equipmentsToolDescription'>
      <p className='equipmentsToolDescriptionInfo'>
        <li>
          Compact and lightweight design for easy transport and setup.
        </li>

        <li>
          500Ws power output with fast recycling times "0.03 - 0.6 seconds".
        </li>

        <li>
          High-speed sync "HSS" mode for shooting with shutter speeds up to 1/8000s.
        </li>

        <li>
          LED modeling light with adjustable brightness and color temperature.
        </li>

        <li>
        Compatibility with a range of light modifiers, such as softboxes, umbrellas, and grids.
        </li>


      </p>
    </div>
    
  </div>

  <div className='equipmentsTool'>

    <div className='equipmentsNameTool'>
      <p className='equipmentsNameToolInfo'><span>Backdrops: </span> Any Color</p>
    </div>

    <div className='equipmentsImageTool'>
      <img src={BackdropStudio} className='equipmentsToolImages' alt="image tool"/>
    </div>

    <div className='equipmentsToolDescription'>
    <p className='equipmentsToolDescriptionInfo'>
        <li><span>White: </span> 
        White backdrops are a classic choice that can provide 
        a clean and simple look to portraits.
        </li>

        <li><span>Black: </span>
        Black backdrops are another classic option that can provide 
        a dramatic and moody look to portraits, fashion photography, 
        and other types of studio work.
        </li>

        <li><span>Green: </span>
        Green backdrops are commonly used in chroma key "green screen" 
        photography, where the background is replaced with a different 
        image or video in post-production. They can also be used to create
        a natural, organic look in outdoor portraits or product photography.
        </li>

        <li><span>Blue: </span>
        Blue backdrops can be a great option for creating a cool, 
        calm atmosphere in portraits or product photography. 
        Lighter shades of blue can also provide a cheerful and 
        inviting feel.
        </li>

      </p>
    </div>
    
  </div>

  


  

</div>
    
   </div>


   <div className='equipmentsToolsContainerTwo'>
  
   <div className='equipmentsTools'>

   <div className='equipmentsTool'>

    <div className='equipmentsNameTool'>
      <p className='equipmentsNameToolInfo'><span>Tripods and other supports</span></p>
    </div>

    <div className='equipmentsImageTool'>
      <img src={Manfratto} className='equipmentsToolImages' alt="image tool"/>
    </div>

    <div className='equipmentsToolDescription'>
      <p className='equipmentsToolDescriptionInfo'>
        <li><span>Manfrotto Tripods: </span> 
        Manfrotto is a popular brand of tripods that 
        are known for their sturdy construction and reliable 
        performance.
        </li>

        <li><span>C-Stands: </span>
        C-stands are versatile support options that 
        are commonly used in photography and film production. 
        C-stands are sturdy and can support a lot 
        of weight, making them ideal for heavy equipment.
        </li>

        <li><span>Light Stands: </span>
        Light stands are a common support option for studio
         lighting equipment. They feature a tripod base with
          adjustable legs and a central column that can be used
           to mount lights or other accessories.
        </li>

        <li><span>Boom Arms: </span>
        Boom arms are a type of support that is used to position
         lights or other accessories above or to the side of the 
         subject.
        </li>

      </p>
    </div>

</div>

  <div className='equipmentsTool'>

    <div className='equipmentsNameTool'>
      <p className='equipmentsNameToolInfo'><span>Editing software and hardware</span></p>
    </div>

    <div className='equipmentsImageTool'>
      <img src={Adobe} className='equipmentsToolImages' alt="image tool"/>
    </div>

    <div className='equipmentsToolDescription'>
      <p className='equipmentsToolDescriptionInfo'>
        <li>
          <span>Adobe Photoshop: </span> 
          A powerful photo editing software that allows for extensive image manipulation and enhancement.
          Offers a wide range of features including layers, masks, filters, and advanced tools for retouching and compositing.
        </li>

        <li>
        <span>Adobe Lightroom: </span> 
        A comprehensive photo management and editing software designed for photographers.
        Offers a streamlined workflow that includes importing, organizing, and editing images in one place.
        Features include advanced color grading, selective adjustments, and the ability to apply presets to speed up editing.
        </li>

        <li>
          <span>Hardwares: </span>
          High-performance computers with powerful processors and graphics cards
          Calibrated monitors for accurate color reproduction
          Wacom tablets for precise control when editing with a stylus
          Color calibration tools to ensure consistent color accuracy across all devices
          External hard drives and RAID systems for backup and storage of large volumes of image files
        </li>

      </p>
    </div>
    
  </div>

  <div className='equipmentsTool'>

    <div className='equipmentsNameTool'>
      <p className='equipmentsNameToolInfo'><span>Accessories</span></p>
    </div>

    <div className='equipmentsImageTool'>
      <img src={Accessories} className='equipmentsToolImages' alt="image tool"/>
    </div>

    <div className='equipmentsToolDescription'>
    <p className='equipmentsToolDescriptionInfo'>
        <li><span>Reflectors: </span> 
        used to bounce light back onto the subject and fill in shadows for more balanced lighting.
        </li>

        <li><span>Softboxes and diffusers: </span>
        used to soften and diffuse harsh light sources for a more flattering look.
        </li>

        <li><span>Light stands and booms:  </span>
        used to position and support lights and modifiers for precise control over the lighting.
        </li>

        <li><span>Remote shutter release: </span>
        used to trigger the camera without physically touching it, 
        which can reduce camera shake and result in sharper images.
        </li>

        <li><span>Memory cards and card readers: </span>
        used to store and transfer image files between cameras, computers, and other devices.
        </li>

      </p>
    </div>
    
  </div>

  


  

</div>
    
   </div>


 </div>


    </>
  )
}

export default About