import { useContext } from 'react';
import navigationContext from '../context/Navigation';
function useNavigation() {
    return useContext(navigationContext);
}

export default useNavigation;