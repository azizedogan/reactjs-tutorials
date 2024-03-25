import LightDarkMode from '../light-dark-mode';
import TicTacToe from '../tic-tac-toe';
import RandomColor from '../random-color';
import Accordion from '../accordian';
import TreeView from '../tree-view';
import { useContext } from 'react';
import { FeatureFlagsContext } from './context';
import menus from '../tree-view/data';

export default function FeatureFlags() {

    const { loading, enabledFlags } = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTocToe',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordion',
            component: <Accordion />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus}/>
        }
    ]

    if(loading) {
        return (
            <h1>Loading data!</h1>    
        );
    }

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey]
    }

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map((componentItem) => 
                    checkEnabledFlags(componentItem.key) 
                    ? componentItem.component : null )
            }
        </div>    
    );
}