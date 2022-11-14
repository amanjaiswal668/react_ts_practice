import React from 'react'
import { useNavigate } from 'react-router';

function CustomHeader() {

  const page = ["products", "about", "information", "user"];

  const navigate = useNavigate();
  const navigatePage = (page: string) => {
    navigate(page);
  }
  return (
    <>

      {
        page.map((page, index) => {
          return (
            <h1 onClick={() => navigatePage(page)}>
              {index} ::  {page.toUpperCase()}
            </h1>
          )
        })
      }
    </>
  )
}

export default CustomHeader;
