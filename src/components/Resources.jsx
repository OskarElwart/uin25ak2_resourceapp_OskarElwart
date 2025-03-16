export default function Resources (){
    return (
        <ul>
        <li><a href="{source.url}" target="_blank">${source.title}</a></li>`).join('')}</li>
        </ul>
    );
    <Resources title ="test" category={category} />
    {ressurser.map((res) => (
        <Resource
            title={res.title}
            url={res.url}
            cate={res.category}
            setCategory={setCategory}
        />
    ))}
}