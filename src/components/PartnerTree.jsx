import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';

// Logos
import Tree from '../assets/Tree.svg';
import Soil from '../assets/Soil.svg';

function PartnerTree() {
    const treeRef = useRef(null);
    const secondTreeRef = useRef(null);
    const svgContainerRef = useRef(null);

    useEffect(() => {
        let animationFrameId;
        const handleScroll = () => {
            animationFrameId = requestAnimationFrame(() => {
                const viewportHeight = window.innerHeight;

                // SVG elements
                const treeElement = treeRef.current;
                const secondTreeElement = secondTreeRef.current;
                const svgContainerElement = svgContainerRef.current;

                // SVG container information used for scroll logic
                const svgContainerRect = svgContainerElement.getBoundingClientRect();
                // Distance from top of viewport to the top edge of the svg container
                const svgContainerTop = svgContainerRect.top;

                const svgContainerCenter = svgContainerRect.top + svgContainerRect.height / 2;
                //DIstance from top of the viewport to the bottom edge of the svg container
                const svgContainerBottom = svgContainerRect.bottom;

                // Perform scroll animation if the SVG container is inside the viewport
                // Resets tree scale when it moves out of the viewport
                if ((svgContainerTop >= 0 && svgContainerCenter <= viewportHeight)) {
                    const scale = Math.max(2, 0.000001 * viewportHeight - svgContainerCenter);
                    const scale2 = Math.max(1.7, 0.000002 * viewportHeight - svgContainerCenter);

                    gsap.to(treeElement, { scale: scale });
                    gsap.to(secondTreeElement, { scale: scale2 });
                }
                else if (svgContainerBottom <= 0 || svgContainerTop >= 0) {
                    gsap.to(treeElement, { scale: 1 });
                    gsap.to(secondTreeElement, { scale: 1 });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box ref={svgContainerRef} position="relative" width="400px" height="400px">
                <img src={Soil} alt="Soil" style={{ width: '100%', position: 'absolute', bottom: 0, left: 0 }} />
                <img ref={treeRef} src={Tree} alt="Tree" style={{ width: '55%', height: '45%', position: 'absolute', bottom: '10%', left: 'calc(40%)', transformOrigin: 'bottom center' }} />
                <img ref={secondTreeRef} src={Tree} alt="Tree" style={{ width: '45%', height: '35%', position: 'absolute', bottom: '10%', left: 'calc(10%)', transformOrigin: 'bottom center' }} />
            </Box>
        </Box>
    )
}

export default PartnerTree;