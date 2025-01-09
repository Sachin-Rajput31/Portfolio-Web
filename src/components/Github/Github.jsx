import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const loaderData = useLoaderData(); 
    const [data, setData] = useState(loaderData || {}); 

    useEffect(() => {
      
        if (!loaderData) {
            fetch('https://api.github.com/users/Sachin-Rajput31')
                .then((response) => response.json()) 
                .then((fetchedData) => {
                    console.log(fetchedData);
                    setData(fetchedData);
                })
                .catch((error) => console.error('Error fetching data:', error));
        }
    }, [loaderData]);

    return (
        <div className="text-center m-4 bg-slate-400 text-white p-4 text-3xl">
            <div>Github followers: {data.followers}</div>
            <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-lg' />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Sachin-Rajput31');
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub data');
    }
    return response.json();
};
