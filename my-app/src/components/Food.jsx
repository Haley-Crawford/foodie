export const Food = ({food, banList, setBanList}) => {
    const { title, sourceUrl, image, cuisines, diets, dishTypes } = food

    const banItem = (e) => {
        const item = e.target.value
        if (!banList.includes(item)) {
            setBanList(prev => [...prev, item])
        }
    }

    return (
        <div className='card'>
            <a href={sourceUrl} target='_blank'>
                <h1 className='food-title'>{title}</h1>
            </a>
            <img src={image}></img>
            {
                cuisines[0] && <div className='flex'>
                    <p>Cuisines: </p>
                    <div className='choices-div'>
                        {cuisines.map(cuisine => (
                            <button className='choice' value={cuisine} key={cuisine} onClick={banItem}>{cuisine}</button>
                        ))}
                    </div>
                </div>
            } 
            {
                diets[0] && <div className='flex'>
                    <p>Diets: </p>
                    <div className='choices-div'>
                        {diets.map(diet => (
                            <button className='choice' value={diet} key={diet} onClick={banItem}>{diet}</button>
                        ))}
                    </div>
                </div>
            }
            {
                dishTypes[0] && <div className='flex'>
                    <p>Dish Types: </p>
                    <div className='choices-div'>
                        {dishTypes.map(type => (
                            <button className='choice' value={type} key={type} onClick={banItem}>{type}</button>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}