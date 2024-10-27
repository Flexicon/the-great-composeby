export interface Service {
	id: string;
	name: string;
	containers: Record<string, object>;
}
