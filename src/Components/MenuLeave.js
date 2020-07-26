const MenuLeave=(e)=>{
     
    
    if(e.target.getAttribute('menucolor')!=null)
    {
      e.target.style.backgroundColor="white";
      e.target.style.color="black";
    }
    else
    {
      e.target.parentElement.style.backgroundColor="white !important";;
      e.target.parentElement.style.color="black !important";
    }
      
    }

export default MenuLeave