export interface ExecuteInput {
    code: string;
    language: number;
    stdin?: string;
}

export interface ExecuteOutput {
    output: string;
    code: string;
    errors: string;
    time: string;
}