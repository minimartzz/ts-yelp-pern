export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: number;
			PGUSER: string;
			PGHOST: string;
			PGDATABASE: string;
			PGPASSWORD: string;
			PGPORT: number;
		}
	}
}
