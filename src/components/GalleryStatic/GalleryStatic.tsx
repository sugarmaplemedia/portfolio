import { Icon } from '@iconify-icon/react';
import serviceList from './services.json';
import styles from './GalleryStatic.module.css';
import clsx from 'clsx';

/* 
    GalleryStatic Component
    Desc: Creates a gallery of boxes with content based on amount of columns specified
*/

type galleryProps = {
    database: galleryObject;
    size: string;
    count: number;
    tag: string;
}

type galleryObject = {
    entries: galleryItem[];
}

type galleryItem = {
    name: string,
    link: string;
    tags: string[];
    image: string;
}

export default function GalleryStatic (props: galleryProps) {
    let galleryEntries;
    props.tag == "" ? galleryEntries = [...props.database.entries] : galleryEntries = props.database.entries.filter(entry => entry.tags.includes(props.tag));

    let count;
    (props.count == 0 || props.count > galleryEntries.length) ? count = galleryEntries.length : count = props.count;

    const galleryArr: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
        galleryArr.push(
            <a key={galleryEntries[i].name} className={clsx(styles["item"], {[styles["small"]] : props.size === "sml"})} href={galleryEntries[i].link}>
                <div className={styles["image-box"]} style={{backgroundImage: `url(${galleryEntries[i].image})`}}>
                </div>
                <div className={styles["text-box"]}>
                    <h4 className={styles["title"]}>{galleryEntries[i].name}</h4>
                    {galleryEntries[i].tags ? (
                        <div className={styles["icons-box"]}>
                            {galleryEntries[i].tags?.map((service) => 
                                <Icon
                                    className={styles["service-icon"]}
                                    key={service}
                                    title={serviceList[service as keyof typeof serviceList].title}
                                    icon={serviceList[service as keyof typeof serviceList].icon}
                                />
                            )}
                        </div>
                    ) : (<></>)}
                </div>
            </a>
        );
    }
    
    return (
        <>
            <div id={styles["gallery-box"]}>
                <>{galleryArr}</>
            </div>
        </>
    );
}