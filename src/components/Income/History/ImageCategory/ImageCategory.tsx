import { FC } from "react";

import styles from "./ImageCategory.module.css";
import { dollar,bitcoin } from "./Image";
interface ImageProps{
  value:string;
  widht:number;
  height:number;
}

const ImageCategory: FC<ImageProps> = (props) => {
  let image;
  switch (props.value){
    case "bitcoin":
       image=bitcoin
    break;
    case "dollar":
       image=dollar
    break;
  
  }
  return  (
    <img style={{ width:props.widht,height:props.height}} src={image} alt="Категория" />
  );
};

export default ImageCategory;
