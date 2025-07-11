export const Ban = ({ banList, setBanList }) => {

    const unban = (e) => {
        const newList = banList.filter(item => item !== e.target.value)
        setBanList(newList)
    }

    return (
        <div className='ban'>
            <h1 className='boxed'>Banned List</h1>
            <ul className='list'>
                {banList.map(item => (
                    <li key={item}>
                        <button className='banned-item' onClick={unban} value={item}>{item}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}