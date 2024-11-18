import './Main.scss';
import { sectionList } from "../../../constants/conMain";

const Main = () => {
    const intro = "犀牛盾從保護行動裝置開始，十年多來逐漸成為不可或缺的生活夥伴：跟你漫遊 ACG 宇宙、和他開展藝術創作的境界、陪她上山下海，肩負守護自然的使命。我們發現每個人都擁有獨一無二的世界觀，精彩超乎想像；也正因為每一種世界都無可取代，更值得犀牛盾傾盡全力守護它們的千姿百態。";

    const forMapSectionItem = (item, index) => {

        return (
            <li className="sectionItems">
                <section className="main__wrapper">
                    <div className={`main__sectionItem ${(index + 1) % 2 === 0 ? 'main__sectionItem--even' : 'main__sectionItem--odd'}`} key={item.id}>
                        <div className="main__section main__section--text">
                            <h2>{item.title.join("\n")}</h2>
                            <p>{item.p}</p>
                        </div>
                        <div className="main__section main__section--img">
                            <img src={item.img} alt="noimg" width="500" />
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