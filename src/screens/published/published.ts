import styles from './published.css';
import dataR from "../../mocks/dataR";
import Reel, {Attribute} from "../../components/reel/reel";



export default class Published extends HTMLElement{
    reels : Reel[]=[];

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        }

    async connectedCallback() {

        
        dataR?.forEach((user) => {
            const reels = this.ownerDocument.createElement(
                "my-reel"
                ) as Reel;
                reels.setAttribute(Attribute.image, user.image);

                this.reels.push(reels);
            });

        this.render();
    }
    
    render() {
        
        if (this.shadowRoot) {
        
            const an = this.ownerDocument.createElement("my-bar");
            this.shadowRoot?.appendChild(an);
            

            const an2 = this.ownerDocument.createElement("my-publish");
            an2.className="publish"
            
            const re = this.ownerDocument.createElement("section")
            re.className = "reel";
            for (let index = 0; index < this.reels.length; index++) {
                re.appendChild(this.reels[index]);
            }

            const downbar = this.ownerDocument.createElement("my-downbar");
            downbar.className = "downbar";

            const all= this.ownerDocument.createElement("section");
            all.appendChild(an2);
            this.shadowRoot?.appendChild(all);
            this.shadowRoot?.appendChild(re);
            this.shadowRoot?.appendChild(downbar);


            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
        }
    }
}
customElements.define("app-published", Published);