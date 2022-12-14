import { getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { fetchAllImages } from "../../services";

export const ImageGrid = () => {
  const [imgs, setImgs] = useState<string[]>([]);
  const getUrlsFromImages = async () => {
    try {
      const images = await fetchAllImages();
      images.items.forEach(async (img) => {
        const url = await getDownloadURL(img);
        setImgs((value) => [...value, url]);
      });
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getUrlsFromImages();
  }, []);
  return (
    <div className="grid gap-2 md:grid-cols-4">
      {imgs
        ? imgs.map((img, index) => {
            return <img className="rounded" height={200} width={200} key={index} src={img} alt="img" loading="lazy"/>;
          })
        : null}
    </div>
  );
};
