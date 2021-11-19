import React from 'react';
const styles = {
        position:"absolute",
        zIndex: "1",
        borderRadius: '50%',
    }

export const SvgCircle = ({id, duration, start, end, onEnd }) => {
        React.useEffect(() => {
                const svgChild = document.getElementById(id);
                var animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
              
                animate.setAttribute('attributeName','stroke-dashoffset');
                animate.setAttribute('from', end);
                animate.setAttribute('to', start);
                animate.setAttribute('xlink:href', `#${id}`);
                animate.setAttribute('dur', duration);

                animate.addEventListener('endEvent', animationEnd, false);
                svgChild.appendChild(animate);

                svgChild.firstChild.beginElement()
                function animationEnd() {
                        onEnd && onEnd(true)
                }

                animate.addEventListener('endEvent',animationEnd,false);
            
                return () => {
                    animate.removeEventListener('endEvent', animationEnd);
                };
              }, []);

              return (
                <svg width="170" height="170" style={styles}>
                    <circle
                        cx="85" cy="85" r="81"
                        fill="none"
                        stroke="#F5F6FB"   
                        strokeWidth="7"
                        strokeDasharray="521"
                    />
                    <circle id={id} 
                        cx="85" cy="85" r="81"
                        fill="none"
                        stroke="#e65100"   
                        strokeWidth="7"
                        strokeDasharray="521"
                    />
                </svg>
                );
} 