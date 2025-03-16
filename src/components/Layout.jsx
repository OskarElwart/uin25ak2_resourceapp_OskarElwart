import PageTitle from "./PageTitle"
import Nav from "./Nav"


export default function Layout({ category, setcategory }) {
    return (
        <div id="content">
            <PageTitle category={category}/>
        </div>
    );
}
