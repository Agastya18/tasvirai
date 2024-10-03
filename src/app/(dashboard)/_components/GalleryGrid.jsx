"use client"
import Image from 'next/image';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';



// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import im1 from '@/public/gall/1.jpg'
import im2 from '@/public/gall/2.jpg'
import im3 from '@/public/gall/3.jpg'
import im4 from '@/public/gall/4.jpg'

import im5 from '@/public/gall/5.jpg'
import im6 from '@/public/gall/6.jpg'
import im7 from '@/public/gall/7.jpg'

import im8 from '@/public/gall/8.jpg'
import im9 from '@/public/gall/9.jpg'
import im10 from '@/public/gall/10.jpg'

import im11 from '@/public/gall/11.jpg'
import im12 from '@/public/gall/12.jpg'
import im13 from '@/public/gall/13.jpg'
import { Link } from 'lucide-react';
const images = [
   
    { sr: "/../../public/gall/2.jpg", alt: "2" },
    { src: "../../../public/gall/3.jpg", alt: "3" },
    { src: "../../../public/gall/4.jpg", alt: "4", },
    { src: "../../../public/gall/5.jpg", alt: "5", },
    { src: "../../../public/gall/6.jpg", alt: "6", },
    { src: "../../../public/gall/7.jpg", alt: "7", },
    { src: "../../../public/gall/8.jpg", alt: "8", },
    { src: "../../../public/gall/9.jpg", alt: "9", },
    { src: "../../../public/gall/10.jpg", alt: "10", },
    { src: "../../../public/gall/11.jpg", alt: "11", },
    { src: "../../../public/gall/12.jpg", alt: "12", },
    { src: "../../../public/gall/13.jpg", alt: "13", },
    { src: "../../../public/gall/14.jpg", alt: "14", },
    // { src: "/15.jpg", alt: "15", },
    // { src: "/16.jpg", alt: "16", },
    // { src: "/17.jpg", alt: "17", },
    // { src: "/18.jpg", alt: "18", },
    // { src: "/19.jpg", alt: "19", },
]



export function ImageGrid() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

  return (
   /* eslint-disable @next/next/no-img-element */
    <div >
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
{/* 
                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} />
                        </a>
                    )
                })} */}
                
                <a href={im1}>
                <Image alt='1' src={im1} />
                </a>
                <Image src={im2} alt="1" />
                <Image src={im3} alt="1" />

                <Image src={im4} alt="1" />
                <Image src={im5} alt="1" />
                <Image src={im6} alt="1" />
                <Image src={im7} alt="1" />
                <Image src={im8} alt="1" />
                <Image src={im9} alt="1" />
                <Image src={im10} alt="1" />
                <Image src={im11} alt="1" />
                <Image src={im12} alt="1" />
                <Image src={im13} alt="1" />
                


            </LightGallery>
        </div>
   
  );
}