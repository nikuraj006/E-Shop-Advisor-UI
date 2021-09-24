import Navbar from './navBar';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

function Category(){
    const { type } = useParams();
    let [categoryDetail, saveCategoryDetail] = useState(0);
console.log(type);
    useEffect(() => {
        fetch('url' + type + '/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(data => {
                // saveCategoryDetail(data)
            })
    }, [])

    return(
        <>
        <Navbar></Navbar>
        </>
    )
}

export default Category;