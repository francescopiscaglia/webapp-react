import { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";

export default function CategoriesPage() {

    const { api_url } = useContext(GlobalContext);
    const [categories, setCategories] = useState({});

    useEffect(() => {
        fetch(`${api_url}/categories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data.films);
                console.log(categories)
            })
            .catch(error => console.error("Error: ", error));
    }, []);


    return (
        <>
            <h1>Categories page</h1>

            {Object.keys(categories) || Object.keys(categories).length > 0 ?
                Object.entries(categories).map(category => (
                    <div key={category}>{category.Action}</div>
                )) : (
                    <h1>Something went wrong 😫</h1>
                )
            }

        </>
    );
};