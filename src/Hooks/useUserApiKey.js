
import { useEffect ,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addApiKey } from '../utils/gptSlice';

const useUserApiKey = () => {
    const dispatch = useDispatch();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const [isPromptShown, setIsPromptShown] = useState(false);
    const apiKey = useSelector((store) => store.gpt.apiKey);

    useEffect(() => {
        if (!showGptSearch && apiKey==null && !isPromptShown) {
            const timer =setTimeout(()=>{
                setIsPromptShown(true);
            const key = prompt("Enter Your API key or visit (platform.openai.com) to create one");
            if (key) {
                dispatch(addApiKey(key));
            }else{
                alert("API key is necessary for the functionality of the recommendation system");
            }

            },4000)
            return () => clearTimeout(timer);
            
        }
    }, [showGptSearch,  dispatch , apiKey, isPromptShown]);
    return apiKey;
    
};

export default useUserApiKey;