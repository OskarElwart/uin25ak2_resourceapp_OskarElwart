import PageTitle from "./PageTitle"
import Nav from "./Nav"


export default function Layout({ category, setcategory }) {
    return (
        <>        
            <Nav 
            category={category} 
            setcategory={setcategory}
          />
        <div id="content">
            <PageTitle category={category}/>
        </div>
        </>
    );
}
