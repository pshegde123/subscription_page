import {default as icon} from '../assets/images/icon-list.svg';

export default function Header(){
    return(<>
        <div className='container grid grid-rows-3'>
            <div>
                <h1 className="font-bold antialiased text-4xl mb-1 mt-4">Stay Updated!</h1>
            </div>
            <div>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
            </div>
            <div>
                <p><img src={icon} className="inline text-sm pr-3" alt="Icon"/>Product discovery and building what matters.</p>
                <p><img src={icon} className="inline text-sm pr-3" alt="Icon"/>Measuring to ensure updates are a success.</p>
                <p><img src={icon} className="inline text-sm pr-4" alt="Icon"/>And much more!</p>
            </div>            
         </div>
        </>)
}