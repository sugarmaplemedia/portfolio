import clsx from "clsx"
import styles from "./Gallery.module.css"
import React from "react"

type Picture = {
	src: string
	alt: string
	caption: string
}

export default function Gallery({ pictures }: {
	pictures: Picture[]
}) {
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
				{pictures.map((picture) => (
					<div
						className={clsx(
							styles["picture"],
							pictures.length == 1
								? styles["pictures-length1"]
								: pictures.length == 2
									? styles["pictures-length2"]
									: pictures.length == 3
										? styles["pictures-length3"]
										: styles["pictures-length4plus"],
						)}
						style={{ backgroundImage: `url(${picture.src})` }}
						title={picture.alt}
						key={picture.src}
					/>
				))}
			</div>
			{pictures.length == 1 ? (
				<p
					className="txt-sml txt-wi txt-alc"
					style={{ marginBottom: "1rem" }}
				>
					{pictures[0].caption}
				</p>
			) : (
				<></>
			)}
		</div>
	)
}
