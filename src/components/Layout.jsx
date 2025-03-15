import Nav from "./components/Nav";
import PageTitle from "./components/PageTitle";
import Resources from "./components/Resources";
import ressurser from "./assets/ressurser"

export default function Layout({ setCategory, category }) {
    return (
        <>
            <Resources title ="test" category={category} />
            {ressurser.map((res) => (
                <Resource
                    title={res.title}
                    url={res.url}
                    cate={res.category}
                    setCategory={setCategory}
                />
            ))}
        </>
    );
}
