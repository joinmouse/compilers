
import { TokenType, DFAState,  Token } from './emun'

/**
 * 是否合法标识符字符
 * @param char
 */
export function isIdentifier(char: string) {
    return /[a-zA-Z_]/.test(char);
}

/**
* 是否合法数字
* @param char
*/
export function isDigit(char: string) {
    return /\d/.test(char);
}

/**
 * 状态机首字符判断
 * @param char
*/
export function initial(char: string) {
	let state: DFAState | undefined
	let token: Token = {
		type: "", 
		value: ""
	}
	if (char === " ") {
		state = undefined;
	}else if (isIdentifier(char)) {
		state = DFAState.Identifier;
		token.type = TokenType.Identifier;
	} else if (isDigit(char)) {
		state = DFAState.Number;
		token.type = TokenType.Number;
	} else if (char === ">") {
		state = DFAState.GT;
		token.type = TokenType.GT;
	} else if (char === "=") {
		state = DFAState.EQ;
		token.type = TokenType.EQ;
	} else if (char === "+") {
		state = DFAState.Plus;
		token.type = TokenType.Plus;
	} else if (char === "-") {
		state = DFAState.Minus;
		token.type = TokenType.Minus;
	} else if (char === "*") {
		state = DFAState.Multiply;
		token.type = TokenType.Multiply;
	} else if (char === "/") {
		state = DFAState.Divide;
		token.type = TokenType.Divide;
	} else {
		throw new Error(`Illegal Token: '${char}'`);
	}
	token.value = char;
	return {
		state,
		token
	}
}