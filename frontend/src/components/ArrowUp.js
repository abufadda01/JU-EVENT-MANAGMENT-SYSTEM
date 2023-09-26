import React , {useState , useEffect} from "react";


const ArrowUp = ()=>{



    const [showArrow, setShowArrow] = useState(false);
 
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 1000) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
 
        const handleClick = ()=>{
            window.scrollTo({top:0 , behavior:"smooth"});
        }
        
         return(
              <>
                 { showArrow && <div className="arrow-up  " > <i  onClick={handleClick} class="fa-solid fa-arrow-up fa-bounce"></i></div>}
              </>
         )
}

export default ArrowUp;
