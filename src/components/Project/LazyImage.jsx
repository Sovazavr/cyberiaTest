import { LazyLoadImage } from "react-lazy-load-image-component";



export const LazyImage = ({ image }) => {
    return (
        <LazyLoadImage
            alt={image.alt}
            height={image.height}
            src={image.src} 
            width={image.width} />
    )
}