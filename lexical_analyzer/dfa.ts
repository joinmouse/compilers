/**
 * ✅ 确定有限自动机 DFA
*/
import { DFAState, Token, TokenType } from './emun'
import { isIdentifier, isDigit, initial } from './state'

/**
 * DFA词法分析程序入口
 * @param source 源代码
*/
export default function main(source: string) {
  	let state: DFAState | undefined;
  	let token: Token = { type: "", value: "" };
  	let tokens: Token[] = [];

	for (let char of source) {
		switch (state) {
			case DFAState.Identifier:
				if (isIdentifier(char) || isDigit(char)) {
					token.value += char;
				} else {
					handleState(char)
				}
				break;
			case DFAState.Number:
				if (isDigit(char)) {
					token.value += char;
				} else {
					handleState(char)
				}
				break;
			case DFAState.GT:
				if (char === "=") {
					token.value += char;
					token.type = TokenType.GE;
					state = DFAState.GE;
				} else {
					handleState(char)
				}
				break;
			// 其余没有匹配自动机的字符，直接开始下一个初始化字符。
			default:
				handleState(char)
		}
  	}
	tokens.push(token)

	function handleState(char: string) {
		if(state) tokens.push(token)
		let data = initial(char);
		state = data?.state
		token = data?.token
	}

  	return tokens
}