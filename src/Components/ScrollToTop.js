import React, {useState} from 'react'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      // once scroll has reached a certain level enable the button
      if(scrolled > 200) {
          setVisible(true);
      }
      else {
          setVisible(false);
      }
  }
  // behaviour after the button is clicked
  const scrollToTop = () => {
      window.scrollTo({
          top : 0,
          behavior : 'smooth',
      })
  }
  // adding an event listener on scroll
  window.addEventListener('scroll', toggleVisible);

  return (
    <button 
    
    className='fixed right-12 bottom-12 bg-cyan-400'>
        <i onClick={scrollToTop} className="ri-arrow-up-s-line py-8 px-2 text-2xl arrow"
        style={{display: visible ? 'inline' : 'none'}} ></i>
    </button>
  )
}

export default ScrollToTop