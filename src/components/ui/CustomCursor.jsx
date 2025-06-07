import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);

  function isCursorWithinElementBounds(element, e) {
    const elementRect = element.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    return (
      mouseX >= elementRect.left &&
      mouseX <= elementRect.right &&
      mouseY >= elementRect.top &&
      mouseY <= elementRect.bottom
    );
  }

  useEffect(() => {

    const targetElements = document.querySelectorAll('a, button, .button-custom, .hover-custom');
    const handleMouseMove = (e) => {
      cursorRef.current.style.left = e.clientX + 'px';
      cursorRef.current.style.top = e.clientY + 'px';

      let isCursorWithinRange = false
      //chequeo si hay interseccion entre el cursor y algun botón/link
      targetElements.forEach((element) => {
        if(!isCursorWithinRange)
        {
          isCursorWithinRange = isCursorWithinElementBounds(element, e);
        }
      });

      if (isCursorWithinRange) {
        cursorRef.current.style.transform = 'scale(1.5)';
        cursorRef.current.style.backgroundColor = 'var(--portfolio-blue)';
        cursorRef.current.style.opacity = "0.75";
        cursorTextRef.current.style.opacity= "1";
      }
      else {
        cursorRef.current.style.transform = 'scale(1)';
        cursorRef.current.style.backgroundColor = 'var(--portfolio-black)';
        cursorRef.current.style.opacity = "0.5";
        cursorTextRef.current.style.opacity= "0";
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('scroll', handleMouseMove)



    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleMouseMove)
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor">
    <span ref={cursorTextRef} className="custom-cursor-text">click</span>
  </div>;
};

export default CustomCursor;