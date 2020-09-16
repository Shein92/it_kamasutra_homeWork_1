import React from 'react';
import StrongJunior from '../Components/StrongJunior';
import { ReduxStoreProviderDecorator } from './decorators/ReduxStoreProviderDecorator';

export default {
	title: 'JuniorPlusPage',
	component: StrongJunior,
	decorators: [ReduxStoreProviderDecorator]

}

export const JunirPlusPage = (props: any) => {
	return <StrongJunior />
}