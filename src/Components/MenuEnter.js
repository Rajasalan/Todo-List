

const MenuEnter=(e)=>{
    
    if(e.target.getAttribute('menucolor')!=null)
    {
      e.target.style.backgroundColor=e.target.getAttribute('menucolor');
      e.target.style.color="white";
    }
    else
    {
      e.target.parentElement.style.backgroundColor=e.target.parentElement.getAttribute('menucolor');
      e.target.parentElement.style.color="white";
    }
    
   }


export default MenuEnter;
