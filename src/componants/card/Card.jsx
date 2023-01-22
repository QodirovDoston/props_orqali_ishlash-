import React from "react";
import "./card.css";
import Button  from "../Button";
import Images from "../theImages/Images";

export const Card = (props) => {
  const lastname = () => {
    alert("doston");
  };
  const cardinfo = [
    {
      imgage:'Rectangle5',
      h1: "Danar pizza",
      paragrov:
        "Hozirgi kunda tarmoqda turli xil bo'shliqlar kuzatilmoqda, bu erda iboralar ma'lum bo'lib, ularning izlanishini osonlashtirish maqsadida har xil toifalar bo'yicha tasniflanadi.",
      soz: "shopinig",
      btnType: 'blue'
    },
    {
      imgage: 'Rectangle2',
      h1: "Belesimo pizza",
      paragrov:
        "ajralib turadigan turli xil iboralar mavjud, masalan: sevgi, mashhur, yubiley, do'stlik, adabiyot, kechirim va boshqalar. maqsadida har xil toifalar bo'yicha tasniflanadi",
      soz: "shop now",
      btnType: 'red'
    },
    {
      imgage: 'Rectangle3',
      h1: "Mitti pizza",
      paragrov:
        "osonlashtirish maqsadida har xil toifalar bo'yicha tasniflanadi maqsadida har  maqsadida har xil toifalar bo'yicha tasniflanadixil toifalar bo'yicha tasniflanadi",
      soz: "edit",
      btnType: 'yellow'
    },
    {
      imgage: 'Rectangle4',
      h1: "Piazza",
      paragrov:
        "ularning izlanishini osonlashtirish maqsadida har xil toifalar bo'yicha tasniflanadi maqsadida har xil toifalar bo'yicha tasniflanadmaqsadida har xil toifalar bo'yicha tasniflanadii",
      soz: "start",
      btnType: 'blue'
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div className="navoi" key={index}>
        <Images url={card.imgage} width={'360px'}/>
        {console.log(card.imgage)}
        <h1 className={"ali"}>{card.h1}</h1>
        <p className={"now"}>{card.paragrov}</p>
        <Button type='submit' click={lastname}  classType={card.btnType}>{card.soz}</Button>
      </div>
    );
  };
  return <div className="grid">{cardinfo.map(renderCard)}</div>;
};
