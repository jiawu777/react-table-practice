import './About.scss';
import { sectionList, intro } from "../../../constants/conMain";

const About = () => {
    const forMapItem = (item, index) => {
        // const forMapTxt = (txtItem, txtIndex) => {
        //     return (
        //         <span key={`txt${txtIndex}`}>
        //             {txtItem}
        //         </span>
        //     )
        // };
        // const txtChild = item.p.map(forMapTxt);
        return (
            <li key={`item${index}`} className={`about__item ${index + 1 === sectionList.length ? 'about__item--end' : ''}`}>
                <div className="about__desArea">
                    <label className="about__desLabel">
                        {item.title.join("\n")}
                    </label>
                    <p className="about__desTxt"></p>
                </div>
                <div className="about__imgArea">
                    <img className="about__img" src={item.img} />
                </div>
            </li>
        )
    };
    const child = sectionList.map(forMapItem);
    return (
        <div className="about">
            <div className="about__wrapper">
                <div className="about__info">
                    {intro}
                </div>
                <ul className='about__list'>
                    {child}
                </ul>
            </div>
        </div>
    );
};



export default About;