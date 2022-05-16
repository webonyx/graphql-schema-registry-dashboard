import { gql } from '@apollo/client';

export const DEACTIVATE_SCHEMA_ENTRY = gql`
	mutation deactivateSchema($id: Int!) {
		deactivateSchema: gql_deactivateSchema(id: $id) {
			id
			isActive
		}
	}
`;
export const ACTIVATE_SCHEMA_ENTRY = gql`
	mutation activateSchema($id: Int!) {
		activateSchema: gql_activateSchema(id: $id) {
			id
			isActive
		}
	}
`;
