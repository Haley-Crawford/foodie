export const History = ({ history }) => {
    return (
        <div className='history'>
            <h1 className='boxed'>History</h1>
            <ul className='list'>
                {history.map(({title, image}) => (
                    <li className='history-item'>
                        <img src={image} alt={`Picture of ${title}`}/>
                        <h4 className='history-item-name'>{title}</h4>
                    </li>
                ))}
            </ul>
        </div>
    )
}