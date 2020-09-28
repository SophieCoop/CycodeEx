import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unselectOption, selectOption, addCustomOption } from '../../actions';
import { RootState } from '../../reducers/index';
import SplitButton from '../elements/dropdown';
import Chips from '../elements/chips';
import ChipItem from '../interfaces/chipItem';
import '../../assets/styles/subscriptionIframe.css';


const SubscriptionIframe = () => {
    const dispatch = useDispatch();
    
    const options: ChipItem[] = useSelector((state: RootState) => state.options);
    const selectedOptions = options.filter((option: ChipItem) => option.isSelected);
    

    return (
        <div className="iframe-container">
            <span className="title">Choose your channel tags</span>
            <Chips chipList={selectedOptions} onDelete={unselectOption} dispatch={dispatch}/>
            <SplitButton options={options} onSelect={selectOption} onNewOption={addCustomOption} dispatch={dispatch}/>
        </div>

    )
}

export default SubscriptionIframe;