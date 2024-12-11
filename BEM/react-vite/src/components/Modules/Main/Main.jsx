import './Main.scss';
import { sectionList, intro } from "../../../constants/conMain";

const Main = () => {


    const forMapSectionItem = (item, index) => {
        return (
            <li className="sectionItems">
                <section className={"main__wrapper"} >
                    <div className={`main__sectionItem ${(index + 1) % 2 === 0 ? 'main__sectionItem--even' : 'main__sectionItem--odd'} `} key={item.id} >
                        <div className={`main__section main__section--text main__ sectionItemId-${index}`}>
                            <h2 className={`main__sectionItem--title sectionItemId-${index}`}>{item.title.join("\n")}</h2>
                            <p className={`main__sectionItem--paragraph sectionItemId-${index}`}>{item.p.join("\n")}</p>
                        </div>
                        <div className="main__section main__section--img">
                            <img src={item.img} alt="noimg" width="600" />
                        </div>
                    </div>
                </section>
            </li>
        )
    };
    const child = sectionList.map(forMapSectionItem);
    return (
        <div className="main__area">
            <section className="main__section">
                <div className="main__section main__section--intro">
                    {intro}
                </div>
            </section>
            {child}
        </div>
    );
};



export default Main