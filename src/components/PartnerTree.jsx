import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';

// Logos
import Tree from '../assets/Tree.svg';
import Soil from '../assets/Soil.svg';

function PartnerTree() {
    const treeRef = useRef(null);
    const secondtreeRef = useRef(null);

    useEffect(() => {
        const tree = treeRef.current;
        const secondtree = secondtreeRef.current;

        const handleScroll = () => {
            if (isElementInViewport(tree)) {
                const tl = gsap.timeline({ defaults: { duration: 2, ease: 'slowOutt' } });
                const tl2 = gsap.timeline({ defaults: { duration: 4, ease: 'power2.out' } });
                tl.fromTo(tree, { scale: 1 }, { scale: 2 });
                tl2.fromTo(secondtree, { scale: 1 }, { scale: 1.7 });
                tl.restart();
                tl2.restart();
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    return (
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box position="relative" width="400px" height="400px">
                <img src={Soil} alt="Soil" style={{ width: '100%', position: 'absolute', bottom: 0, left: 0 }} />
                <img ref={treeRef} src={Tree} alt="Tree" style={{ width: '55%', height: '45%', position: 'absolute', bottom: '10%', left: 'calc(40%)', transformOrigin: 'bottom center' }} />
                <img ref={secondtreeRef} src={Tree} alt="Tree" style={{ width: '45%', height: '35%', position: 'absolute', bottom: '10%', left: 'calc(10%)', transformOrigin: 'bottom center' }} />
            </Box>
        </Box>
    )
}

export default PartnerTree;