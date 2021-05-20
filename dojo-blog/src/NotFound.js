import {Link} from 'react-router-dom'
const NotFound = () => {
    return ( 
        <div className="not-found">
            <img src="https://static.wixstatic.com/media/3c0342_0af6e005b9b64bdf8a08e00a3646d5a6~mv2.gif" alt="" />
            <Link to = '/'>HomePage</Link>
        </div>
     );
}
 
export default NotFound;