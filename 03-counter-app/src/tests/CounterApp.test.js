import {render} from '@testing-library/react'
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Pruenas en CounterApp', () => {
    
    test('debe de mostrar <CounterApp /> correctamente', () => {
        const wrapper = shallow(<CounterApp />);
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor que enviamos', () => {
        const valor = 100;
        const wrapper = shallow(
            <CounterApp
                value={valor}/>
        );

        const valorH2 = wrapper.find('h2').text();

        expect(valorH2).toBe(valor.toString());

        
    });
    
    
    
})
