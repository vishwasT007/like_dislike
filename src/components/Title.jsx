function Title({ cssClass = "", titleName = "Please give a Title name" }) {
  return <h1 className={cssClass.trim() || undefined}>{titleName}</h1>;
}

export default Title;
