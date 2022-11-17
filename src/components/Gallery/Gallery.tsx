import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from './Gallery.module.css';

interface picture {
    source: string;
    alt: string;
    caption: string;
}

export default function Gallery(props: { galleryJson: string, galleryName: string }) {

    // Get supplied picture array
    const [picturesArr, setPicturesArr] = useState<picture[]>([]);
    useEffect(() => {
        fetch(`${props.galleryJson}/gallery.json`)
            .then((response) => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error("status" + response.status);
                }
            })
            .then((json) => {
                setPicturesArr([...json[props.galleryName]]);
            })
    }, []);

    // TODO: create lightbox to view images
    // const galleryArr = [...document.getElementsByClassName("picture")];
    // for(const picture of galleryArr) {
    //     picture.addEventListener("click", () => {
    //         console.log(galleryArr.indexOf(picture)); // use this to switch between images, eventually
    //     })
    // };

    return (
        <div>
            <div id={styles["pictures-box"]}>
                {picturesArr.map(image => (
                    <div
                        className={
                            clsx(
                                styles["picture"],
                                picturesArr.length == 1 ?
                                    styles["pictures-length1"] : picturesArr.length == 2 ?
                                        styles["pictures-length2"] : picturesArr.length == 3 ?
                                            styles["pictures-length3"] : styles["pictures-length4plus"])}
                        style={{backgroundImage: `url(${image.source})`}}
                        title={image.alt}
                        key={image.alt}
                    />
                ))}
            </div>
            {picturesArr.length == 1 ? <p className="txt-sml txt-wi txt-alc" style={{marginBottom: "1rem"}} >{picturesArr[0].caption}</p> : <></>}
        </div>
    );
}