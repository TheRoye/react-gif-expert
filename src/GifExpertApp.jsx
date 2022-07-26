import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  
  const onAddCategory = (newCategory) => {

      const capCategory = newCategory[0].toUpperCase() + newCategory.slice(1).toLowerCase();

      if ( categories.includes(capCategory)) return;

      setCategories( [ capCategory , ...categories] )

  }

  return (
    <>

      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
          // setCategories={ setCategories }
          onNewCategory = { onAddCategory }
       />

      {/* Listado de Gif */}
     
      { 
          categories.map( (category) => (
              <GifGrid 
                  key={ category } 
                  category={ category } />
          )) 
          
      }    
          
          {/* <li></li>
          <li></li> */}

      
          {/* Gif Item */}

    </>
  )
};
