import React from 'react';
import { Components } from '../../../components';

const DashboardScreen = () => {
	return (
		<Components.Layouts.DashboardLayout>
			<Components.Dashboard.TopBarBtns />
			<Components.Dashboard.WelcomeMsg />
			<Components.Dashboard.SearchBar />
			<Components.Dashboard.CategoryList />
			<Components.Dashboard.OnSaleList />
			<Components.Dashboard.FeaturedEstateList />
		</Components.Layouts.DashboardLayout>
	);
};

export default DashboardScreen;
