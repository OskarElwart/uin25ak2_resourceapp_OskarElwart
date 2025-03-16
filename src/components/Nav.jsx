export default function Nav({ setcategory }) {
return(
    <nav>
            <ul>
                <li><button id="HTMLlink" onClick={() => setcategory("html")}>HTML</button></li>
                <li><button id="CSSlink" onClick={() => setcategory("css")}>CSS</button></li>
                <li><button id="JSlink" onClick={() => setcategory("javascript")}>JavaScript</button></li>
                <li><button id="Reactlink" onClick={() => setcategory("react")}>React</button></li>
                <li><button id="Sanitylink" onClick={() => setcategory("headless-cms")}>Sanity and headless CMS</button></li>
            </ul>
        </nav>
)
}