import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { FlexRow } from './styled';
import SpinnerCenter from '../components/SpinnerCenter';
import ServiceList from './service-list';
import ServiceDetails from './service-details';

import { SERVICES_LIST } from '../utils/queries';

const Schema = () => {
	const { loading } = useQuery(SERVICES_LIST, {fetchPolicy: "cache-and-network"});

	if (loading) {
		return <SpinnerCenter/>;
	}

	return (
			<FlexRow>
				<ServiceList />
				<Switch>
				<Route
					path={`/schema/:serviceName?/:serviceId?`}
					component={ServiceDetails}
				/>
				</Switch>
			</FlexRow>
	);
};

export default Schema;
