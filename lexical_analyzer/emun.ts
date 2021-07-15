// token类型
export enum TokenType {
	Identifier = "Identifier", // 标识符
	Number = "Number", // 数字字面量
    // 操作符
	GT = "GT", // >
	GE = "GE", // >=
	EQ = "EQ", // =
	Plus = "Plus",   // +
	Minus = "Minus", // -
	Multiply = "Multiply", // *
	Divide = "Divide" // /
}

// 有限自动机状态
export enum DFAState {
	Initial = "Initial",
	Identifier = "Identifier",
	Number = "Number",
	GT = "GT",
	GE = "GE",
	EQ = "EQ",
	Plus = "Plus",
	Minus = "Minus",
	Multiply = "Multiply",
	Divide = "Divide"
}

export interface Token {
	type: TokenType | string;
	value: string;
}